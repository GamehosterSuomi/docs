# Crafting recipe editor

The [crafting recipe editor](https://tools.gamehoster.fi/fi/tools/crafting-generator/) creates a Minecraft Java Edition recipe that you can download as a datapack.

## Design the recipe

1. Choose **Kiinteä muoto** (shaped) or **Vapaa muoto** (shapeless). Click the slots to select ingredients and result. The page says you can clear a slot with a right-click.
2. Choose your server's **Minecraft-versio** (Minecraft version), result count, namespace and recipe identifier. Check the recipe-book and notification settings too.
3. Review **Reseptin JSON** (recipe JSON). You can copy or separately download the JSON if needed.
4. Download the finished pack with **Lataa datapaketti** (download datapack) and read the **Asennus** (installation) tab.

## Install and test

Back up the world, stop the server and transfer the downloaded ZIP without extracting it to the active world's `datapacks` folder. Start the server, check the console for loading messages and run `datapack list` in the console. Test the recipe in game. If it does not load, check the version and console errors. See the [datapack guide](../minecraft/datapacks.md) for detailed steps and world selection.
