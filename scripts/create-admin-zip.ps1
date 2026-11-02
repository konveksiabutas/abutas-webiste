$ErrorActionPreference = "Stop"
$rootDir = (Get-Location).Path
$distDir = Join-Path $rootDir "studio\dist"
$zipPath = Join-Path $rootDir "abutas-admin.zip"

Write-Host "Source directory: $distDir"
Write-Host "Target ZIP file: $zipPath"

if (Test-Path $zipPath) {
    Remove-Item $zipPath -Force
}

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem

$zip = [System.IO.Compression.ZipFile]::Open($zipPath, [System.IO.Compression.ZipArchiveMode]::Create)

$files = Get-ChildItem -Path $distDir -Recurse -Force -File
foreach ($file in $files) {
    $relativePath = $file.FullName.Substring($distDir.Length + 1)
    $entryName = $relativePath.Replace("\", "/")
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $entryName, [System.IO.Compression.CompressionLevel]::Optimal) | Out-Null
}

$zip.Dispose()

$zipItem = Get-Item $zipPath
Write-Host "SUCCESS: abutas-admin.zip created successfully."
Write-Host "Size: $($zipItem.Length) bytes ($([math]::Round($zipItem.Length / 1MB, 2)) MB)"

