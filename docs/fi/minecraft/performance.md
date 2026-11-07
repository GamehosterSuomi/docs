# Minecraft-palvelimen suorituskyvyn vianmääritys

Hidas palvelin voi näkyä esimerkiksi viivästyneinä lohkojen muutoksina tai liikkuvien olentojen nykimisenä. Verkkoviive ja palvelimen hidas pelilogiikka ovat eri ongelmia.

## Rajaa ongelma

1. Kirjaa, milloin ongelma ilmenee ja montako pelaajaa on paikalla. Kysy, kokevatko kaikki saman viiveen.
2. Tarkista konsolista varoitukset ja paneelista mahdollisesti näkyvä muistin, suorittimen ja levytilan käyttö. Yksittäinen mittari ei yksin kerro syytä.
3. Selvitä, alkoiko ongelma päivityksen, uuden modin tai lisäosan tai tietyn maailman alueen käyttöönoton jälkeen.
4. Jos ohjelmistosi tukee suorituskykyprofiilin tallennusta, tee mittaus ongelman aikana ja tarkastele tuloksia sen ohjeiden mukaan.

## Kokeile muutoksia

- Tarkista [palvelimen asetuksista](./server-properties.md) `view-distance` ja `simulation-distance`. Arvojen pienentäminen voi vähentää kuormitusta, mutta muuttaa pelaajien kokemusta.
- Kokeile rajata ongelmaa poistamalla viimeksi lisätty laajennus käytöstä sen ohjeen mukaan. Ota ensin varmuuskopio, sillä modin poistaminen voi muuttaa maailmaa.
- Vältä useiden asetusten muuttamista kerralla. Vertaa tilannetta ennen muutosta ja sen jälkeen samanlaisessa kuormituksessa.

Jos tarvitset tukea, lähetä palvelinohjelmiston versio, ongelman ajankohta, pelaajamäärä ja olennaiset konsoliviestit. Poista lokista salaisuudet ennen jakamista.
