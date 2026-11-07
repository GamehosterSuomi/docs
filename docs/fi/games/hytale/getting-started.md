# Hytale-palvelimen ensimmäinen käynnistys

Tässä ohjeessa käynnistät Gamehosterilta tilatun Hytale-palvelimen, seuraat asennusta ja tarkistat, että palvelin on valmis pelaajien yhteyksiä varten. Ensimmäinen asennus voi kestää tavallista käynnistystä kauemmin.

## Ennen käynnistystä

Tarvitset aktivoidun pelipalvelimen, tunnukset [pelihallintaan](https://panel.gamehoster.fi/) ja Hytale-pelin, jos aiot testata yhteyttä. Palvelimen asennus ja mahdollinen tunnistautuminen riippuvat palveluntarjoajan toteutuksesta.

1. Kirjaudu hallintapaneeliin ja valitse palvelin palvelinluettelosta. Jos palvelin ei näy, varmista että tilaus on aktivoitu ja olet kirjautunut oikealla tilillä.
2. Avaa **Console**. Tarkista, onko asennus vielä kesken ja näkyykö konsolissa odotettavia toimenpiteitä.
3. Valitse **Start** ja seuraa konsolin viestejä. Älä käynnistä palvelinta toistuvasti asennuksen aikana.
4. Jos konsoli pyytää palvelimen tunnistautumista, toimi [tunnistautumisohjeen](./authentication.md) mukaan. Älä jaa kertakäyttöistä tunnistautumiskoodia muille.
5. Odota käynnistyksen valmistumista ja tarkista, ettei konsolissa näy virhettä. Kopioi pelihallinnassa ilmoitettu osoite ja portti seuraavaa vaihetta varten.

## Tarkista toiminta

Yhdistä peliin [yhteysohjeen](./connecting.md) mukaan ja kokeile liittymistä myös toiselta pelaajalta. Tee toimivasta palvelimesta [varmuuskopio](./backups.md) ennen modien tai asetusten muutoksia. Jos palvelin pysähtyy tai pyytää tietoja, joita et löydä, säilytä virheilmoitus ja ota yhteyttä tukeen.

Hytale-palvelinohjelmiston tekniset vaatimukset ja tunnistautumisen kuvaus löytyvät [virallisesta palvelinoppaasta](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual). Gamehosterin hallitussa palvelussa älä muuta Java-versiota tai käynnistyskomentoa pelkän yleisohjeen perusteella.
