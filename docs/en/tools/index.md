# Gamehoster Minecraft tools

[Gamehoster Tools](https://tools.gamehoster.fi/) provides calculators and editors for Minecraft. Select your language on the site, then search or browse by category. Results do not change your server automatically: download or copy them and apply them yourself.

The guides below refer to the Finnish-language tool pages and show their visible Finnish control labels alongside English explanations.

## Guides

- [Coordinate, tick and beacon calculators](./calculators.md)
- [Circle and sphere generators](./building.md)
- [Skins and pixel text](./skin-font.md)
- [Server icon converter](./server-icon.md)
- [Color codes and MiniMessage](./color-codes.md)
- [MOTD editor](./motd.md)
- [Server cost calculator](./cost-calculator.md)
- [Minecraft ping test](./ping-test.md)
- [Server status checker](./server-status.md)
- [Player UUID converter](./uuid.md)
- [Crafting recipe editor](./crafting.md)

## Coordinates and building

The **Coordinate Calculator** converts Overworld and Nether X and Z coordinates and retains Y. Existing portals can affect where a portal connects. Its **Chunk and Region** tab also shows chunk coordinates and the region filename. The **Tick Calculator** converts time and ticks; 20 game ticks per second assumes the server is keeping up. The **Beacon Calculator** shows pyramid blocks, range and effects.

The **Circle Generator** and **Sphere Generator** preview shapes and block counts and offer PNG and `.schem` exports. The WorldEdit instructions on each page describe how to import a schematic. Back up an existing world before pasting structures.

## Server tools

The **Server Icon Converter** crops a PNG, JPEG or WebP image and exports `server-icon.png` at 64 × 64 pixels. Put it beside `server.properties` on a Java server and restart. The **MOTD Editor** previews the server-list message; select your server software and follow the export tab for the correct format and file. The **Color Codes** tool outputs several formats, whose support depends on the target plugin or software.

The **Server Status Checker** queries a public Java server's status; a failed query alone does not prove players cannot connect. The **Minecraft Ping Test** estimates browser response time to Gamehoster's Finnish test location, not the actual in-game ping. The **Server Cost Calculator** estimates home hosting costs from entered power consumption and prices. Check current hosting prices separately.

## Player and creative tools

The **Player UUID Converter** looks up a Java online UUID and calculates an offline UUID; confirm which identifier the server actually uses before changing player files. **Skin Downloader** looks up a name or UUID and offers a 3D preview. **Pixel Font Generator** exports text as a transparent PNG.

The **Crafting Recipe Editor** creates Java recipes. Choose the target Minecraft version, ingredients and result, then download the datapack. Back up the world, stop the server, place the ZIP in the active world's `datapacks` folder without extracting it, restart, and check `datapack list` in the console. Check the tool's installation tab for current instructions.
