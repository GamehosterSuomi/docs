# Planning a VPS restore

A restore can overwrite files or the entire server state. First determine whether you need an individual file, a database or the whole server. Options depend on the backup method and your service permissions.

## Before restoring

1. Choose a backup from a point in time containing the required data. Check whether it includes the application, database and settings.
2. Tell users about the maintenance window and stop application writes if needed, following its documentation.
3. Save a separate copy of the current state if possible. Changes made after the restore point could otherwise be lost.
4. Test the restore in a separate environment first if possible. Check compatibility and dependencies.

## After restoring

Check that applications start, data is intact, network connections work and users can access the service. Record the restored point in time and any subsequent data loss. If you do not know whether a panel action replaces the entire disk, ask Gamehoster support before confirming.
