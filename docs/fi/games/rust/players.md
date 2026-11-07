# Rustin ylläpitäjät ja pelaajahallinta

Rust käyttää pelaajan Steam64-tunnistetta palvelimen oikeuksissa. Pelin ylläpitäjäoikeus on eri asia kuin pääsy Gamehosterin paneeliin.

1. Tunnista luotetun pelaajan oikea Steam64 ID; varmista se pelaajan kanssa. Facepunchin ohjeen `users`-komento näyttää yhdistettyjä käyttäjiä ja tunnisteita.
2. Käytä palvelinkonsolissa `ownerid`- tai `moderatorid`-komentoa valmistajan ohjeen mukaisesti oikealla tunnisteella. Anna vain tarvittava oikeustaso.
3. Pyydä pelaajaa liittymään uudelleen ja tarkista oikeustaso. Testaa hallintatoiminto hallitusti.
4. Poista oikeus tarvittaessa `removeowner`- tai `removemoderator`-komennolla. Ban- ja unban-toiminnoissa varmista aina oikea tunniste ennen komennon antamista.

Facepunchin ohjeen mukaan oikeusmuutokset tallentuvat automaattisesti nykyisessä toteutuksessa. Tarkista käytössä olevan version viestit ja säilytä `cfg`-kansion käyttäjätiedot varmuuskopiossa. Älä julkaise tunnisteita ja lokeja tarpeettomasti.

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
