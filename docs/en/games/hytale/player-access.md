# Hytale player access and permissions

Game permissions and game-panel permissions are separate. Grant broad access only to trusted people.

1. Check the current Hytale version and permission-mod documentation for supported commands. Do not assume Minecraft commands work.
2. Hytale's manual mentions `permissions.json`, `whitelist.json` and `bans.json`; their presence does not prove every feature is enabled for your service.
3. Stop the server and [back up](./backups.md) before manually editing permissions. The server may write these files while running.
4. Start and test with the intended player account, checking that no unnecessary privileges were granted.

For panel access use limited **Users** permissions instead of sharing your password. Remove access when no longer needed. See [subusers](../../server-management/subusers.md) and the [Hytale manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
