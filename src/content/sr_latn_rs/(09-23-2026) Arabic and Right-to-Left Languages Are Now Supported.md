[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arapski i jezici koji se pišu s desna na levo sada su podržani[/postlink]

{{#unless isPost}}
FastComments sada podržava arapski, i svaki deo FastComments‑a se prikazuje s desna na levo za arapski i hebrejski. Brojači poput „3 comments“ takođe sada koriste ispravan oblik množine na svakom jeziku.
{{/unless}}

{{#isPost}}

### What's New

Arapski je sada podržan jezik, sa kodom lokalizacije `ar`. Widget za komentare, ostali ugrađivi widgeti, e‑mailovi, kontrolna tabla i marketinški sajt su svi prevedeni.

Arapski se takođe piše s desna na levo, pa je njegovo dodavanje značilo da FastComments treba da se prikazuje u oba pravca. Ovo rešenje važi i za hebrejski.

### Right-to-Left Layout

Kada je lokalizacija arapski ili hebrejski, čitav interfejs se ogledalo. Avatar, ime i kontrole za odgovor na komentar menjaju strane, meniji i padajuće liste otvaraju se ka ispravnoj ivici, a strelice pokazuju smer u kojem čitate. Ovo obuhvata widget za komentare i njegove ekstenzije poput live chat‑a i anketa, widgete za tiketiranje, kolaborativni chat i pregled rezimea, e‑mailove i kontrolnu tablu.

Nema ništa što treba konfigurisati, osim ručnog postavljanja lokalizacije za vašeg korisnika ako to želite.

### Comments Keep Their Own Direction

Ponekad je sekcija komentara na više jezika. Engleski komentar na arapskoj stranici, ili arapski komentar na engleskoj stranici, i dalje treba da se čita prirodno.

Svaki komentar i korisničko ime prate smer svog teksta. Na engleskoj stranici, arapski odgovor se čita s desna na levo dok se komentari oko njega čitaju s leva na desno, i obrnuto na arapskoj stranici. Blokovi koda unutar komentara uvek se čitaju s leva na desno, jer se kod tako piše.

### Setting the Locale

Podrazumevano widget uzima lokalizaciju iz pregledača posetioca, pa arapski govornici automatski dobijaju arapski. Da biste je forsirali, postavite lokalizaciju na stranici za prilagođavanje widgeta pod „Locale / Language“, ili u kodu:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Ako koristite SSO, prosledite `locale: 'ar'` u objektu korisnika kako bi i njihovi e‑mailovi bili na arapskom.

### Plurals, Done Properly

Engleski ima dva oblika za broj: „1 comment“ i „2 comments“. Arapski ima odvojene oblike za jedan, dva, od tri do deset, i od jedanaest do devedeset devet, a ponovo koristi jedninu za sto. Ruski, ukrajinski, poljski, hrvatski, srpski, slovenački i hebrejski takođe imaju svoja pravila.

Do sada je FastComments poznavao samo „jedan“ i „sve ostalo“, pa je ruski čitalac mogao da vidi pogrešan oblik imenice za 2 ili 5 komentara. Svaki string sa brojem sada bira ispravan oblik za svoj jezik, u widgetu, e‑mailovima i kontrolnoj tabli.

Dok smo bili tamo, pregledali smo svaki string za brojanje na svim jezicima. To je otkrilo niz starijih pogrešnih prevoda koji su sada ispravljeni. Na primer, na nekim jezicima reč za odgovor bila je glagol „to reply“, pa je komentar prikazivao „1 Reply“ kao ekvivalent „1 To reply“.

Ako ste prilagodili tekst za brojanje, poput oznake „comments“, vaš tekst se i dalje koristi za svaki broj.

### Finding Your Language

Selektori jezika u kontrolnoj tabli sada prikazuju naziv svakog jezika pored engleskog, npr. „Arabic (العربية)“ i „German (Germany) (Deutsch)“. Ako neko dođe na pogrešan jezik, i dalje može da pronađe svoj.

### Documentation

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Vodič za podržane jezike</a> lists
every locale code and covers right-to-left behavior. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Opcija locale</a>
covers forcing a locale in the widget.

Ovo se nadovezuje na [our first localization release](/(2-05-2020)-fastcomments-gets-localized.html) iz 2020. godine, koji je započeo sa tri jezika. Sada imamo dvadeset osam lokalizacija.

### In Conclusion

Drago nam je što možemo da donesemo FastComments arapskim govornicima i da poboljšamo iskustvo za hebrejske govornike. Ako primetite prevod koji je pogrešan na vašem jeziku, javite nam u komentarima i mi ćemo ga ispraviti.

Pozdrav!

{{/isPost}}