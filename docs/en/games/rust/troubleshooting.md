# Troubleshooting a Rust server

## Startup and world

Preserve the first console error and check recent changes, server version, mod framework and disk space. Stop and back up before changing files. Check `server.identity`, the map, seed and any forced wipe; do not delete the world as a diagnostic step.

## Connection and listing

Confirm readiness and compatible client version. Test a [direct connection](./connecting.md) using the assigned game port. If that works but listing fails, ask Gamehoster to check the separate query port and visibility. Do not guess port changes.

## Plugins

After updates, check Oxide and plugin compatibility and the first loading error. Change one thing at a time after backing up. Send support versions, map, time and relevant errors without passwords or RCON credentials. See [Facepunch's guide](https://wiki.facepunch.com/rust/Creating-a-server).
