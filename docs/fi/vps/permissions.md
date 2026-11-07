# Linux-tiedostojen käyttöoikeudet

Linux-tiedostolla on omistaja, ryhmä ja oikeudet omistajalle, ryhmälle sekä muille käyttäjille. Luku (`r`), kirjoitus (`w`) ja suoritus (`x`) tarkoittavat hakemistoille ja tiedostoille hieman eri asioita.

## Tarkista oikeudet

Siirry haluamaasi kansioon ja suorita:

```bash
ls -l
```

Tulosteesta näet oikeudet, omistajan ja ryhmän. Hakemiston suorituslupa sallii kulkemisen sen kautta; hakemiston luku- ja kirjoitusoikeudet liittyvät sen sisältöön ja nimien muuttamiseen.

## Muuta harkiten

Jos omistat tiedoston, voit esimerkiksi poistaa muilta käyttäjiltä oikeudet komennolla `chmod 600 oma-tiedosto`. Tarkista ensin, ettei jokin palvelu tarvitse pääsyä tiedostoon. Omistajuuden vaihtamiseen käytetään `chown`-komentoa, mutta väärä omistaja voi estää sovelluksen toiminnan.

Älä käytä laajoja rekursiivisia oikeusmuutoksia koko järjestelmään. Tarkista erityisesti salaisuuksien, SSH-avainten ja sovellusasetusten oikeudet. Ota tarvittaessa varmuuskopio ennen muutoksia.
