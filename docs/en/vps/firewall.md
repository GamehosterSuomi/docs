# Linux server firewall

A firewall restricts incoming traffic. Identify your applications' ports and protocols and inspect the existing firewall configuration before making changes. This example uses UFW on Ubuntu; other firewall tools exist.

## Check before enabling

1. Ensure you have an alternate connection or recovery method in case SSH is interrupted. Keep your current connection open.
2. Check existing rules with `sudo ufw status verbose`.
3. Allow the SSH port in use before enabling the firewall. If SSH uses TCP port 22, an example is `sudo ufw allow 22/tcp`. Replace the port with your server's actual port.
4. Add only rules needed by your applications according to their documentation, then enable UFW with `sudo ufw enable`.
5. Check the rules again and test a new SSH connection in another terminal before closing the old one.

Another firewall or provider network rules may also affect connectivity. Do not remove existing rules without understanding their purpose.

Further reading: [Ubuntu: Firewall](https://documentation.ubuntu.com/server/how-to/security/firewalls/).
