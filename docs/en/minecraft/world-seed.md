# Setting a new world seed

A seed affects new terrain generation. The same seed does not guarantee identical worlds across Minecraft versions, world types, datapacks or mods. Changing the seed setting does not recreate an existing world.

1. Stop and back up the current world and settings; retain an off-server copy if possible.
2. Consult your server software and world manager instructions. Create the new world in a new folder or through the management tool; do not replace the old world without a restorable backup.
3. Set `level-seed` in `server.properties` before the new world's first startup. Make sure `level-name` points to the intended new folder.
4. Start and verify the correct world in the console and in game. If using **World Manager**, check its creation options first; it may handle settings differently.

On vanilla Java, an operator can usually check the active world's seed with `/seed`. Sharing it can reveal world layout and locations. Keep the old world until the new one is confirmed working.
