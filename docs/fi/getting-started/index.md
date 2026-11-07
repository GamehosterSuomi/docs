# Pelipalvelimen käyttöönotto

Ota ensin yhteys hallintapaneeliin, käynnistä palvelin ja yhdistä peliin. Pelin mukaan käyttöönottoon voi kuulua myös maailman, palvelinversion tai nimen määrittäminen.

## Ennen aloittamista

Varmista, että tilaus on aktivoitu ja että sinulla on pelipaneelin tunnukset. Tarvitset myös pelin, jonka laitos ja versio ovat yhteensopivia palvelimen kanssa. Tarkista pelikohtaisesta ohjeesta, tarvitaanko pelaajille lisäosia tai erillinen palvelinselain.

## Ensimmäiset vaiheet

1. [Kirjaudu pelipaneeliin ja valitse palvelimesi](./accessing-server.md).
2. Tarkista pelikohtaisesta ohjeesta, tarvitaanko asetuksia ennen ensimmäistä käynnistystä.
3. [Käynnistä palvelin ja seuraa konsolia](./first-startup.md). Ensimmäinen käynnistys voi kestää, jos peli luo maailmaa tai lataa tiedostoja.
4. Kopioi osoite ja mahdollinen portti paneelista ja yhdistä pelin ohjeen mukaan. Joissakin peleissä portti annetaan erilliseen kenttään.
5. Kun palvelin toimii, ota [varmuuskopio](../server-management/backups.md) ja tarkista asetukset ennen muiden pelaajien kutsumista.

Esimerkki osoitteen muodosta on `g1.gamehoster.fi:2000`. Se on havainnollistava esimerkki: käytä oman palvelimesi paneelissa näkyvää osoitetta ja porttia.

## Jos et pääse alkuun

Jos palvelin ei näy paneelissa, tarkista, että käytät oikeaa tiliä ja että tilaus on aktivoitu. Jos palvelin näkyy mutta ei käynnisty, katso [käynnistysongelmien ohje](../troubleshooting/server-not-starting.md). Jos se käynnistyy mutta peli ei yhdistä, tarkista osoite, portti, pelin versio ja pelikohtainen yhteystapa.
