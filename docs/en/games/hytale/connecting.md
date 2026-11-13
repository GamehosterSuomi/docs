# Connecting to a Hytale server

Wait until startup and any [authentication](./authentication.md) complete. You need a compatible Hytale client and your server's address and port from the game panel.

1. Select your server in [the panel](https://panel.gamehoster.fi/) and copy the address and port from **Console**. `g1.gamehoster.fi:2000` illustrates the format only; use your own values.
2. Open Hytale's server menu, add or select a server using the available connection method, and enter the address and port.
3. Join and check that the correct world loads. Share the actual address with your friends.

If it fails, check the game and server protocol versions, server authentication, access restrictions and port. Hytale uses QUIC over UDP; use the assigned port rather than guessing a default. If only one player is affected, try another connection. See [troubleshooting](./troubleshooting.md) and the [server manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
