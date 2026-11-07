# Pelisääntöjen muuttaminen

Java Editionin pelisäännöt eli gamerulet ohjaavat maailman toimintaa. Käytettävissä olevat säännöt ja niiden kirjoitusasu riippuvat Minecraft-versiosta. Tarkista oikea nimi oman version komentoavusteesta ennen muutosta.

## Tarkista ja muuta sääntö

1. Ota maailmasta [varmuuskopio](../server-management/backups.md), jos aiottu muutos vaikuttaa tärkeään peliympäristöön.
2. Anna pelin chatissa operaattorina `/gamerule` ja käytä sarkaintäydennystä nähdäksesi kyseisen version vaihtoehdot.
3. Kyselyssä anna säännön nimi ilman uutta arvoa. Aseta arvo lisäämällä sen perään version tarjoama arvo, kuten `true` tai `false`. Konsolissa jätä alun `/` pois.
4. Tarkista komennon vastaus ja testaa muutos turvallisessa paikassa.

Esimerkiksi inventaarion säilyttämistä kuollessa ohjaava sääntö oli aiemmin `keepInventory`. Java Edition 1.21.11 muutti sääntöjen nimet nimiavaruudelliseen snake_case-muotoon; tarkista oman palvelimesi tarjoama nimi. Kirjaa alkuperäinen arvo, jotta voit palauttaa sen samalla komennolla.

Maailmojen hallinta tai lisäosat voivat hallita asetuksia erikseen eri maailmoille. Tarkista aktiivinen maailma ja lisäosan ohjeet, jos muutos ei vaikuta odotetusti. Lisätietoa: [Minecraft 1.21.11:n pelisääntömuutokset](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-11).
