# Rust server settings

1. Stop the server and make a [backup](./backups.md). Record current values.
2. Check the panel's supported settings. `server.hostname`, `server.maxplayers`, `server.seed` and `server.worldsize` control the name, player limit, map seed and size.
3. Facepunch documents `server.cfg` under the server identity's `cfg` directory; the root depends on the installation and `server.identity`. Values in that file do not use the startup command's `+` prefix. Check whether the panel manages the same setting before editing.
4. Save, start and verify in game. Map setting changes may select or create another world; read [worlds](./worlds.md) first.

Game and query ports are separate and must be allocated to your service. Do not change ports or RCON without provider instructions. See [Facepunch's guide](https://wiki.facepunch.com/rust/Creating-a-server).
