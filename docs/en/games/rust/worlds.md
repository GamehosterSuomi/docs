# Rust maps, saves and wipes

A map wipe and blueprint wipe can remove different information.

1. Tell players what will be reset and when. Stop and [back up](./backups.md) all saves and settings.
2. Identify the active `server.identity` and save directory. Facepunch describes `*.sav` as world state and `player.blueprints` as player blueprint data; preserve other player data and configuration too.
3. Check release and provider instructions for a forced wipe. Changing the map seed or size does not safely preserve the old world.
4. Use the service's supported wipe or world-change method, checking its effect before confirmation. Keep the old copy separately; do not rename an old save to circumvent a forced wipe.
5. Start and check the map and player data. Confirm world and server-version compatibility before restoring.

See [Facepunch's save and wipe guide](https://wiki.facepunch.com/rust/Getting-Started_w-Server).
