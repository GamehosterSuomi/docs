# Managing permissions with LuckPerms

LuckPerms is a separately installed permissions plugin for assigning players to groups and granting plugin permissions. It is not included automatically on every server. Check [installation](https://luckperms.net/wiki/Installation) and compatibility with your server software.

1. Plan groups and responsibilities, such as players and moderators. Find exact permission nodes in each plugin's documentation.
2. Back up plugin configuration and its database before changes.
3. Install LuckPerms as documented and check its startup messages. Do not grant operator status solely for one command.

To add a user to an existing group from the console, for example:

```text
lp user PlayerName parent add moderator
```

Replace the username and group. This adds membership; it does not create the group or set permissions. Follow the [usage guide](https://luckperms.net/wiki/Usage) to configure groups and permissions. Test with a normal account and check that other grants do not mask the result. Grant only necessary access and treat permission editor links as confidential.
