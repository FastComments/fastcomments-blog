---
[category:Features]
[category:Moderation]
###### [postdate]
# [postlink]Stran za moderacijo je zdaj aktivna[/postlink]

{{#unless isPost}}
Stran za moderacijo FastComments zdaj prikazuje obvestilo v živo, ko prispejo novi komentarji, ki ustrezajo vašim trenutnim filtrom.
{{/unless}}

{{#isPost}}

### Kaj je novega

Stran za moderacijo je bila vedno močno orodje za upravljanje komentarjev. Lahko ste filtrirali glede na status, iskali po besedilu, filtrirali po strani
ali uporabniku ter izvajali množične akcije. A da bi videli nove komentarje, ste morali osvežiti stran.

Ne več! Stran za moderacijo zdaj prikazuje, ko novi komentarji prispejo in ustrezajo vašim trenutnim filtrom. Na vrhu seznama komentarjev se prikaže pasica, ki vam pove, koliko novih komentarjev čaka, in klik nanjo jih naloži v vrstici brez popolne osvežitve strani.

Sporočilo "novi komentarji za vaše filtre" bi moralo biti skoraj takojšnje v večini okoliščin.

### Ocena filtrov

Transportna plast ocenjuje vse filtre moderacije na strežniški strani. To vključuje filtre po statusu (potrebuje pregled, potrebuje odobritev, spam, označeno,
prepovedano), filtre po nizu (ID uporabnika, URL strani, domena) in celo iskanje po besedilu. Citat besedila, kot je `"natančna fraza"`, izvaja
natančno iskanje podniza brez upoštevanja velikih in malih črk, medtem ko ne-citirana izraza izvajata neurejeno iskanje brez upoštevanja velikih in malih črk.

To pomeni, da če filtrirate za spam komentarje, ne boste obveščeni o odobrenih komentarjih. Če iščete komentarje,
ki vsebujejo določeno frazo, samo ustrezni komentarji sprožijo pasico.

### Skupine moderacije

Če vaš račun uporablja skupine moderacije za omejevanje, kateri moderatorji lahko vidijo katere komentarje, so te omejitve v celoti uveljavljene
za obvestila v živo. Transportna plast se vrne k aplikacijski strežnik, da sestavi filter, ki vključuje omejitve skupin
na podlagi dodeljenih skupin moderatorja. Ta filter se shrani v predpomnilnik za trajanje povezave WebSocket in se posodobi, kadar
moderator spremeni filtre.

### Zgrešeni dogodki

Če se povezava moderaterja začasno prekine (težave z omrežjem, spanje prenosnega računalnika itd.), se sistem samodejno posodobi ob ponovni povezavi, tako da
ne zamudite nobenega dela.

### Učinkovitost

To funkcijo smo zasnovali tako, da ima minimalen vpliv na čas nalaganja strani za moderacijo.

### Več regij

Ta funkcija brez težav deluje z našo globalno distribuirano arhitekturo, tako da globalno distribuirane moderacijske ekipe dobijo enak videnje v živo.

### V zaključku

Upamo, da ta funkcija moderatorjem prihrani čas in omogoča bolj odzivno izkušnjo moderiranja. Kot vedno se zahvaljujemo našim strankam za
njihovo povratno informacijo in podporo.

Na zdravje!

{{/isPost}}