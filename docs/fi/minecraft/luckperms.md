# Oikeuksien hallinta LuckPermsillä

LuckPerms on erikseen asennettava oikeuslisäosa, jolla pelaajia voidaan liittää ryhmiin ja ryhmille antaa lisäosien oikeuksia. Se ei kuulu automaattisesti kaikkiin palvelimiin. Tarkista [LuckPermsin asennusohjeet](https://luckperms.net/wiki/Installation) ja yhteensopivuus oman palvelinohjelmistosi kanssa.

## Suunnittele oikeudet

1. Listaa tarvittavat ryhmät ja tehtävät, esimerkiksi tavallinen pelaaja ja moderaattori. Selvitä jokaisen lisäosan dokumentaatiosta sen tarkat oikeusnimet.
2. Ota varmuuskopio lisäosan asetuksista ja sen käyttämästä tietokannasta ennen muutoksia.
3. Asenna LuckPerms sen ohjeiden mukaisesti ja tarkista konsolista käynnistys. Älä anna pelaajalle operaattorinoikeutta pelkästään yhden komennon vuoksi.

## Lisää pelaaja ryhmään

Konsolissa voit esimerkiksi liittää käyttäjän jo olemassa olevaan ryhmään:

```text
lp user PelaajanNimi parent add moderaattori
```

Korvaa nimi ja ryhmä omillasi. Komento lisää ryhmäjäsenyyden; se ei yksin luo ryhmää tai määritä sen oikeuksia. Käytä [LuckPermsin käyttöohjetta](https://luckperms.net/wiki/Usage) ryhmien ja oikeuksien määrittämiseen. Tarkista lopuksi oikeudet tavallisella testitilillä ja varmista, ettei tilillä ole muita myönnettyjä oikeuksia, jotka peittävät tuloksen.

Anna vain tarvittavat oikeudet. Oikeuksien muokkauslinkki voi mahdollistaa niiden muuttamisen, joten käsittele sitä luottamuksellisesti.
