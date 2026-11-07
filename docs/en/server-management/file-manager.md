# Using the file manager

The panel's file manager lets you inspect and manage files belonging to your game server. Available actions depend on the service and your permissions.

## Open and navigate

1. Sign in to [panel.gamehoster.fi](https://panel.gamehoster.fi/), select the correct server and open **Files**.
2. Browse the directories specified by your game's or plugin's documentation. The server's root is not necessarily the same as a world or plugin directory.
3. You can inspect files, upload or download data and, when supported, edit text configuration files, create directories, rename files or work with archives.

## Edit safely

Stop the server if it may write to the same file, and create a [backup](./backups.md). Copy a configuration file before changing it, change one setting at a time, save and restart. Read the console and verify the behavior. Preserve the syntax and folder structure; see [editing configuration files](./configuration-files.md).

For large transfers, [SFTP](./sftp.md) may be more convenient. Check available disk space before uploading and extracting archives. Do not delete or overwrite a file unless you know its purpose; deleting a world, executable or configuration file can cause data loss or prevent startup. Files may also contain credentials, so inspect them before sharing.
