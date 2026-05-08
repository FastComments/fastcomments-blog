---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments pokreće AI agente[/postlink]

{{#unless isPost}}
Sada možete pokrenuti AI agente koji čitaju svaki novi komentar, odgovaraju vašim glasom, eskaliraju teške odluke i dodeljuju bedževe najboljim saradnicima. Oni rade prema vašem rasporedu, unutar vašeg budžeta i rade samo ono što im vi dozvolite.
{{/unless}}

{{#isPost}}

### Napomena za zajednicu

Želim odmah da razjasnim - ne gradimo nešto što omogućava robotima da se pretvaraju da su pravi korisnici. Ovo nije nešto što smatram dobrim za internet, online zajednice ili naš pravac proizvoda. Cilj AI agenata je osnažiti timove za moderaciju ili vlasnike zajednica koji ne mogu priuštiti posvećene moderatore.

Svi komentari koje ostavi AI moraju imati oznaku "Bot". Ovo je način na koji se proizvod isporučuje, i bilo koji sajt koji na neki način ukloni oznaku Bot sa bot komentara imaće ovu funkciju onemogućenu. Takođe, koristimo samo LLM provajdere koji ne obučavaju na našim podacima. Trenutno koristimo DeepInfra, koji pruža samo inferenciju za modele otvorenog koda.

Sada kada je to razjašnjeno :)

### Šta je novo

FastComments sada pruža automatizovane agente koji mogu obavljati moderacione zadatke, prikvačiti komentare, sažeti komentarske niti i još mnogo toga.

Možete ih pronaći pod [Customize, then AI Agents](https://fastcomments.com/auth/my-account/ai-agents).

### Okidači i alati

Svaki agent je postavljen sa listom okidača i listom dozvoljenih akcija. Okidači uključuju nove komentare, izmene, brisanja, pragove glasanja, pragove oznaka, akcije moderatora, komentatore koji prvi put komentarišu i još mnogo toga. Ako ne želite da agent zabranjuje korisnike, možete isključiti alat za banovanje.

Na primer, ako želite samo "saživač niti" koji odgovara tek nakon određenog broja komentara i prikvači taj komentar, možete postaviti dozvole agenta tako da ima pristup samo tim akcijama.

Takođe možete ograničiti agenta na specifične URL obrasce poput `/news/*` ili `/forums/*`, i na specifične lokacije, tako da agent zajednice na francuskom jeziku ne počne da odgovara na vašim engleskim stranicama.

### Suvo pokretanje, odobrenja i budžeti

Svaki agent se po defaultu pokreće u režimu suhog pokretanja. U režimu suhog pokretanja, agent čita kontekst i piše šta bi uradio, ali zapravo ne radi ništa. Možete posmatrati nekoliko pravih okidača, pogledati predložene akcije i razloge agenta, i odlučiti da li mu verujete pre nego što ga uključite.

Za osetljive alate, možete zahtevati ljudsko odobrenje. Agent stavlja akciju u red, admin pregledava predloženu akciju zajedno sa razlozima agenta i njegovim nivoom poverenja, i odobrava ili odbija. Banovanje uvek zahteva odobrenje u EU prema DSA Članu 17, ali možete zahtevati odobrenje za svaki alat, bilo gde.

Svaki agent ima dnevni i mesečni budžetski limit. Kada se dostigne granica, agent prestaje da radi dok se period ne obnovi. Šaljemo vam email na zadanim pragovima od 80 procenata i 100 procenata (takođe možete odabrati obaveštenje na 50 procenata) tako da ne bude iznenađenja sa računima.

### Memorija

Agenti imaju memoriju koju agent čita i piše za sebe. Mogu sačuvati kratke beleške o korisniku ili obrascu, poput "opomenut zbog van teme tri puta" ili "spam grupa objavljuje linkove ka domenu X", i pročitati te beleške pri sledećem okidaču. Memorija se deli između agenata u vašem nalogu, tako da beleške agenta dobrodošlice mogu informisati odluke agenta za moderaciju kasnije. Memorija povezana sa korisnikom se čisti ako korisnik obriše svoj nalog.

### Ponovo pokreni i probno pokretanje

Pre nego što pustite agenta da deluje na stvarnom saobraćaju, možete ga pokrenuti protiv vaših istorijskih komentara. Alat za ponovo pokretanje prolazi kroz stvarne prošle komentare u režimu suhog pokretanja, pokazuje vam šta bi agent uradio i klasifikuje svaku predloženu akciju u odnosu na ono što se zapravo dogodilo. Ovo je najbrži način da se podešava sistemski poziv bez čekanja na stvarne događaje.

### Modeli, privatnost i troškovi

Agenti rade na modelima otvorenih težina koje hostuju provajderi infrastrukture koji ne obučavaju na podacima kupaca. Danas možete birati između bržeg modela (gpt-oss-120B-turbo) i pametnijeg, sporijeg modela (GLM 5.1), a nastavićemo da dodajemo opcije kako se tržište razvija. Troškovi se mere po tokenu i konvertuju u dolare na vašoj stranici za korišćenje, zajedno sa dnevnim i mesečnim trendovima.

Kao deo ove promene, smanjujemo naše troškove tokena sa 80 dolara za 1M tokena na 20 dolara po 1M kombinovanih ulaznih/izlaznih tokena. Većina naših kupaca troši veoma malo na tokene za detekciju spama, pošto je originalni sistem za detekciju spama zasnovan na LLM-u samo tlačio na LLM ako je spam prošao kroz klasifikator naivan-bayes, stoga visoki trošak prvobitno. Smanjujemo troškove kako bismo podstakli korišćenje nove funkcionalnosti agenata.

U nekom trenutku, kada troškovi memorije ponovo padnu i modeli poput GLM 5.1 postanu razumniji za rad na samostalno hostovanom hardveru, preći ćemo na korišćenje unutrašnjeg provajdera i upravljati hardverom sami.

### U zaključku

Dugo smo razmišljali o tome kako da ovo izgradimo a da ne deluje kao da agent ima kontrolu. Suvo pokretanje, odobrenja, ograničeni alati, budžetski limiti i ponovno pokretanje protiv istorije postoje kako bi vam pomogli da ostanete u kontroli. Nadamo se da AI agenti oslobađaju vaše moderatore za razgovore koji zaista zahtevaju čoveka.

Zahvaljujemo našim kupcima koji nam daju kontinuirane povratne informacije kako bismo mogli razmisliti o idejama poput ove i takođe nam daju vreme da ih dobro pokrenemo. Kao uvek, javite nam u komentarima ako otkrijete bilo kakve probleme.

Živeli!

{{/isPost}}

---