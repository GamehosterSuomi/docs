# Minecraft-palvelimeen ei voi yhdistää

Yhteysongelman syy voi olla palvelimessa, osoitteessa, peliversiossa tai pelaajan yhteydessä. Aloita selvittämällä, koskeeko ongelma kaikkia pelaajia vai vain yhtä.

## Tarkista palvelin ja osoite

1. Varmista hallintapaneelin konsolista, että käynnistys on valmistunut ja palvelin on käynnissä. Jos se pysähtyy, katso [käynnistysongelmien ohje](./server-not-starting.md).
2. Kopioi osoite ja portti hallintapaneelista. Tarkista, ettei osoitteessa ole kirjoitusvirhettä. Java Editionissa osoite voidaan antaa muodossa `osoite:portti`; Bedrockissa portille on yleensä oma kenttänsä.
3. Jos käytät verkkotunnusta, kokeile paneelin suoraa osoitetta ja porttia. Jos suora osoite toimii, tarkista [DNS-asetukset](../networking/domains.md) ja mahdollinen [SRV-tietue](../networking/minecraft-srv.md).

## Tarkista pelaajan peli

- Varmista, että käytössä on oikea pelin laitos ja palvelimen kanssa yhteensopiva versio. Java ja Bedrock eivät yhdisty toisiinsa ilman erillistä yhteensopivuusratkaisua.
- Modatulla palvelimella tarkista, että pelaajalla on palvelimen edellyttämät yhteensopivat modit ja versiot.
- Jos virhe ilmoittaa pelaajan puuttuvan sallittujen listalta tai olevan estetty, palvelimen ylläpitäjä voi tarkistaa oikeudet konsolista.
- Jos vain yksi pelaaja ei pääse sisään, kokeile toisella verkkoyhteydellä ja käynnistä peli uudelleen.

## Kerää tiedot tukea varten

Kirjaa tarkka virheilmoitus, pelin ja palvelimen versiot, käytetty osoite ja portti sekä se, toimiiko suora osoite. Liitä tarvittaessa konsolin virherivit ja poista niistä salaisuudet. Älä julkaise henkilötietoja tai kirjautumistunnuksia.
