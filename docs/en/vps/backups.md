# Planning VPS backups

Backups protect against problems such as failed updates or deleted files. Ask Gamehoster about backup availability, contents and retention for your service. VirtFusion features and permissions depend on the provider's configuration.

## Plan your backups

1. List the files, databases, application settings and operating system configuration needed for recovery.
2. Check each application's documentation. Copying a running database's files alone may not produce a consistent backup; use its supported backup method.
3. Set the backup frequency and retention according to how much data you can afford to lose. Keep a copy separate from the server.
4. Protect backups and restrict access: they may contain personal data and secrets.
5. Test restoration in a separate environment and document the result. Regularly verify that new backups complete.

Backups and full-server recovery do not necessarily cover the same data. Check their scope before an incident. See [planning a restore](./restore.md).

## Backing up through the customer panel

1. Sign in to the [VPS panel](https://vps.gamehoster.fi/) and select the correct server.
2. Check whether your service offers backups and what the panel says they include. Availability, storage and permissions depend on your service.
3. If backup creation is available, check capacity and application consistency, create a backup using the available control, and wait until its status shows completion.
4. Record the restore point and check separate databases and external storage. Check whether a copy can be kept outside the server.
5. If the feature or scope is unclear, ask Gamehoster support. A creation request alone does not confirm a completed backup.
