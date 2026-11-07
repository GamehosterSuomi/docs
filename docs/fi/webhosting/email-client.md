# Sähköpostiohjelman asetukset

Voit käyttää webhotellin postilaatikkoa sähköpostiohjelmalla, kun saat palveluntarjoajalta oikeat yhteysasetukset. Tarkista sähköpostipalvelun ja salattujen yhteyksien saatavuus ensin.

## Tarvittavat tiedot

Tarvitset postilaatikon käyttäjätunnuksen ja salasanan, saapuvan postin palvelimen ja portin, lähtevän SMTP-palvelimen ja portin sekä kunkin yhteyden salaustavan. Käyttäjätunnus on usein koko sähköpostiosoite, mutta tarkista tämä palvelun ohjeista.

## Lisää tili

1. Luo sähköpostiohjelmassa uusi tili.
2. Anna palveluntarjoajan ilmoittamat IMAP- ja SMTP-asetukset. IMAP synkronoi palvelimella olevia viestejä: myös poistot voivat näkyä muissa laitteissa. Tarkista POP-asetusten vaikutus ennen niiden käyttämistä.
3. Ota käyttöön palveluntarjoajan määrittämä TLS-salaus ja SMTP:n kirjautuminen.
4. Testaa vastaanotto ja lähetys sekä tarkista, että lähetetyt viestit tallentuvat haluttuun kansioon.

Jos selain tai sähköpostiohjelma ilmoittaa varmennevirheestä, tarkista palvelimen nimi ja ota yhteyttä tukeen ennen jatkamista. Älä poista varmenteen tarkistusta käytöstä virheen kiertämiseksi.

Pleskissä voi olla postilaatikon yhteydessä **Mail Client Setup** -näkymä, jossa näkyvät palveluntarjoajan määrittämät asetukset. Tarkista tarvittaessa asetukset tuelta. Lisätietoa: [Pleskin sähköpostiohjelman asetukset](https://docs.plesk.com/en-US/obsidian/administrator-guide/65691/).
