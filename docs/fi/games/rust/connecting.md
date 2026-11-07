# Rust-palvelimelle liittyminen

Käytä paneelin palvelukohtaista peliporttia, älä oleta sen olevan pelin oletusportti tai kyselyportti.

1. Varmista konsolista, että Rust-palvelin on valmis, ja päivitä Rust-pelisi palvelimen kanssa yhteensopivaan versioon.
2. Kopioi osoite ja peliportti paneelista. `g1.gamehoster.fi:2000` on esimerkki, joka on korvattava omilla tiedoillasi.
3. Voit etsiä palvelimen pelin palvelinlistasta nimen perusteella tai avata pelin F1-konsolin ja käyttää Facepunchin dokumentoimaa `connect`-komentoa osoitteen ja portin kanssa. Esimerkki on `connect g1.gamehoster.fi:2000`; käytä omaa osoitettasi.
4. Jos palvelimelle on määritetty pelin tukema salasana tai muu pääsyrajoitus, noudata palvelimen ylläpitäjän ohjetta. Älä syötä paneelin tai RCONin salasanaa peliin.

Jos palvelin ei näy haussa mutta suora yhteys toimii, tarkista palvelimen näkyvyys ja erillisen kyselyportin toiminta tuen kanssa. Kyselyportti ja peliportti eivät ole sama asia.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
