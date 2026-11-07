# Minecraft-modien asentaminen

Modit muuttavat Minecraftin toimintaa. Java Editionin palvelin tarvitsee modille sopivan modilataajan, kuten Fabricin, Forgen tai NeoForgen. Pelaajien peliasennukset voivat myös tarvita samat modit.

## Tarkista yhteensopivuus

Tarkista modin lataussivulta Minecraft-versio, modilataaja, riippuvuudet ja se, tarvitaanko modi palvelimella, pelaajilla vai molemmissa. Asiakaspuolen modi ei välttämättä sovellu palvelimelle.

Jos palvelimesi **More**-valikossa on **Mod Manager**, voit etsiä modeja sen **Browse Mods** -näkymässä Modrinthista tai CurseForgesta. Tutki modin tiedot ja yhteensopivuus ennen **Install**-toimintoa. Tarkista asennuksen jälkeen konsoli ja asenna pelaajien koneille mahdollisesti tarvittavat modit. Alla on myös manuaalinen tapa.

## Asenna modi

1. Ota varmuuskopio ja pysäytä palvelin.
2. Lataa luotettavasta lähteestä palvelimen versiolle ja modilataajalle tarkoitettu moditiedosto ja sen tarvittavat riippuvuudet.
3. Siirrä tiedostot palvelimen `mods`-kansioon tiedostonhallinnalla tai [SFTP:llä](../server-management/sftp.md).
4. Käynnistä palvelin ja tarkista konsolista, että modit latautuvat. Asenna pelaajien koneille tarvittavat vastaavat versiot ja kokeile liittymistä.

Jos käynnistys epäonnistuu, pysäytä palvelin ja tarkista ensimmäinen olennainen virhe, modilataaja, versiot ja riippuvuudet. Poista viimeksi lisätty modi tarvittaessa vian rajaamiseksi. Maailmaan muutoksia tekevien modien poistaminen voi muuttaa maailmaa; säilytä varmuuskopio.

Lisätietoja: [Fabricin modien asennusohje](https://docs.fabricmc.net/players/installing-mods).
