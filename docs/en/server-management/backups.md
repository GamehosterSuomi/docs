# Server backups

Backups help protect your server data from accidental deletion, corruption and configuration mistakes.

Create a backup before changing game versions, restoring a world, installing a modpack or editing critical settings. Confirm that your service has a free backup slot and enough capacity; a backup is useful only if it contains the data you need and can be restored.

## Creating a backup

If backups are available for your server and you have permission to use them:

1. Open your server in the panel.
2. Open **Backups** and select **New backup**.
3. Optionally name the backup. Check **Ignored files & directories**: excluded files will not be included. If the field is empty and `.pteroignore` exists in the server's root directory, the panel says its contents are used.
4. Select **Start backup**, wait for it to finish and check that it is shown as complete. Stop the server first if you need a consistent copy of data being written to disk.

The number of backups may be limited. A file backup may not include a separate database: check how that is backed up separately.

Record the backup's date and the game and server software versions. If downloading is available, keep a protected copy outside the server; see [downloading a backup](./backup-download.md). Check the included files and test a restore in a separate environment when possible.

## Restoring a backup

1. Stop the server.
2. Open **Backups** and choose **Restore** from the correct backup's action menu.
3. Read the restore dialog. **Delete all files before restoring backup** removes current files before restoration. Leave it unchecked unless you intend this; restored files with the same names may still overwrite current data.
4. Confirm only when you understand the effects. Wait for restoration to finish and start the server.
5. Check the console and server operation. See [planning a restore](./restore-planning.md).

::: danger
Restoring a backup can overwrite current server files. Save important recent changes separately first.
:::

Do not assume a restore reverts separate databases or external services. After starting, verify the intended world, player data and essential game features before inviting players back.
