# Webhotellin DNS-tietueet

DNS ohjaa verkkotunnuksen käyttäjät oikeaan palveluun. A-tietue osoittaa IPv4-osoitteeseen ja AAAA-tietue IPv6-osoitteeseen; MX-tietue määrittää sähköpostin vastaanottavan palvelimen.

## Selvitä ensin hallintapaikka

Tarkista verkkotunnuksen rekisteröijältä sen nimipalvelimet. Jos käytät ulkoista DNS-palvelua, Pleskiin tehty tietuemuutos ei yleensä vaikuta julkiseen DNS:ään. Jos taas Pleskin hallinnoimat nimipalvelimet ovat käytössä ja tilaus sallii DNS-muokkaukset, käytä Pleskin DNS-asetuksia.

## Tee muutos

1. Kirjaa nykyiset tietueet ja niiden arvot talteen.
2. Lisää tai muokkaa vain tarvitsemasi tietue käyttäen palveluntarjoajan antamia arvoja. Tarkista myös nimi ja tietuetyyppi.
3. Tallenna muutokset ja odota niiden päivittymistä. Välimuistit voivat näyttää aiempaa tietoa jonkin aikaa.
4. Testaa sekä verkkosivusto että sähköposti, jos muutos koskee niiden tietueita.

Älä poista MX-, SPF-, DKIM- tai muita tuntemattomia tietueita varmistamatta niiden käyttötarkoitusta. Katso myös [verkkotunnuksen liittäminen](./domain.md).

Lisätietoa: [Pleskin DNS-ohje](https://docs.plesk.com/en-US/obsidian/quick-start-guide/plesk-functionality-explained/managing-dns-records.74404/).
