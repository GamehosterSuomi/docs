# Minecraft-maailman siirtäminen palvelimelle

Voit siirtää olemassa olevan Java Editionin maailman palvelimelle tiedostonhallinnalla tai [SFTP:llä](../server-management/sftp.md). Maailman ja palvelinohjelmiston versioiden on oltava yhteensopivia.

Joillakin palvelimilla paneelin **More**-valikossa on myös **World Manager**. Näkymässä voi tuoda maailman (**Import world**), luoda uuden (**New world**) ja ladata maailman (**Download**). Aktiivisen maailman valinta (**Set active**) vaikuttaa seuraavassa käynnistyksessä. Tarkista vaikutukset ja säilytä varmuuskopio ennen maailman vaihtamista tai poistamista.

## Valmistele maailma

1. Tarkista maailman Minecraft-versio. Tee alkuperäisestä maailmasta kopio omalle koneellesi.
2. Pysäytä palvelin ja ota [varmuuskopio](../server-management/backups.md) sen nykyisistä tiedostoista.
3. Tarkista palvelimen `server.properties`-tiedoston `level-name`-asetus. Se määrittää ladattavan päämaailman hakemiston nimen.
4. Paikanna siirrettävä maailmakansio. Sen juuresta pitäisi löytyä esimerkiksi `level.dat` sekä `region`-kansio. Älä sijoita ylimääräistä samannimistä kansiota niiden yläpuolelle.

## Siirrä ja tarkista

1. Siirrä maailman tiedostot palvelimelle ja nimeä kansio vastaamaan `level-name`-arvoa. Säilytä vanha maailma erillisessä varmuuskopiossa ennen korvaamista.
2. Käynnistä palvelin ja seuraa konsolia. Yhdistä peliin ja tarkista rakennukset, pelaajatiedot ja tarvittavat ulottuvuudet.
3. Jos maailma ei lataudu oikein, pysäytä palvelin ja tarkista kansion rakenne ja nimi. Palauta tarvittaessa varmuuskopio.

::: warning Varoitus
Palvelinohjelmistot voivat tallentaa Netherin ja Endin eri hakemistoihin. Tarkista sekä lähde- että kohdeohjelmiston ohjeet ennen siirtoa. Uudemmalla versiolla avatun maailman käyttäminen vanhemmassa versiossa voi vioittaa sitä.
:::

Lisätietoja Paperin maailmamuunnoksesta: [PaperMC: Migration](https://docs.papermc.io/paper/migration/).
