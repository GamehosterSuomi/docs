# Troubleshooting DNS on a VPS

If an application cannot find a domain, distinguish DNS resolution from network connectivity. Command availability depends on your Linux distribution.

## Check resolution

1. Confirm that the domain is spelled correctly and that the problem occurs from the server.
2. Query the system resolver with `getent ahosts example.com`, replacing the example with your domain.
3. If `dig` is available, query records with `dig example.com A` or `dig example.com AAAA`. The result shows the answer from the queried resolver; it does not prove the target service is reachable.
4. If answers differ between networks, check the domain's nameservers and records with their DNS provider. Changes and earlier negative responses can remain cached.

If the name resolves but the application cannot connect, check the destination port, firewall and service status. Do not permanently replace system resolver settings without finding out which tool manages them. Tell support the domain, error message, time and test results.
