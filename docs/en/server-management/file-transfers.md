# Transferring large files

[SFTP](./sftp.md) is useful for large worlds and server packages. Archive extraction in the file manager depends on service features and permissions.

1. Stop the server when transferring active world or configuration files.
2. Make a [backup](./backups.md) and check there is space for both the upload and any extracted archive.
3. Identify the source and destination and preserve the folder structure. Avoid nesting a world inside an extra same-named folder.
4. Transfer files over SFTP, wait for the queue to finish and check for failed transfers.
5. If supported, extract an archive into the correct directory and inspect the result before starting the server.

Afterwards check the destination name, size and structure; start the server and watch the console. Overwriting files can replace current data. Do not extract archives from untrusted sources.
