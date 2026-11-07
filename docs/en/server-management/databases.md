# Game server databases

Some plugins store data in a separate database. The **Databases** view may be available depending on your plan and permissions.

1. Check the plugin's supported database type and version.
2. Open **Databases** and check whether you can create a database. Ask support if the option is unavailable.
3. Enter the panel's database connection details in the plugin configuration. The database host and port can differ from the game server address.
4. Start the plugin or server as instructed and check the console for a successful connection.

Database contents may not be included in a server file backup. Establish a separate export and restore method before an upgrade or migration. Deleting a database can destroy its data. Keep credentials private.
