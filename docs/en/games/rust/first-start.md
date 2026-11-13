# First startup of a Rust server

The server creates or loads the map and save data at startup; the first generation can take longer.

1. Select the server in the game panel. Check available server name, player limit and map settings. Do not guess game, query or administration ports.
2. Open **Console**, choose **START** and wait for startup and world loading. Do not repeatedly press start.
3. Read any complete errors. A running status in the panel alone does not prove the game is accepting connections.
4. Try joining with Rust and check the world. Stop gracefully and verify the saved world loads after restarting.

If startup fails or the map does not load, retain logs and see [troubleshooting](./troubleshooting.md). See [Facepunch's guide](https://wiki.facepunch.com/rust/Creating-a-server).
