# Checking a Linux service

Many Linux distributions use systemd to manage background services. In this guide, `service` stands for the actual service unit name, such as one specified by the application documentation.

## Check status and investigate errors

1. View status with `systemctl status service`. Check whether it is running and whether errors appear.
2. Inspect detailed messages with `sudo journalctl -u service --since "1 hour ago" --no-pager`.
3. Compare messages with recent configuration or update changes. Verify application settings and disk space before retrying.

You can restart a service with `sudo systemctl restart service`, but this interrupts its users. Do so only after understanding the effect, then check the status again. `enable` configures a service to start at boot; it does not fix an error by itself.

Further reading: [systemctl manual](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html).
