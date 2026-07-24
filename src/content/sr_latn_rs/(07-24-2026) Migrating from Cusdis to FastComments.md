[category:Migration]
###### [postdate]
# [postlink]Migracija sa Cusdis-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste videli kako potpuno migrirati sa Cusdis-a na FastComments, uključujući vaše teme, status moderacije i URL-ove stranica.
{{/unless}}

{{#isPost}}

Cusdis je lagan, open‑source sistem za komentare. Ako ste mu nadmašili i želite funkcije poput filtriranja spama, glasanja, reakcija, obaveštenja, SSO‑a i kompletnog kontrolnog panela za moderaciju, FastComments sada direktno uvozi vaše Cusdis podatke.

## Izvezite postojeće komentare

## Uvezite u FastComments

Kada se prijavite, idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete fajl</a>. Izaberite **Cusdis (.json)** iz padajućeg menija i otpremite vaš fajl.

### Sačekajte nekoliko minuta

FastComments uvoz je “asinkroni”. Otpremanje fajla i njegovo procesiranje su odvojeni koraci. Za mali fajl poruka o uspehu se pojavljuje odmah. Na dnu stranice za uvoz nalazi se tabela, a svaki red predstavlja pokušaj uvoza. Osvežite stranicu da biste videli status i koliko je komentara do sada uvezeno.

### Kada je završeno

Dobićete e‑mail kada uvoz završi, bilo da je uspešan ili ne. Bezbedno je zatvoriti stranicu nakon što otpremanje uspe, i vidite vaš uvoz naveden sa statusom “Requested” ili “Running”.

Ponovni uvoz je bezbedan. FastComments podudara svaki komentar po njegovom originalnom Cusdis ID‑u, tako da ponovnim pokretanjem uvoza ažurira postojeće komentare umesto da kreira duplikate. Ako uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo.

## Šta se uvozi

- **Niti odgovora.** Cusdis ugnježđuje odgovore na više nivoa, a FastComments rekonstruše kompletnu strukturu roditelja i dece.
- **Status moderacije.** Odobreni komentari ostaju odobreni. Komentari koji još čekaju odobrenje završavaju u vašem FastComments redu za moderaciju kako biste ih pregledali.
- **Autori.** Ime i e‑mail svakog komentatora se prenose, a registrovani FastComments korisnici se podudaraju po e‑mailu.
- **Formatiranje.** Cusdis komentari su napisani u Markdown‑u. FastComments prikazuje isti Markdown, uključujući linkove, slike i prekide linija, tako da vaše niti izgledaju tačno kao pre.

Komentari koji su izbrisani u Cusdis-u ostaju izostavljeni, tako da vaše uvezene niti ostaju čiste.

## Zamenite Cusdis widget

Kada su podaci prebačeni, uklonite mali Cusdis snippet sa vašeg sajta i ubacite <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naš</a>. Možete da koristite Cusdis i FastComments paralelno neko vreme da prvo testirate izgled i osećaj. Podržavamo mnoge front‑end okvire, koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovde</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći u tome</a>.

### Migracija URL‑ova istovremeno

Cusdis povezuje svaki komentar sa URL‑om njegove stranice, tako da je prebacivanje lako sve dok se vaši URL‑ovi ne promene. Ako se i vaši URL‑ovi menjaju, prvo uvezite Cusdis podatke, zatim koristite ugrađeni alat <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Manage Data da premestite komentare na nove lokacije. Možete uneti ceo domen, kompletan URL ili URL ID za staru i novu lokaciju, tako da jedan par “from” i “to” pomera sve odgovarajuće stranice odjednom. Pokreće se kao pozadinski posao i šalje vam e‑mail kada se završi.

Ako radije želite da mi to uradimo (ako imate mnogo stranica), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obavestite nas</a> o starim i novim URL‑ovima.

## EU

Ako ste u EU, verovatno ćete želeti da napravite nalog na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi podaci o vašim korisnicima ostali u EU.

## Pregled

1. Izvezite svoje podatke iz Cusdis-a kao JSON
2. Otpremite ga na FastComments stranicu za uvoz i izaberite **Cusdis (.json)**
3. Zamenite Cusdis snippet sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments‑om</a>

{{/isPost}}

---