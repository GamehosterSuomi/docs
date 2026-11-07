# Installing Minecraft mods

Mods change Minecraft behavior. Java servers need a matching loader, such as Fabric, Forge or NeoForge; players may also need the same mods.

Check the mod's Minecraft version, loader, dependencies and whether it is intended for server, client or both. A client-only mod may not work on the server.

If **More → Mod Manager** is available, search Modrinth or CurseForge in **Browse Mods**. Inspect details and compatibility before **Install**. Check the console afterwards and install any required client mods. To install manually:

1. Back up and stop the server.
2. Download the correct mod and required dependencies from a trusted source.
3. Upload them to `mods` using the file manager or [SFTP](../server-management/sftp.md).
4. Start the server, check the console and install matching client versions where required. Test joining.

If startup fails, stop and inspect the first relevant error, loader, versions and dependencies. Remove the last added mod if necessary to isolate it, but preserve a backup: removing world-changing mods can alter the world. See [Fabric's installation guide](https://docs.fabricmc.net/players/installing-mods).
