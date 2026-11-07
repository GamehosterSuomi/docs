# Email client settings

You can use a web hosting mailbox in an email client once you have the correct connection settings. First check whether the service and encrypted connections are available.

## Information you need

Obtain the mailbox username and password, incoming server and port, outgoing SMTP server and port, and the encryption method for each connection. The username is often the complete email address, but check your provider's instructions.

## Add the account

1. Create a new account in your email client.
2. Enter the provider's IMAP and SMTP settings. IMAP synchronises messages stored on the server; deletions may also appear on other devices. Check the consequences before using POP.
3. Enable the provider's specified TLS encryption and SMTP authentication.
4. Test sending and receiving, and check that sent messages are stored in the intended folder.

If your browser or email client reports a certificate error, check the server name and contact support before continuing. Do not disable certificate verification to bypass the error.

Plesk may provide a **Mail Client Setup** view with provider-configured settings for the mailbox. Ask support if needed. See [Plesk's mail client setup guide](https://docs.plesk.com/en-US/obsidian/administrator-guide/65691/).
