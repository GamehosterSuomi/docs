# Palvelin ei käynnisty

Jos pelipalvelin ei käynnisty, etsi ensimmäinen virhe konsolista ja tarkista viimeisimmät muutokset. Pelin ensimmäinen käynnistys voi kestää tavallista pidempään, jos palvelin asentaa tiedostoja tai luo maailmaa. Odota käynnistymistä pelikohtaisen ohjeen mukaan ennen uusintayritystä.

## Vaihe 1 – Tarkista konsoli

1. Avaa oikea palvelin pelipaneelista ja valitse **Console**.
2. Jos palvelin ei ole käynnissä, käynnistä se kerran ja seuraa viestejä. Merkitse muistiin ensimmäinen virheilmoitus sekä sitä ympäröivät rivit. Viimeinen viesti voi kertoa vain käynnistyksen pysähtymisestä.
3. Tarkista pelin ohjeesta, onko ilmoitus varoitus vai käynnistyksen estävä virhe. Jos pelillä on erillinen loki tai kaatumisraportti, säilytä se ennen uutta käynnistystä.

## Vaihe 2 – Tarkista asetukset

Pysäytä palvelin ja käy läpi hiljattain muuttamasi pelin asetukset ja käynnistysmuuttujat. Tarkista tiedoston rakenne, arvot ja peliversion vaatimukset pelin omasta dokumentaatiosta. Jos virhe alkoi heti asetuksen muutoksen jälkeen, palauta aiemmin toimiva arvo tai varmuuskopio. Varmista palautuksen vaikutus ennen vahvistamista.

## Vaihe 3 – Tarkista lisäosat ja modit

Jos asensit hiljattain lisäosan tai modin, tarkista, että se on yhteensopiva palvelinversiosi kanssa.

Tee varmuuskopio ennen muutoksia. Voit rajata ongelmaa poistamalla viimeksi lisäämäsi lisäosan tai modin käytöstä, jos tiedät sen vaikutuksen. Maailman tai pelidatan sisältöön vaikuttavan modin poistaminen voi muuttaa tai vioittaa tietoja; kokeile tarvittaessa erillisessä kopiossa. Tarkista myös vaaditut riippuvuudet ja palvelinversion yhteensopivuus.

## Vaihe 4 – Tarkista käytettävissä olevat resurssit

Jos paneeli näyttää muistin, suorittimen tai levytilan käytön, vertaa arvoja palvelusi rajoihin. Täysi levy voi estää pelitiedostojen luonnin tai tallentamisen. Korkea muistinkäyttö on johtolanka, mutta ei yksin todista kaatumisen syytä. Älä poista maailmoja tai tuntemattomia tiedostoja tilan vapauttamiseksi.

Jos ilmoitus koskee porttia tai osoitetta, tarkista paneelin palvelimelle osoittamat tiedot sekä pelin ohje. Älä vaihda porttia tai käynnistyskomentoa arvaukseen.

## Vaihe 5 – Ota yhteyttä tukeen

Jos palvelin ei vieläkään käynnisty, kerro tuelle:

- Pelin ja palvelinohjelmiston versiot.
- Olennaiset konsolin virheilmoitukset.
- Kuvaus ongelmasta.
- Ennen ongelman alkamista tehdyt muutokset.
- Milloin ongelma alkoi ja mitä olet jo kokeillut.

Poista konsolitekstistä ja lokitiedostoista salasanat, API-avaimet ja muut salaisuudet ennen lähettämistä. Säilytä nykyiset tiedostot ja varmuuskopiot, jotta tukitiimi voi selvittää tilanteen.

::: tip Vinkki
Tarkan virheilmoituksen lähettäminen voi nopeuttaa vianmääritystä huomattavasti.
:::
