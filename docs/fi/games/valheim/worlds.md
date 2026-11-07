# Valheim-maailman siirtäminen

Maailmaa vaihdettaessa on säilytettävä sekä nykyinen palvelinmaailma että siirrettävän maailman kaikki tallennetiedostot. Asiakaspelaajan hahmo ja palvelimen maailma ovat eri tietoja.

1. Poistu maailmasta ja tee kopio alkuperäisestä maailmasta omalla laitteellasi. Tarkista Valheimin maailmanhallinnasta, onko käytössä paikallinen vai pilvitallennus ja että viet oikean version.
2. Pysäytä Gamehosterin palvelin ja ota siitä [varmuuskopio](./backups.md). Selvitä palvelimen todellinen tallennushakemisto palvelun asetuksista tai tuelta: paikallisen Windows- tai Linux-asennuksen oletuspolku ei välttämättä päde hallitussa palvelussa.
3. Siirrä maailmaan kuuluvat tiedostot yhdessä [SFTP:llä](../../server-management/sftp.md), säilyttäen niiden nimet ja rakenteen. Älä korvaa vanhaa maailmaa ilman palautettavaa kopiota.
4. Valitse paneelin tukemalla tavalla juuri siirretyn maailman nimi. Käynnistä palvelin ja tarkista konsolista sekä pelissä oikea maailma, rakennukset ja eteneminen.

Jos palvelin luo uuden tyhjän maailman, pysäytä se ja tarkista tiedostot, niiden sijainti sekä valittu maailman nimi. Älä poista alkuperäisiä kopioita ennen kuin uusi maailma on tarkistettu.

Lisätietoja: [Valheimin virallinen palvelinohje](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
