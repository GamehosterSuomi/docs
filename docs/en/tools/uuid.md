# Player UUID converter

The [player UUID converter](https://tools.gamehoster.fi/fi/tools/uuid-converter/) looks up a Minecraft Java player's online UUID and calculates an offline UUID from their name. These are different identifiers.

1. Enter the Java player name or UUID in the search field and select **Hae** (search).
2. Check the **Online-UUID** and **Offline-UUID** results. Choose **Väliviivoilla** (with hyphens) or **Ilman väliviivoja** (without hyphens) and copy the required identifier.
3. Before using it to locate a file or permissions, confirm the server's authentication method and consult the server or proxy documentation. Back up before modifying player files.

The online UUID comes from the looked-up player profile; the offline identifier is calculated from the name. Proxies and plugins can affect which identifier is used. Do not change `online-mode` merely to obtain a different identifier. See [restoring player data](../minecraft/player-data-restore.md).
