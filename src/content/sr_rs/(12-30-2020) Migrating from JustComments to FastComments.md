---
[category:Migration]
###### [postdate]
# [postlink]Migracija sa JustComments na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post da biste saznali kako potpuno migrirati sa JustComments na FastComments.

Obično se radi o uklanjanju malog koda koji su vam dali i zamenjivanju sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno pokrenuti JustComments i FastComments na istom sajtu kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.
{{/unless}}

{{#isPost}}

Od 2021. godine, JustComments će se zatvoriti. Na FastComments-u smo vam olakšali prelazak na našu platformu.

Otkrio/la ćete da FastComments pruža mnoge funkcije na koje ste navikli, i još više.

## Razlike u Cijenama

Dok JustComments koristi sistem zasnovan na kreditima, FastComments koristi model sa nivoima sa tri dostupna nivoa. Sa FastComments-om, naš plan od 5 $/mesec
pokriva vas do 1M učitavanja stranica mesečno. Iza toga su Pro i Enterprise planovi, koje možete videti na našoj <a href="https://fastcomments.com/traffic-pricing" target="_blank">stranici sa cenama</a>.

## Ako ste na WordPress-u

FastComments ima posvećen WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak čini instalaciju, postavku i sinhronizaciju veoma lakim. Međutim, JustComments ne sinhronizuje vaše komentare nazad u vašu WordPress instalaciju kao što to čini FastComments.
To znači da nakon sinhronizacije, morate pratiti korake za izvoz i uvoz u nastavku.

## Izvezite svoje postojeće komentare

FastComments uvoznik će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Premestićemo slike na naše servere bez problema.

Da biste preuzeli podatke o svojim komentarima iz JustComments, idite na svoju stranicu naloga.

## Uvezite u FastComments Admin

Ne brinite se zbog otvaranja rezultantne datoteke sa JustComments.

Ako ste prijavljeni, možete ići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovde da uvezete datoteku</a>.

Izabrite JustComments iz padajućeg menija i otpremite svoju datoteku.

### Identifikatori stranica

Prilikom uvoza, videćete opciju za odabir URL stranice ili "ID stavke". Ako niste sigurni šta da odaberete, izaberite URL stranice. Ako imate integraciju sa JustComments
gde specificirate ID stavke u konfiguraciji vidžeta, izaberite ID stavke.

### Sačekajte nekoliko minuta

FastComments uvoz je "asinkroni". To znači da su otpremanje datoteke i njeno procesiranje odvojeni koraci.

Dakle, u zavisnosti od veličine vaše datoteke, možda ćete odmah dobiti poruku o uspehu. Na stranici za uvoz na dnu postoji tabela - svaki red predstavlja pokušaj uvoza.
Možete bezbedno osvežiti ovu stranicu da biste videli status vašeg uvoza i koliko redova je do sada uvezeno.

### Kada je završeno

Primiteće email kada se uvoz završi - bez obzira da li je uspešan ili ne. Možete zatvoriti stranicu nakon što otpremanje datoteke uspe i nakon što vidite svoj uvoz na stranici uvoza. Imaće status poput "Zatraženo", a kada počne, status će biti "U radu".

Bezbedno je ponovo uvoziti onoliko puta koliko je potrebno - međutim, ako vaš uvoz ne uspe, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">obratite nam se</a> tako da možemo pomoći.

### Zamenite JustComments kod sa FastComments

Ako ne koristite JustComments WordPress dodatak, onda je jednostavno pitanje uklanjanja malog koda koji su vam dali i zamenjivanja sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak i privremeno pokrenuti JustComments i FastComments na istom sajtu kako biste testirali i prilagodili izgled. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo pomoći oko toga</a>.

### Migracija URL-ova u isto vreme

Komentari su po defaultu vezani za "pageUrl" polja u JustComments izvozu, tako da sve dok se vaši URL-ovi ne menjaju, prelazak je jednostavan. Ako želite da migrirate URL-ove i zadržite svoje
komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> tako što ćete nam poslati stare i nove URL-ove. Stranica sa pomoći omogućava otpremanje malih tekstualnih datoteka, tako da ako
migrate više od nekoliko URL-ova, napravite Excel tabelu.

## Rezime

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Ako niste na WordPress-u, zamenite JavaScript kod JustComments sa <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}