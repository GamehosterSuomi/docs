# Rust-palvelimen varmuuskopiointi

Toimiva palautus tarvitsee muutakin kuin kartan siemenen: rakennukset, pelaajatiedot ja palvelimen identiteetin mukaiset asetukset pitää säilyttää.

1. Ilmoita pelaajille katkosta ja pysäytä palvelin hallitusti. Odota tallennuksen ja sammutuksen valmistumista.
2. Selvitä aktiivisen `server.identity`-hakemiston sijainti. Sisällytä maailman `*.sav`-tiedostot, tarvittava kartta, pelaajatiedot ja `cfg`-asetukset sekä mahdollisten lisäosien tiedot.
3. Luo paneelin [varmuuskopio](../../server-management/backups.md), tarkista ettei tallennuksia ole jätetty pois ja odota valmista tilaa. Varmista erillisten tietokantojen varmuuskopiointi, jos lisäosa käyttää niitä.
4. Merkitse palvelinversio, kartta, siemen ja varmuuskopion aika; lataa tarvittaessa erillinen kopio turvalliseen paikkaan. Tarkista palautettavuus erillisessä ympäristössä, jos mahdollista.

Rust+ käyttää `companion.id`-tiedostoa palvelimen identiteettiin. Facepunch ohjeistaa säilyttämään sen palvelimen mukana, olemaan jakamatta sitä ja olemaan käyttämättä samaa tiedostoa useassa palvelimessa. Palautus voi korvata uusimmat rakennukset ja pelaajatiedot.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
