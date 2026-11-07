# Rustin kartta, tallennukset ja wipe

Rust-maailmaan kuuluvat kartta, rakennukset ja pelaajatiedot. Karttawipe ja blueprint-wipe ovat eri toimenpiteitä: ne eivät välttämättä poista samoja tietoja.

1. Kerro pelaajille, mitä on tarkoitus nollata ja milloin. Pysäytä palvelin ja tee [varmuuskopio](./backups.md) kaikista tallennuksista ja asetuksista.
2. Selvitä aktiivisen palvelimen `server.identity` ja sen tallennushakemisto. Facepunchin mukaan `*.sav` sisältää kartan tilaa ja `player.blueprints` pelaajien piirustustietoja; muutkin pelaajatiedot ja asetukset kuuluvat kokonaisuuteen.
3. Tarkista pelin päivityksen ja palveluntarjoajan ohjeista, edellytetäänkö pakotettua wipea. Kartan siemenen tai koon vaihto ei yksin ole turvallinen tapa säilyttää vanhan maailman tilaa.
4. Jos haluat uuden maailman, käytä palvelun tukemaa wipe- tai maailmanvaihtotapaa ja varmista sen vaikutus ennen vahvistamista. Säilytä vanha kopio erillään. Älä nimeä vanhaa tallennusta uudelleen kiertääksesi pakotettua wipea.
5. Käynnistä palvelin ja testaa kartta ja pelaajatiedot. Palautuksessa vanhan maailman ja palvelinversion yhteensopivuus on varmistettava.

Lisätietoja: [Facepunchin tallennus- ja wipe-ohje](https://wiki.facepunch.com/rust/Getting-Started_w-Server).

Lisätietoja: [Facepunchin Rust-palvelinohje](https://wiki.facepunch.com/rust/Creating-a-server).
