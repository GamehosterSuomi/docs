# Minecraft-lisäosan päivittäminen

Lisäosan päivitys voi edellyttää myös palvelinohjelmiston, riippuvuuksien tai asetusten muutoksia. Päivitä yksi lisäosa kerrallaan, jotta ongelman aiheuttaja on helpompi löytää.

## Ennen päivitystä

1. Tarkista lisäosan tekijän julkaisutiedot, tuetut Minecraft- ja palvelinohjelmiston versiot sekä riippuvuudet.
2. Ilmoita huoltokatkosta, pysäytä palvelin ja ota [varmuuskopio](../server-management/backups.md) maailmoista, lisäosien tiedostoista ja mahdollisista tietokannoista. Varmista palautustapa.
3. Lataa uusi julkaisu lisäosan virallisesta lähteestä. Tarkista tekijän ohjeista mahdolliset tietokanta- tai asetustiedostomuutokset.

## Päivitä ja tarkista

1. Poista vanha JAR `plugins`-kansiosta tai siirrä se palvelimen ulkopuolelle; älä jätä kahta eri versiota samaan kansioon.
2. Siirrä uusi JAR kansioon. Säilytä asetuskansio, ellei tekijä ohjeista toisin.
3. Käynnistä palvelin ja tarkista konsolista, että lisäosa ja sen riippuvuudet latautuivat. Kokeile tärkeimmät komennot ja toiminnot testikäyttäjällä.
4. Jos päivitys epäonnistuu, pysäytä palvelin. Palauta aiempi JAR ja tarvittaessa sitä vastaavat asetukset ja tiedot varmuuskopiosta. Tarkista ensin, mitä palautus korvaa.

Älä oleta, että vanha versio ymmärtää uuden version muuttaman tietokannan. Katso myös [lisäosien vianmääritys](./plugin-troubleshooting.md).
