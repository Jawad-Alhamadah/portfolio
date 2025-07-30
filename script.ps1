Get-ChildItem -Recurse -Include *.png, *.svg | ForEach-Object {
    $file = $_
    $dir = $file.DirectoryName
    $name = $file.BaseName
    $ext = $file.Extension

    # Capitalize first letter and append _1
    $newName = ($name.Substring(0,1).ToUpper() + $name.Substring(1) + "_1" + $ext)

    if ($file.Name -ne $newName) {
        $newPath = Join-Path $dir $newName
        Rename-Item -Path $file.FullName -NewName $newPath
        Write-Host "Renamed: $($file.Name) -> $newName"
    }
}