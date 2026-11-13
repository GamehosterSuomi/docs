# Rust administrators and players

Rust uses Steam64 IDs for player permissions. Game administrator access is separate from game-panel access.

1. Verify the trusted player's Steam64 ID. Facepunch's `users` command lists connected users and IDs.
2. Use `ownerid` or `moderatorid` in the server console according to the game documentation, granting only the needed role.
3. Ask the player to reconnect and test their access. Remove privileges using `removeowner` or `removemoderator` as needed; verify IDs before bans or unbans.

Facepunch describes permission changes as automatically saved in the current implementation. Check version-specific output and include the `cfg` user files in backups. Avoid publishing player identifiers or logs unnecessarily. See [Facepunch's guide](https://wiki.facepunch.com/rust/Creating-a-server).
