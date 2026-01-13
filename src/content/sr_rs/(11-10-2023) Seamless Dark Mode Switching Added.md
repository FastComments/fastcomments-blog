---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodato besprekorno prebacivanje u tamni režim[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao tamni režim. Međutim, ranije je bilo potrebno da se ponovo učita vidžet za komentare da bi se prebacilo u tamni režim. Ovo je ispravljeno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao tamni režim. Međutim, ranije je bilo potrebno da se ponovo učita vidžet za komentare da bi se prebacilo u tamni režim.

To znači da, ako je sajt koristio tamni režim, ili je omogućio korisnicima da se prebacuju između svetlog i tamnog režima, mi bismo
potpuno uklonili vidžet za komentare iz brauzera i ponovo ga učitali. Ovo je učinjeno iz tehničkih razloga kako bi se pojednostavio proizvod
prilikom prvog pokretanja, s obzirom da se stanje mora komunicirati između glavne strane i iframe-a vidžeta.

U svetlu činjenice da je zastrašujuća sezona završena - prebacivanje u tamni režim je poboljšano. Vidžet za komentare sada podržava besprekornog
prelazak između svetlih i tamnih režima. Međutim, i dalje zahteva prosleđivanje `hasDarkBackground` oznake kada je to primenljivo.

### Za programere i na što obratiti pažnju

Da biste obavestili vidžet za komentare da je vaš sajt u tamnom režimu - ili da ima primenjen tamni pozadinu - prosledićete
`hasDarkBackground` oznaku. Ovo se ne menja. Međutim, sada kada pozovete `instance.update(newConfig)` (ili promenite stanje
u jednom od naših biblioteka kao što su React, Svelte, itd), mi ćemo detektovati da li je jedini promenjen parametar `hasDarkBackground` i ako jeste
graciozno ćemo ažurirati vidžet za komentare. Vidžet će asinkrono učitati ekstenziju za tamni režim u pozadini i ažurirati svoj stil
ako je potrebno.

Jedna velika opasnost je da kada prosledite `newConfig` - ovo mora biti potpuno novi objekat da bi ova funkcija radila.

### Na kraju

Kao i kod svih velikih izdanja, zadovoljni smo što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
ispod ako otkrijete bilo kakve probleme.

Zdravlje! 

{{/isPost}}

---