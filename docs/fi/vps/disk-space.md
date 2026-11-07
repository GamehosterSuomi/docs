# VPS:n levytilan tarkistaminen

Täysi levy voi estää palveluita kirjoittamasta tietoja. Tarkista ensin, mikä tiedostojärjestelmä on täynnä ja mikä hakemisto käyttää tilaa.

## Selvitä tilanne

```bash
df -h
df -i
```

Ensimmäinen komento näyttää levytilan ja toinen inode-käytön. Myös inodejen loppuminen voi estää uusien tiedostojen luomisen, vaikka tavallista levytilaa olisi jäljellä.

GNU `du` -työkalulla voit tarkastella esimerkiksi `/var`-hakemiston alihakemistojen kokoja komennolla `sudo du -h --max-depth=1 /var`. Komento voi kestää suurissa hakemistoissa. Seuraa tuloksia tarkempiin alihakemistoihin. `du` ei välttämättä näytä poistettua tiedostoa, joka on edelleen prosessin käytössä, vaikka se edelleen vie levytilaa.

## Vapauta tilaa turvallisesti

Tunnista suuret varmuuskopiot, lataukset ja lokit ennen poistamista. Varmista, että varmuuskopio on säilytetty muualla ja ettei sovellus tarvitse poistettavaa tiedostoa. Käytä sovelluksen tai lokijärjestelmän omia siivousohjeita; älä poista tietokannan tiedostoja käsin. Tarkista tila uudelleen ja seuraa, kasvaako käyttö edelleen.

Lisätietoa: [GNU:n selitys `df`- ja `du`-tulosten eroista](https://www.gnu.org/software/coreutils/faq/coreutils-faq.html).
