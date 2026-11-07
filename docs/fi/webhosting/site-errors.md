# Verkkosivusto ei avaudu

Selvitä ensin, ilmeneekö ongelma kaikilla käyttäjillä ja kaikissa sivuissa vai vain yhdellä laitteella. Kirjaa osoite, ajankohta ja selaimen tarkka virheilmoitus.

## Rajaa ongelma

1. Tarkista verkkotunnuksen kirjoitusasu ja kokeile sivustoa toisella verkkoyhteydellä.
2. Jos nimi ei ratkea, tarkista [DNS-tietueet](./dns.md) ja nimipalvelimet. Äskettäiset muutokset voivat näkyä viiveellä.
3. Jos saat varmennevaroituksen, tarkista osoite ja [varmenne](./ssl.md). Älä ohita varoitusta.
4. Jos näkyy HTTP 404, varmista tiedoston polku, sivuston asiakirjajuuri ja aloitustiedoston sijainti.
5. HTTP 500 tai tyhjä sivu voi johtua sovelluksen virheestä. Tarkista [lokit](./logs.md), viimeiset päivitykset ja PHP-yhteensopivuus.

Älä poista sivuston tiedostoja kokeiluna. Ota varmuuskopio ennen muutoksia. Jos ongelma jatkuu, lähetä tuelle tarkka virhe, ajankohta, osoite sekä kuvaus viimeisimmistä muutoksista. Poista lokeista salasanat ja muut arkaluonteiset tiedot.
