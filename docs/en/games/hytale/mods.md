# Installing Hytale server mods

The Hytale manual describes server mods as `.zip` or `.jar` files in `mods/`. Compatibility depends on the mod and game version.

1. Check the mod's version, dependencies, file format and whether clients also need installation. Download from a trusted source.
2. Notify players, stop the server and make a [backup](./backups.md). World-changing mods can leave persistent changes.
3. Open **Files** or SFTP and find the active `mods/` directory. Ask support if its location or installation method is unclear.
4. Transfer the mod following its instructions; do not extract the ZIP unless its author says to. Start the server, check the console for loading or dependency errors and test in game.

If problems start after installation, stop and check versions and logs. Remove a mod only after understanding its effects on the world; restore the pre-installation backup if necessary. See [the server manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
