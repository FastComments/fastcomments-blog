---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments Pokreće AI Agente[/postlink]

{{#unless isPost}}
Sada možete postaviti AI agente koji čitaju svaki novi komentar, odgovaraju vašim glasom, eskaliraju teške odluke i dodjeljuju oznake najboljim suradnicima. Oni rade po vašem rasporedu, unutar vašeg proračuna, i rade samo ono što im dopuštate.
{{/unless}}

{{#isPost}}

### Napomena Zajednici

Želim odmah razjasniti - ne gradimo nešto što omogućava botovima da se pretvaraju da su pravi korisnici. Ovo nije nešto što smatram dobrim za internet, online zajednice ili naš smjer proizvoda. Cilj AI agenata je osnažiti timove za moderiranje ili vlasnike zajednica koji si ne mogu priuštiti posvećene moderatore.

Svi komentari koje ostavi AI moraju imati oznaku "Bot". Tako se proizvod isporučuje, a bilo koje stranice koje na bilo koji način uklone oznaku Bot s komentara botova imat će ovu funkciju onemogućenu. Također, koristimo samo LLM pružatelje koji ne treniraju na našim podacima. Trenutno koristimo DeepInfra, koji samo pruža inferenciju za modele otvorenog koda.

Sada kada je to riješeno :)

### Što je Novo

FastComments sada nudi automatizirane agente koji mogu obavljati zadatke moderiranja, označavati komentare, sažimati rasprave o komentarima i još mnogo toga.

Možete ih pronaći pod [Prilagoditi, zatim AI Agenti](https://fastcomments.com/auth/my-account/ai-agents).

### Okidači i Alati

Svaki agent je postavljen s popisom okidača i popisom dozvoljenih radnji. Okidači uključuju nove komentare, izmjene, brisanja, pragove glasanja, pragove označavanja, akcije moderatora, komentatore prve posebare i još mnogo toga. Ako ne želite da agent zabranjuje korisnike, možete isključiti alat za zabranu.

Na primjer, ako želite samo "sažimatelja rasprave" koji odgovara samo nakon određenog broja komentara i označava taj komentar, možete postaviti dozvole agenta tako da ima pristup samo tim radnjama.

Također možete ograničiti agenta na specifične obrasce URL-a kao što su `/news/*` ili `/forums/*`, i na specifične lokalitete, tako da agent za zajednicu na francuskom jeziku ne počne odgovarati na vašim engleskim stranicama.

### Suho Pokretanje, Odobrenja i Proračuni

Svaki agent se prema zadanim postavkama pokreće u režimu suhog pokretanja. U suhom pokretanju, agent čita kontekst i zapisuje što bi učinio, ali zapravo ništa ne radi. Možete promatrati nekoliko stvarnih okidača, pogledati predložene radnje i razmišljanje agenta, te odlučiti vjerujete li mu prije nego što ga aktivirate.

Za osjetljive alate, možete zahtijevati odobrenje čovjeka. Agent stavlja radnju na čekanje, administrator pregledava predloženu radnju zajedno s razmišljanjem i povjerenjem agenta, te odobrava ili odbacuje. Zabrane uvijek zahtijevaju odobrenje u EU prema DSA Članu 17, ali možete zahtijevati odobrenje za bilo koji alat, bilo gdje.

Svaki agent ima dnevni i mjesečni proračunski okvir. Kada se dostigne okvir, agent prestaje raditi dok se razdoblje ne završi. Šaljemo vam e-poštu na zadanim pragovima od 80 posto i 100 posto (također se možete prijaviti za upozorenje na 50 posto) kako ne bi bilo iznenađujućih računa.

### Memorija

Agenti imaju memoriju koju agent čita i zapisuje za sebe. Mogu spremiti kratke bilješke o korisniku ili uzorku, kao što su "opomenut za van temu tri puta" ili "spam grupa objavljuje linkove na domenu X", i čitati te bilješke pri sljedećem okidaču. Memorija se dijeli između agenata unutar vašeg najma, tako da bilješke agenta za dobrodošlicu mogu informirati odluke agenta za moderaciju kasnije. Memorija povezana s korisnikom se čisti ako oni obrišu svoj račun.

### Ponovno Pokretanje i Testiranje

Prije nego što pustite agenta na stvarni promet, možete ga pokrenuti protiv vaših povijesnih komentara. Alat za ponovno pokretanje prolazi kroz stvarne prošle komentare u režimu suhog pokretanja, pokazuje vam što bi agent učinio, i klasificira svaku predloženu radnju u odnosu na ono što se zapravo dogodilo. Ovo je najbrži način za podešavanje sistemske poruke bez čekanja na stvarne događaje.

### Mnogi, Privatnost i Troškovi

Agenti rade na otvorenim modelima težine koje hostaju pružatelji infrastrukture koji ne treniraju na podacima kupaca. Danas možete birati između bržeg modela (gpt-oss-120B-turbo) i pametnijeg, sporijeg modela (GLM 5.1), a nastavit ćemo dodavati opcije kako se situacija razvija. Trošak se mjeri po tokenu i konvertira u dolare na vašoj stranici korištenja, zajedno s dnevnim i mjesečnim trendovima.

Kao dio ove promjene, smanjujemo naše troškove tokena s 80 dolara za 1M tokena na 20 dolara za 1M kombiniranih ulaznih/izlaznih tokena. Većina naših kupaca troši vrlo malo na tokene za otkrivanje spama, budući da je izvorni sustav za otkrivanje spama temeljen na LLM-u samo trižirao do LLM-a ako spam prođe kroz klasifikator naivnog Bayesa, stoga je izvorno bio visok trošak. Smanjujemo trošak kako bismo potaknuli korištenje nove funkcionalnosti agenata.

U nekom trenutku kada troškovi memorije ponovno padnu i modeli poput GLM 5.1 budu razumniji za rad na samostalno hostanom hardveru, preći ćemo s korištenja vanjskog pružatelja i upravljati hardverom sami.

### Zaključak

Dugo smo razmišljali o tome kako to izgraditi bez da se osjeća kao da agent ima kontrolu. Suho pokretanje, odobrenja, ograničeni alati, proračunski okviri i ponovo pokretanje prema povijesti postoje kako bi vam pomogli ostati pod kontrolom. Nadamo se da AI agenti oslobađaju vaše moderatore za razgovore koji zapravo trebaju čovjeka.

Zahvaljujemo našim kupcima koji nam daju kontinuirani povratni informacij kako bismo mogli razmišljati o ovakvim idejama i također nam pružaju vrijeme da ih dobro lansiramo. Kao i uvijek, javite nam ispod ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---