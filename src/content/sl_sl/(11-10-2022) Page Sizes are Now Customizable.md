---
[category:UI & Customization]

###### [postdate]
# [postlink]Velikosti strani so zdaj prilagodljive[/postlink]

{{#unless isPost}}
FastComments je imel od lansiranja fiksno velikost strani 30 komentarjev. To je zdaj prilagodljivo!
{{/unless}}

{{#isPost}}

### Kaj je novega

Vaši komentarji zdaj lahko imajo različne velikosti paginacije, to pa je zdaj mogoče prilagoditi globalno v vašem računu, ali na ravni
spleta, ali celo strani. To je lahko zaželeno, če želite, da se na določenih straneh prikaže manj ali več komentarjev, preden mora uporabnik
paginirati.

To vpliva tudi na neskončno pomikanje, pa tudi na vse okvire ali integracije, ki prikazujejo komentarje iz FastComments.

Velikosti strani se lahko gibljejo od `10` do `200`. Privzeta velikost ostaja `30`.

### Kako to dobiti

Preprosto pojdite na zanesljivo [Uporabniško vmesnik za prilagajanje pripomočka](https://fastcomments.com/auth/my-account/customize-widget) in določite
velikost strani.

Upoštevajte, da FastComments vnaprej izračuna komentarje, prikazane na vsaki strani, zato bo sprememba tega parametra povzročila, da naš sistem
ponovno izračuna vse vaše komentarje. To ne bo povzročilo nobenih zastojev, lahko pa traja nekaj minut, da se sprememba prikaže.

### Dokumentacija

Posodobljena dokumentacija o velikostih strani je na voljo na [docs.fastcomments.com](https://docs.fastcomments.com/guide-customizations-and-configuration.html#page-size).

### Prelomne spremembe

Kot del te spremembe sta bili dve prevodi, definirani v pripomočku za komentarje, preimenovani. `PREV_30` in `NEXT_30` sta zdaj
`PREV` in `NEXT`, ustrezno, in vsebujeta spremenljivko `[count]`.

Če ste že definirali prevode za gumbe paginacije preko Uporabniškega vmesnika za prilagajanje pripomočka, smo te že prenesli 
za vas. Če prevode prenašate v neki vrsti integracije preko kode, jih boste morali posodobiti:

- `PREV_30` -> `PREV`
- `NEXT_30` -> `NEXT`

### Na koncu

Kot pri vseh večjih izdajah smo veseli, da smo imeli čas za optimizacijo, testiranje in pravilno izdajo te funkcije. Sporočite nam
spodaj, če naletite na kakršne koli težave.

Na zdravje!

{{/isPost}}

---