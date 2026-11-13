# Getting started with a Valheim server

## Guides

- [Getting started](./getting-started.md)
- [First startup](./first-start.md)
- [Connecting](./connecting.md)
- [Settings](./settings.md)
- [Moving a world](./worlds.md)
- [Player permissions](./players.md)
- [Backups](./backups.md)
- [Updating](./updates.md)
- [Mods](./mods.md)
- [Troubleshooting](./troubleshooting.md)

Use this guide to start a Gamehoster Valheim server and join it. You need an activated service, panel access, Valheim and your server password.

1. Sign in to the [game panel](https://panel.gamehoster.fi/), select your Valheim server and find its address and port. `g1.gamehoster.fi:2000` is an example of the format only; use the values shown for your own service.
2. Check the available server name, world name, password and Steam or crossplay settings. Do not guess or replace ports assigned by the provider. If an option is not available, contact support.
3. Open **Console**, choose **START** and watch for errors. Valheim's server manual identifies `Game server connected` as the ready message. Wait for crossplay initialization too if applicable.
4. In Valheim, open the join-game view and use the available address or join-code option. Enter the game server password, not your panel password. Cross-platform players need crossplay enabled on the server and their accounts or devices; Steam-backend servers are for Steam clients.
5. Confirm you are in the intended world. Stop the server gracefully, wait for it to stop, then restart and check that the world loads again. Make a [backup](../../server-management/backups.md) before moving a world or adding mods.

If the server is not listed, try direct joining and check startup, game version and password. Crossplay can use a public address and port, a join code or the server list. Do not assume a code remains unchanged. Give support the error and relevant console lines without sharing passwords.

See [Valheim's dedicated server guide](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/) and [crossplay FAQ](https://www.valheimgame.com/support/crossplay-faq/).
