# Kicking and banning players

On a Java Edition server, kicking removes a player temporarily; a ban prevents them from rejoining. The examples are console commands without a slash. Plugins can change commands or store bans separately.

1. Verify the exact username and circumstances.
2. Use `kick PlayerName RuleViolation` to remove the player. They can try to rejoin.
3. To block joining, use `ban PlayerName RuleViolation`.
4. Check bans with `banlist players` and remove one with `pardon PlayerName`.

An IP ban can affect multiple users sharing a connection, and shared or changing addresses make it less precise. If using a proxy, check its documentation for which address the server sees. A player-specific ban is usually easier to scope.

Keep an administration record and verify the correct account was banned. If the ban does not appear or cannot be removed, check the moderation plugin's instructions before editing files manually.
