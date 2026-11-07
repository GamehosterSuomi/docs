# Hytale-palvelimen tunnistautuminen

Hytale-palvelin käyttää tunnistautumista pelin palveluihin. Gamehoster voi hoitaa tunnistautumisen puolestasi tai palvelimen konsoli voi pyytää sitä erikseen. Toimi vain palvelimelle näytetyn ohjeen mukaan.

## Tarkista tarve konsolista

1. Avaa palvelimen **Console** ja käynnistä palvelin. Odota käynnistysviestit.
2. Jos konsoli kertoo tunnistautumisen onnistuneen tai palvelin hyväksyy yhteydet, erillistä kirjautumista ei tarvitse aloittaa.
3. Jos konsoli pyytää tunnistautumista ja tarjoaa laitteen kautta tehtävän kirjautumisen, Hytalen virallinen komento on `/auth login device`. Käytä sitä vain, kun se sopii palvelimesi ohjeeseen ja konsolin käyttöoikeuksiisi.
4. Avaa konsolissa ilmoitettu Hytalen kirjautumissivu, tarkista osoite ja syötä konsolin näyttämä kertakäyttöinen koodi. Suorita valtuutus itse omalla Hytale-tililläsi.
5. Palaa konsoliin ja varmista onnistumisviesti. Jos tililläsi on useita profiileja, noudata mahdollisia profiilin valintaa koskevia ohjeita.

::: warning
Kertakäyttökoodi ja kirjautumisen tunnisteet ovat luottamuksellisia. Älä lähetä niitä keskusteluun, kuvakaappauksissa tai tukipyynnössä. Jos et tiedä, edellyttääkö Gamehosterin palvelusi omaa tunnistautumista, kysy tuelta ennen komentojen käyttöä.
:::

## Jos tunnistus ei onnistu

Tarkista konsolin tarkka ilmoitus, tilisi käyttöoikeudet ja onko koodi vanhentunut. Älä yritä korjata ongelmaa poistamalla tunnistautumista käytöstä. Lähetä tuelle vain virheen olennainen osa ilman koodeja tai tokeneita. Lisätietoa: [Hytale Server Manual](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual) ja [Server Provider Authentication Guide](https://support.hytale.com/hc/en-us/articles/45328341414043-Server-Provider-Authentication-Guide).
