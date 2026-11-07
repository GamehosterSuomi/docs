# Subusers and permissions

Subusers allow limited access without sharing your account. Availability and permission names depend on the service.

1. Sign in to the [panel](https://panel.gamehoster.fi), choose the server and open **Users** if available. Select **New user**.
2. Enter the person's email address, select only the permissions needed, verify the address and choose **Invite user**.
3. Ask them to sign in with their own account and verify access.

Console viewing, sending commands, stopping the server and editing files are separate permissions. Backup downloads can expose all included data; restores and deletion can change or destroy files. SFTP access also requires the appropriate file permissions: **File → Read** allows directory listings, while **Read-content** is needed to read or download file contents.

Review access regularly and remove it when no longer needed. Never share passwords or SFTP credentials. See [Pterodactyl permissions](https://github.com/pterodactyl/panel/blob/1.0-develop/app/Models/Permission.php).
