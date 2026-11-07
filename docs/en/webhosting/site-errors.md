# Website does not open

First find out whether the problem affects all users and pages or just one device. Record the address, time and the browser's exact error message.

## Narrow down the problem

1. Check the domain spelling and try another network connection.
2. If the name does not resolve, check the [DNS records](./dns.md) and nameservers. Recent changes may take time to propagate.
3. If you receive a certificate warning, check the address and [certificate](./ssl.md). Do not bypass the warning.
4. For HTTP 404, check the file path, document root and entry file location.
5. HTTP 500 or a blank page may indicate an application error. Check the [logs](./logs.md), recent updates and PHP compatibility.

Do not delete site files as an experiment. Back up before making changes. If the problem continues, send support the exact error, time, address and a description of recent changes. Remove passwords and other sensitive information from logs first.
