# Networking

A game server connection needs the correct hostname or IP address and the port assigned to that service. A hostname makes the address easier to remember; it does not by itself include a port.

For example, `g1.gamehoster.fi:2000` illustrates a hostname and port. This is an example only: copy your own connection details from the game panel. Some games ask for the hostname and port separately and can use distinct ports for browsing and gameplay.

## Guides

- [Connecting a domain](./domains.md)
- [Minecraft Java Edition SRV record](./minecraft-srv.md)
- [Checking DNS records](./dns-check.md)

Test the assigned server address before diagnosing a domain, and check the game-specific guide for its connection method. Do not change allocated ports in configuration files unless you know the service supports the change.
