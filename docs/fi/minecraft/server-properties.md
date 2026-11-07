# Minecraft-palvelimen asetukset

Minecraft-palvelimen asetukset tallennetaan `server.properties`-tiedostoon.

## Asetusten muokkaaminen

Joillakin palvelimilla asetuksia voi muokata myös paneelin **More → Server Properties** -näkymässä. Etsi haluamasi asetus, muuta arvoa ja tallenna **Save changes** -toiminnolla. Tarkista tarvittaessa palvelimen käynnistyksen jälkeen, että asetus tuli voimaan. Näkymän saatavuus riippuu palvelimesta ja käyttöoikeuksistasi.

Voit vaihtoehtoisesti muokata tiedostoa käsin:

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
| `view-distance` | Näkyvyysalue lohkoalueina (chunk)      |

## Esimerkki

```properties
motd=Tervetuloa Gamehoster-palvelimelleni!
max-players=20
difficulty=normal
gamemode=survival
```

Java Editionin versioissa ennen 1.21.9 pelaajien välistä taistelua hallittiin myös asetuksella `pvp`. Versiosta 1.21.9 lähtien se on pelisääntö: käytä konsolissa esimerkiksi `gamerule pvp false` ja tarkista nimen kirjoitusasu oman version komentotäydennyksestä. Katso [pelisäännöt](./game-rules.md) ja [Minecraft 1.21.9:n muutokset](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-9).

::: warning Varoitus
Ota varmuuskopio ennen tärkeiden asetustiedostojen muokkaamista.
:::
