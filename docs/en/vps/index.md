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

## Checking and starting the server

1. Open [vps.gamehoster.fi](https://vps.gamehoster.fi/) and sign in with your VPS panel credentials.
2. Select the correct VPS and check its status. The panel login and the Linux operating-system account are separate credentials.
3. If it is stopped and you have permission to start it, use the start control available in the panel. Wait for startup before trying SSH.
4. Find the VPS IP address in its details and use the SSH port and operating-system username configured for your installation. See [connecting with SSH](./ssh.md).

Available controls and their names depend on your service. If the VPS or start control is missing, check the account and activation, then contact Gamehoster support if needed.

## If SSH does not connect

Check the server status, address, port and username. If a server console is available to your account, you can use it to inspect the operating system. Do not reinstall as a connection test: reinstallation can erase data. Follow [SSH troubleshooting](./ssh-troubleshooting.md).
