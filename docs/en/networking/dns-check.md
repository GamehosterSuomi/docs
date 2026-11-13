# Checking DNS records

A records map names to IPv4 addresses, AAAA to IPv6 addresses, and CNAME to another hostname.

1. Verify you are editing DNS at the provider whose nameservers the domain actually uses.
2. Check the record name and target. A and AAAA records do not include ports; an SRV record can specify one separately.
3. On Windows, run `nslookup play.example.com` with your own name and compare the result to the intended address.
4. Allow caches to update after changes; even an earlier missing-name response can be cached.

If the direct address works but the domain does not, check any proxy and whether it supports your game protocol. See [domains](./domains.md), [Minecraft SRV](./minecraft-srv.md) and [Cloudflare DNS troubleshooting](https://developers.cloudflare.com/dns/troubleshooting/dns-issues/).
