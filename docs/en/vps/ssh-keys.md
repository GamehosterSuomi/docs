# Setting up an SSH key

An SSH key pair consists of a public and a private key. The public key is added to the server; the private key stays on your device. This guide uses the OpenSSH client.

## Create and add the key

1. On your computer, create a key with `ssh-keygen -t ed25519`. Choose a file location and protect the private key with a passphrase. Do not accidentally overwrite an existing key.
2. If `ssh-copy-id` is available and your current login works, copy the public key, for example with `ssh-copy-id -i ~/.ssh/id_ed25519.pub user@vps.example.com`. Add `-p` and the SSH port if needed. Replace the username and address with your own.
3. In a new terminal, try `ssh user@vps.example.com`. Keep the old connection open until the new login succeeds.

If the copy tool is unavailable, add the complete single line from the public `.pub` file to the target user's `~/.ssh/authorized_keys` according to the server's instructions. Preserve existing keys. Ensure the directory and file belong to the user and are not writable by others.

Never send anyone your private key. Do not disable password login until you have tested the key and confirmed an alternative recovery method. Further reading: [Ubuntu: OpenSSH server](https://documentation.ubuntu.com/server/how-to/security/openssh-server/).
