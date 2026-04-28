[category:Features]  
[category:Moderation]  
[category:Announcements]  
###### [postdate]  
# [postlink]FastComments Pokreće AI Agente[/postlink]

{{#unless isPost}}  
Sada možete pokrenuti AI agente koji čitaju svaki novi komentar, odgovaraju vašim rečima, eskaliraju teške odluke i dodeljuju bedževe vašim najboljim doprinosiocima. Oni rade prema vašem rasporedu, unutar vašeg budžeta i rade samo ono što im dozvolite.  
{{/unless}}  

{{#isPost}}  

### Poruka Zajednici  

Samo želim odmah da razjasnim - ne gradimo nešto što omogućava botovima da se pretvaraju da su pravi korisnici. To nije nešto što smatram dobrim za internet, online zajednice ili pravac našeg proizvoda. Cilj sa AI agentima je osnažiti timove za moderaciju ili vlasnike zajednica koji ne mogu priuštiti posvećene moderatore.  

Svi komentari koje ostavlja AI moraju imati oznaku "Bot". Tako se proizvod isporučuje, a bilo koji sajt koji na neki način ukloni oznaku Bot iz komentara botova imaće ovu funkciju onemogućenu. Takođe, koristimo samo LLM provajdere koji ne treniraju na našim podacima. Trenutno koristimo DeepInfra, koji pruža samo inferenciju za open source modele.  

Sada kada je to jasno :)  

### Šta je Novo  

FastComments sada pruža automatske agente koji mogu obavljati zadatke moderacije, pinovati komentare, sažimati teme komentara i još mnogo toga.  

Možete ih pronaći pod [Customize, then AI Agents](https://fastcomments.com/auth/my-account/ai-agents).  

### Okidači i Alati  

Svaki agent je postavljen sa listom okidača i listom dozvoljenih akcija. Okidači uključuju nove komentare, izmene, brisanja, pragove glasanja, pragove označavanja, akcije moderatora, prve komentatore i još mnogo toga. Ako ne želite da agent zabranjuje korisnike, možete isključiti alat za zabranu.  

Na primer, ako želite samo "sažimač teme" koji odgovara samo nakon određenog broja komentara i pinuje taj komentar, možete postaviti dozvole agenta tako da on ima pristup samo tim akcijama.  

Takođe možete ograničiti agenta na specifične URL obrasce poput `/news/*` ili `/forums/*`, i na specifične jezike, tako da agent za francusku zajednicu ne počne da odgovara na vašim engleskim stranicama.  

### Suvi Proba, Odobrenja i Budžeti  

Svaki agent se podrazumevano pokreće u režimu suve probe. U režimu suve probe, agent čita kontekst i piše šta bi uradio, ali zapravo ništa ne radi. Možete posmatrati nekoliko pravih okidača, pogledati predložene akcije i razmišljanje agenta, i odlučiti da li mu verujete pre nego što ga uključite.  

Za osetljive alate, možete zahtevati ljudsko odobrenje. Agent stavlja akciju u red, administrator pregledava predloženu akciju zajedno sa razmišljanjem agenta i njegovim uverenjem, i odobrava ili odbija. Zabrane uvek zahtevaju odobrenje u EU prema DSA Članu 17, ali možete zahtevati odobrenje za bilo koji alat, bilo gde.  

Svaki agent ima dnevni i mesečni plafon budžeta. Kada se dostigne plafon, agent prestaje sa radom sve dok se period ne obnovi. Šaljemo vam email na podrazumevane praga od 80 procenata i 100 procenata (takođe možete se prijaviti za upozorenje na 50 procenata) kako ne bi bilo iznenađujućih faktura.  

### Memorija  

Agenti imaju memoriju kojoj agent čita i piše za sebe. Mogu sačuvati kratke beleške o korisniku ili obrascu, poput "opomenut zbog van teme tri puta" ili "spam grupa postavlja linkove na domen X", i čitati te beleške pri sledećem okidaču. Memorija se deli između agenata u vašem najmu, tako da beleške agenta dobrodošlice mogu obavestiti odluke agenta za moderaciju kasnije. Memorija povezana sa korisnikom se briše ako obrišu svoj nalog.  

### Ponovno Igranje i Testiranje  

Pre nego što pustite agenta na uživo saobraćaj, možete ga pokrenuti protiv svojih istorijskih komentara. Alat za ponovno igranje prolazi kroz stvarne prošle komentare u režimu suve probe, pokazuje vam šta bi agent uradio, i klasifikuje svaku predloženu akciju u poređenju sa onim što se zapravo desilo. Ovo je najbrži način da podesite sistemski prompt bez čekanja na uživo događaje.  

### modeli, Privatnost i Troškovi  

Agenti rade na modelima sa otvorenim težinama koje hostuju infrastrukturni provajderi koji ne treniraju na podacima korisnika. Danas možete birati između bržeg modela (gpt-oss-120B-turbo) i pametnijeg, sporijeg (GLM 5.1), i nastavićemo dodavati opcije kako se pejzaž razvija. Trošak se meri po tokenu i konvertuje u dolare na vašoj stranici korišćenja, zajedno sa dnevnim i mesečnim trendovima.  

Kao deo ove promene, smanjujemo troškove naših tokena sa $80 za 1M Tokena na $20 po 1M kombinovanih ulaznih/izlaznih tokena. Većina naših kupaca troši vrlo malo na tokene za detekciju spama, pošto originalni LLM-bazirani sistem detekcije spama je samo trijažirao na LLM ako je spam prošao pored naive-bayes klasifikatora, stoga je i visok trošak prvobitno bio. Smanjujemo trošak kako bismo podstakli korišćenje nove funkcionalnosti agenata.  

U nekom trenutku, kada se troškovi memorije vrate natrag i modeli poput GLM 5.1 postanu razumniji za rad na samostalnom hardveru, preći ćemo sa korišćenja spoljnog provajdera i raditi hardver sami.  

### U Zaključku  

Dugo smo razmišljali o tome kako da ovo izgradimo bez osećaja da je agent zadužen. Suva proba, odobrenja, ograničeni alati, plafoni budžeta i ponovno igranje kroz istoriju postoje da vam pomognu da ostanete u kontroli. Nadamo se da AI Agenti oslobađaju vaše moderatore za razgovore kojima zaista treba ljudski pristup.  

Zahvaljujemo se našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmišljati o idejama poput ove i takođe posvetiti vreme da ih dobro pokrenemo. Kao i uvek, javite nam u komentarima ispod ako otkrijete bilo kakve probleme.  

Živeli!  

{{/isPost}}