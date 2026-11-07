# Hytale-palvelimen vianmääritys

Ongelman ratkaisu alkaa tarkasta oireesta. Kirjaa, koskeeko se palvelimen käynnistymistä, kaikkia pelaajia vai vain yhtä pelaajaa, sekä milloin ongelma alkoi.

## Palvelin ei käynnisty

1. Avaa pelihallinnan **Console** ja etsi ensimmäinen virhe sekä sitä edeltävät rivit. Tarkista myös palvelimen `logs/`-kansio, jos sellainen on käytettävissä.
2. Tarkista, päättyikö asennus ja pyytääkö konsoli [tunnistautumista](./authentication.md). Älä jaa kertakäyttökoodeja tai tunnuksia.
3. Jos muutit äskettäin asetuksia tai modeja, pysäytä palvelin ja vertaa muutosta aiempaan varmuuskopioon. Tarkista JSON-syntaksi ja modien yhteensopivuus. Älä poista maailmaa vian rajaamiseksi.
4. Tarkista paneelissa näkyvä muistin ja levytilan käyttö. Resurssien loppuminen on mahdollinen syy, mutta lokista pitää selvittää tarkempi virhe.

## Pelaaja ei pääse sisään

Varmista palvelimen osoite ja portti paneelista, palvelimen käynnistyminen ja tunnistautuminen. Hytale käyttää QUICia UDP:n päällä, ja virallisen oppaan mukaan asiakas- ja palvelinprotokollien on tällä hetkellä vastattava toisiaan. Tarkista mahdollinen pääsyrajoitus sekä kokeile toista verkkoa, jos vain yksi pelaaja kärsii ongelmasta. Katso [yhdistäminen](./connecting.md).

## Maailma on hidas tai ei lataudu

Kirjaa pelaajamäärä, ajankohta ja tapahtuuko ongelma tietyllä alueella tai vasta modin asennuksen jälkeen. Vertaa paneelin CPU-, muisti- ja levytilannetta rauhalliseen hetkeen. Tee yksi muutos kerrallaan ja ota varmuuskopio ennen asetusten muuttamista. Suuri yhtä aikaa ladattu maailma voi kasvattaa muistinkäyttöä; pelkän muistilukeman perusteella ei kuitenkaan voi päätellä yksittäistä syytä.

Ota yhteyttä Gamehosterin tukeen, jos ongelma jatkuu. Liitä pelin ja palvelimen versiot, tarkka virheilmoitus, ajankohta sekä tehdyt muutokset. Poista lokeista henkilötiedot, salasanat ja tokenit ennen lähettämistä. Lähteet: [Hytale Server Manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual) ja [Hytale-lokien etsiminen](https://support.hytale.com/hc/en-us/articles/45315447521947-How-to-Find-Your-Hytale-Logs).
