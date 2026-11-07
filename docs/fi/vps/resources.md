# VPS:n resurssien tarkistaminen

Hitaus voi johtua suorittimesta, muistista, levystä, verkosta tai itse sovelluksesta. Mittaa tilanne ongelman aikana ennen kuin muutat asetuksia.

## Perustarkistukset

- `uptime` näyttää käynnissäoloajan ja kuormitusluvut. Kuormitus ei ole suoraan suorittimen käyttöprosentti.
- `top` näyttää prosessien suoritin- ja muistinkäyttöä. Poistu painamalla `q`.
- `free -h` näyttää muistin ja swapin käytön. Linux käyttää vapaata muistia myös välimuistiin, joten pelkkä käytetty muisti ei tarkoita ongelmaa.
- `df -h` näyttää tiedostojärjestelmien levytilan. Katso myös [levytilan tarkistaminen](./disk-space.md).

Kirjaa havaintojen aika ja kuormittava prosessi. Tarkista sovelluksen lokit ja vertaa muutoksiin, käyttäjämääriin tai ajastettuihin tehtäviin. Jos prosessi pysähtyy muistiongelman vuoksi, tarkista lokit ja sovelluksen omat vaatimukset ennen resurssien tai asetusten muuttamista. Ota tarvittaessa yhteyttä tukeen mittaustulosten kanssa.
