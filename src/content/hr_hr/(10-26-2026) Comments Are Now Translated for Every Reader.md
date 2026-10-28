[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Komentari su sada prevedeni za svakog čitatelja[/postlink]

{{#unless isPost}}
FastComments sada može prevesti same komentare, a ne samo widget oko njih. Uključite ga po web-mjestu ili po stranici, automatski ili pomoću gumba Translate, i svaki čitatelj vidi razgovor na svom jeziku, a original je na jedan klik udaljen.
{{/unless}}

{{#isPost}}

### What's New

FastComments je već neko vrijeme preveden na dvadeset osam jezika, pa se gumbi, oznake i e‑mailovi već prikazuju na jeziku čitatelja. Komentari to nisu. Španjolski komentar na engleskoj stranici ostao je na španjolskom, a svatko tko ga nije pročitao nastavio je dalje.

Ovo izdanje dodaje **Comment Translation**. Kada je uključeno, komentar napisan na jeziku koji se razlikuje od jezika čitatelja prikazuje se preveden, s malom linijom ispod koja navodi odakle je preveden i poveznicom **Show original** za prikaz onoga što je zapravo napisano.

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### Dva načina

**Automatic** prevodi unaprijed. Svaki komentar na drugom jeziku dolazi preveden, a čitatelj može prebaciti na original ako želi. Ovo je način za zajednicu koja stvarno piše na dva ili više jezika i želi da svi čitaju isti razgovor.

**Manual** dodaje poveznicu **Translate** svakom komentaru i ne radi ništa dok se ne klikne. Čitatelj odlučuje koji su komentari vrijedni prevođenja, a ništa se ne troši na one o kojima nitko ne pita. Komentar koji je već na jeziku čitatelja to i navodi umjesto da se lažno pretvara da je preveden.

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

U oba načina je jezik čitatelja onaj koji widget već prikazuje: **Locale / Language** koji ste postavili u pravilu prilagodbe, ili jezik preglednika posjetitelja ako niste postavili nijedan. Posjetitelj ne mora ništa instalirati, prijaviti se ili konfigurirati. Radi isto bilo da je widget ugrađen u vašu stranicu, unutar alata za izradu web‑mjesta poput Google Sites, ili na samostalnoj FastComments stranici za komentare.

### Uključivanje

Otvorite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, pronađite **Comment Translation** odmah ispod **Locale / Language** i odaberite Automatic ili Manual. Po zadanom je isključeno.

Budući da se nalazi u pravilu prilagodbe, možete ga ograničiti kako god želite: na cijeloj web‑stranici, na jednoj domeni ili na jednoj stranici za koju znate da je publika mješovita. To je postavka na strani poslužitelja, pa se ne može uključiti samo iz JavaScript konfiguracije widgeta.

### Cijena

Prijevodi se generiraju pomoću jezičnog modela i naplaćuju se kao LLM tokeni, isti način obračuna kao i [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Svaki plan može ga uključiti.

Svaki komentar se prevede jednom po jeziku i prijevod se pohrani uz komentar. Ako tisuću španjolskih čitatelja otvori istu englesku nit, posao prevođenja se obavi samo jednom. Tipični komentar sadrži nekoliko stotina tokena, što po Flex cijenama iznosi otprilike pola centa. Ako autor ili moderator izmijeni komentar, pohranjeni prijevod se odbaci i komentar se ponovno prevede pri sljedećem prikazu, tako da nitko ne čita prijevod teksta koji više ne postoji.

Manual način ne košta ništa dok netko ne klikne.

### Detalji

Prevedeni tekst se tretira isto kao komentar koji je netko napisao. Prolazi kroz istu sanitizaciju i pravila za poveznice kao original, pa prijevod ne može nositi ništa što original ne bi mogao. Spominjanja i hashtagovi zadržavaju svoje formatiranje.

Komentari koji su vrlo dugi ili čiji se jezik ne može pouzdano otkriti ostaju takvi kakvi su, umjesto da se nagađa. Linija jezika ispod prevedenog komentara također je na jeziku čitatelja, pa španjolski čitatelj engleskog komentara vidi „Traducido del inglés“ i „Mostrar original“.

### Opterećenje

Kod za ovu novu značajku ne učitava se osim ako nije omogućen, pa ne usporava widget za komentare za naše ostale korisnike.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">Vodič za prevođenje komentara</a> pokriva oba načina, postavke pravila i naplatu. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Vodič za lokalizaciju</a> objašnjava kako se odabire jezik widgeta.

### Zaključak

Ovo je poteklo od udruge susjedstva čiji stanovnici komentiraju na engleskom i španjolskom, i koja je željela da obje skupine čitaju istu nit bez traženja od bilo koga da instalira proširenje preglednika ili se registrira za bilo što.

Ako vodite zajednicu koja piše na više od jednog jezika, uključite ovu značajku i recite nam u nastavku kako se prijevodi čitaju.

Živjeli!

{{/isPost}}