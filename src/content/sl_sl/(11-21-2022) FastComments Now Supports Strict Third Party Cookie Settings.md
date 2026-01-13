---
[category:Security]

###### [postdate]
# [postlink]FastComments zdaj podpira stroga pravila o piškotkih tretjih oseb[/postlink]

{{#unless isPost}}
Do sedaj je FastComments zahteval omogočene piškotke tretjih oseb, da bi lahko v celoti deloval. To več ne velja!
{{/unless}}

{{#isPost}}

### Kaj je novega

Onemogočanje piškotkov tretjih oseb privzeto postaja norma v brskalnikih, osredotočenih na zasebnost. Primer tega je Appleov Safari na iOS, kjer
če pustite svoj e-poštni naslov za komentiranje s FastComments, potrdite ta komentar in se nato vrnete na to stran, da pustite še en komentar ali odgovorite
nekomu, boste opazili, da bodo vsi nadaljnji komentarji označeni kot nepotrjeni.

To se bo zgodilo le z privzetim nastavitvami, ki na komentarjih prikazujejo oznako `Nepotrjeno`. Vendar pa to lahko vpliva na druge stvari, kot so samodejna odobritve,
če so samodejne odobritve omogočene le za potrjene komentarje.

Kot si lahko predstavljate, lahko to povzroči frustrirajuče vedenje, kjer uporabnik potrdi svoj komentar, klikne "Ohrani me prijavljenega", in
kljub temu ni prijavljen, ko obišče vašo spletno stran ali aplikacijo. Upoštevajte, da to ne velja za integracije SSO, saj SSO ne
odvisna od piškotkov.

Zdaj, z novo nastavitvijo, ki jo je mogoče omogočiti, imenovano `Omogoči pojavna okna piškotkov tretjih oseb` v nastavitvah pripomočkov, je ta težava rešena s
odpiranjem pojavnega okna, ki pridobi piškotek uporabnika. Zaenkrat se to zgodi le, če interagirajo s pripomočkom za komentarje, vendar je rezultat, da
bo komentar objavljen iz njihove seje FastComments.com, kar bo označilo njihov komentar kot potrjen, in tako naprej.

### Kako to pridobiti in dokumentacija

Vsi kupci FastComments na vseh ravneh zdaj imajo dostop do te funkcije. Oglejte si [dokumentacijo](https://docs.fastcomments.com/guide-customizations-and-configuration.html#enable-third-party-cookie-bypass), da izveste, kako omogočiti obhod piškotkov tretjih oseb.

### Na koncu

Kot pri vseh večjih izdajah smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če odkrijete kakršne koli težave.

Na zdravje!

{{/isPost}}

---