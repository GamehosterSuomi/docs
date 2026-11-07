# Valheim-maailman varmuuskopiointi

Valheim luo omia maailman varmuuskopioita, mutta niiden säilytysmäärä ja sijainti riippuvat käynnistysasetuksista. Paneelin varmuuskopio ja erillinen ladattu kopio tuovat lisää palautusvaihtoehtoja.

1. Ilmoita pelaajille katkosta, pysäytä palvelin hallitusti ja odota sammumista, jotta maailma ei ole kirjoitettavana.
2. Tee paneelin [varmuuskopio-ohjeen](../../server-management/backups.md) mukainen kopio. Tarkista ennen luontia, ettei maailmakansiota ole rajattu pois ja että kopio valmistuu.
3. Varmista palvelukohtainen tallennuspolku: Valheimin `-savedir` voi siirtää maailman ja oikeuslistat oletuspolusta. Jos tiedot ovat paneelin varmuuskopion ulkopuolella, selvitä erillinen kopiointi tuelta.
4. Säilytä tarpeen mukaan erillinen kopio ja merkitse maailman nimi, versio ja aika. Testaa palautus erillisessä ympäristössä, jos mahdollista.

Palautus korvaa tilanteen valitun ajankohdan tiedoilla. Tallenna nykytila ennen palautusta ja tarkista sekä maailma että oikeuslistat sen jälkeen. Hahmotallennukset voivat sijaita pelaajien laitteilla tai pilvessä palvelinmaailmasta erillään.

Lisätietoja: [Valheimin virallinen palvelinohje](https://www.valheimgame.com/support/a-guide-to-dedicated-servers/).
