Get-ChildItem -Recurse -Include *_1.png, *_1.svg | ForEach-Object {
    $file = $_
    $dir = $file.DirectoryName
    $name = $file.BaseName -replace '_1$', ''
    $ext = $file.Extension

    # Convert full name to lowercase
    $newName = ($name.ToLower() + $ext)

    if ($file.Name -ne $newName) {
        $newPath = Join-Path $dir $newName
        Rename-Item -Path $file.FullName -NewName $newPath
        Write-Host "Reverted: $($file.Name) -> $newName"
    }
}
