# Editing configuration files safely

Settings can be stored in `.properties`, `.yml`, `.json` or `.toml` files. The structure and allowed values depend on the software.

1. Read the software documentation and copy the original file.
2. Stop the server if the software might write the file while running.
3. Open it in the [file manager](./file-manager.md) or transfer it using [SFTP](./sftp.md).
4. Change one setting at a time and preserve the structure: YAML indentation and JSON punctuation matter.
5. Save, start the server and check the console and the setting's behavior.

If startup fails, restore the copy and compare against the software's examples. Check files for passwords and API keys before sharing them.
