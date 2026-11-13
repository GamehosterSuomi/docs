# Hytale backups and restoration

1. Notify players, stop the server gracefully and wait for shutdown.
2. Open **Backups** in the game panel and, if available and permitted, choose **New backup**. Check **Ignored files & directories** and any applicable `.pteroignore` so needed world files are included.
3. Select **Start backup** and wait for completion. Confirm it covers `universe/`, required settings and mods; external databases may need separate backups. Record the date and game version and keep a protected separate copy if available.
4. Before restoring, warn players about changes since the restore point, stop the server and save the current state separately if possible.
5. Choose **Restore** for the correct copy, read the deletion options carefully and wait for completion. Start and check the world and player data.

Do not assume Hytale's own `--backup` options are enabled in your managed service. See [general backup instructions](../../server-management/backups.md) and the [Hytale manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
