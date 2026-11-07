# Connecting with SFTP

SFTP lets you transfer files securely between your computer and game server.

## Requirements

- An SFTP client such as FileZilla or WinSCP.
- Your server's SFTP address and port.
- Your SFTP login details.

The SFTP address and port can differ from the address and port players use in the game. Select **SFTP** in the client, not plain FTP. Find the exact service details in the panel; `g1.gamehoster.fi:2000` is only an example of a game connection address and must not be assumed to be your SFTP endpoint.

## Connect

1. Open your SFTP client and enter the SFTP address and port shown in the panel.
2. In the game panel, open the server's **Settings** and locate **SFTP Details**. Use the displayed username: it may differ from your regular panel username. The view states that the SFTP password is the same as the panel password.
3. On your first connection, verify the server's host-key fingerprint with Gamehoster. Enter your password in the SFTP client and connect.
4. Transfer the files you need and check that transfers completed.

Before replacing active world or configuration files, stop the server and make a [backup](./backups.md). Check the destination path and transfer queue. If uploading an archive, ensure there is room for both the archive and the extracted files, and inspect the directory structure before restarting. See [large file transfers](./file-transfers.md).

Panel SFTP and file permissions control what a subuser can do. If you cannot connect, see [SFTP troubleshooting](../troubleshooting/sftp-connection.md).

::: warning
Do not share your SFTP credentials.
:::
