# Alikäyttäjät ja käyttöoikeudet

Alikäyttäjille voit antaa rajatun pääsyn jakamatta omaa käyttäjätiliäsi. Toiminnon saatavuus ja käyttöoikeuksien nimet riippuvat palvelusta.

1. Kirjaudu [paneeliin](https://panel.gamehoster.fi), valitse palvelin ja avaa **Users**, jos se on käytettävissä. Valitse **New user**.
2. Anna henkilön sähköpostiosoite, valitse vain tarvittavat käyttöoikeudet, tarkista osoite ja valitse **Invite user**.
3. Pyydä henkilöä kirjautumaan omalla tilillään ja tarkistamaan pääsyn toimivuus.

Konsolin katselu, komentojen lähettäminen, palvelimen pysäyttäminen ja tiedostojen muokkaaminen ovat erillisiä käyttöoikeuksia. Varmuuskopion lataaminen voi paljastaa kaikki sen sisältämät tiedot. Palauttaminen ja poistaminen voivat muuttaa tai tuhota tiedostoja. Myös SFTP-yhteys edellyttää sopivia tiedosto-oikeuksia. **File / Read** sallii hakemistojen luetteloinnin, kun taas **Read-content** tarvitaan tiedostojen sisällön lukemiseen tai lataamiseen.

Tarkista käyttöoikeudet säännöllisesti ja poista tarpeettomat oikeudet. Älä jaa salasanoja tai SFTP-tunnuksia. Katso [Pterodactylin käyttöoikeudet](https://github.com/pterodactyl/panel/blob/1.0-develop/app/Models/Permission.php).
