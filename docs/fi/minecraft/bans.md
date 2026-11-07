# Pelaajan poistaminen ja porttikielto

Java Editionin palvelimella voit poistaa häiritsevän pelaajan hetkellisesti tai estää liittymisen porttikiellolla. Seuraavat esimerkit annetaan palvelimen konsoliin ilman kauttaviivaa. Lisäosat voivat muuttaa komentoja tai tallentaa estot omiin tietoihinsa.

## Poista pelaaja tai aseta esto

1. Tarkista pelaajan tarkka käyttäjänimi ja tilanne ennen komentoa.
2. Poista pelaaja palvelimelta esimerkiksi komennolla `kick PelaajanNimi Sääntörikkomus`. Pelaaja voi yrittää liittyä uudelleen.
3. Jos liittyminen pitää estää, käytä komentoa `ban PelaajanNimi Sääntörikkomus`.
4. Tarkista voimassa olevat estot komennolla `banlist players` ja tarvittaessa poista esto komennolla `pardon PelaajanNimi`.

## Huomioi vaikutukset

IP-osoitteeseen perustuva esto voi koskea useita saman yhteyden käyttäjiä ja yhteinen tai vaihtuva osoite voi tehdä siitä epätarkan. Jos palvelin toimii välityspalvelimen kautta, tarkista ensin välityksen dokumentaatiosta, mikä osoite palvelimelle näkyy. Käyttäjäkohtainen esto on tavallisesti helpompi rajata.

Pidä ylläpidon päätöksistä oma kirjaus ja tarkista muutoksen jälkeen, että oikea tili on estetty. Jos esto ei näy tai poistu, tarkista käytössä olevan moderointilisäosan ohjeet ennen kuin muokkaat tiedostoja käsin.
