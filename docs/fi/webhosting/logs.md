# Sivuston lokien lukeminen

Sivuston lokit auttavat rajaamaan esimerkiksi HTTP 500 -virheitä ja puuttuvia tiedostoja. Lokin näkyvyys ja säilytysaika riippuvat webhotellin asetuksista.

## Etsi ongelmaan liittyvät rivit

1. Kirjaa virheen ajankohta, osoite ja mahdollinen virhekoodi.
2. Avaa Pleskissä oikean verkkotunnuksen lokinäkymä, jos se on käytettävissä.
3. Rajaa tarkastelu virheen ajankohtaan ja etsi sovelluksen tai palvelimen virheilmoitus. Aikavyöhyke voi poiketa omastasi.
4. Tarkista, liittyykö virhe viimeisimpään päivitykseen tai asetuksen muutokseen.
5. Tee varmuuskopio ennen korjaavia muutoksia ja muuta yksi asia kerrallaan.

Käyntilokista voi löytyä pyyntö ja sen HTTP-tilakoodi, kun taas virheloki voi sisältää tarkemman syyn. Yksittäinen 404-pyyntö ei yksin osoita sivuston olevan rikki.

Lokit voivat sisältää henkilötietoja, osoitteita tai salaisuuksia. Poista tarpeettomat ja arkaluonteiset tiedot ennen jakamista tuelle.

Lisätietoa: [Pleskin lokiohje](https://docs.plesk.com/en-US/obsidian/customer-guide/websites-and-domains/viewing-website-error-log.73938/).
