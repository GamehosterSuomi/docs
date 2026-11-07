# Linux file permissions

A Linux file has an owner, a group and permissions for its owner, group and other users. Read (`r`), write (`w`) and execute (`x`) have slightly different meanings for files and directories.

## Inspect permissions

Go to the relevant directory and run:

```bash
ls -l
```

The output shows permissions, owner and group. Execute permission on a directory allows traversal; directory read and write permissions relate to its contents and changing names.

## Make changes carefully

If you own a file, you can remove access from other users, for example with `chmod 600 my-file`. First check that no service needs access. `chown` changes ownership, but an incorrect owner can prevent an application from working.

Do not apply broad recursive permission changes across the system. Pay particular attention to secrets, SSH keys and application configuration. Back up before changes when appropriate.
