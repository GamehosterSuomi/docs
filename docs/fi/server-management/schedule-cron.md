# Ajastuksen ajankohdan määrittäminen

Pterodactyl-tyyppinen ajastus voi käyttää cron-kenttiä. Tarkista aina paneelisi kenttien ohjeet ja aikavyöhyke: palvelimen aika ei välttämättä ole Suomen aika. Katso ensin [ajastettujen tehtävien perusteet](./schedules.md).

## Viisi tavallista kenttää

| Järjestys | Kenttä | Arvoalue |
| --- | --- | --- |
| 1 | Minuutti | 0–59 |
| 2 | Tunti | 0–23 |
| 3 | Kuukauden päivä | 1–31 |
| 4 | Kuukausi | 1–12 |
| 5 | Viikonpäivä | 0–7, sunnuntai 0 tai 7 |

Esimerkiksi `30 4 * * *` tarkoittaa joka päivä kello 04.30 käytössä olevassa aikavyöhykkeessä. Tähti tarkoittaa jokaista arvoa kyseisessä kentässä. Paneelissa arvot voidaan syöttää erillisiin kenttiin.

Kun käytät sekä kuukauden päivää että viikonpäivää, niiden yhdistämisen tapa riippuu cron-toteutuksesta; tarkista paneelin toiminta ennen käyttöä. Tarkista seuraava suoritusajankohta, jos se näytetään, ja seuraa ensimmäistä suoritusta. Kesäajan vaihdokset voivat vaikuttaa paikallisaikaan sidottuihin ajastuksiin.
