# Maailman rajaaminen

Maailman raja voi pitää pelaamisen valitulla alueella ja rajoittaa uusien alueiden tutkimista. Se ei poista jo luotuja alueita eikä yksin estä kaikkia suorituskykyongelmia. Esimerkit koskevat Java Editionin peruspalvelinta; monimaailmalisäosat voivat käyttää omia rajojaan.

## Aseta raja

1. Tee varmuuskopio ja valitse rajalle keskipiste pelin koordinaateista. Tarkista, että tärkeät rakennukset ovat aiotun alueen sisällä.
2. Aseta keskipiste konsolissa esimerkiksi `worldborder center 0 0`. Pelissä käytä komennon alussa `/`.
3. Aseta rajan halkaisija lohkoina esimerkiksi `worldborder set 2000`. Tässä esimerkissä alue ulottuu keskipisteestä noin 1 000 lohkoa kuhunkin suuntaan.
4. Tarkista nykyinen koko komennolla `worldborder get` ja testaa raja pelissä.

::: warning Varoitus
Rajan pienentäminen voi jättää pelaajia ja rakennuksia sen ulkopuolelle. Ilmoita muutoksesta etukäteen ja varmista, että pelaajat pääsevät turvallisesti sisäpuolelle.
:::

Komennon lisävalinnat ja mahdollinen asteittainen koon muutos löytyvät palvelinversion komentoavusteesta. Rajaa kannattaa kokeilla ensin varmuuskopion perusteella tehdyssä erillisessä testiympäristössä.
