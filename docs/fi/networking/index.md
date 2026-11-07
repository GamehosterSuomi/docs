# Verkkoasetukset

Pelipalvelimen osoite kertoo, minne pelaajan peli yhdistää. Portti erottaa samalla palvelinkoneella toimivia palveluita. Oman osoitteen ja portin löydät pelipaneelista; yhteystapa riippuu pelistä.

## Oppaat

- [Verkkotunnuksen yhdistäminen](./domains.md)
- [Minecraft Java Editionin SRV-tietue](./minecraft-srv.md)

## Lisää oppaita

- [DNS-tietueiden tarkistaminen](./dns-check.md)

## Palvelinosoitteet

Yhteysosoite voi koostua verkkotunnuksesta ja portista. Esimerkki muodosta:

```text
g1.gamehoster.fi:2000
```

Tämä on havainnollistava esimerkki; käytä oman palvelimesi osoitetta ja porttia. Joissakin peleissä ne annetaan erillisiin kenttiin tai palvelin löytyy pelin palvelinselaimesta. Paneelin SFTP-osoite ja portti ovat tiedostonsiirtoa varten ja voivat olla eri kuin peliyhteyden tiedot.

Verkkotunnuksen DNS-tietue ohjaa nimen osoitteeseen tai toiseen nimeen. Se ei yksin muuta palvelimen porttia: tietyt pelit, kuten Minecraft Java Edition, voivat käyttää portin ilmoittamiseen erillistä SRV-tietuetta. Tarkista pelin tuki ennen tietueen tekemistä.
