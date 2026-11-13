# First startup of a Valheim server

1. Select the server in the game panel and check the available server name, world name, password and Steam/crossplay settings. Do not guess provider-assigned ports.
2. Open **Console**, select **START** and watch for errors while the world loads or is created.
3. According to Valheim's manual, `Game server connected` indicates readiness. Also wait for crossplay initialization if used.
4. Connect using the assigned address or available crossplay join code and check the world. Stop gracefully, wait for shutdown, restart and check the same world loads.

If startup fails, retain the first error and use [troubleshooting](./troubleshooting.md). Do not replace a managed service's startup script with a local hosting script. See [Valheim's manual](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
