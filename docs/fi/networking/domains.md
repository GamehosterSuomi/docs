# Verkkotunnuksen yhdistäminen

Omalla verkkotunnuksella voit tehdä pelipalvelimen osoitteesta helpommin muistettavan. Tarvitset oikeuden hallita verkkotunnuksen aktiivisia DNS-asetuksia ja palvelimesi osoitetiedot. Pelin tuki verkkotunnuksille ja portin ilmoittamiselle vaihtelee.

## Vaihe 1 – Etsi palvelimesi osoite

Etsi paneelista yhteysosoite ja portti. Esimerkki `g1.gamehoster.fi:2000` havainnollistaa muotoa; käytä aina oman palvelimesi tietoja. Verkkotunnus ja portti annetaan DNS-asetuksissa eri tavoin: porttia ei kirjoiteta A-, AAAA- tai CNAME-tietueen kohteeseen.

## Vaihe 2 – Avaa DNS-asetukset

Kirjaudu palveluntarjoajalle, jonka nimipalvelimet ovat verkkotunnuksellasi käytössä. Jos et tiedä DNS:n ylläpitäjää, tarkista nimipalvelimet verkkotunnuksen rekisteröijältä.

## Vaihe 3 – Luo DNS-tietue

Jos olet saanut Gamehosterilta verkkotunnuskohteen, voit yleensä luoda aliverkkotunnukselle, esimerkiksi `play`, CNAME-tietueen, jonka kohde on annettu palvelimen isäntänimi ilman porttia. Esimerkissä kohde voisi olla `g1.gamehoster.fi`, mutta varmista käytettävä kohde oman palvelusi tiedoista tai tuelta. CNAME-tietueen nimi ei yleensä voi olla sama kuin muun tyyppisen tietueen nimi; verkkotunnuksen juuren tuki riippuu DNS-palvelusta.

Jos olet saanut numeerisen IPv4-osoitteen, käytä sitä A-tietueen arvona; IPv6-osoitteelle käytetään AAAA-tietuetta. Isäntänimi ei kelpaa A-tietueen arvoksi. Älä korvaa olemassa olevia sähköposti- tai muita tietueita selvittämättä niiden käyttöä.

## Vaihe 4 – Yhdistä palvelimelle

Tallenna tietue ja odota DNS-välimuistien päivittymistä. Jos palvelin käyttää pelin oletusportista poikkeavaa porttia, pelaajan pitää yleensä antaa se yhdistäessään.

Minecraft Java Editionissa pelaajat voidaan ohjata porttiin [SRV-tietueella](./minecraft-srv.md). Muiden pelien SRV-tuki pitää tarkistaa pelikohtaisesti. Jos suora paneelin osoite toimii mutta oma nimi ei, tarkista tietueen nimi, kohde ja käytössä olevat nimipalvelimet. Katso [DNS-vianmääritys](./dns-check.md).

::: info Huomio
DNS-muutosten päivittyminen voi kestää jonkin aikaa.
:::
