# Transferring web hosting files with SFTP

SFTP is an encrypted file transfer method. Its availability depends on the hosting and subscription settings. Having a Plesk FTP user does not necessarily mean SFTP is enabled: confirm the host, port and allowed connection method with Gamehoster.

## Connect and transfer

1. Install an SFTP client such as FileZilla or WinSCP.
2. Enter the server address, port and username supplied by your provider and select **SFTP** if supported.
3. On the first connection, check the server's host-key fingerprint against a trusted source before accepting it.
4. Go to the site's document root and transfer the files. Back up the old files and database before replacing them.
5. Confirm the transfer completed and test the site in a browser.

If you cannot connect, check the protocol, port, credentials and whether your plan allows the connection. Do not send passwords in a support request. Plesk's [file manager](./files.md) is an alternative if available.
