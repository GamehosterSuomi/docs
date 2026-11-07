# Valheimin pelaajien oikeudet ja kiellot

Valheimin palvelinohjeessa on erilliset `adminlist.txt`, `bannedlist.txt` ja `permittedlist.txt` -tiedostot. Niiden sijainti riippuu käytettävästä tallennuspolusta; tarkista Gamehosterin palvelukohtainen sijainti ennen muokkausta.

1. Pysäytä palvelin ja varmuuskopioi oikeuslistat. Selvitä pelaajan oikea Platform User ID pelin pelaajatiedoista tai palvelimen lokista; käytä palvelinohjeen mukaista koko tunnistetta ja kirjainkokoa.
2. Lisää yksi tunniste riville oikeaan listaan: ylläpitäjät, estetyt tai sallitut. Anna ylläpito-oikeus vain luotetulle henkilölle.
3. Tallenna, käynnistä ja testaa oikeus asianomaisella käyttäjällä. Valmistajan mukaan henkilön lisääminen sallittujen listalle rajoittaa muiden pääsyä, joten varmista ensin, että kaikki halutut pelaajat ovat listalla.

Valheimin ohje mainitsee pelin ylläpitokomentojen joukossa `kick`, `ban`, `unban` ja `banned`. Komentojen käyttöoikeudet ja tunnisteet kannattaa tarkistaa käytössä olevan version ohjeesta. Paneelin alikäyttäjäoikeus on erillinen pelin ylläpitäjäoikeudesta.

Lisätietoja: [Valheimin virallinen palvelinohje](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
