# MOTD editor

Use the [MOTD editor](https://tools.gamehoster.fi/fi/tools/motd-generator/) to design and preview the message shown in the server list.

1. Enter the first and second lines on the **Editori** (editor) tab. Adjust text, colors, formatting and alignment as needed.
2. Choose the correct **Palvelinohjelmisto** (server software). Export format and supported colors depend on it.
3. Open **Vienti** (export) and read the displayed target file and value. Copy the result using the page's control.
4. Back up the settings, stop the server and place the value in the file indicated by the export instructions. Save and restart.
5. Refresh the in-game server list and check both lines. The preview is an estimate; appearance depends on the game version and client.

For Paper / Spigot, the export view shows the `motd` line for `server.properties`. Replace the existing line instead of adding a second `motd`. See [server properties](../minecraft/server-properties.md).
