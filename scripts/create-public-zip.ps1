$ErrorActionPreference = "Stop"
$rootDir = (Get-Location).Path
$outDir = Join-Path $rootDir "out"
$zipPath = Join-Path $rootDir "abutas-public.zip"

Write-Host "Source directory: $outDir"
Write-Host "Target ZIP file: $zipPath"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $outDir -Recurse -Force -File
foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($outDir.Length + 1)
    $entryName = $relativePath.Replace("\", "/")
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
}

$zip.Dispose()

$zipItem = Get-Item $zipPath
Write-Host "SUCCESS: abutas-public.zip created successfully."
Write-Host "Size: $($zipItem.Length) bytes ($([math]::Round($zipItem.Length / 1MB, 2)) MB)"

