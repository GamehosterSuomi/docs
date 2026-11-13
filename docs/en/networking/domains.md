# Connecting a domain to a game server

A domain can give players a memorable address. You need control of the domain's DNS records and the address and port assigned to your server. The record type depends on whether the provider gives you a hostname or an IP address.

## Find your assigned address

Open the game panel and copy the connection address and port. `g1.gamehoster.fi:2000` is an example of the format; use your own values. Check that the game can connect to the assigned address before changing DNS.

## Create a record

1. Sign in to the DNS provider whose nameservers are active for your domain.
2. Choose a subdomain, such as `play.example.com`. If Gamehoster supplies a hostname and confirms it is suitable as an alias target, create a **CNAME** for `play` pointing to that hostname. For a supplied IPv4 or IPv6 address use an **A** or **AAAA** record respectively.
3. Enter the hostname or IP as the target, without `:port`. DNS providers may append the domain to the name automatically; check the full saved name.
4. Allow DNS caches to update and connect using the game's address format. If your DNS provider offers proxying, confirm the proxy supports the game's protocol or use DNS-only mode.

An A, AAAA or CNAME record does not carry a game port; players may still need to enter it. Minecraft Java Edition can use a separate [SRV record](./minecraft-srv.md) to advertise a port. Other games and editions may not use SRV records.

## Troubleshooting

If the assigned address works but the domain does not, check active nameservers, record name and target. Previously cached missing responses can take time to expire; see [checking DNS records](./dns-check.md). Contact Gamehoster if the appropriate DNS target is unclear.
