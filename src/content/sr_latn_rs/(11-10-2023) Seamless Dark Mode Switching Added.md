---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodata besprekornija promena tamnog režima[/postlink]

{{#unless isPost}}
FastComments je uvek podržavao tamni režim. Međutim, nekada je bilo potrebno ponovo učitati vidget za komentare da bi se prešlo na tamni režim. Ovo je ispravljeno.
{{/unless}}

{{#isPost}}

### Šta je novo

FastComments je uvek podržavao tamni režim. Međutim, nekada je bilo potrebno ponovo učitati vidget za komentare da bi se prešlo na tamni režim.

To znači da ako je neki sajt koristio tamni režim, ili dozvoljavao korisnicima da prelaze napred-nazad između svetlih i tamnih režima, 
potpuno bi uklonili vidget za komentare iz pregledača i ponovo ga učitali. Ovo je učinjeno iz tehničkih razloga radi pojednostavljenja proizvoda
prilikom inicijalnog lansiranja jer je potrebno komunicirati stanje napred-nazad između glavne stranice i iframe-a vidgeta.

S obzirom na to da je sezona čudovišta završena - promena tamnog režima je unapređena. Vidget za komentare sada podržava besprekornu tranziciju između svetlih
i tamnih režima. Međutim, još uvek je potrebno proći `hasDarkBackground` oznaku kada je to primenljivo.

### Za programere i prepreke

Da biste obavestili vidget za komentare da je vaš sajt u tamnom režimu - ili da ima primenjen tamni pozadina - trebalo bi da prođete
`hasDarkBackground` oznaku. Ovo se ne menja. Međutim, sada kada pozovete `instance.update(newConfig)` (ili promenite stanje
u jednoj od naših biblioteka kao što su React, Svelte, itd.), detektovaćemo da li je jedini promenjeni parametar `hasDarkBackground` i ako jeste,
gracefully ćemo ažurirati vidget za komentare. Vidget će asinhrono učitati dodatak za tamni režim u pozadini i ažurirati svoj stil
ako je to potrebno.

Jedna velika prepreka je da kada prođete `newConfig` - ovo mora biti potpuno novi objekat da bi ova funkcija radila.

### Zaključak

Kao i kod svih važnih izdanja, drago nam je što smo mogli da odvojimo vreme za optimizaciju, testiranje i pravilno izdanje ove funkcije. Javite nam
ispod ako otkrijete bilo kakve probleme.

Pozdrav!

{{/isPost}}

---