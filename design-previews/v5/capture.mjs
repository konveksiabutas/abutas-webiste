import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const baseDir = path.resolve('design-previews/v5');
const port = 3005;

// Simple static file server
const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  let reqPath = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(baseDir, reqPath.split('?')[0]);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port, async () => {
  console.log(`Preview server running at http://localhost:${port}`);
  
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  const cdpPort = 9225;
  const edgeArgs = [
    `--remote-debugging-port=${cdpPort}`,
    '--headless=new',
    '--disable-gpu',
    '--no-first-run',
    '--no-default-browser-check',
    '--user-data-dir=' + path.resolve('design-previews/v5/.edge-profile'),
    'about:blank'
  ];

  console.log('Launching Edge...');
  const edgeProc = spawn(edgePath, edgeArgs, { stdio: 'ignore' });

  // Wait for CDP to be available
  let versionData = null;
  for (let i = 0; i < 20; i++) {
    try {
      await new Promise(r => setTimeout(r, 500));
      const res = await fetch(`http://127.0.0.1:${cdpPort}/json/version`);
      if (res.ok) {
        versionData = await res.json();
        break;
      }
    } catch (e) {
      // retry
    }
  }

  if (!versionData) {
    console.error('Failed to connect to Edge CDP');
    edgeProc.kill();
    server.close();
    process.exit(1);
  }

  console.log('Connected to CDP:', versionData.webSocketDebuggerUrl);

  // Helper CDP client
  function createCdpSession(wsUrl) {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(wsUrl);
      let idCounter = 1;
      const pending = new Map();

      ws.onopen = () => {
        resolve({
          send(method, params = {}) {
            return new Promise((res, rej) => {
              const id = idCounter++;
              pending.set(id, { res, rej });
              ws.send(JSON.stringify({ id, method, params }));
            });
          },
          close() {
            ws.close();
          }
        });
      };

      ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && pending.has(msg.id)) {
          const { res, rej } = pending.get(msg.id);
          pending.delete(msg.id);
          if (msg.error) rej(msg.error);
          else res(msg.result);
        }
      };

      ws.onerror = reject;
    });
  }

  // Create a new target/tab
  const newTargetRes = await fetch(`http://127.0.0.1:${cdpPort}/json/new?http://localhost:${port}`, { method: 'PUT' });
  const targetData = await newTargetRes.json();
  const session = await createCdpSession(targetData.webSocketDebuggerUrl);

  console.log('Navigating to target page...');
  await session.send('Page.enable');
  await session.send('Page.navigate', { url: `http://localhost:${port}` });
  
  // Wait for page load and fonts to settle
  await new Promise(r => setTimeout(r, 2500));

  const artifactDir = 'C:/Users/HP/.gemini/antigravity-ide/brain/e1257737-2bc9-44a7-9eed-62ba92ba87ff';
  const outDir = path.resolve('design-previews/v5');

  // --- 1. Desktop 1440x900 Viewport Screenshot ---
  console.log('Capturing Desktop 1440px viewport...');
  await session.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 1000));
  
  const deskViewport = await session.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'preview_v5_desktop.png'), Buffer.from(deskViewport.data, 'base64'));
  fs.writeFileSync(path.join(artifactDir, 'preview_v5_desktop.png'), Buffer.from(deskViewport.data, 'base64'));

  // --- 2. Desktop Full Page Screenshot ---
  console.log('Capturing Desktop full page...');
  const deskLayout = await session.send('Page.getLayoutMetrics');
  const deskFullHeight = Math.ceil(deskLayout.contentSize.height);
  
  await session.send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: deskFullHeight,
    deviceScaleFactor: 1,
    mobile: false
  });
  await new Promise(r => setTimeout(r, 1000));
  
  const deskFull = await session.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.writeFileSync(path.join(outDir, 'preview_v5_desktop_fullpage.png'), Buffer.from(deskFull.data, 'base64'));
  fs.writeFileSync(path.join(artifactDir, 'preview_v5_desktop_fullpage.png'), Buffer.from(deskFull.data, 'base64'));

  // --- 3. Mobile 390x844 Viewport Screenshot ---
  console.log('Capturing Mobile 390px viewport...');
  await session.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 1000));

  const mobViewport = await session.send('Page.captureScreenshot', { format: 'png' });
  fs.writeFileSync(path.join(outDir, 'preview_v5_mobile.png'), Buffer.from(mobViewport.data, 'base64'));
  fs.writeFileSync(path.join(artifactDir, 'preview_v5_mobile.png'), Buffer.from(mobViewport.data, 'base64'));

  // --- 4. Mobile Full Page Screenshot ---
  console.log('Capturing Mobile full page...');
  const mobLayout = await session.send('Page.getLayoutMetrics');
  const mobFullHeight = Math.ceil(mobLayout.contentSize.height);

  await session.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: mobFullHeight,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 1000));

  const mobFull = await session.send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.writeFileSync(path.join(outDir, 'preview_v5_mobile_fullpage.png'), Buffer.from(mobFull.data, 'base64'));
  fs.writeFileSync(path.join(artifactDir, 'preview_v5_mobile_fullpage.png'), Buffer.from(mobFull.data, 'base64'));

  console.log('Screenshots captured successfully!');
  session.close();
  edgeProc.kill();
  server.close();
  process.exit(0);
});
