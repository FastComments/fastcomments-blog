[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Komentari su sada prevedeni za svakog čitaoca[/postlink]

{{#unless isPost}}
FastComments sada može da prevodi same komentare, a ne samo vidžet oko njih. Uključite ga po sajtu ili po stranici, automatski ili pomoću dugmeta Translate, i svaki čitač vidi razgovor na svom jeziku, a original je na jedan klik udaljen.
{{/unless}}

{{#isPost}}

### What's New

FastComments je već neko vreme preveden na dvadeset osam jezika, tako da dugmad, oznake i e‑mailovi već prikazuju jezik čitaoca. Komentari nisu. Španski komentar na engleskoj stranici ostao je španski, i svako ko ga nije pročitao nastavio je da skroluje.

Ovo izdanje dodaje **Comment Translation**. Kada je uključeno, komentar napisan na jeziku koji se razlikuje od jezika čitaoca prikazuje se preveden, sa malom linijom ispod koja navodi odakle je potekao i linkom **Show original** da biste videli šta je zaista napisano.

<img src="images/fc-comment-translation-auto.png" alt="Engleski čitač vidi španski komentar preveden, sa linijom Prevedeno sa španskog i linkom Show original ispod njega" title="Automatsko prevođenje komentara" class="lozad" />

### Two Modes

**Automatic** prevodi unapred. Svaki komentar na drugom jeziku dolazi preveden, a čitač može da prebacuje na original ako to želi. Ovo je režim za zajednicu koja zaista piše na dva ili više jezika i želi da svi čitaju isti razgovor.

**Manual** dodaje link **Translate** svakom komentaru i ne radi ništa dok se ne klikne. Čitač odlučuje koji komentari vredi prevesti, i ništa se ne troši na one o kojima niko ne pita. Komentar koji je već na jeziku čitaoca to i navodi umesto da se lažno pretvara da je preveden.

<img src="images/fc-comment-translation-manual.png" alt="Ručni režim, gde je španski komentar preveden klikom, a engleski komentar izveštava da je već na jeziku čitaoca" title="Ručno prevođenje komentara" class="lozad" />

U oba režima je jezik čitaoca onaj koji vidžet već prikazuje: **Locale / Language** koji ste postavili u pravilu prilagođavanja, ili jezik pregledača posetioca ako niste postavili nijedan. Posetilac ne mora ništa da instalira, registruje se ili konfiguriše. Radi isto bez obzira da li je vidžet ugrađen u vašu stranicu, unutar alata za izgradnju sajta poput Google Sites, ili na samostalnoj FastComments stranici za komentare.

### Turning It On

Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, pronađite **Comment Translation** odmah ispod **Locale / Language**, i izaberite Automatic ili Manual. Po defaultu je isključeno.

Pošto se nalazi u pravilu prilagođavanja, možete ga primeniti kako god želite: na celom sajtu, na jednom domenu ili na jednoj stranici gde znate da je publika mešovita. To je podešavanje na serveru, pa se ne može uključiti samo iz JavaScript konfiguracije vidžeta.

### What It Costs

Prevodi se proizvode pomoću jezičkog modela i naplaćuju se kao LLM tokeni, isti način kao i [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Svaki plan može da ga uključi.

Svaki komentar se prevede jednom po jeziku i prevod se čuva uz komentar. Ako hiljadu španskih čitalaca otvori isti engleski razgovor, posao prevođenja se obavi jednom. Tipičan komentar je nekoliko stotina tokena, što po Flex cenama iznosi otprilike pola centa. Ako autor ili moderator izmeni komentar, sačuvani prevod se odbacuje i komentar se ponovo prevodi pri sledećem prikazu, tako da niko ne čita prevod teksta koji više ne postoji.

Ručni režim ne košta ništa dok neko ne klikne.

### The Details

Prevedeni tekst se tretira isto kao komentar koji je neko napisao. Prolazi kroz istu sanitaciju i pravila za linkove kao original, pa prevod ne može da nosi ništa što original ne bi mogao. Pomeni i hashtagovi zadržavaju svoje formatiranje.

Komentari koji su veoma dugi, ili čiji jezik nije moguće pouzdano otkriti, ostaju napisani onako kako su, umesto da se nagađaju. Linija jezika ispod prevedenog komentara je takođe na jeziku čitaoca, pa španski čitač engleskog komentara vidi „Traducido del inglés“ i „Mostrar original“.

### Overhead

Kod za ovu novu funkciju se ne učitava osim ako nije omogućen, pa ne usporava vidžet za komentare za naše druge korisnike.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Vodič za Comment Translation</a>
covers both modes, the rule setting, and billing.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Vodič za locale</a>
covers how the widget's language is chosen in the first place.

### In Conclusion

Ovo je poteklo iz udruženja komšija čiji stanovnici komentarišu na engleskom i španskom, i koji su želeli da obe grupe čitaju isti razgovor bez da traže od bilo koga da instalira ekstenziju za pretraživač ili se registruje za bilo šta.

Ako vodite zajednicu koja piše na više od jednog jezika, uključite ovu funkciju i recite nam ispod kako prevodi zvuče.

Živeli!

{{/isPost}}

---