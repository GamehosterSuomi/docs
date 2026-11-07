# VPS-palvelimen hallinnan aloittaminen

Gamehosterin VPS-hallinnan osoite on [vps.gamehoster.fi](https://vps.gamehoster.fi/). Kirjaudu palveluun saamillasi tunnuksilla ja valitse VPS, jota haluat hallita. Hallintapaneeli käyttää VirtFusionia; käytettävissä olevat toiminnot ja oikeudet riippuvat palvelustasi.

## Ennen kuin aloitat

- Säilytä kirjautumistunnukset turvallisesti ja tarkista, että olet oikeassa palvelussa ennen tietojen syöttämistä.
- Selvitä palvelimesi IP-osoite, käyttöjärjestelmä ja mahdolliset käyttöönotto-ohjeet palvelun tiedoista.
- Tarkista varmuuskopioiden saatavuus ja palautustapa ennen merkittäviä muutoksia. Älä oleta, että VPS:n kaikki tiedot varmuuskopioidaan automaattisesti.

## Yhteys palvelimeen

Linux-palvelinta hallitaan tavallisesti SSH-yhteydellä. Tarvitset palvelimen IP-osoitteen ja käyttäjätunnuksen sekä palvelullesi määritellyn kirjautumistavan. Esimerkiksi omalta koneelta:

```text
ssh käyttäjä@palvelimen-ip
```

Korvaa esimerkki omilla tiedoillasi. Tarkista palvelimen tunniste ensimmäisellä yhteyskerralla palveluntarjoajalta saatuihin tietoihin vertaamalla. Älä jaa yksityistä SSH-avainta tai salasanaa.

VPS:n uudelleenasennus, palautus tai pakotettu sammutus voi vaikuttaa palvelimen tietoihin. Varmista toiminnon vaikutus ja varmuuskopion palautettavuus ennen sen suorittamista. Jos yhteys ei onnistu tai toiminto puuttuu, ota yhteyttä Gamehosterin tukeen.

Lisätietoa: [VirtFusionin dokumentaatio](https://docs.virtfusion.com/).

## Lisää oppaita

- [DNS-ongelmien selvittäminen VPS:llä](./dns-troubleshooting.md)
- [Linux-käyttäjän luominen](./users.md)
- [Linux-palvelimen lokien tutkiminen](./logs.md)
- [Linux-palvelimen palomuuri](./firewall.md)
- [Linux-palvelun tilan tarkistaminen](./services.md)
- [Linux-tiedostojen käyttöoikeudet](./permissions.md)
- [SSH-avaimen käyttöönotto](./ssh-keys.md)
- [SSH-yhteyden vianmääritys](./ssh-troubleshooting.md)
- [SSH-yhteys Linux-VPS:ään](./ssh.md)
- [Tiedostojen siirto Linux-VPS:lle](./file-transfer.md)
- [Ubuntu-palvelimen päivitykset](./updates.md)
- [VPS:n levytilan tarkistaminen](./disk-space.md)
- [VPS:n palautuksen suunnittelu](./restore.md)
- [VPS:n resurssien tarkistaminen](./resources.md)
- [VPS:n varmuuskopioinnin suunnittelu](./backups.md)
