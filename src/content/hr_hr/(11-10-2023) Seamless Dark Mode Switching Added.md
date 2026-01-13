---
[category:UI & Customization]

###### [postdate]
# [postlink]Dodana besprijekorna promjena tamnog režima[/postlink]

{{#unless isPost}}
FastComments je uvijek podržavao tamni način. Međutim, ranije je zahtijevao ponovno učitavanje widgeta za komentare da bi se prebacili na tamni način. Ovo je ispravljeno.
{{/unless}}

{{#isPost}}

### Što je novo

FastComments je uvijek podržavao tamni način. Međutim, ranije je zahtijevao ponovno učitavanje widgeta za komentare da bi se prebacili na tamni način.

To znači da, ako je neka stranica koristila tamni način, ili je dopuštala korisnicima da se prebacuju između svijetlog i tamnog načina, potpuno bismo uklonili widget za komentare iz preglednika i ponovo ga učitali. To je učinjeno iz tehničkih razloga kako bi se pojednostavio proizvod prilikom prvog lansiranja, s obzirom na to da se stanje mora prenositi naprijed-natrag između glavne stranice i iframea widgeta.

U svjetlu završetka spooky sezone - promjena tamnog načina je poboljšana. Widget za komentare sada podržava besprijekorne prijelaze između svijetlih i tamnih načina. Međutim, još uvijek zahtijeva prosljeđivanje `hasDarkBackground` oznake kada je to primjenjivo.

### Za programere i zamke

Da biste rekli widgetu za komentare da je vaša stranica u tamnom načinu - ili da ima primijenjenu tamnu pozadinu - proslijedite oznaku
`hasDarkBackground`. To se ne mijenja. Međutim, sada kada pozovete `instance.update(newConfig)` (ili promijenite stanje u nekoj od naših biblioteka poput React, Svelte, itd.), otkrit ćemo je li jedini promijenjeni parametar `hasDarkBackground` i, ako jest, elegantno ažurirati widget za komentare. Widget će asinkrono učitati dodatak za tamni način u pozadini i ažurirati svoj stil ako bude potrebno.

Jedna velika zamka je da, kada proslijedite `newConfig` - to mora biti potpuno novi objekt za ovu funkciju da bi radila.

### Na zaključku

Kao i kod svih velikih izdanja, drago nam je što smo mogli odvojiti vrijeme za optimizaciju, testiranje i pravilno lansiranje ove funkcije. Javite nam u nastavku ako otkrijete bilo kakve probleme.

Živjeli!

{{/isPost}}

---