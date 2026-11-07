# Linux-palvelimen lokien tutkiminen

Lokit auttavat selvittämään, miksi palvelu ei käynnisty tai yhteys epäonnistuu. Seuraavat komennot koskevat järjestelmää, jossa on systemd ja journal.

## Näytä lokit

Korvaa `palvelu` oikealla palvelun nimellä:

```bash
sudo journalctl -u palvelu --since "1 hour ago" --no-pager
```

Näet viimeisimmän käynnistyksen viestit komennolla `sudo journalctl -b`. Voit seurata uusia palvelukohtaisia viestejä komennolla `sudo journalctl -u palvelu -f`; lopeta seuranta painamalla Ctrl+C.

Tarkista aikaleimat, ensimmäinen virhe ja sitä edeltävät tapahtumat. Lokien aikavyöhyke voi poiketa omastasi. Kaikki sovellukset eivät kirjoita journaliin, ja vanhemmat viestit eivät välttämättä säily uudelleenkäynnistyksen yli.

Ennen kuin lähetät lokia tukeen, poista salasanat, tokenit, avaimet ja tarpeettomat henkilötiedot. Säilytä kuitenkin virheen kannalta olennaiset rivit.

Lisätietoja: [systemd: journalctl](https://www.freedesktop.org/software/systemd/man/latest/journalctl.html).
