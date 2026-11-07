# Rust-palvelimen asetukset

Rust käyttää käynnistysparametreja ja asetustiedostoja. Gamehosterin paneelin kentät, kirjoitusoikeudet ja niiden sijainti riippuvat palvelusta.

1. Pysäytä palvelin ja tee [varmuuskopio](./backups.md). Kirjaa nykyiset arvot ennen muutoksia.
2. Tarkista paneelin tarjoamat asetukset: nimi (`server.hostname`), pelaajaraja (`server.maxplayers`), kartan siemen (`server.seed`) ja koko (`server.worldsize`) ovat Rustin palvelinmuuttujia. Muuta vain palvelusi tukemia arvoja.
3. Facepunchin palvelinohjeen mukaan `server.cfg` sijaitsee palvelimen identiteettihakemiston `cfg`-kansiossa; tarkka juuripolku riippuu asennuksesta ja `server.identity`-arvosta. Tiedostossa arvoja ei kirjoiteta käynnistysrivin `+`-etuliitteellä. Tarkista ennen muokkausta, ettei paneeli hallitse samaa asetusta.
4. Tallenna muutos, käynnistä palvelin ja varmista nimi sekä toiminta pelissä. Kartan asetusten muuttaminen voi johtaa eri maailman lataamiseen tai luontiin: tarkista [maailmaohje](./worlds.md) ennen muutosta.

Rustin peli- ja kyselyportit ovat erillisiä, ja niiden on oltava palvelulle osoitettuja. Älä muuta portteja tai RCON-asetuksia ilman Gamehosterin ohjeita.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
