# Tiedostojen siirto Linux-VPS:lle

SFTP käyttää SSH-yhteyttä tiedostojen siirtämiseen. Tarvitset palvelimen osoitteen, SSH-portin ja käyttäjätunnuksen sekä käyttäjälle määritellyn salasanan tai avaimen. Palvelimella on oltava SFTP-tuki.

## Yhdistä SFTP-ohjelmalla

1. Avaa SFTP-asiakas, esimerkiksi FileZilla tai WinSCP, ja valitse protokollaksi SFTP.
2. Syötä VPS:n osoite, SSH-portti ja käyttäjätunnus. Valitse tilin kirjautumistapa.
3. Tarkista palvelimen avaimen sormenjälki luotettavaa lähdettä vasten ennen sen hyväksymistä.
4. Siirrä tiedostot ensin käyttäjälle sallittuun hakemistoon. Varmista kohdepolku ja tarkista tiedostot siirron jälkeen.

Jos tiedostoa ei voi kirjoittaa kohteeseen, tarkista käyttäjän oikeudet ja sovelluksen asennusohje. Älä muuta järjestelmän hakemistoja kaikille kirjoitettaviksi. Suurissa siirroissa varmista vapaa levytila ja vältä käynnissä olevan tietokannan tiedostojen kopiointia varmuuskopiona.
