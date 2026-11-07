# Troubleshooting SSH connections

The exact SSH error helps distinguish network problems from authentication problems. First confirm that the VPS is running and that you are using its correct address, port and username.

## Narrow down the problem

1. A timeout can result from a firewall, incorrect address or network interruption. Check the address, port and any server and provider network rules.
2. `Connection refused` means the connection attempt was rejected. If you have alternative management access, check whether the SSH service is listening on the correct port.
3. `Permission denied` concerns authentication. Check the username, correct key or password and server SSH settings. Do not retry login indefinitely.
4. If the server host key fingerprint has changed, verify why using a trusted source before accepting the new key.

Try another network if appropriate. If you have safe alternative management access, check SSH service status and logs according to the operating system's documentation. If you cannot access the server, tell support the error, time, address, port and recent network or SSH configuration changes. Do not send your password or private key.
