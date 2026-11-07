# Minecraft server status checker

The [server status checker](https://tools.gamehoster.fi/fi/tools/server-status-checker/) queries a Minecraft **Java Edition** server's public status. It does not log into the server or check whether a player has permission to join.

1. Enter the Java server address in **Palvelimen osoite** (server address). Include the server's specified port when needed.
2. Choose **Tarkista palvelin** (check server) and wait for the response.
3. A successful check shows a server-list preview, which can include a message and player count. The details depend on the server's response.

If no status is returned, check the address, port and server startup in the console. Network, DNS or server status settings can affect the result. A failed status query alone does not prove that all players cannot connect. See [connection troubleshooting](../troubleshooting/connection-issues.md).
