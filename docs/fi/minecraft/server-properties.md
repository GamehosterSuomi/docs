# Minecraft-palvelimen asetukset

Minecraft-palvelimen asetukset tallennetaan `server.properties`-tiedostoon.

## Asetusten muokkaaminen

1. Pysäytä Minecraft-palvelin.
2. Avaa tiedostonhallinta.
3. Etsi `server.properties`-tiedosto.
4. Muokkaa haluamiasi asetuksia.
5. Tallenna tiedosto.
6. Käynnistä palvelin.

## Yleiset asetukset

| Asetus          | Kuvaus                                 |
| --------------- | -------------------------------------- |
| `motd`          | Palvelimen kuvaus                      |
| `max-players`   | Pelaajien enimmäismäärä                |
| `difficulty`    | Pelin vaikeustaso                      |
| `gamemode`      | Oletuspelitila                         |
| `pvp`           | Sallii tai estää pelaajien taistelun   |
| `view-distance` | Näkyvyysalue lohkoalueina (chunk)      |

## Esimerkki

```properties
motd=Tervetuloa Gamehoster-palvelimelleni!
max-players=20
difficulty=normal
gamemode=survival
pvp=true
```

::: warning Varoitus
Ota varmuuskopio ennen tärkeiden asetustiedostojen muokkaamista.
:::
