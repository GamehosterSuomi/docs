# Creating a Linux user

Individual user accounts make access easier to manage. These examples apply to Ubuntu- and Debian-based systems and require administrator privileges.

## Create an account

1. Connect to the server with an existing administrator account.
2. Create a user, for example with `sudo adduser newuser`. Replace `newuser` with the desired username and follow the prompts.
3. Configure a secure authentication method. If using an SSH key, add the person's **public** key to their own `~/.ssh/authorized_keys` file.
4. Test the new login in a separate connection before closing the current one.

Grant administrator privileges only to someone who needs them. On Ubuntu, membership of the `sudo` group can grant extensive privileges; check your server's policy first. `sudo usermod -aG sudo newuser` adds the user to the group. The change may require a new login.

When access is no longer needed, remove it in a controlled manner and check SSH keys and application-specific credentials. Before deleting an account, determine what will happen to its files.
