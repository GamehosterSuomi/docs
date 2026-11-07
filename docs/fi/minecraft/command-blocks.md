# Komentolohkojen käyttöönotto

Komentolohko suorittaa siihen tallennetun komennon pelimaailmassa. Ota toiminto käyttöön vain, jos palvelin tarvitsee sitä ja luotat henkilöihin, joilla on oikeus muokata komentolohkoja. Komennot voivat muuttaa maailmaa ja pelaajien tietoja.

## Ota käyttöön Java-palvelimella

1. Ota [varmuuskopio](../server-management/backups.md) ja selvitä palvelimen Minecraft-versio.
2. Java-versioissa ennen 1.21.9 pysäytä palvelin, aseta `server.properties`-tiedostoon `enable-command-block=true`, tallenna ja käynnistä palvelin.
3. Java-versioissa 1.21.9–1.21.10 asetus on pelisääntö: tarkista sen arvo konsolissa komennolla `gamerule commandBlocksEnabled` ja ota tarvittaessa käyttöön komennolla `gamerule commandBlocksEnabled true`.
4. Java-versiosta 1.21.11 lähtien säännön nimi on muuttunut: käytä `gamerule minecraft:command_blocks_work` arvon tarkistamiseen ja `gamerule minecraft:command_blocks_work true` käyttöönottoon. Tarkista oman versiosi komentotäydennys ja mahdolliset ohjelmiston rajoitukset.
5. Tarkista toimintaa aluksi testimaailmassa. Komentolohkon antaminen ja muokkaaminen edellyttävät tarvittavia oikeuksia. Kirjaa lohkot ja niiden sijainnit.

Kun toiminto ei ole tarpeen, muuta vastaavan version asetus tai pelisääntö arvoon `false`. Jo luodut lohkot jäävät maailmaan. Tarkista versiokohtaiset komennot ja lohkojen käyttäytyminen ennen käyttöönottoa.

Lisätietoja: [Minecraft 1.21.9](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-9) ja [Minecraft 1.21.11](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-11).
