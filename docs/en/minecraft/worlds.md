# Moving a Minecraft world to the server

You can transfer an existing Java Edition world using the file manager or [SFTP](../server-management/sftp.md). World and server versions must be compatible.

Some servers offer **More → World Manager**, including **Import world**, **New world**, **Download** and **Set active**. The active selection takes effect on the next startup. Check the effects and keep a backup before switching or deleting a world.

## Prepare and transfer

1. Check the world's Minecraft version and copy the original to your computer.
2. Stop the server and [back up](../server-management/backups.md) its current files.
3. Check `level-name` in `server.properties`; it identifies the main world folder.
4. Locate the world folder. Its root should contain `level.dat` and a `region` folder. Avoid an extra same-named nested folder.
5. Upload and name the folder to match `level-name`. Preserve the old world in a separate backup before replacing it.
6. Start, watch the console and join to check buildings, player data and dimensions. If it fails, stop and check the folder structure and name, restoring the backup if needed.

::: warning
Server software can store the Nether and End in separate directories. Check both source and target software instructions. Opening a newer world in an older version can corrupt it.
:::

See [Paper's migration guide](https://docs.papermc.io/paper/migration/).
