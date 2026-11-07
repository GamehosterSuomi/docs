# DNS-ongelmien selvittäminen VPS:llä

Jos sovellus ei löydä verkkotunnusta, erota DNS-nimenselvitys itse verkkoyhteydestä. Komentojen saatavuus riippuu Linux-jakelusta.

## Tee tarkistukset

1. Varmista, että verkkotunnus on kirjoitettu oikein ja että ongelma toistuu palvelimelta.
2. Kysy osoitetta järjestelmän nimenselvityksen kautta: `getent ahosts example.com`. Korvaa esimerkkitunnus omallasi.
3. Jos käytössä on `dig`, tarkista tietueet komennolla `dig example.com A` tai `dig example.com AAAA`. Tulos kertoo, mitä kysytty nimipalvelin palauttaa, ei yksin sitä, onko kohdepalvelu käytettävissä.
4. Jos vastaukset eroavat eri verkoissa, tarkista verkkotunnuksen nimipalvelimet ja DNS-tietueet niiden hallintapalvelusta. Muutokset ja aiemmat virhevastaukset voivat säilyä välimuistissa.

Jos nimi ratkeaa mutta sovellus ei yhdistä, tarkista seuraavaksi kohdeportti, palomuuri ja palvelun tila. Älä korvaa järjestelmän nimipalveluasetuksia pysyvästi selvittämättä, mikä työkalu hallitsee niitä. Kerro tuelle verkkotunnus, virheilmoitus, kellonaika ja tarkistuksen tulos.
