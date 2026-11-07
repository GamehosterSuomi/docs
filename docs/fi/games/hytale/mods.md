# Modien asentaminen Hytale-palvelimelle

Modit voivat muuttaa peliä ja maailman toimintaa. Hytalen palvelinoppaan mukaan palvelinmodit voidaan asentaa `mods/`-kansioon `.zip`- tai `.jar`-tiedostoina. Tarkka yhteensopivuus riippuu modista ja Hytale-versiosta.

## Ennen asennusta

1. Tarkista modin tekijän julkaisuohjeista palvelimen peliversio, tarvittavat riippuvuudet, tiedostomuoto ja se, tarvitsevatko pelaajat erillisen asiakaspuolen asennuksen.
2. Lataa modi luotettavasta lähteestä ja tarkista myös käyttöehdot. Älä asenna tuntemattomia tiedostoja pelkkien nimien perusteella.
3. Ilmoita pelaajille katkosta, pysäytä palvelin ja tee [varmuuskopio](./backups.md). Erityisesti maailman sisältöä muuttavat modit voivat jättää pysyviä muutoksia.

## Siirrä ja tarkista

1. Avaa pelihallinnan **Files** tai käytä SFTP:tä. Etsi palvelimen käytössä oleva `mods/`-kansio. Jos kansiota ei löydy tai palvelu käyttää toista asennustapaa, kysy Gamehosterin tuelta.
2. Siirrä modin tiedosto tekijän ohjeen mukaisesti. Älä pura ZIP-tiedostoa, ellei juuri kyseisen modin ohje sitä edellytä.
3. Käynnistä palvelin ja tarkista konsolista modin lataus sekä mahdolliset riippuvuus- tai versiovirheet.
4. Kokeile liittymistä ja modin toimintaa. Jos modin mukana tulee omia asetuksia, noudata sen ohjetta ja ota kopio ennen muutoksia.

Jos ongelma alkoi asennuksen jälkeen, pysäytä palvelin ja tarkista versiot ja loki. Poista modi käytöstä vain, jos ymmärrät vaikutukset maailmaan, ja palauta tarvittaessa ennen asennusta tehty varmuuskopio. Lisätietoa: [Hytale Server Manual: Installing Mods](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
