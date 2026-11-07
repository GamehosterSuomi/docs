# Muistivirheen selvittäminen

Muistivirhe tai äkillinen pysähtyminen voi johtua useasta syystä. Minecraftin `OutOfMemoryError` on hyödyllinen johtolanka, mutta pelkkä korkea muistilukema ei todista virheen syytä.

1. Tallenna konsolin virheilmoitus ja tarkista, tapahtuuko virhe käynnistyksessä vai tietyn toiminnon aikana.
2. Vertaa muistinkäyttöä palvelusi rajaan ja selvitä viimeksi lisätyt modit tai lisäosat. Tarkista niiden yhteensopivuus ja riippuvuudet.
3. Pysäytä palvelin ja ota varmuuskopio ennen muutoksia. Rajaa ongelmaa poistamalla äskettäinen muutos käytöstä vain, jos tiedät sen vaikutukset.
4. Tarkista Java-käynnistysasetukset palveluntarjoajan ja ohjelmiston ohjeista. Prosessi tarvitsee muistia myös Java-keon ulkopuolella; koko palvelun muistirajaa ei pidä varata keolle.
5. Testaa ja seuraa käyttöä vastaavassa tilanteessa. Jos prosessi päättyy ilman selittävää lokia, pyydä tuelta apua syyn selvittämiseen.

Lisätietoa: [Paperin vianmääritys](https://docs.papermc.io/paper/basic-troubleshooting/).
