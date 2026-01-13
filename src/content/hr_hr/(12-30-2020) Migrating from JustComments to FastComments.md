---
[category:Migration]
###### [postdate]
# [postlink]Migracija s JustComments na FastComments[/postlink]

{{#unless isPost}}
Pročitajte ovaj post kako biste vidjeli kako potpuno migrirati s JustComments na FastComments.

Obično se radi o uklanjanju malog isječka koji vam daju i zamjene s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">našim</a>.
Možete čak privremeno koristiti JustComments i FastComments na istom mjestu kako biste testirali i prilagodili izgled i doživljaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.
{{/unless}}

{{#isPost}}

Počevši od 2021. godine, JustComments će biti zatvoren. U FastComments smo vam olakšali prelazak na našu platformu.

Otkrivat ćete da FastComments nudi mnoge od istih značajki na koje ste navikli, i još više.

## Razlike u Cijenama

Dok JustComments koristi sustav temeljen na bodovima, FastComments koristi model s višim razinama s tri dostupne razine. S FastComments, naš plan od 5 USD/mjesečno pokriva do 1M učitavanja stranica mjesečno. Iznad toga su Pro i Enterprise planovi, koje možete pogledati na našoj <a href="https://fastcomments.com/traffic-pricing" target="_blank">stranici s cijenama</a>.

## Ako ste na WordPressu

FastComments ima posvećeni WordPress dodatak: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

Dodatak olakšava instalaciju, podešavanje i sinhronizaciju. Međutim, JustComments ne sinhronizira vaše komentare natrag u vašu instalaciju WordPressa kao što to radi FastComments. To znači da ćete nakon sinhronizacije morati slijediti korake za izvoz i uvoz u nastavku.

## Izvoz Vaših Postojećih Komentara

Importer FastComments će migrirati vaše komentare, korisnička imena, korisničke avatare i inline slike. Mi ćemo slike neprimjetno premjestiti na naše poslužitelje.

Da biste preuzeli svoje podatke o komentarima iz JustComments, idite na svoju stranicu računa.

## Uvoz u Admin FastComments

Ne brinite se o otvaranju rezultantne datoteke iz JustComments.

Ako ste prijavljeni, možete otići <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">ovdje za uvoz datoteke</a>.

Odaberite JustComments iz padajućeg izbornika i prenesite svoju datoteku.

### Identifikatori Stranica

Prilikom uvoza vidjet ćete opciju odabira URL-a stranice ili "ID stavke". Ako niste sigurni što odabrati, odaberite URL stranice. Ako imate integraciju s JustComments gdje navodite ID stavke u konfiguraciji widgeta, odaberite ID stavke.

### Pričekajte nekoliko minuta

Uvoz FastComments je "asinkroni". To znači da su prijenos datoteke i njegovo procesiranje odvojeni koraci.

Dakle, ovisno o veličini vaše datoteke, možda ćete odmah dobiti poruku o uspjehu. Na stranici uvoza na dnu postoji tablica - svaki redak predstavlja pokušaj uvoza. Ova stranica se može sigurno osvježiti kako biste vidjeli status vašeg uvoza i koliko je redaka do sada uvezeno.

### Kada je gotovo

Primijetit ćete email kada je uvoz gotov - bez obzira je li uspio ili ne. Možete zatvoriti stranicu nakon što prenesete datoteku i vidite svoj uvoz na stranici Uvoza. Imaće status poput "Zatraženo", a kada počne, status će biti "U tijeku".

Sigurno je ponovno uvesti koliko god puta je potrebno - međutim, ako vaš uvoz ne uspije, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam se</a> kako bismo vam mogli pomoći.

### Zamjena JustComments Koda s FastComments

Ako ne koristite JustComments WordPress dodatak, tada se jednostavno radi o uklanjanju malog isječka koji vam daju i zamjeni s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>.
Možete čak privremeno koristiti JustComments i FastComments na istom mjestu kako biste testirali i prilagodili izgled i doživljaj. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">Možemo vam pomoći s tim</a>.

### Migracija URL-ova u isto vrijeme

Komentari su po defaultu vezani za "pageUrl" polja u JustComments izvozu tako da dok se vaši URL-ovi ne mijenjaju, prijelaz je lak. Ako želite migrirati URL-ove i zadržati svoje komentare, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">javite nam</a> slanjem starih i novih URL-ova. Stranica s pomoći omogućava prijenos malih tekstualnih datoteka, tako da ako migrirate više od samo nekoliko URL-ova, napravite Excel tablicu.

## Sažetak

1. Izvezite svoje podatke
2. Uvezite u FastComments
3. Ako niste na WordPressu, zamijenite JustComments JavaScript isječak s <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments-ovim</a>

{{/isPost}}


---