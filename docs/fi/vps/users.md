# Linux-käyttäjän luominen

Henkilökohtaiset käyttäjätunnukset helpottavat pääsyn hallintaa. Seuraavat esimerkit koskevat Ubuntu- ja Debian-pohjaista järjestelmää ja vaativat ylläpito-oikeudet.

## Luo tunnus

1. Yhdistä palvelimelle olemassa olevalla ylläpitotunnuksella.
2. Luo käyttäjä esimerkiksi komennolla `sudo adduser uusi`. Korvaa `uusi` haluamallasi käyttäjätunnuksella ja seuraa kysymyksiä.
3. Määritä käyttäjälle turvallinen kirjautumistapa. Jos käytät SSH-avainta, lisää hänen **julkinen** avaimensa hänen omaan `~/.ssh/authorized_keys`-tiedostoonsa.
4. Testaa uusi kirjautuminen toisessa yhteydessä ennen nykyisen yhteyden sulkemista.

Anna ylläpito-oikeus vain sitä tarvitsevalle henkilölle. Ubuntussa `sudo`-ryhmän jäsenyys voi antaa laajat oikeudet; tarkista ensin palvelimesi käytäntö. Komento `sudo usermod -aG sudo uusi` lisää käyttäjän ryhmään. Ryhmämuutos voi edellyttää uutta kirjautumista.

Kun pääsyä ei enää tarvita, poista se hallitusti ja tarkista myös SSH-avaimet ja sovelluskohtaiset tunnukset. Varmista ennen tilin poistamista, mitä sen tiedostoille tapahtuu.
