# Palvelinkuvakkeen lisääminen

Java Editionin palvelinlistassa näkyvä kuvake on palvelimen juurihakemiston `server-icon.png`. Kuvan on oltava PNG-muotoinen ja kooltaan 64 × 64 pikseliä.

## Lisää kuvake

1. Valmistele neliönmuotoinen kuva ja tallenna siitä 64 × 64 pikselin PNG-tiedosto nimellä `server-icon.png`. Tarkista, ettei tiedoston loppuun tullut toista päätettä.
2. Pysäytä palvelin. Jos vanha kuvake on tärkeä, lataa siitä kopio tietokoneellesi.
3. Siirrä tiedosto palvelimen juurihakemistoon, samaan hakemistoon jossa `server.properties` sijaitsee. Käytä [tiedostonhallintaa](../server-management/file-manager.md) tai [SFTP:tä](../server-management/sftp.md).
4. Käynnistä palvelin ja päivitä palvelinlista Minecraftissa. Tarkista tarvittaessa konsolin ilmoitukset.

Jos kuvake ei näy, varmista tiedoston nimi, todellinen PNG-muoto, mitat ja sijainti. Kokeile päivittää palvelinlista tai käynnistää peli uudelleen. Kuvake on eri asia kuin palvelimen viesti eli `motd`.
