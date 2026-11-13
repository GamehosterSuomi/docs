# Valheim player permissions and bans

Valheim's manual describes `adminlist.txt`, `bannedlist.txt` and `permittedlist.txt`. Confirm their service-specific location.

1. Stop the server and back up the lists. Find the player's correct Platform User ID in game or server logs, preserving its full format and case.
2. Add one ID per line to the intended admin, banned or permitted list. Give administration only to trusted users.
3. Save, restart and test. Adding a permitted player restricts other players, so include everyone who should have access.

Valheim documents `kick`, `ban`, `unban` and `banned` commands. Check the current version's syntax and permissions. Game admin access is separate from panel subuser access. See [Valheim's manual](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
