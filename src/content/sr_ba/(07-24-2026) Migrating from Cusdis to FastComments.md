[category:Migration]
###### [postdate]
# [postlink]Migracija sa Cusdis-a na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste vidjeli kako potpuno migrirati sa Cusdis-a na FastComments, uključujući vaše niti, status moderacije i URL-ove stranica.
{{/unless}}

{{#isPost}}

Cusdis je lagan, open‑source sistem za komentara. Ako ste ga nadmašili i želite funkcionalnosti poput filtriranja spama, glasanja, reakcija, obavijesti, SSO‑a i kompletnog kontrolnog panela za moderaciju, FastComments sada direktno uvozi vaše Cusdis podatke.

## Izvezite postojeće komentare

Sa vašeg Cusdis kontrolnog panela zatražite kompletan izvoz podataka. Cusdis vam daje jedan JSON fajl koji sadrži vaše projekte, stranice i svaki komentar, zajedno s njihovim nitima i statusom odobrenja. Ovisno o vašoj Cusdis konfiguraciji, izvoz se šalje emailom ili se odmah preuzima.

Nema ništa za uređivanje ili raspakivanje. Zadržite ".json" fajl takav kakav je, a naš backend ga čita direktno.

## Uvoz u FastComments

Kada ste prijavljeni, idite <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje da uvezete fajl</a>. Odaberite **Cusdis (.json)** iz padajućeg menija i otpremite vaš fajl.

### Sačekajte nekoliko minuta

Uvoz u FastComments je "asinkroni". Otprema fajla i njegovo procesiranje su odvojeni koraci. Za mali fajl poruka o uspjehu se pojavljuje odmah. Na dnu stranice za uvoz nalazi se tabela, a svaki red predstavlja pokušaj uvoza. Osvježite stranicu da biste vidjeli status i koliko je komentara do sada uvezeno.

### Kada je završeno

Dobit ćete email kada uvoz završi, bilo da je uspješan ili ne. Sigurno je zatvoriti stranicu nakon što otprema uspije i vidite vaš uvoz naveden s statusom "Requested" ili "Running".

Ponovni uvoz je siguran. FastComments podudara svaki komentar po njegovom originalnom Cusdis ID‑u, pa ponovnim pokretanjem uvoza ažurira postojeće komentare umjesto stvaranja duplikata. Ako uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> i pomoći ćemo.

## Šta se uvozi

- **Niti odgovora.** Cusdis ugnijezđuje odgovore na nekoliko nivoa, a FastComments rekonstruira kompletnu strukturu roditelja i djece.
- **Status moderacije.** Odobreni komentari ostaju odobreni. Komentari koji još čekaju odobrenje završavaju u vašem FastComments redu za moderaciju kako biste ih pregledali.
- **Autori.** Ime i email svakog komentatora se prenose, a registrovani FastComments korisnici se podudaraju po emailu.
- **Formatiranje.** Cusdis komentari su napisani u Markdownu. FastComments renderuje isti Markdown, uključujući linkove, slike i prekide linija, tako da vaše niti izgledaju tačno kao i prije.

Komentari koji su izbrisani u Cusdis-u ostaju izostavljeni, pa vaše uvezene niti ostaju čiste.

## Zamijenite Cusdis widget

Kada su podaci prebačeni, uklonite mali Cusdis snippet sa vašeg sajta i ubacite <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">naš</a>. Možete koristiti Cusdis i FastComments paralelno neko vrijeme da prvo testirate izgled i osjećaj. Podržavamo mnoge front‑end okvire, koje <a href="https://fastcomments.com/install-wizard" target="_blank">možete pronaći ovdje</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći s tim</a>.

### Migracija URL‑ova istovremeno

Cusdis povezuje svaki komentar s URL‑om njegove stranice, pa sve dok se vaši URL‑ovi ne mijenjaju, prebacivanje je jednostavno. Ako se i vaši URL‑ovi mijenjaju, prvo uvezite Cusdis podatke, zatim koristite ugrađeni alat <a href="https://fastcomments.com/auth/my-account/manage-data/migrate-domains" target="_blank">Migrate Comments</a> pod Manage Data da premjestite komentare na nove lokacije. Možete unijeti cijeli domen, puni URL ili URL ID za staru i novu lokaciju, pa jedan par "from" i "to" premješta sve odgovarajuće stranice odjednom. Pokređuje se kao pozadinski posao i šalje vam email kada završi.

Ako biste radije da to mi uradimo (ako imate mnogo stranica), <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obavijestite nas</a> o starim i novim URL‑ovima.

## EU

Ako ste u EU, vjerojatno ćete želeti da kreirate svoj račun na <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> kako bi podaci vaših korisnika ostali u EU.

## Sažetak

1. Izvezite svoje podatke iz Cusdis-a kao JSON
2. Otpremite ga na stranicu za uvoz FastComments i odaberite **Cusdis (.json)**
3. Zamijenite Cusdis snippet s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-om</a>

{{/isPost}}

---