# VPS:n varmuuskopioinnin suunnittelu

Varmuuskopio suojaa esimerkiksi virheellisen päivityksen tai tiedoston poistamisen varalta. Tarkista palvelusi varmuuskopioiden saatavuus, sisältö ja säilytysaika Gamehosterilta. VirtFusionin toiminnot ja oikeudet riippuvat palveluntarjoajan asetuksista.

## Suunnittele kopiointi

1. Listaa palautuksessa tarvittavat tiedostot, tietokannat, sovellusten asetukset ja käyttöjärjestelmän tärkeät määritykset.
2. Tarkista sovelluksen oma ohje: pelkkä käynnissä olevan tietokannan tiedostojen kopiointi ei välttämättä tuota ehjää varmuuskopiota. Käytä sen tukemaa varmistustapaa.
3. Määritä kopiointitiheys ja säilytysaika sen mukaan, kuinka paljon tietoa voit menettää. Säilytä kopio myös palvelimesta erillään.
4. Suojaa kopiot ja rajaa niiden käyttöoikeudet. Ne voivat sisältää henkilötietoja ja salaisuuksia.
5. Kokeile palauttamista erilliseen ympäristöön ja dokumentoi tulos. Tarkista säännöllisesti, että uudet kopiot valmistuvat.

Varmuuskopiointi ja koko palvelimen palautus eivät välttämättä kata samoja asioita. Tarkista laajuus ennen ongelmatilannetta. Katso myös [palautuksen suunnittelu](./restore.md).

## Kopio asiakkaan hallintapaneelista

1. Kirjaudu [VPS-hallintaan](https://vps.gamehoster.fi/) ja valitse oikea palvelin.
2. Tarkista, näkyykö palvelullesi varmuuskopiointitoiminto ja mitä tietoja se ilmoittaa kopioivansa. Toiminto, tallennuspaikat ja oikeudet riippuvat palvelustasi.
3. Jos kopion luonti on käytettävissä, varmista tarvittava tila ja sovellusten tallennuksen eheys. Luo kopio paneelin tarjoamalla toiminnolla ja odota, että sen tila kertoo valmistumisesta.
4. Kirjaa palautuspisteen ajankohta ja varmista erikseen tietokantojen sekä mahdollisen ulkoisen tallennustilan sisältö. Tarkista, voiko kopion säilyttää erillään palvelimesta.
5. Jos toimintoa tai tietoa kopion sisällöstä ei näy, selvitä Gamehosterin tuelta palvelusi varmuuskopiointi. Älä oleta kopion valmistuneen pelkän luontipyynnön perusteella.
