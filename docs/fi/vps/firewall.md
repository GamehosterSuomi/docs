# Linux-palvelimen palomuuri

Palomuuri rajoittaa palvelimeen tulevaa liikennettä. Selvitä sovellustesi portit ja protokollat sekä nykyinen palomuurikokoonpano ennen muutoksia. Tässä esimerkissä käytetään UFW:tä Ubuntu-palvelimella; se ei ole ainoa palomuurityökalu.

## Tarkista ennen käyttöönottoa

1. Varmista varayhteys tai palautusmahdollisuus siltä varalta, että SSH-yhteys katkeaa. Pidä nykyinen yhteys auki.
2. Tarkista nykyiset säännöt komennolla `sudo ufw status verbose`.
3. Salli käytössä oleva SSH-portti ennen palomuurin käyttöönottoa. Jos SSH käyttää porttia 22 ja TCP-protokollaa, esimerkki on `sudo ufw allow 22/tcp`. Korvaa portti palvelimesi todellisella portilla.
4. Lisää vain sovellusten tarvitsemat säännöt niiden ohjeiden mukaan ja ota UFW käyttöön komennolla `sudo ufw enable`.
5. Tarkista säännöt uudelleen ja kokeile uutta SSH-yhteyttä toisesta pääteikkunasta ennen vanhan sulkemista.

Myös muu palomuuri tai palveluntarjoajan verkkosäännöt voivat vaikuttaa yhteyksiin. Älä poista olemassa olevia sääntöjä selvittämättä niiden tarkoitusta.

Lisätietoja: [Ubuntu: Firewall](https://documentation.ubuntu.com/server/how-to/security/firewalls/).
