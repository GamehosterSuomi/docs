# Transferring files to a Linux VPS

SFTP transfers files over SSH. You need the server address, SSH port and username, along with the account's password or key. The server must support SFTP.

## Connect using an SFTP client

1. Open an SFTP client, such as FileZilla or WinSCP, and choose SFTP as the protocol.
2. Enter the VPS address, SSH port and username. Choose the account's authentication method.
3. Verify the server's host key fingerprint against a trusted source before accepting it.
4. Transfer files first to a directory accessible to your user. Confirm the destination path and check the files after transfer.

If you cannot write to the destination, check the user's permissions and the application's installation instructions. Do not make system directories writable by everyone. For large transfers, check available disk space and avoid using copies of a running database's files as a backup.
