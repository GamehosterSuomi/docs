# Minecraft player allowlist

The Java Edition whitelist restricts who can join. Operators can also join a vanilla server without being listed, so check operators separately. Listing a player does not grant administrator privileges. The examples below are console commands without `/`; in game chat use a slash and the required permissions.

## Enable the list

1. Open the running server's console.
2. Add each exact username with `whitelist add PlayerName`.
3. Check entries with `whitelist list` and enable the list with `whitelist on`.
4. Test both a listed player and an unlisted player without operator permissions. Check the console responses.

Remove an entry with `whitelist remove PlayerName`. `whitelist off` allows unlisted players to attempt to join again. For players already online when the list changes, check `enforce-whitelist`, which can remove unlisted players when the whitelist is reloaded.

As of Java 26.3, `white-list` defaults to enabled in new configurations; older or provider configurations may differ. If joining still fails, check the username, version, and any permissions plugin or proxy settings. Bedrock and Geyser names may require separate handling; consult your implementation's documentation.

See [Paper server properties](https://docs.papermc.io/paper/reference/server-properties/) and [operators](./operators.md).
