# Minecraft Java Edition datapacks

Datapacks can change recipes and functions without a server mod. Choose a pack compatible with Java Edition and your server version, and read its author's instructions.

## Prepare

1. [Back up](../server-management/backups.md) the world and stop the server. Removing world-generation datapacks can cause problems.
2. Find the active world folder using `level-name` in `server.properties`; server software may also use separate world management.
3. Obtain a compatible pack from a trusted source. Check dependencies and the required installation format.

## Install

The server's **More** menu may have **Datapacks**, depending on the server and your permissions. Select the correct **World** and check the Minecraft version. In **Browse Datapacks**, search and examine **Details** before choosing **Install**. Check compatibility and dependencies in the author's instructions. **Manage** shows packs available for management.

For manual installation, transfer the ZIP or folder specified by the author to the active world's `datapacks` folder using the [file manager](../server-management/file-manager.md) or [SFTP](../server-management/sftp.md). Avoid an extra nested folder hiding the pack contents. Start the server, check the console and use `datapack list` to see recognized packs.

If it fails, check the world, structure, version and console errors. Stop the server and follow the author's removal instructions; some packs leave data in the world. Restore the pre-installation backup if necessary.
