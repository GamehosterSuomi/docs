# Yksittäisen pelaajan tietojen palauttaminen

Java Edition tallentaa pelaajakohtaisia tietoja maailman kansioon, mutta palvelinohjelmistot ja lisäosat voivat tallentaa inventaarioita tai muita tietoja myös muualle. Koko palvelimen palauttaminen voi korvata muiden pelaajien uudemmat muutokset, joten selvitä ensin, mitä tietoa tarvitaan.

## Selvitä oikea tiedosto

1. Pyydä pelaajalta käyttäjänimi ja ongelman alkamisajankohta. Selvitä palvelinohjelmiston ja lisäosien dokumentaatiosta, missä kyseinen tieto tallennetaan.
2. Etsi luotettavasti pelaajan UUID ja sitä vastaava tiedosto aktiivisen maailman `playerdata`-kansiosta. Älä arvaa tiedostoa nimen perusteella. Lisäosien tallenteet ja tilastot voivat sijaita erikseen.
3. Valitse ennen ongelmaa tehty, samaan maailmaan ja palvelinympäristöön sopiva varmuuskopio. Tarkista palautuksen vaikutus myös lisäosien tietoihin.

## Palauta hallitusti

1. Pyydä pelaajaa poistumaan palvelimelta ja pysäytä palvelin, jotta tiedostoa ei kirjoiteta palautuksen päälle.
2. Ota uusi varmuuskopio nykyisestä tilanteesta. Säilytä palautettava vanha kopio erikseen.
3. Kopioi vain tunnistettu vanha tiedosto oikeaan sijaintiin. Käynnistä palvelin ja pyydä pelaajaa tarkistamaan tulos.
4. Jos tulos on väärä, pysäytä palvelin ja palauta ennen muutosta otettu kopio. Ota yhteyttä tukeen, jos oikea UUID tai tallennuspaikka on epäselvä.

::: warning Varoitus
Palautus voi korvata pelaajan palautuspisteen jälkeen saamat tavarat, sijainnin ja muut tiedot. Älä muokkaa tiedostoja palvelimen käydessä.
:::
