# Minecraft crashes during startup

Investigate the first error before changing files. See also [server not starting](./server-not-starting.md).

1. Start the server once and find the first console error and surrounding lines. Preserve `logs/latest.log` and any `crash-reports` before another start.
2. If a mod or plugin is named, check its game version, server software and dependencies. Stop the server before changing files.
3. If a world was saved in a newer version, do not open it in an older one. Restore a compatible server version or a backup from before the upgrade.
4. For port-binding errors, check the allocated port and `server-ip` in `server.properties`. The latter is generally left blank and is not the public IP field. Do not guess the allocated port.
5. If the process exits without a clear error, inspect memory and disk if shown. Low memory is one possible cause, not a diagnosis.

Back up first and change one thing at a time. Do not delete the world. Give support versions, the time, recent changes and the relevant error or crash report, removing secrets first. See [Paper troubleshooting](https://docs.papermc.io/paper/basic-troubleshooting/).
