# Hytale worlds and player data

Hytale's manual describes `universe/` as containing world and player data, with worlds under `universe/worlds/`. Verify the actual paths for your service.

1. Notify players, stop the server and wait for saving. Make a [backup](./backups.md) covering `universe/`, settings and required mods.
2. If downloading files, use **Files** or SFTP, retain the directory structure and record the server version.
3. Before transferring a world, check source and destination versions and required mods. Back up both environments and, if possible, test on a separate server.
4. Stop the destination before replacing files. After starting, check the world, builds and player data. Keep the original until verified.

World-specific `config.json` settings can differ from server settings. Do not replace an old world or change its seed without a separate copy. Ask support if the destination path is unclear. See [the server manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
