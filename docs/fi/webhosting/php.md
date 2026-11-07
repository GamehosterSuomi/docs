# Sivuston PHP-version tarkistaminen ja vaihtaminen

PHP:llä toteutetun sivuston on tuettava palvelimella käytettävää PHP-versiota ja sen tarvitsemia laajennuksia. Pleskin asetusten näkyvyys riippuu palvelupaketista ja käyttöoikeuksista.

## Ennen muutosta

1. Tarkista sivuston, teemojen ja lisäosien valmistajien yhteensopivuus kohdeversion kanssa.
2. Tee varmuuskopio tiedostoista ja tietokannasta.
3. Kirjaa nykyinen PHP-versio ja muutettavat asetukset, jotta voit tarvittaessa palauttaa ne.

## Vaihda ja testaa

Jos käyttöoikeutesi sallivat muutoksen, avaa Pleskissä kyseisen verkkotunnuksen PHP-asetukset ja valitse sovelluksellesi sopiva tuettu versio. Tallenna muutos ja odota sen voimaantuloa. Testaa kirjautuminen, lomakkeet ja muut tärkeät toiminnot.

Jos sivusto lakkaa toimimasta, tarkista [virheloki](./logs.md) ja palauta aikaisempi toimiva versio, jos se on tarjolla. Älä pidä tietoturvapäivityksiä vaille jäänyttä versiota pysyvänä ratkaisuna: päivitä myös sovellus yhteensopivaksi.

Lisätietoa: [Pleskin PHP-asetukset](https://docs.plesk.com/en-US/obsidian/administrator-guide/70742/).
