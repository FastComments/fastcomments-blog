[category:Features]  
[category:Moderation]  
[category:Announcements]  
###### [postdate]  
# [postlink]FastComments lansira AI agente[/postlink]  

{{#unless isPost}}  
Zdaj lahko ustvarite AI agente, ki preberejo vsak nov komentar, odgovorijo z vašim glasom, obravnavajo težke odločitve in podelijo priznanja vašim najboljšim prispevkom. Delujejo po vašem urniku, znotraj vašega proračuna in delajo samo tisto, kar dovolite.  
{{/unless}}  

{{#isPost}}  

### Obvestilo skupnosti  

Samo želim, da to odpravimo takoj na začetku - ne gradimo nečesa, kar bi botom omogočilo, da se pretvarjajo, da so pravi uporabniki. To ni nekaj, kar verjamem, da je dobro za internet, spletne skupnosti ali našo usmeritev proizvoda. Cilj AI agentov je opolnomočiti moderacijske ekipe ali lastnike skupnosti, ki si ne morejo privoščiti namenskih moderatorjev.  

Vsi komentarji, ki jih pustijo AI, morajo imeti oznako "Bot". Tako se izdelek izdaja, in katera koli spletna stran, ki nekako odstrani oznako Bot iz bot komentarskih, bo imela to funkcijo onemogočeno. Poleg tega uporabljamo samo LLM ponudnike, ki ne trenirajo na naših podatkih. Trenutno uporabljamo DeepInfra, ki zagotavlja samo inference za odprtokodne modele.  

Zdaj, ko je to odloženo :)  

### Kaj je novega  

FastComments zdaj zagotavlja avtomatizirane agente, ki lahko opravljajo moderacijske naloge, pritrjujejo komentarje, povzemajo komentarje in še več.  

Najdete jih pod [Prilagodi, nato AI Agenti](https://fastcomments.com/auth/my-account/ai-agents).  

### Trigerji in orodja  

Vsak agent je nastavljen s seznamom trigerjev in seznamom dovoljenih dejanj. Trigerji vključujejo nove komentarje, popravke, brisanja, praga glasov, praga zastave, dejanja moderatorjev, komentarje prvih uporabnikov in še več. Če ne želite, da agent prepoveduje uporabnike, lahko izključite orodje za prepoved.  

Na primer, če želite samo "povzemalnik niti", ki odgovori šele po določenem številu komentarjev in pritrdi ta komentar, lahko nastavite dovoljenja agenta tako, da se omeji samo na ta dejanja.  

Prav tako lahko omejite agenta na specifične URL vzorce, kot so `/news/*` ali `/forums/*`, in na specifične lokalitete, tako da francoski jezikovni agent skupnosti ne začne odgovarjati na vaših angleških straneh.  

### Suha izvedba, odobritve in proračuni  

Vsak agent se privzeto zažene v načinu suhe izvedbe. V načinu suhe izvedbe agent bere kontekst in zapisuje, kaj bi naredil, vendar dejansko ne naredi ničesar. Lahko spremljate nekaj realnih trigerjev, si ogledate predlagana dejanja in agentovo razoniranje ter se odločite, ali mu zaupate, preden ga preklopite na omogočeno.  

Za občutljiva orodja lahko zahtevate človekovo odobritev. Agent postavi dejanje v čakalno vrsto, skrbnik pregleda predlagano dejanje skupaj z agentovim razoniranjem in zaupnostjo ter odobri ali zavrne. Prepovedi vedno zahtevajo odobritev v EU po členu 17 DSA, vendar lahko zahtevate odobritev za katero koli orodje, kjerkoli.  

Vsak agent ima dnevni in mesečni proračunski vložek. Ko dosežete strop, agent preneha delovati, dokler se obdobje ne obnovi. Obveščamo vas ob privzetih mejah 80 odstotkov in 100 odstotkov (lahko se prijavite tudi na 50-odstotno obvestilo), da ne boste imeli presenečenj z računom.  

### Spomin  

Agenti imajo spomin, ki ga agent bere in piše zase. Lahko shranijo kratke opombe o uporabniku ali vzorcu, kot so "opozorjen zaradi izven teme trikrat" ali "spam skupina, ki objavlja povezave na domeno X", in te opombe preberejo ob naslednjem trigerju. Spomin je skupno rabljen med agenti v vašem najemu, tako da lahko opombe agenta za dobrodošlico informirajo odločitve moderacijskega agenta kasneje. Spomin, povezan z uporabnikom, se odstrani, če ta izbriše svoj račun.  

### Ponovno predvajanje in testiranje  

Preden sprostite agenta na živi promet, ga lahko preizkusite na svojih zgodovinskih komentarjih. Orodje za ponovno predvajanje prehaja skozi resnične pretekle komentarje v načinu suhe izvedbe, vam pokaže, kaj bi agent storil, in razvrsti vsako predlagano dejanje glede na to, kar se je dejansko zgodilo. To je najhitrejši način za prilagoditev sistemskega poziva, ne da bi čakali na žive dogodke.  

### Modeli, zasebnost in stroški  

Agenti delujejo na odprtih modelih teže, ki jih gostijo infrastrukturni ponudniki, ki ne trenirajo na podatkih strank. Danes lahko izbirate med hitrejšim modelom (gpt-oss-120B-turbo) in pametnejšim, počasnejšim modelom (GLM 5.1) ter nadaljujemo z dodajanjem možnosti, ko se trg razvija. Stroški se merijo na osnovi tokenov in se pretvarjajo v dolarje na vaši strani uporabe, skupaj z dnevnimi in mesečnimi trendi.  

Kot del te spremembe znižujemo naše stroške tokenov z $80 za 1M tokenov na $20 za 1M kombiniranih vhodnih/izhodnih tokenov. Večina naših strank zelo malo porabi za tokene za odkrivanje spama, saj je prvotni sistem za odkrivanje spama, temelječ na LLM, samo trižiral na LLM, če je spam prešel skozi naivno-bayesovi klasifikator, zato je bil prvotno strošek visok. Znižujemo stroške, da spodbujamo uporabo novih funkcij agentov.  

Nekje, ko se stroški spomina zopet zmanjšajo in modeli, kot je GLM 5.1, postanejo bolj razumni za delovanje na lastni strojni opremi, se bomo odmaknili od uporabe zunanjega ponudnika in sami upravljali strojno opremo.  

### Na koncu  

Dolgo smo razmišljali, kako to zgraditi, ne da bi se počutilo, da je agent v nadzoru. Suha izvedba, odobritve, omejena orodja, proračunski stropi in ponovna predvajanja zgodovine so vse to za pomoč, da ostanete pod nadzorom. Upamo, da AI agenti razbremenijo vaše moderatorje za pogovore, ki dejansko potrebujejo človeka.  

Zahvaljujemo se našim strankam, ki nam nenehno nudijo povratne informacije, da lahko razmišljamo o takšnih idejah in nam tudi dajejo čas, da jih dobro lansiramo. Kot vedno, nam sporočite spodaj, če naletite na kakršne koli težave.  

Na zdravje!  

{{/isPost}}