# Web hosting DNS records

DNS directs domain users to the right service. An A record points to an IPv4 address, an AAAA record to an IPv6 address, and an MX record identifies a mail server.

## Find where DNS is managed

Check the domain's nameservers with your registrar. If you use an external DNS provider, changes made in Plesk generally do not affect public DNS. If Plesk-managed nameservers are in use and your plan permits DNS changes, use Plesk's DNS settings.

## Make a change

1. Record the existing records and values.
2. Add or edit only the necessary record using the values supplied by your provider. Check its name and type.
3. Save and allow time for the change to propagate. Caches can retain earlier answers for a while.
4. Test the website and email if their records were affected.

Do not remove MX, SPF, DKIM or other unfamiliar records without checking their purpose. See also [connecting a domain](./domain.md).

See [Plesk's DNS guide](https://docs.plesk.com/en-US/obsidian/quick-start-guide/plesk-functionality-explained/managing-dns-records.74404/).
