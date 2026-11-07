# Minecraft Server Properties

Minecraft server settings are stored in the `server.properties` file.

## Editing Settings

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
| `pvp`           | Enables or disables PvP |
| `view-distance` | Chunk view distance     |

## Example

```properties
motd=Welcome to my Gamehoster server!
max-players=20
difficulty=normal
gamemode=survival
pvp=true
```

::: warning
Make a backup before changing important configuration files.
:::
