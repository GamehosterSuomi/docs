# Rust-palvelimen päivittäminen

Rustin asiakas, palvelin ja mahdollinen modikehys on pidettävä yhteensopivina. Päivitys voi myös edellyttää maailman nollaamista; tarkista kyseisen julkaisun ohjeet.

1. Ilmoita huollosta ja pysäytä palvelin. Tee [varmuuskopio](./backups.md) maailmasta, pelaajatiedoista, asetuksista ja lisäosista.
2. Lue Facepunchin päivitystiedot sekä mahdollisen Oxide/uMod-kehyksen ja lisäosien yhteensopivuustiedot. Selvitä mahdollinen pakotettu wipe ennen jatkamista.
3. Käytä Gamehosterin tarjoamaa päivitystapaa. Facepunchin paikallisen palvelimen SteamCMD-ohje ei itsessään kerro, miten hallitun palvelun asennus tehdään; kysy tuelta, jos päivitystapa on epäselvä.
4. Tarkista, pitääkö modikehys asentaa uudelleen palvelinpäivityksen jälkeen. Facepunch varoittaa, että SteamCMD:n ajaminen käynnistysskriptissä voi palauttaa palvelintiedostoja vanilla-muotoon.
5. Käynnistä, tarkista palvelinversio ja loki, päivitä pelaajien peli ja testaa liittyminen sekä maailma. Älä yritä kiertää pakotettua wipea vanhan tiedoston uudelleennimeämisellä.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
