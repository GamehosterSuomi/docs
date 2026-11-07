# Hytale-palvelimen varmuuskopiointi ja palautus

Toimiva varmuuskopio suojaa maailmaa ja asetuksia esimerkiksi epäonnistuneelta päivitykseltä. Kopion on oltava palautettavissa, ja sen sisällön on katettava sekä pelitiedot että palvelimen käyttämät asetukset.

## Luo varmuuskopio

1. Ilmoita pelaajille katkosta ja pysäytä palvelin hallitusti. Odota, että tallennus ja sammutus valmistuvat.
2. Avaa pelihallinnassa palvelimesi **Backups**. Jos toiminto ja oikeutesi sallivat sen, valitse **New backup**.
3. Tarkista ennen kopion luontia, ettei **Ignored files & directories** sulje pois tarvitsemasi maailman tai asetusten tiedostoja. Jos paneeli ilmoittaa käyttävänsä `.pteroignore`-tiedostoa, tarkista myös sen sisältö.
4. Valitse **Start backup** ja odota, että kopio näkyy valmiina. Selvitä erikseen mahdollisten ulkoisten tietokantojen varmuuskopiointi: ne eivät välttämättä sisälly palvelimen tiedostokopioon.
5. Jos lataaminen on tarjolla, säilytä varmuuskopio myös turvallisessa erillisessä paikassa. Kirjaa kopion päivämäärä ja peliversio. Kopio voi sisältää pelaajatietoja ja tunnuksia.

Tarkista, että kopio kattaa ainakin palvelimesi `universe/`-tiedot sekä tarvittavat asetukset ja modit. Hytalen omat varmuuskopiointiasetukset riippuvat käynnistystavasta: virallisen palvelimen `--backup`-asetusten olemassaolo ei yksin todista, että Gamehosterin palvelussasi automaattinen kopiointi on käytössä.

## Palauta harkiten

1. Valitse tilanteeseen sopiva varmuuskopio ja ilmoita pelaajille, että palautuspisteen jälkeen tehdyt muutokset voivat kadota.
2. Pysäytä palvelin ja tee mahdollisuuksien mukaan erillinen kopio nykytilasta ennen palautusta.
3. Valitse halutun kopion valikosta **Restore**. Lue palautusikkunan tiedot; nykyisten tiedostojen poistamista koskeva valinta voi poistaa tiedostoja, eikä sitä tule valita ymmärtämättä sen vaikutusta.
4. Odota palautuksen valmistumista, käynnistä palvelin ja tarkista konsoli, maailma ja pelaajatiedot. Jos jokin on epäselvää, ota yhteyttä tukeen ennen vahvistamista.

Katso myös [yleinen varmuuskopio-ohje](../../server-management/backups.md) ja [Hytalen virallinen palvelinopas](https://support.hytale.com/hc/en-us/articles/45326769420827-Hytale-Server-Manual).
