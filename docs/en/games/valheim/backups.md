# Backing up a Valheim world

Valheim's own backup retention and location depend on startup settings. A panel backup and separate copy provide additional recovery options.

1. Notify players, stop gracefully and wait for shutdown.
2. Create a [panel backup](../../server-management/backups.md), ensuring the world is not excluded and the backup completes.
3. Verify the actual save path: `-savedir` can move world and permission files. Ask support about separate backups if the path is outside the panel backup.
4. Keep a separate copy where appropriate, record world name, version and time, and test restoration in an isolated environment if possible.

Save the current state before restoring and verify world and permission lists afterwards. Character saves may reside on players' devices or cloud separately. See [Valheim's manual](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
