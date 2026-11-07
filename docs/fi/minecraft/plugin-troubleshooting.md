# Lisäosa ei toimi

Paper- ja Bukkit-yhteensopivan lisäosan ongelma voi johtua puuttuvasta riippuvuudesta, väärästä versiosta, asetuksesta tai toisesta lisäosasta. Selvitä ensin, latautuuko lisäosa lainkaan.

## Tarkista lataus

1. Avaa palvelimen konsoli ja etsi käynnistyksen aikaiset lisäosan nimeä koskevat virheet. `plugins`-komento voi näyttää ladatut lisäosat, mutta pelkkä näkyminen listassa ei todista kaikkien toimintojen toimivan.
2. Varmista tekijän sivulta Minecraft- ja palvelinohjelmistoversio, Java-vaatimus sekä pakolliset riippuvuudet.
3. Tarkista, että `plugins`-kansiossa on vain yksi kyseisen lisäosan JAR-versio. Älä pura JAR-tiedostoa, ellei tekijä niin ohjeista.
4. Tarkista lisäosan asetusten muoto sekä pelaajan oikeudet. Muutokset edellyttävät usein uudelleenkäynnistystä tai lisäosan omaa turvallista latauskomentoa.

## Rajaa ristiriita

Ota varmuuskopio. Pysäytä palvelin ja kokeile tarvittaessa samassa ohjelmistoversiossa erillisellä testikopiolla vain kyseistä lisäosaa ja sen riippuvuuksia. Lisää muut lisäosat takaisin vähitellen. Osa lisäosista tallentaa tietoja maailmaan tai tietokantaan, joten niitä ei pidä poistaa tuotantopalvelimelta harkitsematta.

Lähetä tukeen lisäosan ja palvelinohjelmiston versiot, ensimmäinen olennainen virhe ja vaiheet, joilla ongelma toistuu. Poista salaisuudet lokista. Katso myös [Paperin vianmääritys](https://docs.papermc.io/paper/basic-troubleshooting/).
