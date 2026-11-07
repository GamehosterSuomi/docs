# Getting started with VPS management

## Guides

- [Connecting with SSH](./ssh.md)
- [Using SSH keys](./ssh-keys.md)
- [Troubleshooting SSH](./ssh-troubleshooting.md)
- [Transferring files](./file-transfer.md)
- [Updating Ubuntu](./updates.md)
- [Linux firewall](./firewall.md)
- [Creating a Linux user](./users.md)
- [File permissions](./permissions.md)
- [Checking disk space](./disk-space.md)
- [Investigating logs](./logs.md)
- [Checking services](./services.md)
- [Troubleshooting DNS](./dns-troubleshooting.md)
- [Checking resources](./resources.md)
- [Planning backups](./backups.md)
- [Planning a restore](./restore.md)

Gamehoster's VPS panel is at [vps.gamehoster.fi](https://vps.gamehoster.fi/). Sign in with your account and select your VPS. The panel uses VirtFusion; available features depend on your service and permissions.

## Before connecting

- Keep your credentials safe and verify the address before signing in.
- Find your server's IP address, operating system and setup information in your service details.
- Check how backups and restoration work before making major changes. Do not assume that all VPS data is backed up automatically.

Linux servers are commonly managed over SSH. Use your assigned username, IP address and authentication method. For example:

```text
ssh username@server-ip
```

Replace the example values with your own. Verify the server's host key against information from your provider the first time you connect. Never share your password or private SSH key.

Reinstallation, restoration and forced shutdown can affect your data. Confirm the operation's effect and your recovery options first. If you cannot connect or a feature is unavailable, contact Gamehoster support.

See [VirtFusion documentation](https://docs.virtfusion.com/).
