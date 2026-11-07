# Palvelimen varmuuskopiot

Varmuuskopio auttaa palauttamaan palvelimen tiedot esimerkiksi asetusvirheen, tiedoston vahingossa poistamisen tai epäonnistuneen päivityksen jälkeen. Tarkista ennen luomista palvelullesi käytettävissä olevien kopioiden määrä sekä se, mitkä tiedot kopioon kuuluvat.

## Ennen varmuuskopiointia

Selvitä pelikohtaisesti, missä maailma, asetukset ja lisäosien tiedot sijaitsevat. Ilmoita tarvittaessa pelaajille katkosta ja pysäytä palvelin hallitusti, kun haluat johdonmukaisen kopion tiedoista, joita peli kirjoittaa. Varmista myös mahdollisten erillisten tietokantojen varmuuskopiointi: paneelin tiedostokopio ei välttämättä sisällä niitä.

## Varmuuskopion luominen

Jos palvelimellasi on varmuuskopiointitoiminto ja oikeus käyttää sitä, toimi näin:

1. Avaa palvelimesi hallintapaneelissa.
2. Avaa **Backups** ja valitse **New backup**.
3. Anna halutessasi kopion nimi. Tarkista **Ignored files & directories**: pois jätetyt tiedostot eivät sisälly kopioon. Jos kenttä on tyhjä ja palvelimen juurihakemistossa on `.pteroignore`, paneelin ilmoituksen mukaan sen sisältöä käytetään.
4. Valitse **Start backup** ja odota kopion valmistumista. Tarkista, että kopio näkyy valmiina. Pysäytä palvelin ensin, jos tarvitset levylle kirjoitettavasta datasta yhtenäisen kopion.

Kirjaa kopion päivämäärä, sisältö sekä peli- ja palvelinohjelmiston versiot. Jos kopio ei valmistu, tarkista näkyvä virhe sekä palvelusi rajat ja ota tarvittaessa yhteyttä tukeen. Jos lataus on käytettävissä, voit [säilyttää kopion omalla laitteellasi](./backup-download.md).

## Varmuuskopion palauttaminen

1. Valitse sopiva palautuspiste. Ilmoita katkosta, pysäytä palvelin ja säilytä mahdollisuuksien mukaan myös erillinen kopio nykyisestä tilanteesta.
2. Avaa **Backups** ja valitse oikean varmuuskopion toimintovalikosta **Restore**.
3. Lue palautusikkunan tiedot. **Delete all files before restoring backup** poistaa nykyiset tiedostot ennen palautusta. Jätä valinta pois, jos et tarkoita tätä, ja huomioi, että myös palautettavat samannimiset tiedostot voivat korvata nykyisiä tietoja.
4. Vahvista palautus vain, kun tiedät sen vaikutukset. Odota palautuksen valmistumista ja käynnistä palvelin.
5. Tarkista konsoli ja palvelimen toiminta. Katso myös [palautuksen suunnittelu](./restore-planning.md).

::: danger Vaara
Varmuuskopion palauttaminen voi korvata palvelimen nykyiset tiedostot. Tallenna tärkeät viimeaikaiset muutokset erikseen ennen palauttamista.
:::

## Palautuksen tarkistaminen

Varmista, että oikea maailma ja peli- ja palvelinohjelmiston versiot ovat käytössä. Kokeile liittymistä ja tarkista tärkeimmät asetukset. Jos jokin puuttuu, älä tee uutta palautusta arvauksella: selvitä ensin, sisältyivätkö tiedot valittuun kopioon.
