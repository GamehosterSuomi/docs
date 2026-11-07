# Setting up a web hosting database

Many web applications need a database for content and settings. The number of databases and available permissions depend on your subscription.

## Create and connect

1. Check the application's documentation for supported database types and versions.
2. Open database management in Plesk and create a database if your plan permits it. Create or assign a user to it.
3. Store the database name, username, password and host securely. Use the address supplied by your provider; do not guess it.
4. Enter these details during application setup or in its configuration file as instructed by the application.
5. Test the application and make a [backup](./backups.md) of the working installation that also includes the database.

Do not place database exports in a publicly accessible web directory or publish configuration passwords. If the application reports a connection error, check the database name, user permissions and host.

See [Plesk's database creation guide](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/website-databases/creating-databases.65157/). Available permissions may differ from those described there.
