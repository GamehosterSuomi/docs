# FX-palvelimen käyttöönotto

Tämä ohje auttaa käynnistämään Gamehosterin FX-palvelimen ja liittymään siihen FiveM-peliasiakkaalla. Gamehosterin FX-palvelua hallitaan pelipaneelissa, ja palveluun kuuluu txAdmin. Käyttöönottotapa ja näkyvät asetukset voivat riippua palvelimestasi.

## Ennen aloittamista

Tarvitset aktivoidun FX-palvelimen, pääsyn [pelipaneeliin](https://panel.gamehoster.fi/), Cfx.re-tilin sekä FiveM-asiakkaan ja sen edellyttämän GTA V -asennuksen. Pidä pelipaneelin ja txAdminin kirjautumistiedot erillään pelaajille annettavista palvelintiedoista.

1. Kirjaudu pelipaneeliin ja valitse FX-palvelimesi. Jos se ei näy, varmista palvelun aktivointi asiakasalueelta tai tuelta.
2. Avaa **Console** ja tarkista paneelista palvelimesi oma osoite ja portti. `g1.gamehoster.fi:2000` on vain esimerkki osoitteen muodosta; älä käytä sitä oman osoitteesi sijasta.
3. Tarkista palvelun mukana saamasi ohjeet: tarvitset tiedon siitä, miten avaat juuri tämän palvelimen txAdminin ja missä sen käyttöönottotiedot näkyvät. Jos osoite tai käyttöönotto-PIN puuttuu, kysy tuelta; älä arvaa porttia.

## Cfx-avaimen luominen

Cfx:n mukaan FXServer tarvitsee palvelimen rekisteröintiavaimen. Kirjaudu [Cfx Portaliin](https://portal.cfx.re/), rekisteröi palvelin ja luo avain sen ohjeiden mukaan. Käsittele avainta salaisuutena. Älä lähetä sitä pelaajille, liitä sitä julkisiin lokikopioihin tai lisää asetustiedostoa julkiseen repositorioon.

Jos palvelusi txAdmin pyytää ensimmäisen käyttöönoton yhteydessä avainta, syötä se siellä näytettyyn avainkenttään. Joissakin asennuksissa avain voidaan määrittää toisella palveluntarjoajan ilmoittamalla tavalla. Älä luo toista asetusta tai muuta käynnistyskomentoa arvauksen perusteella. Katso [Cfx:n käyttöönotto-ohje](https://docs.fivem.net/docs/getting-started/setup-fivem-server/).

## Käynnistä ja tarkista

1. Avaa txAdmin palvelukohtaisesta osoitteesta ja tee ensimmäinen käyttöönotto sen ohjeiden mukaan, jos sitä pyydetään. Yhdistä Cfx-tili ja valitse tarvittaessa palvelinmalli vain, jos olet varma, että asennus saa korvata nykyiset tiedot. Valmis palvelin ei välttämättä tarvitse uuden mallin asennusta.
2. Käynnistä palvelin palvelusi ohjeen mukaisella ohjaimella ja seuraa pelipaneelin konsolia. Odota, että käynnistys valmistuu. Jos konsoli pyytää avaimeen tai resurssiin liittyviä toimia, selvitä ne ennen uutta käynnistystä.
3. Avaa FiveM, paina **F8** ja kirjoita `connect OMA_OSOITE:PORTTI` korvaten arvot paneelin näyttämillä tiedoilla. Paina Enter ja varmista, että pääset palvelimelle. [Cfx:n yhteysvianmääritys](https://docs.fivem.net/docs/support/server-issues/) kuvaa saman suoran yhteystavan.
4. Jos yhteys toimii, ota [varmuuskopio](../../server-management/backups.md) ennen resurssien tai frameworkin lisäämistä. Selvitä erikseen myös tietokannan varmuuskopiointi, jos framework käyttää tietokantaa.

## Jos palvelin ei käynnisty tai siihen ei pääse

Tarkista ensimmäinen konsolin virhe, avaimen oikea sijoitus, käynnistymisen valmistuminen sekä FiveM:n osoite ja portti. Palvelinlistasta puuttuminen ei yksin tarkoita, ettei suora yhteys toimisi. Älä muuta verkkoportteja tai asenna palvelinta uudelleen vain kokeilun vuoksi. Lähetä Gamehosterin tuelle virheen ajankohta ja olennaiset rivit, mutta poista niistä avaimet ja salasanat.

Lisätietoa: [Gamehosterin FX-palvelut](https://gamehoster.fi/fivem.php?language=finnish) ja [Cfx:n palvelinohje](https://docs.fivem.net/docs/server-manual/setting-up-a-server/).
