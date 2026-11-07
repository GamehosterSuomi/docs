# Minecraft Server Properties

Minecraft server settings are stored in the `server.properties` file.

## Editing Settings

Some servers offer **More → Server Properties** in the panel. Find the setting, change its value and choose **Save changes**. After starting the server, check that the setting took effect. Availability depends on the server and your permissions.

Alternatively, edit the file manually:

1. Stop your Minecraft server.
2. Open the file manager.
3. Find `server.properties`.
4. Edit the settings you want to change.
5. Save the file.
6. Start your server.

## Common Settings

| Setting         | Description             |
| --------------- | ----------------------- |
| `motd`          | Server description      |
| `max-players`   | Maximum player count    |
| `difficulty`    | Game difficulty         |
| `gamemode`      | Default game mode       |
| `view-distance` | Chunk view distance     |

## Example

```properties
motd=Welcome to my Gamehoster server!
max-players=20
difficulty=normal
gamemode=survival
```

Java Edition 1.21.9 moved PvP control from `server.properties` to a game rule. Earlier versions use the `pvp` property. Use `gamerule pvp false` in the console, for example, and check the game rule spelling for your version using command completion. See [game rules](./game-rules.md) and [Minecraft Java Edition 1.21.9](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-9).

::: warning
Make a backup before changing important configuration files.
:::
