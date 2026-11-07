# Resurssipaketin tarjoaminen pelaajille

Java Editionin palvelin voi ehdottaa pelaajalle resurssipakettia, joka muuttaa esimerkiksi pelin ulkoasua ja ääniä. Palvelimen on annettava pelaajan laitteelle suora julkisesti saatavilla oleva HTTPS-osoite zip-tiedostoon. Paneelin tiedostonhallintaan ladattu tiedosto ei välttämättä itsessään ole julkinen latausosoite.

## Valmistele paketti

1. Tarkista paketin ja Minecraft-version yhteensopivuus ja käyttöoikeus. Testaa paketti ensin omassa pelissäsi.
2. Lataa zip-tiedosto luotettavaan tiedostopalveluun ja varmista, että linkki palauttaa itse zip-tiedoston ilman kirjautumista tai esikatselusivua.
3. Laske zip-tiedoston SHA-1-tarkistesumma omalla tietokoneellasi. Esimerkiksi PowerShellissä: `Get-FileHash -Algorithm SHA1 .\uusi-paketti.zip`. Kopioi tuloksen hash-arvo.

## Määritä palvelin

1. Ota kopio `server.properties`-tiedostosta ja pysäytä palvelin.
2. Aseta `resource-pack`-arvoksi suora latausosoite ja `resource-pack-sha1`-arvoksi tiedostosta laskettu tarkistesumma. Tarkista käytössä olevan version muut resurssipakettiasetukset [Paperin viitteestä](https://docs.papermc.io/paper/reference/server-properties/).
3. Jätä `require-resource-pack=false`, jos pelaajan pitää voida kieltäytyä. Jos asetat arvoksi `true`, paketin hyväksyminen on liittymisen edellytys.
4. Tallenna asetukset, käynnistä palvelin ja kokeile latausta pelaajan tilillä. Jos päivität zipin, päivitä myös tarkistesumma ja kokeile uutta tiedostoa.

Jos lataus epäonnistuu, tarkista linkin julkinen saatavuus, tiedoston koko, hash ja version yhteensopivuus. Älä käytä linkkiä, jossa on yksityisiä tunnuksia.
