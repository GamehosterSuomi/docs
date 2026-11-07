# A plugin does not work

Paper- or Bukkit-compatible plugin problems can arise from missing dependencies, version mismatch, configuration or another plugin. First determine whether it loads at all.

1. Find startup errors mentioning the plugin in the console. `plugins` can show loaded plugins, but a listing does not prove every feature works.
2. Check the author's supported Minecraft, server software and Java versions and required dependencies.
3. Ensure there is only one version of its JAR in `plugins`. Do not extract it unless the author instructs you to.
4. Check configuration syntax and player permissions. Changes often require a restart or the plugin's own safe reload command.

Back up and stop the server. If needed, test the plugin and its dependencies alone in a separate copy using the same software version, then add others gradually. Some plugins store data in the world or a database, so do not casually remove them from production.

Provide support with plugin and server versions, the first relevant error and reproduction steps. Remove secrets from logs. See [Paper troubleshooting](https://docs.papermc.io/paper/basic-troubleshooting/).
