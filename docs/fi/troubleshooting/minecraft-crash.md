# Minecraft-palvelin kaatuu käynnistyksessä

Jos Minecraft-palvelin pysähtyy käynnistyksen aikana, selvitä ensin virheen syy ennen uusien muutosten tekemistä. Yleiset tarkistukset löydät myös ohjeesta [Palvelin ei käynnisty](./server-not-starting.md).

## Etsi ensimmäinen virhe

1. Avaa palvelimen konsoli ja käynnistä palvelin kerran.
2. Etsi ensimmäinen virheilmoitus sekä sen ympärillä olevat rivit. Viimeinen ilmoitus kertoo usein vain, että käynnistys keskeytyi.
3. Tarkista tarvittaessa `logs/latest.log` ja mahdollinen `crash-reports`-kansio tiedostonhallinnasta. Säilytä raportti ennen uutta käynnistystä.

## Rajaa syy

- Jos virhe mainitsee modin tai lisäosan, tarkista sen Minecraft-versio, palvelinohjelmisto ja vaaditut riippuvuudet. Pysäytä palvelin ennen tiedostojen muuttamista.
- Jos lokissa mainitaan uudemmalla versiolla tallennettu maailma, älä yritä avata sitä vanhemmalla versiolla. Palauta sopiva palvelinversio tai ennen päivitystä tehty varmuuskopio.
- Jos virhe koskee porttiin sitoutumista, tarkista palvelimelle määritetty portti ja `server.properties`-tiedoston `server-ip`. Tämä asetus jätetään yleensä tyhjäksi; se ei ole julkisen IP-osoitteen paikka. Älä muuta paneelin määräämää porttia arvaukseen.
- Jos prosessi päättyy ilman selvää virhettä, tarkista paneelin muistinkäyttö ja levytila, jos ne näkyvät. Muistin loppuminen on yksi mahdollinen syy, ei varma diagnoosi.

Tee varmuuskopio ennen korjausyrityksiä. Muuta yksi asia kerrallaan ja vertaa uutta lokia aiempaan. Älä poista maailmaa virheen korjaamiseksi.

## Jos ongelma jatkuu

Lähetä Gamehosterin tukeen palvelinohjelmiston ja Minecraftin versiot, ongelman alkamisaika, viimeisimmät muutokset sekä olennainen virhe ja mahdollinen kaatumisraportti. Poista lokista salasanat, tokenit ja muut salaisuudet ennen jakamista.

Lisätietoa: [Paperin vianmääritys](https://docs.papermc.io/paper/basic-troubleshooting/).
