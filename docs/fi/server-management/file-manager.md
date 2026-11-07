# Tiedostonhallinnan käyttö

Pelipaneelin tiedostonhallinnassa voit tarkastella palvelimen kansioita ja muokata tekstiasetuksia. Toiminnot ja rajat riippuvat palvelusta ja oikeuksistasi. Nämä eivät ole oman tietokoneesi pelitiedostoja.

## Tiedostonhallinnan avaaminen

1. Kirjaudu hallintapaneeliin.
2. Valitse palvelimesi.
3. Avaa **Files**, siirry oikeaan kansioon ja varmista tiedoston nimi ennen muutosta. Pelien kansiorakenne vaihtelee.

## Yleiset toiminnot

Hallintapaneelista riippuen voit:

- Ladata tiedostoja palvelimelle ja omalle tietokoneellesi.
- Luoda kansioita.
- Muokata tekstimuotoisia asetustiedostoja.
- Nimetä tiedostoja uudelleen ja poistaa niitä.

## Asetuksen turvallinen muokkaaminen

1. Tarkista pelikohtaisesta ohjeesta tiedoston sijainti, asetus ja sallitut arvot. Tee [varmuuskopio](./backups.md) tai säilytä alkuperäisestä tiedostosta kopio.
2. Pysäytä palvelin ja odota sen sammumista, jos ohjelmisto voi kirjoittaa samaa tiedostoa käynnissä ollessaan.
3. Muuta vain tarvittava arvo ja säilytä rakenne: esimerkiksi YAMLissa sisennys ja JSONissa pilkut ja lainausmerkit ovat merkityksellisiä.
4. Tallenna, käynnistä palvelin ja seuraa konsolia. Tarkista myös pelissä, että muutos tuli voimaan. Jos käynnistys epäonnistuu, vertaa tiedostoa kopioon ja palauta se tarvittaessa.

Suurten tiedostojen siirtoon voit käyttää [SFTP:tä](./sftp.md), jos se on käytettävissä. Tarkista kohde ennen arkiston purkamista tai tiedostojen korvaamista.

::: warning Varoitus
Maailman, asetusten tai tuntemattomien tiedostojen poistaminen voi hävittää tietoja tai estää käynnistyksen. Älä jaa tiedostoja, jotka sisältävät salasanoja tai muita salaisuuksia.
:::
