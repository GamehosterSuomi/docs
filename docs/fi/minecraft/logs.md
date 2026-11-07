# Minecraftin lokien tutkiminen

Konsoli näyttää palvelimen tapahtumia, ja lokit auttavat tutkimaan myös aiempia virheitä. Java-palvelimella tuorein loki löytyy tavallisesti tiedostosta `logs/latest.log`; vanhemmat lokit voivat olla pakattuina samassa kansiossa.

## Etsi ongelman alku

1. Merkitse muistiin ongelman ajankohta, palvelimen versio ja mitä tehtiin juuri ennen ongelmaa.
2. Avaa `logs/latest.log` tiedostonhallinnassa tai lataa se [SFTP:llä](../server-management/sftp.md). Jos palvelin on ehditty käynnistää uudelleen, tarkista myös aiemmat lokit.
3. Etsi ajankohdan läheltä ensimmäinen `ERROR` tai `Exception` ja lue myös sitä seuraavat rivit. Myöhempi virhe voi johtua aiemmasta syystä.
4. Jos `crash-reports`-kansiossa on raportti, säilytä oikean ajankohdan raportti. Tarkista sen ensimmäiset syy- ja ympäristötiedot sekä lisäosien tai modien nimet.

## Jaa vain tarvittavat tiedot

Lokeissa voi olla pelaajien nimiä, IP-osoitteita, salasanoja tai tokeneita. Poista salaisuudet ja tarpeettomat henkilötiedot ennen jakamista. Anna tuelle tarpeeksi ympäröiviä rivejä virheen ymmärtämiseksi sekä tieto tehdyistä muutoksista. Älä käytä julkista lokinjakopalvelua yksityisille tiedoille.

Katso myös [Minecraftin käynnistyskaatumisen vianmääritys](../troubleshooting/minecraft-crash.md).
