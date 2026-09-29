[category:Features]
[category:Announcements]
[category:UI & Customization]

###### [postdate]
# [postlink]Arabščina in jeziki z desno proti levo so zdaj podprti[/postlink]

{{#unless isPost}}
FastComments zdaj govori arabščino, in vsak del FastCommentsa se razporedi z desno proti levo za arabščino in hebrejščino. Številke, kot je "3 comments", zdaj uporabljajo pravilno množinsko obliko v vsakem jeziku.
{{/unless}}

{{#isPost}}

### What's New

Arabščina je zdaj podprt jezik, s kodo lokalizacije `ar`. Widget za komentarje, drugi vdelani widgeti, e-pošta, nadzorna plošča in marketinška stran so vsi prevedeni.

Arabščina se prav tako piše z desno proti levo, zato je bilo potrebno naučiti FastComments, da se razporedi v obeh smereh. Ta popravka velja tudi za hebrejščino.

### Right-to-Left Layout

Ko je lokalizacija arabščina ali hebrejščina, se celoten vmesnik zrcali. Avatar, ime in kontrolniki za odgovor v komentarju zamenjajo strani, meniji in spustni seznami se odpirajo proti pravemu robu, puščice pa kažejo v smer, v kateri berete. To zajema widget za komentarje in njegove razširitve, kot so klepet v živo in ankete, sistem za vstopnice, sodelovalni klepet in widgete za povzetek ocen, e-pošto ter nadzorno ploščo.

Ni ničesar za nastaviti, razen ročne nastavitve lokalizacije za vašega uporabnika, če želite.

### Comments Keep Their Own Direction

Včasih je oddelek za komentarje v več jezikih. Angleški komentar na arabskem strani ali arabščinski komentar na angleški strani bi moral še vedno naravno brati.

Vsak komentar in uporabniško ime sledita smeri svojega besedila. Na angleški strani arabski odgovor bere z desno proti levo, medtem ko komentarji okoli njega berejo z levo proti desni, in obratno velja na arabskem strani. Kode blokov v komentarjih vedno berejo z levo proti desni, saj koda to počne.

### Setting the Locale

Privzeto widget izbere lokalizacijo iz brskalnika obiskovalca, zato arabščina samodejno nastavi za govorce arabščine. Če jo želite prisiliti, nastavite lokalizacijo na strani za prilagoditev widgeta pod "Locale / Language" ali v kodi:

<div class="code">    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        locale: 'ar'
    });
</div>

Če uporabljate SSO, posredujte `locale: 'ar'` v objektu uporabnika, da bodo tudi njihova e-poštna sporočila v arabščini.

### Plurals, Done Properly

Angleščina ima dve obliki za število: "1 comment" in "2 comments". Arabščina ima ločene oblike za eno, dve, tri do deset, ter enajst do devetinajst, in ponovno uporablja ednino za sto. Ruščina, ukrajinščina, poljščina, hrvaščina, srbščina, slovenščina in hebrejščina imajo tudi svoje pravila.

Do sedaj je FastComments poznal le "one" in "everything else", zato je ruski bralec lahko videl napačno obliko samostalnika za 2 ali 5 komentarjev. Vsak niz s številom zdaj izbere pravilno obliko za svoj jezik, v widgetu, e-pošti in na nadzorni plošči.

Medtem ko smo bili tam, smo pregledali vsak niz s številom v vseh jezikih. To je razkrilo nekaj starejših napačnih prevodov, ki so zdaj popravljeni. Na primer, v nekaj jezikih je bila beseda za odgovor glagol "to reply", zato je komentar prikazal "1 Reply" kot ekvivalent "1 To reply".

Če ste prilagodili besedilo števila, na primer oznako "comments", vaše besedilo se še vedno uporablja za vsako število.

### Finding Your Language

Izbirniki jezikov v nadzorni plošči zdaj prikazujejo ime vsakega jezika poleg angleškega, na primer "Arabic (العربية)" in "German (Germany) (Deutsch)". Če nekdo pristane v napačnem jeziku, lahko še vedno najde svojega.

### Documentation

<a href="https://docs.fastcomments.com/guide-supported-languages.html" target="_blank">Vodič podprtih jezikov</a> lists
every locale code and covers right-to-left behavior. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">Možnost lokalizacije</a>
covers forcing a locale in the widget.

To temelji na [naš prvi izdelek lokalizacije](/(2-05-2020)-fastcomments-gets-localized.html) iz leta 2020, ki je začel s tremi jeziki. Trenutno imamo dvajset osem lokalizacij.

### In Conclusion

Veseli nas, da lahko FastComments ponudimo arabskim govornikom in izboljšamo izkušnjo za hebrejske govornike. Če opazite prevod, ki v vašem jeziku ni pravilen, nam to sporočite spodaj in ga bomo popravili.

Na zdravje!

{{/isPost}}

---