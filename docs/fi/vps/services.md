# Linux-palvelun tilan tarkistaminen

Monissa Linux-jakeluissa systemd hallitsee taustapalveluita. Tässä ohjeessa `palvelu` tarkoittaa oikean palveluyksikön nimeä, esimerkiksi sovelluksen dokumentaatiossa ilmoitettua nimeä.

## Tarkista ja selvitä virhe

1. Näytä tila komennolla `systemctl status palvelu`. Tarkista, onko palvelu käynnissä ja näkyykö virherivejä.
2. Tarkista tarkemmat viestit komennolla `sudo journalctl -u palvelu --since "1 hour ago" --no-pager`.
3. Vertaa viestejä viimeisimpiin asetus- ja päivitysmuutoksiin. Varmista sovelluksen asetukset ja levytila ennen uudelleenyritystä.

Palvelun voi käynnistää uudelleen komennolla `sudo systemctl restart palvelu`, mutta se keskeyttää kyseisen palvelun käyttäjät. Tee tämä vasta, kun ymmärrät vaikutuksen, ja tarkista tila uudelleen. `enable` määrittää palvelun käynnistymään järjestelmän käynnistyessä; se ei yksin korjaa virhettä.

Lisätietoja: [systemctl-käsikirja](https://www.freedesktop.org/software/systemd/man/latest/systemctl.html).
