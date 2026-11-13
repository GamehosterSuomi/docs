# Changing Hytale server settings

Hytale uses JSON files including `config.json`; world-specific files can be under `universe/worlds/`. Actual paths depend on the installation.

1. Check the Hytale or mod documentation for the setting and valid values for your version. Server and world settings differ.
2. Notify players, stop the server and wait for it to finish. Make a [backup](./backups.md).
3. In **Files**, find the correct `config.json` and save a separate copy. Change only the intended value; preserve JSON punctuation and value types.
4. Save, start the server and check the console and in-game effect. If startup fails, stop the server and restore the previous file.

The server can write settings while running, overwriting manual edits. Do not copy another server's entire configuration or share files containing secrets. See [Hytale's manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
