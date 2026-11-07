# Changing game rules

Java Edition game rules control world behavior. Available rules and spelling depend on the Minecraft version; check command completion before changing anything.

1. [Back up](../server-management/backups.md) the world if the change affects important gameplay.
2. As an operator, enter `/gamerule` in chat and use tab completion to see the options for your version.
3. Enter a rule name without a value to query it. Append a supported value, such as `true` or `false`, to change it. Omit the initial `/` in the console.
4. Check the response and test safely. Record the original value so you can restore it.

For example, the rule controlling inventory retention on death was previously `keepInventory`. Java 1.21.11 changed rule names to namespaced snake_case; check the name offered by your server. World-management plugins can manage settings separately by world. Check the active world and plugin documentation if the result differs from expectations.

See [Minecraft 1.21.11 game rule changes](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-11).
