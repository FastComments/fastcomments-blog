[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]Komentarji so zdaj prevedeni za vsakega bralca[/postlink]

{{#unless isPost}}
FastComments lahko zdaj prevede tudi same komentarje, ne le vtičnika okoli njih. Vklopite ga za celotno spletno mesto ali posamezno stran, samodejno ali s gumbom Prevedi, in vsak bralec vidi pogovor v svojem jeziku, pri čemer je izvirnik le en klik stran.
{{/unless}}

{{#isPost}}

### Kaj je novega

FastComments je bil že nekaj časa preveden v dvajset osem jezikov, zato se gumbi, oznake in e‑sporočila že prikazujejo v jeziku bralca. Komentarji pa ne. Španski komentar na angleški strani je ostal španski, in vsak, ki ga ni prebral, je preprosto preskočil.

Ta izdaja dodaja **Comment Translation**. Ko je vklopljena, se komentar, napisan v jeziku, ki ni jezik bralca, prikaže preveden, s kratko vrstico pod njim, ki navaja, od kod je prišel, in povezavo **Show original**, ki omogoča ogled dejanskega napisanega besedila.

<img src="images/fc-comment-translation-auto.png" alt="Angleški bralec vidi španski komentar, ki je preveden, s vrstico 'Translated from Spanish' in povezavo 'Show original' pod njim" title="Samodejno prevajanje komentarjev" class="lozad" />

### Dva načina

**Automatic** prevaja vnaprej. Vsak komentar v drugem jeziku pride preveden, bralec pa lahko preklopi na izvirnik, če želi. To je način za skupnost, ki dejansko piše v dveh ali več jezikih in želi, da vsi berejo isti pogovor.

**Manual** doda povezavo **Translate** k vsakemu komentarju in ne naredi ničesar, dokler ni kliknjena. Bralec odloči, kateri komentarji so vredni prevajanja, in nič se ne porabi za tiste, o katerih nihče ne vpraša. Komentar, ki je že v jeziku bralca, to tudi pove, namesto da bi se pretvarjal, da ga prevaja.

<img src="images/fc-comment-translation-manual.png" alt="Ročni način, kjer je španski komentar preveden ob kliku, angleški komentar pa sporoča, da je že v jeziku bralca" title="Ročno prevajanje komentarjev" class="lozad" />

V obeh načinih je jezik bralca tisti, ki ga že prikazuje vtičnik: **Locale / Language**, ki ga nastavite v pravilu prilagoditve, ali jezik brskalnika obiskovalca, če ga niste nastavili. Ničesar, kar bi obiskovalec moral namestiti, se prijaviti ali konfigurirati. Deluje enako, ne glede na to, ali je vtičnik vdelan v vašo stran, v orodje za gradnjo spletnih mest, kot je Google Sites, ali na samostojni strani s komentarji FastComments.

### Vklop funkcije

Odprite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>, poiščite **Comment Translation** tik pod **Locale / Language** in izberite Automatic ali Manual. Privzeto je izklopljeno.

Ker je del pravila prilagoditve, ga lahko omejite po želji: celotno spletno mesto, eno domeno ali posamezno stran, kjer je občinstvo mešano. Gre za nastavitev na strežniku, zato je ni mogoče vklopiti samo iz JavaScript konfiguracije vtičnika.

### Koliko stane

Prevode ustvarja jezikovni model in se obračunava kot LLM žetoni, enako kot pri [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html). Vsak načrt ga lahko vklopi.

Vsak komentar se prevede enkrat na jezik, prevod pa se shrani skupaj s komentarjem. Če tisoč španskih bralcev odpre isti angleški niz, se prevod izvede le enkrat. Tipičen komentar je nekaj sto žetonov, kar po Flex cenah znaša približno pol centa. Če avtor ali moderator uredi komentar, se shranjeni prevod zavrne in komentar se ob naslednjem ogledu prevede znova, tako da nihče ne bere prevoda besedila, ki ne obstaja več.

Ročni način ne stane nič, dokler ga nekdo ne klikne.

### Podrobnosti

Prevedeno besedilo se obravnava enako kot komentar, ki ga je nekdo napisal. Gre skozi enako čiščenje in pravila za povezave kot izvirnik, zato prevod ne more vsebovati ničesar, česar izvirnik ne bi mogel. Omenjanja in hashtag-i ohranijo svojo obliko.

Komentarji, ki so zelo dolgi ali katerih jezik ni mogoče z gotovostjo zaznati, ostanejo v izvirni obliki, namesto da bi se ugibalo. Vrstica z jezikom pod prevedenim komentarjem je tudi v jeziku bralca, tako da španski bralec angleškega komentarja vidi "Traducido del inglés" in "Mostrar original".

### Dodatna obremenitev

Koda za to novo funkcijo se ne naloži, razen če je omogočena, zato ne upočasni vtičnika za komentarje za naše druge uporabnike.

### Dokumentacija

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">The Comment Translation guide</a> pokriva oba načina, nastavitev pravila in obračunavanje. <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">The locale guide</a> pojasnjuje, kako se izbere jezik vtičnika v prvi vrsti.

### Zaključek

Ta je prišla iz lokalne skupnosti, kjer prebivalci komentirajo v angleščini in španščini, in ki je želela, da obe skupini berejo isti niz, ne da bi koga prosili, da namesti razširitev za brskalnik ali se registrira za karkoli.

Če vodite skupnost, ki piše v več kot enem jeziku, jo vklopite in nam spodaj sporočite, kako se prevodi berejo.

Lep pozdrav!

{{/isPost}}