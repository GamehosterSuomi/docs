# Updating an Ubuntu server

Updates fix bugs and security issues. These commands apply to Ubuntu- and Debian-based systems using APT. Other operating systems may use a different update process.

## Update packages

1. Schedule a maintenance window and confirm you have a working backup. Read important applications' update instructions.
2. Connect over SSH and refresh package lists:

   ```bash
   sudo apt update
   ```

3. Review available updates with `apt list --upgradable`, then run `sudo apt upgrade`. Read any prompts before accepting.
4. If an update requires a reboot, notify users and restart the server safely. Check connectivity and service operation afterwards.

APT may not update every package with a single `upgrade` command. Investigate held-back packages before further changes. A major operating system version upgrade is a separate process: follow your distribution's upgrade guide.

Further reading: [Ubuntu package management](https://ubuntu.com/server/docs/package-management/) and [Ubuntu security updates](https://documentation.ubuntu.com/security/security-updates/).
