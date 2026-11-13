# Rust Oxide/uMod plugins

Plugins require a supported server framework such as Oxide/uMod. Ask Gamehoster whether it is available and how to maintain it.

1. Check framework and plugin version requirements, dependencies and databases. Download only from trusted sources.
2. Stop the server and [back up](./backups.md), including plugin data and configuration.
3. With a compatible, provider-supported Oxide installation, Facepunch documents `oxide/plugins` as the plugin directory. Verify the actual path and transfer method for your service.
4. Start or follow the plugin's instructions, inspect console errors and test one plugin at a time.

The framework may require an update or reinstall after Rust updates. Removing a plugin may not remove its data; understand recovery before deleting it. See [Facepunch's Oxide guide](https://wiki.facepunch.com/rust/Oxide).
