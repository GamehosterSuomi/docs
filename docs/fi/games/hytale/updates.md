# Hytale-palvelimen päivittäminen

Hytalen asiakasohjelman ja palvelimen yhteensopivuus riippuu protokollaversiosta. Virallisen oppaan mukaan versioiden on tällä hetkellä vastattava toisiaan. Tarkista ajantasainen tilanne, kun päivität palvelimen tai pelaajien pelin.

## Valmistele päivitys

1. Tarkista julkaisutiedot sekä käytössä olevien modien ja mahdollisten riippuvuuksien yhteensopivuus. Sovi päivitykselle huoltoaika.
2. Pyydä pelaajia poistumaan, pysäytä palvelin ja tee [varmuuskopio](./backups.md), joka sisältää maailman, asetukset ja modit. Kirjaa aiempi palvelinversio.
3. Selvitä Gamehosterin tukemasta käyttöliittymästä tai tuelta, miten juuri tämä palvelu päivitetään. Älä korvaa palveluntarjoajan käynnistystiedostoja itse, jos niiden tarkoitus on epäselvä.

## Päivitä ja varmista

1. Käytä palvelullesi tarkoitettua päivitystapaa ja odota sen valmistumista. Päivitä vain yhteensopivat modit niiden tekijöiden ohjeiden mukaan.
2. Käynnistä palvelin ja seuraa konsolista virheitä sekä versiota. Tarkista mahdollinen [tunnistautuminen](./authentication.md).
3. Yhdistä päivitetyllä pelillä ja varmista maailma, pelaajatiedot ja tärkeimmät modit.
4. Jos päivitys epäonnistuu, säilytä lokit ja varmuuskopio. Selvitä tuen kanssa oikea palautustapa ennen kuin korvaat palvelintiedostoja tai avaat maailmaa vanhemmalla versiolla.

Virallinen Hytale-palvelin sisältää päivityskomentoja ja käynnistysskriptejä, mutta niiden käyttö ja automaattinen uudelleenkäynnistys riippuvat palveluntarjoajan toteutuksesta. Älä oleta päivityksen tapahtuvan automaattisesti. Lähde: [Hytale Server Manual: Auto Updating](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
