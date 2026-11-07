# Website SSL/TLS certificate

An SSL/TLS certificate allows an encrypted HTTPS connection and helps the browser verify the website's identity. The certificate must cover each hostname you use, such as the root domain and `www`.

1. Check that the domain's DNS points to the correct service and that the domain is available in Plesk.
2. Check whether certificate management and a suitable domain validation method are available in your plan.
3. Follow the available Plesk certificate issuance or installation instructions. Include each required hostname and wait for validation.
4. Visit each hostname using `https://` and check the browser's certificate details. If the page has mixed-content warnings, inspect links to HTTP images and scripts.
5. Check the renewal method and monitor expiry.

Do not bypass a browser certificate warning or enter credentials until the problem is resolved. Contact support if you cannot issue or select a certificate. See [Plesk's certificate documentation](https://docs.plesk.com/en-US/obsidian/customer-guide/websites-and-domains/securing-connections-with-ssltls-certificates.65158/).
