# Cannot connect to a Minecraft server

Determine whether the issue affects everyone or one player.

1. Check the panel console to confirm startup completed and the server is running. See [server not starting](./server-not-starting.md) if it stops.
2. Copy the correct address and port from the panel. Java uses `address:port`; Bedrock generally has a separate port field.
3. If a domain fails, try the direct panel address and port. If that works, check [DNS](../networking/domains.md) and the [SRV record](../networking/minecraft-srv.md).
4. Check the game edition, compatible version and required mods. Java and Bedrock require a separate compatibility solution to connect to each other.
5. Check allowlist or ban messages. If only one player is affected, restart their game and try another network.

Give support the exact error, versions, address and port, and whether the direct address works. Remove secrets and unnecessary personal information from logs.
