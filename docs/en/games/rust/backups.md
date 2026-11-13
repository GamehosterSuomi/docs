# Backing up a Rust server

Restoring requires more than a map seed: buildings, player data and settings associated with the server identity must also be retained.

1. Notify players, stop gracefully and wait for saving and shutdown.
2. Find the active `server.identity` directory. Include world `*.sav` files, required map, player data, `cfg` settings and plugin data.
3. Create a [panel backup](../../server-management/backups.md), check saves are included and wait for completion. Back up separate databases if used by plugins.
4. Record server version, map, seed and backup time. Keep a secure separate copy and test restoration in an isolated environment if possible.

Facepunch says to retain `companion.id` for Rust+ server identity, not share it or reuse it across servers. Restoration can replace recent buildings and player data. See [Facepunch's guide](https://wiki.facepunch.com/rust/Creating-a-server).
