# Java and Bedrock players on one server

Java Edition and Bedrock Edition do not normally connect directly to each other's server software. [Geyser](https://geysermc.org/wiki/geyser/setup/) lets Bedrock players join a compatible Java server; it does not turn a Bedrock server into a Java server.

## Prepare

1. Check Geyser's supported game and server software versions.
2. Determine whether the extra port and network protocols required by your Geyser setup are available. Ask support if necessary.
3. Back up the server. If Bedrock players lack Java accounts, also investigate [Floodgate](https://geysermc.org/wiki/floodgate/) and its authentication implications.

## Install and test

1. Install the Geyser build for your server software using its official instructions.
2. Configure an available port and authentication according to Geyser's instructions and your network allocation.
3. Restart and check the console for errors.
4. Connect from a Bedrock device using the server address and Geyser port. Java players continue using the Java address and port.

If connecting fails, compare the configured and allocated ports and check supported versions. Some features may behave differently across editions.
