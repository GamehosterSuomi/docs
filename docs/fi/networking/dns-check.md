# DNS-tietueiden tarkistaminen

Jos verkkotunnus ei johda palvelimellesi, selvitä ensin, mihin osoitteeseen nimi ratkaistaan. A-tietue osoittaa IPv4-osoitteeseen, AAAA IPv6-osoitteeseen ja CNAME toiseen verkkotunnukseen.

## Tarkista tietue

1. Varmista, että muokkasit sen DNS-palveluntarjoajan asetuksia, jonka nimipalvelimet ovat verkkotunnuksella käytössä.
2. Tarkista tietueen nimi ja arvo sekä mahdollinen portti erillisestä SRV-tietueesta. Tavallinen A- tai AAAA-tietue ei sisällä porttia.
3. Windowsissa voit tarkistaa nimen komentoriviltä esimerkiksi komennolla `nslookup play.example.com`. Korvaa esimerkkiosoite omallasi ja vertaa vastausta oikeaan osoitteeseen.
4. Jos tietue on juuri muutettu, odota DNS-välimuistien päivittymistä ja kokeile myöhemmin uudelleen. Myös aiempi tieto nimen puuttumisesta voi olla välimuistissa.

Jos suora palvelinosoite toimii mutta verkkotunnus ei, tarkista myös palvelun mahdollinen välityspalvelu ja sen tuki käyttämällesi peliprotokollalle. Katso [verkkotunnuksen yhdistäminen](./domains.md) ja [Minecraftin SRV-tietue](./minecraft-srv.md).

Lisätietoa: [Cloudflaren DNS-vianmääritys](https://developers.cloudflare.com/dns/troubleshooting/dns-issues/).
