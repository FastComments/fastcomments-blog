[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arapski i jezici koji se pišu s desna na lijevo sada su podržani[/postlink]

{{#unless isPost}}
FastComments sada govori arapski, a svaki dio FastCommentsa prikazuje se s desna na lijevo za arapski i hebrejski. Brojke poput "3 comments" također sada koriste ispravan oblik množine na svakom jeziku.
{{/unless}}

{{#isPost}}

### Što je novo

Arapski je sada podržani jezik, s kodom lokalizacije `ar`. Widget za komentare, ostali ugrađivi widgeti, e‑mailovi, nadzorna ploča i marketinška stranica su svi prevedeni.

Arapski se također piše s desna na lijevo, pa je njegovo dodavanje značilo da FastComments treba naučiti prikazivati se u oba smjera. To rješenje vrijedi i za hebrejski.

### Raspored s desna na lijevo

Kada je lokalizacija arapska ili hebrejska, cijelo sučelje se zrcali. Avatar, ime i kontrole odgovora na komentaru mijenjaju strane, izbornici i padajući izbornici otvaraju se prema ispravnom rubu, a strelice pokazuju smjer čitanja. Ovo pokriva widget za komentare i njegove ekstenzije poput live chata i anketa, sustav za ticketiranje, kolaboracijski chat i widgete za pregled sažetaka, e‑mailove i nadzornu ploču.

Nema ništa za konfigurirati, osim ručnog postavljanja lokalizacije za vašeg korisnika ako želite.

### Komentari zadržavaju vlastiti smjer

Ponekad je odjeljak s komentarima na više jezika. Engleski komentar na arapskoj stranici ili arapski komentar na engleskoj stranici trebali bi i dalje prirodno čitati.

Svaki komentar i korisničko ime slijede smjer vlastitog teksta. Na engleskoj stranici, arapski odgovor čita se s desna na lijevo, dok se ostali komentari čitaju s lijeva na desno, a na arapskoj stranici vrijedi obrnuto. Blokovi koda unutar komentara uvijek se čitaju s lijeva na desno, jer se kod tako čita.

### Postavljanje lokalizacije

Prema zadanim postavkama widget preuzima lokalizaciju iz preglednika posjetitelja, pa arapski govornici automatski dobivaju arapski. Za prisilno postavljanje, odaberite lokalizaciju na stranici prilagodbe widgeta pod "Locale / Language", ili u kodu:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Ako koristite SSO, proslijedite `locale: 'ar'` u objektu korisnika kako bi i njihovi e‑mailovi bili na arapskom.

### Množine, pravilno obrađene

Engleski ima dva oblika za brojanje: "1 comment" i "2 comments". Arapski ima zasebne oblike za jedan, dva, tri do deset, te jedanaest do devedeset devet, i ponovno koristi jedninu za sto. Ruski, ukrajinski, poljski, hrvatski, srpski, slovenski i hebrejski također imaju svoja pravila.

Do sada je FastComments znao samo "jedan" i "sve ostalo", pa je ruski čitatelj mogao vidjeti pogrešan oblik imenice za 2 ili 5 komentara. Svaki niz s brojem sada odabire ispravan oblik za svoj jezik, u widgetu, e‑mailovima i nadzornoj ploči.

Dok smo bili u tome, pregledali smo svaki niz za brojanje na svim jezicima. To je otkrilo niz starijih pogrešnih prijevoda koji su sada ispravljeni. Na primjer, na nekim jezicima riječ za odgovor bila je glagol "to reply", pa je komentar prikazivao "1 Reply" kao ekvivalent "1 To reply".

Ako ste prilagodili tekst za brojanje, poput oznake "comments", vaš tekst se i dalje koristi za svaki broj.

### Pronalaženje vašeg jezika

Izbornici jezika u nadzornoj ploči sada prikazuju vlastiti naziv svakog jezika uz engleski, poput "Arabic (العربية)" i "German (Germany) (Deutsch)". Ako netko dođe na pogrešan jezik, i dalje može pronaći svoj.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Vodič za podržane jezike</a> navodi svaki kod lokalizacije i opisuje ponašanje s desna na lijevo. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Opcija locale</a> opisuje prisilno postavljanje lokalizacije u widgetu.

This builds on [naš prvi lokalizacijski izdanje](/(2-05-2020)-fastcomments-gets-localized.html) back in 2020, which started with three languages. We're at twenty-eight locales now.

### Zaključak

Drago nam je što možemo donijeti FastComments arapskim govornicima i učiniti ga boljim iskustvom za hebrejske govornike. Ako primijetite prijevod koji je pogrešan na vašem jeziku, javite nam u nastavku i mi ćemo ga ispraviti.

Živjeli!

{{/isPost}}

---