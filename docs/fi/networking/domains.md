# Verkkotunnuksen yhdistäminen

Omalla verkkotunnuksella saat pelipalvelimellesi osoitteen, joka on helppo muistaa.

## Vaihe 1 – Etsi palvelimesi osoite

Etsi palvelimesi julkinen IP-osoite ja portti, jolla siihen yhdistetään.

## Vaihe 2 – Avaa DNS-asetukset

Kirjaudu verkkotunnuksesi rekisteröijän tai DNS-palveluntarjoajan hallintapaneeliin.

## Vaihe 3 – Luo DNS-tietue

Jos palvelimella on IPv4-osoite, luo A-tietue.

| Tyyppi | Nimi | Arvo       |
| ------ | ---- | ---------- |
| A      | play | 192.0.2.10 |

Korvaa esimerkin IP-osoite palvelimesi omalla IP-osoitteella.

## Vaihe 4 – Yhdistä palvelimelle

Jos palvelin käyttää pelin oletusportista poikkeavaa porttia, saatat joutua antamaan portin yhdistäessäsi.

Minecraft Java Editionissa voit ohjata pelaajat haluamaasi porttiin SRV-tietueella.

::: info Huomio
DNS-muutosten päivittyminen voi kestää jonkin aikaa.
:::
