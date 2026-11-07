# Hytale-maailmat ja pelaajatiedot

Hytalen virallisen palvelinoppaan mukaan `universe/` sisältää maailman ja pelaajien tallennustietoja, ja pelattavat maailmat sijaitsevat `universe/worlds/`-hakemistossa. Varmista palvelimesi todellinen hakemistorakenne ennen siirtämistä.

## Tallenna nykyinen maailma

1. Ilmoita pelaajille huoltokatkosta ja pysäytä palvelin hallitusti. Odota tallennuksen valmistumista.
2. Tee koko palvelimesta [varmuuskopio](./backups.md) ja tarkista, että `universe/` sekä tarvittavat asetukset ja modit kuuluvat siihen.
3. Jos lataat tiedostoja omalle koneellesi, käytä **Files**-näkymää tai paneelin SFTP-tietoja. Säilytä kansioiden rakenne ja kirjaa palvelimen versio.

## Kun siirrät maailmaa

Tarkista ensin lähteen ja kohteen peliversiot, maailman tiedostorakenne ja vaaditut modit. Siirrä maailma ensin erilliseen testipalvelimeen, jos mahdollista. Tee varmuuskopio molemmista ympäristöistä ja pysäytä kohdepalvelin ennen tiedostojen korvaamista. Käynnistyksen jälkeen tarkista maailma, rakennukset ja pelaajatiedot. Älä poista alkuperäistä ennen kuin olet todennut uuden toimivan.

Maailman `config.json` voi sisältää maailmakohtaisia asetuksia. Älä muuta siementä tai luo uutta maailmaa vanhan tilalle ilman erillistä kopiota: uusi maailma ei sisällä aiempia rakennuksia. Jos et tiedä, mihin tiedostot kuuluvat palvelusi asennuksessa, kysy tuelta ennen siirtoa.

Lähde: [Hytale Server Manual: File Structure](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
