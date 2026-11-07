# Server not starting

If the server stops during startup, preserve the console output before changing files. The first meaningful error and its surrounding lines often explain more than the final shutdown message.

## Check the console

1. Open the correct server's **Console** in the game panel and start it once.
2. Note when it stops, copy the first error and the nearby lines, and check for a log or crash report if the game provides one. Avoid repeated restarts that can replace a current log.
3. Compare the error with recent changes such as a configuration edit, software update, plugin or mod installation.

## Narrow down the cause

- Check the game's and server software's versions and the compatibility and dependencies of recently added extensions.
- Review edited configuration files for invalid values or syntax. Preserve a backup before restoring or changing them.
- Check available memory and disk space in the panel where shown. A resource limit is a possible cause, not proof of one.
- If the log identifies a specific extension, consult its documentation. Disable a recent addition for diagnosis only after understanding its effect on saved data.

Change one thing at a time, then retry and compare the new error. For Minecraft-specific errors see [Minecraft startup crashes](./minecraft-crash.md). Do not delete the world to make the error disappear.

## Contact support

If the issue remains, provide the game and server software versions, the time and time zone, the first relevant error, and changes made before the issue. Remove passwords, tokens and other secrets from logs. The [support request guide](./support-request.md) explains what to include.
