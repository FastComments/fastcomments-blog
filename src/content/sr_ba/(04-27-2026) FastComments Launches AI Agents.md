[category:Features]  
[category:Moderation]  
[category:Announcements]  
###### [postdate]  
# [postlink]FastComments pokreće AI agente[/postlink]  

{{#unless isPost}}  
Sada možete pokrenuti AI agente koji čitaju svaku novu komentara, odgovaraju vašim glasom, eskaliraju teške odluke i dodeljuju bedževe najboljim doprinosiocima. Oni rade po vašem rasporedu, unutar vašeg budžeta i rade samo ono što im dozvolite.  
{{/unless}}  

{{#isPost}}  

### Napomena zajednici  

Samo želim da ovo odmah razjasnim - ne gradimo nešto što omogućava botovima da se pretvaraju da su pravi korisnici. Ovo nije nešto što smatram dobrim za internet, online zajednice ili pravac našeg proizvoda. Cilj AI agenata je osnažiti tima za moderaciju ili vlasnike zajednica koji ne mogu priuštiti posvećene moderatore.  

Svi komentari koje ostavlja AI moraju imati oznaku "Bot". Ovako se proizvod isporučuje, a bilo koji sajt koji na bilo koji način ukloni oznaku Bot iz bot komentara imaće ovu funkciju onemogućenu. Takođe, koristimo samo LLM provajdere koji ne obučavaju na našim podacima. Trenutno koristimo DeepInfra, koji samo pruža inferencu za otvorene modele.  

Sada kada je to rečeno :)  

### Šta je novo  

FastComments sada pruža automatizovane agente koji mogu izvršavati zadatke moderacije, označavati komentare, sažimati niti komentara i još mnogo toga.  

Možete ih pronaći pod [Prilagodi, zatim AI Agenti](https://fastcomments.com/auth/my-account/ai-agents).  

### Okidači i alati  

Svaki agent je podešen sa listom okidača i listom dozvoljenih akcija. Okidači uključuju nove komentare, izmene, brisanja, pragove glasanja, pragove oznaka, akcije moderatora, korisnike koji prvi put komentarišu i još mnogo toga. Ako ne želite da agent zabranjuje korisnike, možete isključiti alat za zabranu.  

Na primer, ako želite samo "sažimatelj niti" koji odgovara samo nakon određenog broja komentara i označava taj komentar, možete postaviti dozvole agenta tako da ima pristup samo tim akcijama.  

Takođe možete ograničiti agenta na specifične obrasce URL-a kao što su `/news/*` ili `/forums/*`, i na specifične lokacije, tako da agent za francuski jezik ne počne da odgovara na vašim stranicama na engleskom jeziku.  

### Suva proba, odobrenja i budžeti  

Svaki agent se pokreće u režimu suve probe prema zadanim postavkama. U suvoj probi, agent čita kontekst i piše šta bi uradio, ali zapravo ne radi ništa. Možete posmatrati nekoliko pravih okidača, pogledati predložene akcije i razumevanje agenta i odlučiti da li mu verujete pre nego što ga aktivirate.  

Za osetljive alate, možete zahtevati ljudsko odobrenje. Agent redi akciju, administrator pregleda predloženu akciju zajedno sa razlozima i poverenjem agenta i odobrava ili odbija. Zabrane uvek zahtevaju odobrenje u EU prema DSA članu 17, ali možete zahtevati odobrenje za bilo koji alat, bilo gde.  

Svaki agent ima dnevni i mesečni limit budžeta. Kada se dostigne limit, agent prestaje da radi dok se period ne završi. Poslaćemo vam email na zadatim pragovima od 80 posto i 100 posto (takođe možete odabrati upozorenje od 50 posto) kako ne bi bilo neugodnih faktura.  

### Memorija  

Agenti imaju memoriju koju agent čita i piše za sebe. Mogu sačuvati kratke beleške o korisniku ili obrascu, kao što su "opomenut zbog van teme tri puta" ili "spam grupa postavlja linkove ka domenu X", i pročitati te beleške na sledećem okidaču. Memorija se deli među agentima u vašem nalogu, tako da beleške agenta dobrodošlice mogu uticati na odluke agenta za moderaciju kasnije. Memorija povezana s korisnikom se briše ako on obriše svoj nalog.  

### Ponovno izvođenje i testiranje  

Pre nego što pustite agenta na aktivnu saobraćaj, možete ga pokrenuti protiv vaših istorijskih komentara. Alat za ponovno izvođenje prolazi kroz stvarne prošle komentare u suvoj probi, pokazuje vam šta bi agent uradio i klasifikuje svaku predloženu akciju u odnosu na ono što se zapravo desilo. Ovo je najbrži način da podesite sistemsku prompter bez čekanja na aktivne događaje.  

### modeli, privatnost i trošak  

Agenti funkcionišu na otvorenim modelima težine koje hostuju provajderi infrastrukture koji ne obučavaju na podacima kupca. Danas možete izabrati između bržeg modela (gpt-oss-120B-turbo) i pametnijeg, sporijeg (GLM 5.1), a mi ćemo nastaviti da dodajemo opcije kako se pejzaž razvija. Trošak se meri po tokenu i konvertuje u dolare na vašoj stranici za korišćenje, zajedno s dnevnim i mesečnim trendovima.  

Kao deo ove promene, smanjujemo naše troškove tokena sa $80 za 1M tokena na $20 po 1M kombinovanih ulaznih/izlaznih tokena. Većina naših kupaca troši vrlo malo na tokene za detekciju spama, jer je originalni sistem detekcije spama zasnovan na LLM-u samo preusmeravao na LLM ako je spam prošao kroz klasifikator naive-bayes, pa je prvobitno bio visok trošak. Smanjujemo troškove da bismo podstakli korišćenje nove funkcionalnosti agenata.  

U nekom trenutku kada se troškovi memorije smanje i modeli poput GLM 5.1 postanu razumniji za rad na samo-hostovanom hardveru, preći ćemo na korišćenje vlastite opreme umesto korišćenja eksternog provajdera.  

### Na kraju  

Dugo smo razmišljali o tome kako izgraditi ovo a da pritom ne ostavimo utisak da agent preuzima kontrolu. Suva proba, odobrenja, ograničeni alati, ograničenja budžeta i ponovno izvođenje protiv istorije postoje da vam pomognu da ostanete u kontroli. Nadamo se da će AI agenti osloboditi vaše moderatore za razgovore koji zapravo zahtevaju čoveka.  

Zahvaljujemo našim kupcima koji nam neprekidno daju povratne informacije kako bismo mogli razmišljati o idejama poput ove i takođe nam daju vreme da ih dobro lansiramo. Kao uvek, obavestite nas u nastavku ako otkrijete bilo kakve probleme.  

Živeli!  

{{/isPost}}