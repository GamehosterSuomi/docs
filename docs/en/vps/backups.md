# Planning VPS backups

Backups protect against problems such as failed updates or deleted files. Ask Gamehoster about backup availability, contents and retention for your service. VirtFusion features and permissions depend on the provider's configuration.

## Plan your backups

1. List the files, databases, application settings and operating system configuration needed for recovery.
2. Check each application's documentation. Copying a running database's files alone may not produce a consistent backup; use its supported backup method.
3. Set the backup frequency and retention according to how much data you can afford to lose. Keep a copy separate from the server.
4. Protect backups and restrict access: they may contain personal data and secrets.
5. Test restoration in a separate environment and document the result. Regularly verify that new backups complete.

Backups and full-server recovery do not necessarily cover the same data. Check their scope before an incident. See [planning a restore](./restore.md).

Further reading: [VirtFusion backup manager](https://docs.virtfusion.com/administration/backup-manager/). This guide is for administrators, so the settings described may not appear in the customer panel.
