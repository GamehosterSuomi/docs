# SSH-avaimen käyttöönotto

SSH-avainpari koostuu julkisesta ja yksityisestä avaimesta. Julkinen avain lisätään palvelimelle; yksityinen avain pysyy omalla laitteellasi. Ohje koskee OpenSSH-asiakasohjelmaa.

## Luo ja lisää avain

1. Luo omalla tietokoneellasi avain komennolla `ssh-keygen -t ed25519`. Valitse tiedoston sijainti ja suojaa yksityinen avain tunnuslauseella. Älä korvaa olemassa olevaa avainta vahingossa.
2. Jos `ssh-copy-id` on käytettävissä ja nykyinen kirjautuminen toimii, kopioi julkinen avain esimerkiksi komennolla `ssh-copy-id -i ~/.ssh/id_ed25519.pub kayttaja@192.0.2.10`. Lisää tarvittaessa `-p` ja SSH-portti. Korvaa käyttäjä ja osoite omillasi.
3. Kokeile uudessa pääteikkunassa `ssh kayttaja@192.0.2.10`. Pidä vanha yhteys auki, kunnes uusi kirjautuminen onnistuu.

Jos kopiointityökalu ei ole käytettävissä, lisää julkisen `.pub`-tiedoston yksi kokonainen rivi kohdekäyttäjän `~/.ssh/authorized_keys`-tiedostoon palvelimen ohjeiden mukaisesti. Säilytä olemassa olevat avaimet. Varmista, että hakemisto ja tiedosto ovat käyttäjän omistuksessa eivätkä muiden muokattavissa.

Älä lähetä yksityistä avainta kenellekään. Älä poista salasanakirjautumista käytöstä ennen kuin olet testannut avaimen ja varmistanut vaihtoehtoisen palautustavan. Lisätietoja: [Ubuntu: OpenSSH server](https://documentation.ubuntu.com/server/how-to/security/openssh-server/).
