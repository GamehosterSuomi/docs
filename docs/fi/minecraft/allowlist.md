# Minecraftin sallittujen pelaajien lista

Java Editionin sallittujen lista eli whitelist rajoittaa liittymistä. Peruspalvelimella myös operaattorit voivat liittyä, vaikka eivät olisi listalla, joten tarkista operaattoriluettelo erikseen. Lista ei anna pelaajalle ylläpitäjän oikeuksia. Komennot annetaan tässä palvelimen konsoliin ilman `/`-merkkiä; pelin chatissa käytetään kauttaviivaa ja tarvittavia oikeuksia.

## Ota lista käyttöön

1. Avaa käynnissä olevan palvelimen konsoli.
2. Lisää halutut pelaajat tarkalla käyttäjänimellä: `whitelist add PelaajanNimi`.
3. Tarkista nimet komennolla `whitelist list` ja ota rajoitus käyttöön komennolla `whitelist on`.
4. Kokeile sekä listalla olevalla että sen ulkopuolisella pelaajalla, jolla ei ole operaattorinoikeuksia. Tarkista konsolin vastaukset.

## Ylläpidä listaa

Poista pelaaja komennolla `whitelist remove PelaajanNimi`. Komento `whitelist off` sallii jälleen liittymisyritykset myös listan ulkopuolelta. Jos pelaaja on jo sisällä listaa muutettaessa, tarkista palvelimesi `enforce-whitelist`-asetuksen toiminta: sen avulla voidaan poistaa listan ulkopuoliset pelaajat listan uudelleenlatauksen yhteydessä.

Java 26.3 -versiosta lähtien `white-list` on oletuksena käytössä uusissa asetuksissa; aiemmat tai palveluntarjoajan asetukset voivat poiketa tästä. Jos liittyminen estyy yhä, tarkista käyttäjänimi, palvelimen versio ja mahdollisen oikeuslisäosan tai välityspalvelimen asetukset. Bedrock- ja Geyser-pelaajien nimet voivat vaatia erillistä käsittelyä; tarkista käytössä olevan ratkaisun ohjeet.

Lisätietoja: [Paperin palvelinasetukset](https://docs.papermc.io/paper/reference/server-properties/) ja [pelaajaoikeudet](./operators.md).
