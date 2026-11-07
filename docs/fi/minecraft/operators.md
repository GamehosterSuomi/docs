# Minecraft-pelaajien oikeudet ja operaattorit

Operaattori eli OP voi käyttää palvelimen hallintakomentoja. Anna oikeudet vain henkilöille, joihin luotat. Alla olevat esimerkit koskevat Java Editionia; lisäosat voivat muuttaa oikeuksien toimintaa.

Palvelimen **More**-valikossa voi olla myös **Player Manager**. Sen käytettävissä olevat toiminnot voivat vaihdella palvelimen mukaan.

## Lisää ja poista operaattori

1. Avaa käynnissä olevan palvelimen konsoli hallintapaneelissa.
2. Kirjoita `op PelaajanNimi` ja korvaa esimerkki pelaajan tarkalla käyttäjänimellä.
3. Tarkista konsolin vastaus ja pyydä pelaajaa kokeilemaan tarvitsemaansa komentoa.
4. Poista oikeus tarvittaessa komennolla `deop PelaajanNimi`.

Konsolikomennoissa ei yleensä käytetä alun `/`-merkkiä; pelin keskusteluikkunassa sitä käytetään. Konsolista annettu komento ei edellytä, että olet itse pelissä operaattori.

## Rajaa liittyminen sallittuihin pelaajiin

Java-palvelimella voit lisätä pelaajan komennolla `whitelist add PelaajanNimi` ja ottaa listan käyttöön komennolla `whitelist on`. Tarkista lista komennolla `whitelist list` ja poista pelaaja komennolla `whitelist remove PelaajanNimi`. Lisää myös ylläpitäjät listalle ennen käyttöönottoa, jos heidän on tarkoitus liittyä palvelimelle.

Sallittujen lista rajoittaa liittymistä; se ei anna hallintaoikeuksia. Java-peruspalvelimella operaattori voi liittyä ilman listamerkintää, joten tarkista operaattorit erikseen. Lisätietoja komennoista: [Minecraftin komento-opas](https://www.minecraft.net/en-us/article/minecraft-commands).
