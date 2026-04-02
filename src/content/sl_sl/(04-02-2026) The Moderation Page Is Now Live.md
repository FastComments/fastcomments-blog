---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stran za moderiranje je zdaj v živo[/postlink]

{{#unless isPost}}
Stran za moderiranje FastComments zdaj prikazuje obvestilo v realnem času, ko prispejo novi komentarji, ki ustrezajo vašim trenutnim filtriranjem.
{{/unless}}

{{#isPost}}

### Kaj je novega

Stran za moderiranje je vedno bila močno orodje za upravljanje komentarjev. Lahko ste filtrirali po statusu, iskanju po besedilu, filtrirali po strani
ali uporabniku ter izvajali množične akcije. Vendar pa ste za ogled novih komentarjev morali osvežiti stran.

To več ne drži! Stran za moderiranje zdaj prikazuje, ko prispejo novi komentarji, ki ustrezajo vašim trenutnim filtriranjem. Na vrhu seznama komentarjev se prikaže pasica, ki vam sporoča, koliko novih komentarjev čaka, in ko kliknete nanjo, se ti naložijo v vrstico brez popolne osvežitve strani.

Sporočilo "novi komentarji za vaše filtre" bi moralo biti skoraj takojšnje v večini okoliščin.

### Ocena filtriranja

Prevozna plast ocenjuje vse filtre moderiranja na strani strežnika. To vključuje filtre statusa (potrebuje pregled, potrebuje odobritev, spam, označeno,
prepovedano), filtre nizov (ID uporabnika, URL strani, domena) in celo iskanje po besedilu. Citirano besedilo, kot je <div class="code">"natančna fraza"</div>, izvaja
natančno iskanje podniza brez upoštevanja velikosti črk, medtem ko necitirana izraza izvajata nejasno iskanje brez upoštevanja velikosti črk.

To pomeni, da če filtrirate sporočila o spamu, ne boste obveščeni o odobrenih komentarjih. Če iščete komentarje,
ki vsebujejo določeno frazo, samo ujemajoči se komentarji sprožijo pasico.

### Skupine moderiranja

Če vaš račun uporablja skupine moderiranja za omejevanje, kateri moderatorji lahko vidijo katere komentarje, so te omejitve popolnoma izvršene
za obvestila v živo. Prevozna plast se vrne na aplikacijski strežnik, da ustvari filtriranje, ki vključuje omejitve skupin
na podlagi dodeljenih skupin moderatorja. Ta filter se predpomni za čas trajanja povezave WebSocket in se posodobi, kadar koli
moderator spremeni filtre.

### Zamujeni dogodki

Če se povezava moderatorja začasno prekine (težave z omrežjem, spanje prenosnika itd.), se sistem avtomatično posodobi ob ponovni povezavi, tako da
ne zamudite nobenega dela.

### Učinkovitost

To funkcionalnost smo zasnovali tako, da ima minimalen vpliv na čas nalaganja strani za moderiranje.

### Več-regionalno

Ta funkcionalnost brezhibno deluje z našo globalno distribuirano arhitekturo, tako da globalno distribuirane moderacijske ekipe dobijo enak videnje v živo.

### Na koncu

Upamo, da ta funkcionalnost moderatorjem prihrani čas in naredi izkušnjo moderiranja bolj odzivno. Kot vedno se zahvaljujemo našim strankam za
njihovo povratno informacijo in podporo.

Na zdravje!

{{/isPost}}