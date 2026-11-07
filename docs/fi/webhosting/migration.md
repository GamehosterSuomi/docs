# Sivuston siirtäminen webhotelliin

Sivuston siirtoon kuuluu yleensä tiedostojen, tietokannan ja asetusten siirtäminen sekä verkkotunnuksen ohjaaminen. Varaa erillinen suunnitelma sähköpostille: verkkosivuston siirto ei automaattisesti siirrä postilaatikoita.

## Valmistele

1. Selvitä sovelluksen PHP- ja tietokantavaatimukset sekä kohdepalvelun yhteensopivuus.
2. Ota lähtöpalvelusta palautettavissa oleva kopio sivuston tiedostoista ja tietokannasta. Kirjaa myös DNS- ja sähköpostiasetukset.
3. Luo tarvittava tietokanta kohteeseen ja siirrä tiedostot sovelluksen ohjeiden mukaisesti. Tuo tietokanta käytettävissä olevalla hallintatyökalulla.
4. Päivitä sovelluksen tietokantayhteys ja muut ympäristökohtaiset asetukset. Älä julkaise salasanoja.

## Tarkista ja vaihda osoite

Testaa sivusto kohdeympäristössä käytettävissä olevalla esikatselutavalla ennen DNS-muutosta. Tarkista kuvat, kirjautuminen, lomakkeet ja sovelluksen toiminta. Käytä tarvittaessa huoltotaukoa, jotta viimeisen kopion jälkeen syntyvät tiedot eivät jää vanhalle palvelimelle.

Muuta vasta sitten tarvittavat DNS-tietueet ja seuraa niiden päivittymistä. Säilytä vanha palvelu ja varmuuskopiot, kunnes uusi sivusto ja mahdollinen sähköposti on tarkistettu.
