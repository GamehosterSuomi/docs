# Pelaajien pääsy ja oikeudet Hytale-palvelimella

Pelin pelaajaoikeudet ja Gamehosterin paneelin käyttäjäoikeudet ovat eri asioita. Pelin oikeudet vaikuttavat pelin sisäisiin toimintoihin; paneelin oikeudet voivat antaa pääsyn esimerkiksi palvelimen tiedostoihin tai pysäyttämiseen.

## Suunnittele pelaajien pääsy

1. Päätä, kenelle haluat antaa pääsyn ja mitä ylläpitäjän toimintoja todella tarvitaan. Anna laajat oikeudet vain luotetuille käyttäjille.
2. Tarkista Hytalen nykyisen version ja mahdollisten oikeusmodien omista ohjeista tuetut komennot ja niiden syntaksi. Älä käytä Minecraftin komentoja olettaen niiden toimivan Hytalessa.
3. Hytalen virallinen opas mainitsee `permissions.json`-, `whitelist.json`- ja `bans.json`-tiedostot. Niiden olemassaolo ei yksin kerro, mitä ominaisuuksia juuri sinun palvelimellasi on käytössä.
4. Ennen tiedostojen käsin muokkaamista pysäytä palvelin ja tee [varmuuskopio](./backups.md). Palvelin voi kirjoittaa oikeustiedostoja pelin aikana, jolloin käsin tehty muutos voi ylikirjoittua.
5. Muutoksen jälkeen käynnistä palvelin ja testaa oikeudet sovitulla pelaajatilillä. Tarkista, että tarpeettomia oikeuksia ei annettu.

Jos toinen henkilö tarvitsee paneeliin pääsyn, käytä paneelin **Users**-näkymän rajattuja oikeuksia oman salasanasi jakamisen sijaan. Poista tarpeettomat oikeudet myöhemmin. Katso [alikäyttäjät](../../server-management/subusers.md) ja [Hytale Server Manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
