# Hytale-palvelimen asetusten muuttaminen

Hytale käyttää JSON-muotoisia asetustiedostoja. Virallisen oppaan mukaan palvelimen tiedostoihin kuuluu `config.json`, ja yksittäisten maailmojen tiedostoja on `universe/worlds/`-hakemistossa. Tiedostojen tarkka sijainti voi riippua käynnistyshakemistosta ja palvelun toteutuksesta.

## Muuta asetus turvallisesti

1. Selvitä Hytalen tai käyttämäsi modin dokumentaatiosta juuri käyttämäsi version asetuksen nimi ja hyväksytyt arvot. Palvelimen ja yksittäisen maailman asetukset ovat eri asioita.
2. Ilmoita pelaajille katkosta, pysäytä palvelin paneelin **Stop**-toiminnolla ja odota, että se on kokonaan pysähtynyt.
3. Luo [varmuuskopio](./backups.md). Avaa **Files** ja paikanna oikea `config.json`. Tallenna alkuperäinen tiedosto myös erikseen ennen muokkausta.
4. Muuta vain tarvitsemasi arvo. Säilytä JSON-rakenne, lainausmerkit, pilkut ja arvotyypit. Älä poista tuntemattomia asetuksia.
5. Tallenna tiedosto, käynnistä palvelin ja tarkista konsolin virheet sekä asetuksen vaikutus pelissä.

Palvelin lukee asetuksia käynnistyksessä ja voi itse kirjoittaa niitä pelin aikana. Käsin tehdyt muutokset voivat siksi ylikirjoittua, jos muokkaat käynnissä olevaa palvelinta. Jos käynnistys epäonnistuu, palauta aiempi tiedosto palvelin pysäytettynä ja tarkista virherivi.

::: warning
Älä kopioi toisen palvelimen valmista asetustiedostoa kokonaisuudessaan: sen maailma, tunnukset tai verkkoasetukset voivat olla erilaisia. Älä jaa salaisuuksia sisältäviä tiedostoja.
:::

Lisätietoa: [Hytale Server Manual: Configuration Files](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
