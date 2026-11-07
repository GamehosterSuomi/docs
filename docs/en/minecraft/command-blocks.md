# Enabling command blocks

Command blocks execute commands in the world. Enable them only when needed and only if you trust those allowed to edit them; commands can change worlds and player data.

1. Make a [backup](../server-management/backups.md) and identify the Java server version.
2. Before Java 1.21.9, stop the server, set `enable-command-block=true` in `server.properties`, save and restart.
3. In Java 1.21.9–1.21.10, check `gamerule commandBlocksEnabled` in the console and enable it if needed with `gamerule commandBlocksEnabled true`.
4. From Java 1.21.11, check `gamerule minecraft:command_blocks_work` and enable it with `gamerule minecraft:command_blocks_work true`. Check command completion and your software's restrictions for your version.
5. Test in a separate world first. Giving and editing command blocks requires appropriate permissions. Record their locations.

When no longer needed, set the appropriate property or game rule to `false`. Existing blocks remain in the world. See [Minecraft 1.21.9](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-9) and [1.21.11](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-11).
