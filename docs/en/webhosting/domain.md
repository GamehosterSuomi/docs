# Connecting a domain to web hosting

You need control of the domain and the destination details supplied by Gamehoster. Domain registration and web hosting are separate services.

## Add and point the domain

1. Check whether the domain appears among your subscription's sites in Plesk. If it does not, add it using the domain feature if your plan and permissions allow it.
2. Find which nameservers are authoritative for the domain. Change public DNS records at the provider operating those nameservers.
3. Set the website's address records to the values supplied by Gamehoster. Preserve records for email and other services you use.
4. Wait for DNS changes to propagate and check that the site opens at the correct address. Then set up an [SSL/TLS certificate](./ssl.md).

If the required record values or domain type are unclear, ask Gamehoster support. DNS changes can also affect email.

See [Plesk's domain documentation](https://docs.plesk.com/en-US/obsidian/customer-guide/websites-and-domains/adding-and-removing-websites.65150/).
