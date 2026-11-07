# Minecraft Java Editionin datapackit

Datapackilla voi muuttaa esimerkiksi pelin reseptejä ja toimintoja ilman varsinaista palvelinmodia. Valitse Java Editionin ja palvelimesi version kanssa yhteensopiva paketti ja tarkista sen tekijän asennusohjeet.

## Valmistelu

1. Tee [varmuuskopio](../server-management/backups.md) maailmasta ja pysäytä palvelin. Erityisesti maailman luontiin vaikuttavan datapackin poistaminen voi aiheuttaa ongelmia.
2. Selvitä käytössä olevan maailman kansio `server.properties`-tiedoston `level-name`-arvosta. Palvelinohjelmisto voi käyttää myös erillistä maailmojen hallintaa.
3. Lataa luotettavasta lähteestä yhteensopiva datapack. Tarkista mahdolliset riippuvuudet ja asennusmuoto paketin ohjeesta.

## Asenna datapack

Palvelimen **More**-valikossa voi olla **Datapacks**-näkymä. Sen saatavuus riippuu palvelimesta ja oikeuksistasi. Valitse näkymässä oikea maailma (**World**) ja tarkista Minecraft-versio. **Browse Datapacks** -välilehdellä voit hakea paketteja ja tarkistaa niiden tiedot (**Details**) sekä asentaa sopivan paketin (**Install**). Tarkista yhteensopivuus ja mahdolliset riippuvuudet paketin ohjeista. **Manage**-välilehdellä näet hallittavia paketteja.

Manuaalisesti asentaessasi siirrä paketin zip-tiedosto tai paketin ohjeen mukainen kansio aktiivisen maailman `datapacks`-kansioon [tiedostonhallinnalla](../server-management/file-manager.md) tai [SFTP:llä](../server-management/sftp.md). Varmista, ettei ylimääräinen sisäkkäinen kansio peitä paketin sisältöä. Käynnistä palvelin ja tarkista konsolista latausviestit. Konsolin komennolla `datapack list` voit tarkistaa palvelimen tunnistamat paketit.

## Jos paketti ei toimi

Tarkista oikea maailma, paketin rakenne, versio ja konsolin virheet. Jos haluat poistaa paketin, pysäytä palvelin ja noudata tekijän poisto-ohjetta; osa paketeista jättää maailmaan tietoja. Palauta tarvittaessa ennen asennusta otettu varmuuskopio.
