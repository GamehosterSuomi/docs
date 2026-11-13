# SSH-yhteys Linux-VPS:ään

SSH-yhteydellä hallitset Linux-palvelinta komentoriviltä. Tarvitset palvelimen IP-osoitteen, SSH-portin, käyttäjätunnuksen ja tilille määritellyn kirjautumistavan. Yhteyden muodostaminen edellyttää myös käynnissä olevaa SSH-palvelua.

## Yhdistä

1. Avaa omalla tietokoneellasi pääte tai SSH-asiakasohjelma.
2. Korvaa seuraavan esimerkin tiedot omillasi. Jos käytössä on oletusportti 22, `-p`-osan voi jättää pois.

   ```bash
   ssh -p 22 kayttaja@vps.example.com
   ```

3. Ensimmäisellä yhteyskerralla asiakas näyttää palvelimen avaimen sormenjäljen. Vertaile sitä luotettavasta lähteestä saamaasi sormenjälkeen ennen hyväksymistä. Jos tunnetun palvelimen sormenjälki muuttuu odottamatta, selvitä syy ennen jatkamista.
4. Anna tarvittaessa tilin salasana tai SSH-avaimen tunnuslause. Salasana ei näy kirjoitettaessa.

Sulje yhteys komennolla `exit`. Jos yhteys epäonnistuu, katso [SSH-yhteyden vianmääritys](./ssh-troubleshooting.md). Älä julkaise tunnuksia tai yksityisiä avaimia.

Lisätietoja: [Ubuntu: OpenSSH server](https://documentation.ubuntu.com/server/how-to/security/openssh-server/).
