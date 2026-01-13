---
[category:API & Development]
###### [postdate]
# [postlink]Posodobitev menija za komentarje[/postlink]

{{#unless isPost}}
Ta posodobitev je namenjena predvsem razvijalcem, ki prilagajajo FastComments. Naredili smo nekaj sprememb v API-ju in optimizacij.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Ta članek vsebuje tehnični izraz

### Kaj je novega

Nekateri najemniki FastComments prilagajajo pripomoček za komentarje. To ustvarja pogodbo
med vašimi prilagoditvami in našo implementacijo. Trudimo se, da te pogodbe ne bi prekinili,
vendar pa imamo kot del tega obvestila manjšo prelomno spremembo.

### Za razvijalce

CSS selektor za meni komentarjev je bil spremenjen.

Stari:

    .comment .menu .menu-content

Nov:

    .menu-content

### Obstoječi najemniki

Če že uporabljate selektor "menu-content" - čestitke! Pregledali smo vse naše
najemnike, ki uporabljajo ta selektor, in posodobili njihove konfiguracije pripomočkov, da bi preprečili prekinitev.

Sporočite nam, če imate kakšne težave.

### Razlogi

Odkar je bil ustvarjen pripomoček za komentarje, je bil meni komentarjev zgolj padajoči seznam
s pogonom na CSS. To je preprost in hiter način za implementacijo padajočega menija, ki tudi ne zahteva veliko kode - oblikovalski cilj FastComments.

Vendar pa je skozi leta prinesel težave.

Ena izmed njih je, da je dostop do menija na dnu težaven, ko ima območje komentarjev določeno višino in je pomično, kot pri Streaming Chats, 
saj se bo meni trudil iti izven območja pomičnih vsebin. To naredi del menija neviden in zahteva, da 
premaknete miško in ponovno preletite meni, da bi naredili kar ste želeli. Menili smo, da je to frustrirajoče za uporabo.

Nekatere rešitve so bile narejene, kot je obrnjena smer menija **navzgor**, 
vendar to ne deluje, če višina pripomočka ni dovolj visoka in je v meniju veliko akcijskih 
elementov - kot za skrbnike. V tem primeru bi bilo idealno, da se meni spusti 
mimo območja pomičnih vsebin.

### Prednosti velikosti

Ena prednost te spremembe je, da smo lahko veliko kode abstrahirali v asinhronsko nalagalni 
modul. To nam bo omogočilo širitev dejanj, ki jih lahko izvedete na podatkih o komentarjih, brez povečanja 
začetne obremenitve pripomočka. To uvaja omrežni klic prvič, ko preletite 
meni za urejanje, vendar je začetni paket zelo majhen (< 1kb), tako da ne bi smelo biti zelo opazno.

Zelo je težko nadaljevati z razvojem programske opreme in hkrati zmanjšati njeno velikost. Običajno programska oprema 
začne hitro in postane počasna. Zato smo vedno veseli, da ohranjamo FastComments hitre:

    Pred: 28.76kb gzipped (108.02kb skupaj)
    Po: 28.39kb gzipped (105.79kb skupaj)

Manj kode je tudi manj kode za vaš brskalnik za obdelavo ob nalaganju strani. Učinek tega se bo povečal, ko se dodajo nove funkcionalnosti.

### Prednosti zmogljivosti

Stari meni je prikazal vse menijske elemente in naložil vse razširitve, da bi videl, ali imajo razširitve
elemente za dodajanje, in jih tudi prikazal - za vsak komentar - tako da je bila vsebina pripravljena za vašo miškino kazalko.

Običajno je le 30 - 100 objektov, zato to ponavadi ni velika težava, vendar se je učinek povečeval. Nov sistem to skrb odstrani,
saj se meni zdaj prikazuje le na zahtevo.

Zamenjava je, da je novi meni postavljen in prikazan z uporabo JS, da dosežemo željeni rezultat. 
Nadaljevali bomo z optimizacijo, kjer lahko, vendar trenutno deluje dobro.

### V zaključku

Hvala našim strankam za potrpljenje pri uvajanju teh sprememb. Upamo, da
boste še naprej ljubili FastComments.

Na zdravje!

{{/isPost}}