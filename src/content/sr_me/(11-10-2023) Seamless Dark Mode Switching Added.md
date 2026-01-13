---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodata besprekorno prebacivanje u tamni režim[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao tamni režim. Međutim, ranije je zahtevao ponovno učitavanje komentatorskog vidžeta za prebacivanje na tamni režim. Ovo je ispravljeno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao tamni režim. Međutim, ranije je zahtevao ponovno učitavanje komentatorskog vidžeta za prebacivanje na tamni režim.

To znači da ako je sajt koristio tamni režim, ili omogućavao korisnicima da se prebacuju između svetlog i tamnog režima, mi bismo
potpuno uklonili komentatorski vidžet iz pregledača i ponovo ga učitali. Ovo je urađeno iz tehničkih razloga kako bi se pojednostavio proizvod
prilikom početnog lansiranja, budući da se stanje mora komunicirati napred-nazad između glavne stranice i iframe-a vidžeta.

U svetlu završetka strašne sezone - poboljšano je prebacivanje u tamni režim. Komentatorski vidžet sada podržava besprekorno prebacivanje između svetlog
i tamnog režima. Međutim, još uvek zahteva prosleđivanje `hasDarkBackground` oznake kada je primenljivo.

### Za programere i zamerke

Da obavestite komentatorski vidžet da je vaš sajt u tamnom režimu - ili da ima primenjen tamni pozadinski sloj - treba da prosledite
`hasDarkBackground` oznaku. Ovo se ne menja. Međutim, sada kada pozovete `instance.update(newConfig)` (ili promenite stanje
u jednoj od naših biblioteka poput React, Svelte, itd), mi ćemo otkriti da li je jedini promenjeni parametar `hasDarkBackground` i ako jeste
graciozno ćemo ažurirati komentatorski vidžet. Vidžet će asinkrono učitati ekstenziju tamnog režima u pozadini i ažurirati svoj stil
ako je potrebno.

Jedna velika zamerka je da kada prosledite `newConfig` - ovo mora biti potpuno nov objekat kako bi ova funkcija radila.

### Zaključak

Kao i kod svih glavnih izdanja, drago nam je što smo mogli da odvojimo vreme da optimizujemo, testiramo i pravilno objavimo ovu funkciju. Javite nam
u komentarima ispod ako primetite bilo kakve probleme.

Pozdrav!

{{/isPost}}

---