# Offering a resource pack to players

A Java server can offer players a resource pack that changes visuals or sounds. It needs a direct, publicly accessible HTTPS URL to the ZIP. Uploading to the panel file manager does not necessarily create a public URL.

1. Check compatibility and permission to use the pack; test it locally first.
2. Upload the ZIP to a trusted file service and confirm the URL returns the ZIP itself without login or a preview page.
3. Calculate its SHA-1 checksum, for example in PowerShell: `Get-FileHash -Algorithm SHA1 .\new-pack.zip`. Copy the hash.
4. Back up `server.properties` and stop the server. Set `resource-pack` to the direct URL and `resource-pack-sha1` to the hash. Check other version-specific settings in [Paper's reference](https://docs.papermc.io/paper/reference/server-properties/).
5. Leave `require-resource-pack=false` if players should be able to decline; `true` makes accepting it a condition of joining. Save, restart and test with a player account. Update the hash when changing the ZIP.

If downloads fail, check public accessibility, file size, hash and version compatibility. Do not use URLs containing private credentials.
