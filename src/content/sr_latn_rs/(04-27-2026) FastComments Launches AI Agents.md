[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Pokreće AI Agente[/postlink]

{{#unless isPost}}
Sada možete aktivirati AI agente koji čitaju svaki novi komentar, odgovaraju vašim tonom, eskaliraju teške odluke i dodeljuju oznake vašim najboljim doprinosiocima. Oni rade po vašem rasporedu, unutar vašeg budžeta, i rade samo ono što im dozvolite.
{{/unless}}

{{#isPost}}

### Napomena za Zajednicu

Želim ovo odmah da razjasnim - ne gradimo nešto što omogućava botovima da se pretvaraju da su pravi korisnici. Ovo nije nešto što smatram dobrim za internet, online zajednice ili pravac našeg proizvoda. Cilj AI agenata je da osnaži timove za moderaciju ili vlasnike zajednica koji ne mogu priuštiti posvećene moderatore.

Svi komentari koje ostavlja AI moraju imati oznaku "Bot". Ovo je kako proizvod funkcioniše, i bilo koje stranice koje na neki način uklone oznaku Bot sa bot komentara će imati onemogućenu tu funkciju. Takođe, koristimo samo LLM provajdere koji ne treniraju na našim podacima. Trenutno koristimo DeepInfra, koji samo pruža inferenciju za modele otvorenog koda.

Sada kada je to na mreži :)

### Šta je novo

FastComments sada pruža automatizovane agente koji mogu obavljati zadatke moderacije, označiti komentare, sažeti komentarske niti i još mnogo toga.

Možete ih pronaći pod [Prilagodi, zatim AI Agenti](https://fastcomments.com/auth/my-account/ai-agents).

### Okidači i Alati

Svaki agent se postavlja sa listom okidača i listom dozvoljenih akcija. Okidači uključuju nove komentare, izmene, brisanja, praga glasanja, praga prijava, akcije moderatora, komentatore početnike i još mnogo toga. Ako ne želite da agent zabrani korisnike, možete isključiti alat za zabranu.

Na primer, ako želite samo "sažimač niti" koji odgovara samo nakon određenog broja komentara i označava taj komentar, možete postaviti
dozvole agenta tako da ima pristup samo tim akcijama.

Takođe možete ograničiti agenta na specifične URL obrasce kao što su `/news/*` ili `/forums/*`, i na specifične jezike, tako da agent za francusku zajednicu ne počne da odgovara na vašim stranicama na engleskom.

### Probna Upotreba, Odobrenja i Budžeti

Svaki agent se podrazumevano pokreće u probnom režimu. U probnom režimu, agent čita kontekst i piše šta bi radio, ali zapravo ništa ne radi. Možete pratiti nekoliko pravih okidača, pogledati predložene akcije i logiku agenta, i odlučiti da li mu verujete pre nego što ga uključite.

Za osetljive alate, možete zahtevati ljudsko odobrenje. Agent stavlja akciju u red, administrator pregleda predloženu akciju zajedno sa logikom i poverenjem agenta, i odobrava ili odbija. Zabrane u EU uvek zahtevaju odobrenje prema DSA Članu 17, ali možete zahtevati odobrenje za bilo koji alat, bilo gde.

Svaki agent ima dnevni i mesečni limit budžeta. Kada se limit dostigne, agent prestaje sa radom dok se period ne obnovi. Šaljemo vam e-poštu na podrazumevane pragove od 80 procenata i 100 procenata (takođe se možete prijaviti za obaveštenje od 50 procenata) kako ne bi bilo neugodnih faktura.

### Memorija

Agenti imaju memoriju koju agent čita i piše za sebe. Mogu sačuvati kratke beleške o korisniku ili obrascu, poput "opomenut zbog off-topic tri puta" ili "spam grupa objavljuje linkove ka domenu X", i čitati te beleške pri sledećem okidaču. Memorija se deli među agentima u vašem najmu, tako da beleške agenta za dobrodošlicu mogu informisati odluke agenta za moderaciju kasnije. Memorija povezana sa korisnikom se čisti ako oni obrišu svoj račun.

### Reprodukcija i Probna Upotreba

Pre nego što pustite agenta na uživo, možete ga testirati na svojim istorijskim komentarima. Alat za reprodukciju prolazi kroz realne prošle komentare u probnom režimu, pokazuje vam šta bi agent radio, i klasifikuje svaku predloženu akciju u odnosu na ono što se zapravo dogodilo. Ovo je najbrži način da podesite sistemsku poruku bez čekanja na uživo događaje.

### modeli, Privatnost i Troškovi

Agenti rade na modelima otvorenog koda koje hostuju provajderi infrastrukture koji ne treniraju na podacima korisnika. Danas možete birati između bržeg modela (gpt-oss-120B-turbo) i pametnijeg, sporijeg modela (GLM 5.1), i nastavićemo da dodajemo opcije kako se situacija razvija. Trošak se meri po tokenu i konvertuje u dolare na vašoj stranici korišćenja, zajedno sa dnevnim i mesečnim trendovima.

Kao deo ove promene, smanjujemo naše troškove tokena sa $80 za 1M Tokena na $20 po 1M kombinovanih ulaz/izlaz tokena. Većina naših korisnika troši vrlo malo na tokene za detekciju spama, jer je originalni LLM sistem za detekciju spama samo trižao ka LLM ako je spam prošao pored klasifikatora naivnog bejza, otuda visoki trošak prvobitno. Smanjujemo trošak kako bismo podstakli korišćenje nove funkcionalnosti agenata.

U nekom trenutku, kada troškovi memorije ponovo padnu i modeli poput GLM 5.1 postanu razumniji za pokretanje na samohostovanoj opremi, preći ćemo sa korišćenja eksternog provajdera i pokretati hardver sami.

### Na kraju

Dugo smo razmišljali o tome kako da izgradimo ovo bez da se oseti kao da agent ima kontrolu. Probni režim, odobrenja, ograničeni alati, budžetski limiti i reprodukcija protiv istorije su tu da vam pomognu da zadržite kontrolu. Nadamo se da AI Agenti oslobađaju vaše moderatore za razgovore koji zapravo zahtevaju čoveka.

Zahvaljujemo našim korisnicima koji nam kontinuirano daju povratne informacije kako bismo mogli smisliti ovakve ideje i dati nam vremena da ih dobro lansiramo. Kao i uvek, javite nam u nastavku ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}