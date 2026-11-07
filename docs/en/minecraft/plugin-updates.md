# Updating a Minecraft plugin

An update can also require changes to server software, dependencies or configuration. Update one plugin at a time.

1. Check the author's release notes, supported Minecraft and server versions and dependencies.
2. Announce downtime, stop the server and [back up](../server-management/backups.md) worlds, plugin files and databases. Confirm the restore method.
3. Download the release from its official source and check database or configuration migration instructions.
4. Remove the old JAR from `plugins` or move it off the server; do not leave two versions there. Upload the new JAR and retain the configuration folder unless instructed otherwise.
5. Start, check the plugin and dependency startup messages, and test important commands with a test account.

If the update fails, stop and restore the prior JAR and, if necessary, matching configuration and data. Check what restoration overwrites. An older version may not understand a database changed by a newer version. See [plugin troubleshooting](./plugin-troubleshooting.md).
