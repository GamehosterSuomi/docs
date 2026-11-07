# Asetustiedoston turvallinen muokkaaminen

Tekstimuotoiset asetukset voivat olla esimerkiksi `.properties`, `.yml`, `.json` tai `.toml` -tiedostoissa. Tarkka rakenne ja sallitut arvot riippuvat ohjelmistosta.

1. Selvitä tiedoston tarkoitus ohjelmiston ohjeista ja ota alkuperäisestä tiedostosta kopio.
2. Pysäytä palvelin, jos ohjelmisto voi kirjoittaa samaa tiedostoa käynnissä ollessaan.
3. Avaa tiedosto [tiedostonhallinnassa](./file-manager.md) tai siirrä se [SFTP:llä](./sftp.md) muokattavaksi.
4. Muuta yksi asetus kerrallaan. Säilytä tiedoston rakenne: esimerkiksi YAMLissa sisennys on merkityksellinen ja JSONissa pilkut sekä lainausmerkit ovat osa rakennetta.
5. Tallenna, käynnistä palvelin ja tarkista konsolista virheet sekä asetuksen toiminta.

Jos käynnistys epäonnistuu, palauta aiempi kopio ja tarkista ohjelmiston ohjeen esimerkit. Älä jaa tiedostoja tarkistamatta, sisältävätkö ne salasanoja tai API-avaimia.
