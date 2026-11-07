# Minecraft Java Editionin SRV-tietue

SRV-tietueella Minecraft Java Editionin pelaaja voi käyttää verkkotunnusta kirjoittamatta palvelimen erillistä porttia. Tarvitset hallinnan verkkotunnuksesi DNS-asetuksiin ja palvelimen osoitteen sekä portin paneelista.

## Luo tietueet

Esimerkissä pelaaja yhdistää osoitteeseen `play.example.com`, ja paneelissa näkyvä palvelimen osoite on `g1.gamehoster.fi:2000`. Molemmat ovat esimerkkejä: varmista oman palvelimesi osoite ja portti paneelista ja DNS-kohteen sopivuus tarvittaessa tuelta.

1. Tarkista palveluntarjoajalta oikea palvelimen isäntänimi SRV-kohteeksi. SRV-kohteen on oltava nimi, jolla on A- tai AAAA-tietue; kohde ei saa olla IP-osoite, `nimi:portti` eikä CNAME-alias. Taulukon `g1.gamehoster.fi` on pelkkä havainnollistava esimerkki.
2. Luo SRV-tietue nimelle `_minecraft._tcp.play.example.com`. Palveluntarjoaja voi pyytää palvelun, protokollan ja nimen erillisiin kenttiin.
3. Aseta prioriteetiksi `0`, painoksi `0`, portiksi palvelimesi portti ja kohteeksi oikea palvelimen isäntänimi ilman porttia.
4. Tallenna tietueet ja odota DNS-muutoksen päivittymistä. Yhdistä Java Editionilla osoitteeseen `play.example.com` ilman porttia.

| Kenttä | Esimerkki |
| --- | --- |
| Palvelu | `_minecraft` |
| Protokolla | `_tcp` |
| Nimi | `play` |
| Prioriteetti / paino | `0` / `0` |
| Portti | `2000` |
| Kohde | `g1.gamehoster.fi` |

DNS-palvelut käsittelevät nimen loppuosan eri tavoin: osa lisää verkkotunnuksen automaattisesti. Tarkista tallennettu koko nimi, jotta verkkotunnus ei toistu kahdesti.

## Jos yhteys ei toimi

Kokeile ensin yhdistää suoraan paneelissa näkyvällä osoitteella ja portilla. Tarkista tämän jälkeen SRV-tietueen nimi, kohde ja portti sekä että kohteen nimi ratkaistaan osoitteeksi. DNS-välimuistit voivat säilyttää myös aiemman puuttuvan vastauksen. SRV-ohje koskee Java Editionia; Bedrockin portti annetaan yleensä pelissä erikseen.

Lisätietoa SRV-tietueen kohteen vaatimuksista: [RFC 2782](https://www.rfc-editor.org/info/rfc2782/).
