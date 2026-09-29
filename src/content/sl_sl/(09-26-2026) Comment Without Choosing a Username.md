[category:Features]
[category:UI &amp; Customization]

###### [postdate]
# [postlink]Komentar brez izbire uporabniškega imena[/postlink]

{{#unless isPost}}
FastComments lahko zdaj vsakemu novemu obiskovalcu dodeli edinstveno, nevtralno uporabniško ime, tako da ga nikoli ne bo moral izmišljati. Skupno privzeto uporabniško ime prav tako ne bo več "zasedeno" s strani prve osebe, ki ga uporabi.
{{/unless}}

{{#isPost}}

### What's New

Če vaše spletno mesto nima prijave, je obiskovalca, ki želi pustiti komentar, prosili za dve stvari: e‑pošto in uporabniško ime. E‑pošta je preprosta, vendar mora biti uporabniško ime edinstveno, bo javno in ga morajo izmišljati takoj.

Ta izdaja odstrani ta korak. V nastavitvah svojega gradnika vklopite **Generate Usernames Automatically**, in vsak novi obiskovalec bo prišel z imenom, kot je `BraveOtter4172`, že vnaprej izpolnjenim. Lahko ga obdrži ali prepiše. V vsakem primeru pridejo do polja za komentar hitreje.

### Turning It On

Odprite <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Widget Customization</a>,
poiščite razdelek **Anonymization** in označite **Generate Usernames Automatically**. Ni več ničesar za nastaviti.

Deluje z ali brez **Allow Anonymous Comments**. Če še vedno želite e‑pošto od vsakega komentatorja, izklopite anonimno komentiranje. Obiskovalci vnesejo svojo e‑pošto, uporabniško ime se za njih ustvari, in to je vse. Če e‑pošte ne potrebujete, vklopite anonimno komentiranje in obiskovalec lahko komentira brez dodatnega tipkanja, razen samega komentarja.

### What Visitors See

Polje za uporabniško ime je vnaprej izpolnjeno z ustvarjenim imenom. Gre za običajno vnosno polje, zato ga lahko kdorkoli, ki želi biti znan pod drugim imenom, preprosto zamenja. Nič ni skrito in nič ni vsiljeno.

Imena so sestavljena iz dveh besed in številke, zato so berljiva in nevtralna. Nihče ne konča kot `user_83729`.

### Every Name Is Unique

Ustvarjeno ime se preveri glede na obstoječe račune, preden je predlagano, in je rezervirano za sejo brskalnika tega obiskovalca, tako da naslednji obiskovalec ne dobi istega. Prijavljeni uporabniki, SSO uporabniki in obiskovalci, ki so že komentirali, nikoli ne dobijo novega imena. Ohranijo tisto, ki ga že imajo.

Vrnitev obiskovalca, ki vnese e‑pošto, ki jo je že uporabil, se poveže z njegovim obstoječim računom, tako da drugi obisk ne ustvari druge identitete, tudi če je bil brskalnik medtem izbrisan.

### Bugfix - The Default Username Is Now Truly Shared

Nekateri izmed vas so uporabljali **Default Username** z vrednostjo, kot je "Anonymous", da bi prišli do večine poti. To je imelo pomanjkljivost. Uporabniška imena so edinstvena, zato je prvi obiskovalec, ki je komentiral kot "Anonymous" s svojo e‑pošto, lastnik imena, naslednjemu obiskovalcu z drugo e‑pošto pa je bilo sporočeno, da je uporabniško ime zasedeno.

To je popravljeno. Privzeto uporabniško ime se zdaj obravnava kot skupno prikazno ime, ne kot identiteta. Vsak obiskovalec, ki ga obdrži, dobi svoj račun v ozadju, vsi pa se prikazujejo kot "Anonymous". Uporabniška imena, ki jih obiskovalci vpišejo sami, morajo ostati edinstvena, kot prej.

Če nastavite oboje, prevlada ustvarjeno ime.

### Documentation

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#auto-generate-username" target="_blank">Vodnik za samodejno ustvarjanje uporabniških imen</a>
covers the option and how it interacts with the other anonymous commenting settings.
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#default-username" target="_blank">Vodnik za privzeto uporabniško ime</a>
covers the shared-name behavior.

### In Conclusion

Ta je prišla od stranke, ki upravlja spletno mesto, kjer so obiskovalci pacienti, ki morda pustijo le en komentar. Zahtevanje e‑pošte in edinstvenega uporabniškega imena je bilo preveč vprašanj. Če nastavitve stojijo med vašimi bralci in poljem za komentar, nam to sporočite spodaj.

Živjo!

{{/isPost}}