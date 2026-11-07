# Ensimmäinen käynnistys

Ensimmäisessä käynnistyksessä palvelinohjelmisto saattaa ladata tai luoda tarvitsemiaan tiedostoja. Odota käynnistyksen valmistumista ennen liittymistä.

## Vaihe 1 – Avaa hallintapaneeli

[Kirjaudu pelipaneeliin](./accessing-server.md), valitse oikea palvelin ja avaa **Console**. Tarkista pelikohtaisesta ohjeesta, vaatiiko peli esimerkiksi käyttöehtojen hyväksymisen tai muita asetuksia ennen käynnistystä. Älä muuta tuntemattomia käynnistysarvoja arvauksen perusteella.

## Vaihe 2 – Käynnistä palvelin

Varmista, ettei palvelin ole jo käynnissä, ja valitse **Start**.

## Vaihe 3 – Tarkista konsoli

Seuraa konsolia ja odota pelin ilmoitusta käynnistyksen valmistumisesta. Ensimmäinen käynnistys voi kestää tiedostojen luonnin tai maailman luonnin vuoksi. Paneelin käynnissä-tila ei välttämättä tarkoita, että peli on jo valmis ottamaan yhteyksiä vastaan.

## Vaihe 4 – Yhdistä palvelimelle

Kopioi osoite ja portti paneelista ja käytä pelin palvelinselainta tai suoraa yhteyttä pelikohtaisen ohjeen mukaan. `g1.gamehoster.fi:2000` on vain esimerkki osoitteen muodosta; käytä oman palvelimesi osoitetta ja porttia. Joissakin peleissä portti annetaan erilliseen kenttään. Tarkista pelin laitos ja versio, ja varmista liittymisen jälkeen, että oikea maailma avautui.

::: warning Varoitus
Jos palvelin ei käynnisty, tallenna konsolin ensimmäinen olennainen virhe ja katso [käynnistysongelmien ohje](../troubleshooting/server-not-starting.md). Jos käynnistys onnistui, tee toimivasta lähtötilanteesta [varmuuskopio](../server-management/backups.md).
:::
