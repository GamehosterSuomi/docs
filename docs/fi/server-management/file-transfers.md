# Suurten tiedostojen siirtäminen

Suuret maailmat ja palvelinpaketit on usein kätevää siirtää [SFTP:llä](./sftp.md). Tiedostonhallinnassa voi olla käytettävissä myös arkistojen pakkaaminen ja purkaminen; käytettävissä olevat toiminnot ja rajat riippuvat palvelusta ja oikeuksistasi.

## Valmistele siirto

1. Pysäytä palvelin, jos siirrät sen käytössä olevia maailman tai asetusten tiedostoja.
2. Tee [varmuuskopio](./backups.md) ja varmista, että palvelimella on riittävästi levytilaa sekä siirrettävälle aineistolle että mahdolliselle puretulle arkistolle.
3. Tarkista, mitä kansiota tarvitset ja mihin se kuuluu. Säilytä kansiorakenne; esimerkiksi maailmakansion sisältöä ei pidä sijoittaa ylimääräisen samannimisen kansion sisään.
4. Yhdistä SFTP:llä ja siirrä tiedostot. Odota, että siirtojono on valmis, ja tarkista mahdolliset epäonnistuneet siirrot.
5. Jos siirsit arkiston ja paneelissa on purkutoiminto, pura se oikeaan kansioon. Tarkista tuloksena syntyneet tiedostot ennen käynnistystä.

## Siirron jälkeen

Tarkista kohdekansion nimi, koko ja tiedostorakenne. Käynnistä palvelin ja seuraa konsolia. Jos sisältö ei lataudu, pysäytä palvelin ja tarkista polku ja yhteensopivuus ennen uusia muutoksia.

::: warning Varoitus
Päälle kirjoittaminen voi korvata nykyiset tiedostot. Älä pura tuntemattomasta lähteestä saatua arkistoa palvelimelle.
:::
