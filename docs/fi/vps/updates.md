# Ubuntu-palvelimen päivitykset

Päivitykset korjaavat virheitä ja tietoturvaongelmia. Alla olevat komennot koskevat Ubuntu- ja Debian-pohjaisia järjestelmiä, joissa käytetään APT:ta. Muiden käyttöjärjestelmien päivitystapa voi olla erilainen.

## Päivitä paketit

1. Varaa huoltoaika ja varmista toimiva varmuuskopio. Lue tärkeiden sovellusten omat päivitysohjeet.
2. Yhdistä SSH:lla ja päivitä pakettiluettelot:

   ```bash
   sudo apt update
   ```

3. Tarkista tarjolla olevat päivitykset komennolla `apt list --upgradable` ja suorita sen jälkeen `sudo apt upgrade`. Lue mahdolliset kysymykset ennen hyväksymistä.
4. Jos päivitys vaatii uudelleenkäynnistyksen, ilmoita käyttäjille ja käynnistä palvelin hallitusti uudelleen. Tarkista yhteys ja palveluiden toiminta sen jälkeen.

APT ei välttämättä päivitä kaikkia paketteja yhdellä `upgrade`-komennolla. Selvitä pidätettyjen pakettien syy ennen muita muutoksia. Käyttöjärjestelmän pääversion vaihto on erillinen toimenpide: käytä jakelun omaa päivitysohjetta.

Lisätietoja: [Ubuntun pakettien hallinta](https://ubuntu.com/server/docs/package-management/) ja [Ubuntun tietoturvapäivitykset](https://documentation.ubuntu.com/security/security-updates/).
