# Rust-palvelimen vianmääritys

## Palvelin ei käynnisty tai kartta ei lataudu

Tallenna konsolin ensimmäinen virhe ja tarkista viimeisimmät muutokset, palvelinversio, mahdollinen modikehys sekä käytettävissä oleva levytila. Pysäytä palvelin ja tee kopio ennen asetusten tai tallennusten muuttamista. Tarkista aktiivinen `server.identity`, kartta, siemen ja mahdollinen pakotettu wipe; älä poista maailmaa diagnoosina.

## Palvelin ei näy tai pelaaja ei pääse sisään

Varmista, että palvelin on valmis ja asiakas päivitetty yhteensopivaksi. Testaa [suora yhteys](./connecting.md) paneelissa näkyvään peliporttiin. Jos suora yhteys toimii mutta listaus ei, selvitä erillisen kyselyportin varaus ja saavutettavuus Gamehosterin kanssa. Älä itse vaihda portteja arvauksella.

## Lisäosat lakkaavat toimimasta

Tarkista päivityksen jälkeen Oxide-version ja kunkin lisäosan yhteensopivuus sekä ensimmäinen latausvirhe. Kokeile yhtä muutosta kerrallaan varmuuskopion jälkeen. Jos ongelma jatkuu, kerro tuelle palvelinversio, kartta, ajankohta ja olennainen virhe ilman salasanoja tai RCON-tunnuksia.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
