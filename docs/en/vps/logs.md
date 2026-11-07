# Investigating Linux server logs

Logs help explain why a service fails to start or a connection fails. These commands apply to a system using systemd and its journal.

## View logs

Replace `service` with the actual service name:

```bash
sudo journalctl -u service --since "1 hour ago" --no-pager
```

View messages from the latest boot with `sudo journalctl -b`. Follow new service messages with `sudo journalctl -u service -f`; press Ctrl+C to stop.

Check timestamps, the first error and preceding events. The log timezone may differ from yours. Not every application writes to the journal, and older messages may not persist across reboots.

Before sending logs to support, remove passwords, tokens, keys and unnecessary personal data while retaining the lines relevant to the error.

Further reading: [systemd: journalctl](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html).
