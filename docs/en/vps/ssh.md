# Connecting to a VPS with SSH

SSH gives you a command-line connection to a server. You need its IP address, SSH port, username and the authentication method supplied for your service. These instructions are for a Linux VPS with an SSH service enabled.

1. Open a terminal on your computer. Windows Terminal, macOS Terminal and Linux terminals can use the OpenSSH client.
2. Run `ssh username@192.0.2.10`, replacing the example username and address with your own. If your SSH port is different from 22, use `ssh -p PORT username@192.0.2.10` with the actual port.
3. On the first connection, compare the host key fingerprint with a trusted value supplied by your provider before accepting it. An unexpected change can indicate a different server or a security problem.
4. Authenticate with your configured password or private key. Keep your private key secret.
5. To end the session, type `exit`.

If the connection fails, check the IP address and port, whether the VPS is running, and the exact error message. See [SSH troubleshooting](./ssh-troubleshooting.md). Do not repeatedly change firewall or SSH settings without a recovery path. See [Ubuntu's OpenSSH documentation](https://documentation.ubuntu.com/server/how-to/security/openssh-server/).
