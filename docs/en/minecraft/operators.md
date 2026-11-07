# Minecraft player permissions and operators

Operators can use server administration commands. Grant access only to trusted people. These examples concern Java Edition; plugins can alter permissions. Some servers also have **More → Player Manager**, with features depending on the server.

## Add or remove an operator

1. Open the running server's console.
2. Enter `op PlayerName`, replacing the example with the exact username.
3. Check the response and ask the player to test the required command.
4. Remove access when needed with `deop PlayerName`.

Console commands normally omit `/`; in-game chat uses it. A console command does not require you to be an operator in game.

## Restrict access

Add a player with `whitelist add PlayerName`, enable the list with `whitelist on`, inspect it with `whitelist list` and remove an entry with `whitelist remove PlayerName`. Include administrators who should be listed. A whitelist restricts access; it does not grant administration rights. Vanilla Java operators may join without a list entry, so check operators separately. See [Minecraft commands](https://www.minecraft.net/en-us/article/minecraft-commands).
