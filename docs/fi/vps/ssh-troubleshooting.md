# SSH-yhteyden vianmääritys

SSH-virheen tarkka teksti auttaa erottamaan verkkoyhteyden ja kirjautumisen ongelmat. Varmista ensin, että VPS on käynnissä ja että käytät sen oikeaa osoitetta, porttia ja käyttäjää.

## Rajaa ongelma

1. Aikakatkaisu voi johtua esimerkiksi palomuurista, väärästä osoitteesta tai verkkohäiriöstä. Tarkista osoite, portti ja mahdolliset palvelimen sekä palveluntarjoajan verkkosäännöt.
2. `Connection refused` tarkoittaa, että yhteysyritys torjuttiin. Tarkista esimerkiksi, kuunteleeko SSH-palvelu oikeassa portissa, jos sinulla on vaihtoehtoinen hallintayhteys.
3. `Permission denied` liittyy kirjautumiseen. Tarkista käyttäjätunnus, oikea avain tai salasana ja palvelimen SSH-asetukset. Älä toista kirjautumisyrityksiä rajattomasti.
4. Jos palvelimen avaimen sormenjälki on muuttunut, varmista muutoksen syy luotettavasta lähteestä ennen uuden avaimen hyväksymistä.

Kokeile tarvittaessa toisesta verkosta. Jos sinulla on turvallinen vaihtoehtoinen hallintayhteys, tarkista SSH-palvelun tila ja lokit käyttöjärjestelmän ohjeiden mukaan. Jos et pääse palvelimelle, kerro tuelle virheilmoitus, ajankohta, osoite ja portti sekä viimeisimmät verkko- tai SSH-asetusten muutokset. Älä lähetä salasanaa tai yksityistä avainta.
