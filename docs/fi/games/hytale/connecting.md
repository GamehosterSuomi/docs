# Yhdistäminen Hytale-palvelimelle

Tarvitset Hytale-pelin, yhteensopivan peliversion ja Gamehosterin paneelissa näkyvän palvelinosoitteen sekä portin. Odota ensin, että palvelin on käynnistynyt ja mahdollinen tunnistautuminen on valmis.

## Etsi oikea osoite

1. Avaa [pelihallinta](https://panel.gamehoster.fi/), valitse Hytale-palvelin ja tarkista **Console**-näkymässä näkyvä osoite ja portti.
2. Esimerkiksi `g1.gamehoster.fi:2000` havainnollistaa osoitteen ja portin muotoa. Se ei ole välttämättä sinun palvelimesi osoite; käytä aina paneelin tietoja.
3. Avaa Hytale ja pelin palvelinvalikko. Lisää tai valitse palvelin pelin kulloinkin tarjoamalla yhteystavalla ja syötä palvelimen osoite sekä tarvittaessa portti.
4. Yhdistä ja tarkista, että lataudut oikeaan maailmaan. Lähetä ystäville sama osoite sekä mahdollinen liittymisohje turvallisesti.

## Jos yhteys epäonnistuu

- Tarkista pelin ja palvelimen yhteensopivat versiot. Hytalen virallisen palvelinoppaan mukaan protokollien täytyy tällä hetkellä täsmätä.
- Varmista konsolista, että palvelin on käynnissä ja tunnistautuminen on onnistunut. Tarkista mahdollinen pelaajien pääsyrajoitus.
- Tarkista kirjoitusvirheet ja portti. Hytale käyttää QUIC-protokollaa UDP:n päällä; Gamehosterin palvelimella käytä sinulle annettua porttia oletusportin sijaan.
- Jos vain yksi pelaaja ei pääse sisään, pyydä häntä kokeilemaan toista verkkoyhteyttä ja kertomaan tarkka virheilmoitus.

Älä muuta paneelin porttivarausta tai palvelimen kuunteluasetuksia arvauksella. Lisää vianrajausta on [vianmäärityksessä](./troubleshooting.md). Lähteet: [Hytale Server Manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual) ja [Joining Friends](https://support.hytale.com/hc/en-us/articles/45324238811291-Joining-Friends).
