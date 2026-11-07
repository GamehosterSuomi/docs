# Scheduled tasks

Schedules can automate maintenance when your service and permissions allow it. Pterodactyl tasks can, for example, send a command, control the server's power state or create a backup. Available actions and limits depend on server settings.

1. Pick a suitable time and confirm the schedule's time zone with support if it is not displayed.
2. Open **Schedules**, select **New schedule**, name it and fill in the five cron fields. **Show cheatsheet** provides examples.
3. Review **Only when server is online** and **Schedule enabled**, then create the schedule. Add its tasks in the intended order: creating the schedule alone does not add a task. Use supported commands and check delays.
4. Check the next run if shown and supervise a trial run. For backups, check that space and a backup slot are available, verify completed copies and plan [restoration](./restore-planning.md).

If a task does not run, check whether it is enabled, the time zone, limits and console errors. Some tasks require the server to be online. Share relevant details with support if necessary.
