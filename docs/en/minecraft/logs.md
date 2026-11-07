# Investigating Minecraft logs

The console displays server events. On Java servers the latest log is usually `logs/latest.log`; older logs may be compressed in the same directory.

1. Record the time, server version and what happened immediately before the problem.
2. Open `logs/latest.log` in the file manager or download it using [SFTP](../server-management/sftp.md). Check earlier logs if the server has restarted.
3. Find the first relevant `ERROR` or `Exception` near that time and read the following lines; later errors may follow from an earlier cause.
4. If there is a `crash-reports` folder, preserve the report from the relevant time and inspect the cause, environment and named plugins or mods.

Logs may contain player names, IP addresses, passwords or tokens. Remove secrets and unnecessary personal information before sharing. Give support enough surrounding lines and describe recent changes. Do not use a public log-sharing service for private information. See [Minecraft startup crashes](../troubleshooting/minecraft-crash.md).
