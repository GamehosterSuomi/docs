# Adding a server icon

The Java server list icon is `server-icon.png` in the server root. It must be a 64 × 64 pixel PNG.

1. Prepare the square image and save it as `server-icon.png`. Ensure it has no extra extension.
2. Stop the server and download the previous icon if needed.
3. Upload the new file to the server root beside `server.properties`, using the [file manager](../server-management/file-manager.md) or [SFTP](../server-management/sftp.md).
4. Start the server and refresh Minecraft's server list. Check console messages if necessary.

If it does not appear, check the filename, actual PNG format, dimensions and location; refresh the list or restart the game. The icon is separate from the server's `motd` message.
