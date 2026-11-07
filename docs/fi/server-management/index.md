# Palvelimen hallinta

Pelipaneelissa voit hallita palvelimen käynnistystä, konsolia ja tiedostoja sekä palvelun salliessa esimerkiksi varmuuskopioita, ajastuksia ja alikäyttäjiä. Käytettävissä olevat toiminnot vaihtelevat palvelun ja käyttäjäsi oikeuksien mukaan.

## Oppaat

- [Tiedostonhallinta](./file-manager.md)
- [Varmuuskopiot](./backups.md)
- [SFTP-yhteys](./sftp.md)
- [Palvelimen pysäyttäminen ja käynnistäminen turvallisesti](./safe-restart.md)
- [Konsolin käyttö ja komentojen suorittaminen](./console.md)
- [Tiedostojen pakkaaminen ja siirtäminen](./file-transfers.md)
- [Varmuuskopion palautuksen suunnittelu](./restore-planning.md)
- [Ajastetut tehtävät ja automaatio](./schedules.md)
- [Alikäyttäjät ja käyttöoikeudet](./subusers.md)

## Lisää oppaita

- [Ajastuksen ajankohdan määrittäminen](./schedule-cron.md)
- [Asetustiedoston turvallinen muokkaaminen](./configuration-files.md)
- [Käynnistysasetusten tarkistaminen](./startup-settings.md)
- [Palvelimen osoitteet ja portit paneelissa](./network-allocations.md)
- [Palvelimen tapahtumien tarkistaminen](./activity.md)
- [Pelipalvelimen tietokannat](./databases.md)
- [Pelipaneelin tilin suojaaminen](./account-security.md)
- [Resurssien käytön seuraaminen](./resource-usage.md)
- [Varmuuskopion säilyttäminen omalla koneella](./backup-download.md)

## Perushuolto

Ennen merkittävää muutosta pysäytä palvelin hallitusti, varmista palautuskelpoinen varmuuskopio ja kirjaa nykyiset asetukset. Tarkista muutoksen jälkeen käynnistys konsolista ja kokeile peliin yhdistämistä. Jos ongelma ilmenee, ensimmäinen virheilmoitus ja tehtyjen muutosten ajankohta auttavat selvittämisessä.

Säännölliseen ylläpitoon kuuluu:

- Pidä palvelinohjelmisto ajan tasalla.
- Varmuuskopioi tärkeät tiedot säännöllisesti.
- Tarkista konsoli, jos palvelimessa ilmenee ongelmia.
- Asenna vain luotettavia lisäosia ja modeja.
- Tarkista, sisältääkö varmuuskopio myös tarvitsemasi ulkoiset tietokannat. Tiedostovarmuuskopio ei välttämättä sisällä niitä.
- Tarkista palvelimen käyttöoikeudet ja poista pääsy käyttäjiltä, jotka eivät sitä enää tarvitse.
