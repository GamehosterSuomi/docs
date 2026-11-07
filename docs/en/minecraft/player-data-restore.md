# Restoring one player's data

Java Edition stores player data in the world folder, but software and plugins may also store inventory or other data elsewhere. Restoring a whole server may overwrite other players' newer changes.

## Identify the file

1. Ask for the username and when the problem began. Check software and plugin documentation for the relevant storage location.
2. Reliably identify the player's UUID and corresponding file in the active world's `playerdata` folder. Do not guess from the name. Plugin data and statistics may be elsewhere.
3. Choose a backup from before the problem, compatible with the same world and server environment. Check effects on plugin data.

## Restore carefully

1. Ask the player to leave and stop the server so it cannot overwrite the restored file.
2. Back up the current state and retain the older copy separately.
3. Copy only the identified old file into its correct location. Start the server and ask the player to check the result.
4. If incorrect, stop and restore the pre-change copy. Ask support if the UUID or location is unclear.

::: warning
Restoring can overwrite items, position and other changes made after the restore point. Do not edit files while the server is running.
:::
