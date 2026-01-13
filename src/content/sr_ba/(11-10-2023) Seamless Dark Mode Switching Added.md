---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodato neprekidno prebacivanje u tamni režim[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao tamni režim. Međutim, ranije je bilo potrebno ponovo učitati widget za komentare kako bi se prešlo u tamni režim. Ovo je ispravljeno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao tamni režim. Međutim, ranije je bilo potrebno ponovo učitati widget za komentare kako bi se prešlo u tamni režim.

To znači da, ako je sajt koristio tamni režim, ili je dozvoljavao korisnicima da se prebacuju između svetlog i tamnog režima, mi bismo
potpuno uklonili widget za komentare iz pregledača i ponovo ga učitali. Ovo je urađeno iz tehničkih razloga kako bi se pojednostavio proizvod
prilikom prvog pokretanja, jer se stanje mora prenositi između glavne stranice i iframe-a widgeta.

U svetlu završetka spooky sezone - poboljšano je prebacivanje u tamni režim. Widget za komentare sada podržava neprekidne prelaze između svetlog
i tamnog režima. Međutim, još uvek je potrebno proslediti `hasDarkBackground` oznaku kada je to primenljivo.

### Za programere & Zamerke

Da obavestite widget za komentare da je vaš sajt u tamnom režimu - ili da ima tamnu pozadinu - trebalo bi da prosledite
`hasDarkBackground` oznaku. Ovo se ne menja. Međutim, sada kada pozivate `instance.update(newConfig)` (ili menjate stanje
u jednoj od naših biblioteka kao što su React, Svelte, itd.), mi ćemo detektovati da li je jedini promenjeni parametar `hasDarkBackground` i ako jeste,
diskretno ćemo ažurirati widget za komentare. Widget će asinkrono učitati ekstenziju za tamni režim u pozadini i ažurirati svoj stil
ako bude potrebno.

Jedna velika zamerka je da kada prosledite `newConfig` - ovo mora biti potpuno novi objekat da bi ova funkcija funkcionisala.

### Zaključak

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentarima ispod ako uočite bilo kakve probleme.

Živeli!

{{/isPost}}

---