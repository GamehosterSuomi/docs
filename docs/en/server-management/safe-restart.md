# Restarting a server safely

A graceful stop gives the server time to save before shutting down.

1. Notify players and ask them to leave.
2. Open the server in the [panel](https://panel.gamehoster.fi) and use its stop control.
3. Watch the console and wait until it has stopped completely.
4. Make the required changes, taking a [backup](./backups.md) first for major changes.
5. Start the server, check that startup completes without errors and try connecting.

If it does not stop, wait for saving and inspect recent console messages. A forced stop can interrupt writes and damage data; use it only if a normal stop fails. Contact support if the issue recurs.
