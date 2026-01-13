---
[category:Announcements]
[category:Performance]
[category:API & Development]
###### [postdate]
# [postlink]FastComments je zdaj globalno distribuiran[/postlink]

{{#unless isPost}}
FastComments je prešel na novo arhitekturo za boljšo globalno zmogljivost.
{{/unless}}

{{#isPost}}

### Novosti

Prej je imel FastComments zelo tradicionalno arhitekturo za spletno aplikacijo. Imeli smo naše aplikacijske strežnike, baze podatkov in nekaj drugih storitev. To je bilo
podvojeno v dveh regijah (us-west in eu). Če ste bili v Franciji in ste želeli ogledati komentarje za stranko, ki je bila gostovana v našem
globalnem podatkovnem centru, bi morale vaše zahteve potovati vse do us-west po podatke o komentarjih.

Več ne! Zdaj so podatki o komentarjih in vsi medijski viri replikirani globalno za stranke v naši globalni implementaciji, in za stranke
v naši EU implementaciji imamo tri točke prisotnosti v EU, kjer so podatki replikirani. Vaše zahteve gredo na najbližji vozlišče v
EU.

### Kako je delovalo prej

Razen baz podatkov, ki so imele več aktivnih replik v različnih regijah in oblačnih ponudnikih, so bile vse storitve nameščene na enem primeru na tip storitve.
To je pomenilo, da smo imeli za vsako regijo en aplikacijski strežnik, en pubsub strežnik in en medijski strežnik. Načrt je bil, da vertikalno povečamo zmogljivost, dokler smo lahko,
saj je to ohranjalo stvari preproste. Pisanje kode je bilo enostavno - vedno ste vedeli, da lahko "preberete svoje lastne zapise", ko ste se povezali z bazo podatkov. Infrastruktura je bila enostavna,
z izjemo varnostnih posodobitev, ki so zahtevale minuto nedelovanja.

### Težava

Težava se je očitno začela, ko smo dosegli kapaciteto. Torej smo optimizirali, in nato na koncu morali povečati velikost instanc za to storitev.

To je začelo postajati predrago na Linode, kjer je instanca za 144 $ približno enaka, na podlagi naših testov passmark, 20 $ OVH vozlišču, in tudi če
bi zamenjali ponudnike gostovanja, bi imeli enojne točke odpovedi povsod - in ponudniki, kot je OVH, običajno potrebujejo več časa za reševanje težav kot Linode
pri vzdrževalnih težavah.

### RiR :)

V prvih nekaj letih so bile storitve PubSub in Media pri FastComments napisane v Javi. Java je bila izbrana, ker je bila relativno visoko zmogljiva za vložen trud,
in po letih tuniranja GC, preizkušanju G1GC, Shenandoah in Z1, smo se odločili, da ne več Jave. Prevelik strošek uporabe pomnilnika je bil preprosto prevelik in ker so bile te
storitve zelo stagnantne, ko so bile enkrat dokončane, so koristi Jave izhlapele. Poleg tega so bile te storitve primerni kandidati za prehod na C++ ali Rust.

Rust je bil izbran, ker nismo strokovnjaki za C++, in napaka v omrežni kodi bi lahko izpostavila podatke ene stranke drugi. Rust nam pomaga preprečiti tovrstne težave.

Želeli smo združiti te storitve, zato, čeprav bi lahko naredili *še eno* optimizacijo morda z GraalVM, smo se odločili za prehod na Rust in zaključili s tem.

Migracija ni bila brez težav. Te storitve morajo končati SSL, podpirati HTTP 1.1, HTTP/2 in podobno. Ukvarjajo se z mnogimi hkratnimi tokovi podatkov,
berejo medije iz robnega na disku hrambe lru predpomnilnika, S3, baz podatkov in komunicirajo v mreži. Java ekosistem, Vertx in Netty, so bili zelo dobri za te stvari. Potiskamo ekosistem knjižnic do meja, in brez veliko izkušenj z Rust knjižnicami smo imeli
nekatere poskuse in napake. To je povzročilo nekaj nedelovanja, in se za to opravičujemo.

Eksperimentirali smo tudi z različnimi upravljalniki pomnilnika, ter se odločili za mimalloc za naše prilagojene DNS strežnike in libc za transportno plast. Ne uporabljamo Nginx ali Apache, namesto tega
uporabljamo svojo lastno kombinacijo prilagojenega DNS strežnika, ki globalno usmerja stranke na osnovi v spominu indeksu, ki se tedensko obnavlja iz Maxminda, in naše transportne plasti v Rustu, ki vzdržuje mrežo
z drugimi transportnimi instancami. Transport konča SSL, obravnava delo pubsub in je naš CDN. Prednost tega je manjši strošek pri premikanju stvari med
storitevmi in manjša infrastruktura/abstrakcija. Slaba stran je vidljivost, zato so dobri metri pomembni.

Kar zadeva rezultantno zmogljivost, so Rust storitve uporabljale približno 10-30% pomnilnika Jave, kljub vsem našim prizadevanjem. Berem knjige, kot so Java Concurrency in Practice za zabavo, tako da
čeprav nisem strokovnjak, vem nekaj o pisanju hitrih JVM storitev, in to je bilo veliko lažje doseči z Rust. Poleg tega bi vrhovi sporočil za veliko število
prejemnikov težko vplivali na obremenitev CPU, ko bi JVM storitve porabile 40% svojega časa v GC, kljub pisanju naše kode bolj kot v igri motor in manj
kot v tipičnem strežniku. Ne morem reči, da sem velik oboževalec Rusta, ampak za storitve, ki opravljajo veliko dela in se ne spreminjajo veliko po začetnem razvoju, je popoln. Naša glavna poslovna logika
ostaja v TypeScript.

### Nova arhitektura

Nova arhitektura nima več "ljubkovalnih" vozlišč. Namesto tega je vsak strežnik popoln klon z vsemi istimi storitvami in skoraj identično konfiguracijo. Vsi izvajajo
transport, DNS, aplikacijski strežnik in kopijo baze podatkov. Vsa vozlišča ohranjajo popolno šifriranje diska z avtomatskim odklepanjem s pomočjo Dropbear.

Vsak strežnik izvaja usmerjanje transporta, ki konča zahteve in jih obravnava kot websocket, http tok ali cdn zahtevo. Ti strežniki se povezujejo med seboj in zagotavljajo lokalnemu DNS strežniku zemljevid globalne mreže v realnem času, da obvestijo DNS, kje vsako aktivno vozlišče globalno.

Ena od prednosti nove arhitekture je redundanca. Če stranka v eni regiji zahteva našo storitev res močno, preostale regije ostanejo online.

Koda aplikacije mora zdaj biti zelo pozorna, katere poizvedbe lahko dosežejo najbližje vozlišče ali katere morajo iti na primarno bazo podatkov, ki je morda daleč. Napaka
lahko drastično zmanjša zmogljivost. To pomeni tudi, da so zapisi iz nekaterih regij lahko počasni, kar zahteva previdno nastavljanje in optimizacijo. Zdaj sledimo notranjemu vzorcu
v kodi, kjer vse metode, ki dostopajo do baze podatkov, prejemajo argument readPreference, tako da morajo klicatelji do vrha izrecno odločiti, kako poizvedovati.

Prednost tega je zelo dobra horizontalna skalabilnost za branje. FastComments je zelo usmerjen na branje, vendar ne smemo pozabiti na naše moderatorje! Moderatorji delajo dan za dnem po vsem svetu
in želimo, da ostane njihova izkušnja dobra. Kot del te implementacije smo delali z nekaterimi od njih, da zagotovimo, da orodja za moderiranje ostanejo hitra.

Prav tako lahko izberemo strojno opremo, kar je zabavno in nagrajujoče. Novi strežniki so mešanica i5-13500 in Ryzen 5 5600X enot, EU pa je na nekaterih starejših Xeonih. V naših merjenjih so bili vsi ti
znatno hitrejši od dražjih strežnikov, ki smo jih raziskovali pri drugih ponudnikih. Slaba stran je več dela pri nastavitvi, vendar smo to avtomatizirali, skupaj z nadzorom SMART diskov za odpovedi in podobno.

Izvajanje teh vrst stvari pomeni, da lahko še naprej ponujamo konkurenčne cene.

### Izvajanje

Izvajanje v zadnjih nekaj mesecih, ko ponovno pišemo storitve in prehajamo na nove ponudnike gostovanja, je bilo neučinkovito, hvala vam za potrpljenje.

Na začetnem izvajanju so naše meritve pokazale povečanje zahtevkov, ki trajajo več kot 100 ms. Poskušamo, da ne bi imeli veliko zahtevkov, ki trajajo tako dolgo za karkoli.

<div class="text-center">
    <div class="sm">Postopni napredek</div>
    <img src="images/slow-reqs.png" alt="Počasne zahteve" title="Počasne zahteve" />
</div>

Še naprej dosežemo postopni napredek pri izboljšanju zmogljivosti za nekatere regije. Hvala vsem, ki so doslej podali povratne informacije.

### Premisleki pri uporabi API-ja

API ostaja močno dosleden - lahko berete svoje lastne zapise - da ohranimo združljivost s preteklimi različicami in stvari poenostavimo za razvijalce. Da omogočimo
razvijalcem, da izberejo zmogljivost pred doslednostjo, nameravamo izpostaviti parameter readPreference. Prednost je, da morda ponujamo tudi popust za
te API klice.

Vsi javni končni točki, kot je za serviranje javnega komentarja, vedno berejo iz najbližje (lokalne) baze podatkov na tem vozlišču.

### Zakaj ne preprosto uporabiti običajnega CDN

Komentarski tokovi niso statični, temveč so živi, in uporaba živega toka nad zastarelim statičnim podatkom prav tako ne deluje, saj ko ogledujete tok kot
anonimen uporabnik, dobite "anonimno sejo". V tej anonimni seji lahko delate stvari, kot so blokiranje in označevanje drugih uporabnikov, prav tako pa morate pokazati,
če je anonimni uporabnik imel rad določen komentar, in tako naprej. Komentarji so lahko tudi zaklenjeni za SSO, avtentikacijo ali uporabniške skupine. 

Končno, vrsta "progresivne izboljšave", kjer so dinamični podatki preslikani na statične podatke iz CDN, daje slabo izkušnjo, kjer se vsebina premika
ali se spreminja po nekaj sekundah. Raje tega ne bi počeli.

### Kdo ima zdaj moje podatke

Vaši podatki več niso shranjeni na Linode. Replikacijajo se v živo med Hetzner in OVH z popolnim šifriranjem diska, in vsa komunikacija med zadnjimi strežniki
se izvaja z TLS. Ohranimo nekaj starejših Linode instanc za zunanje webhook proxy, vendar nobeni podatki ali mediji ne ostanejo shranjeni na Linode.

### Na koncu

Kot pri vseh večjih izdajah, smo veseli, da smo si lahko vzeli čas za optimizacijo, testiranje in pravilno izvedbo te spremembe. FastComments bi moral bolje skalirati in imeti
boljšo razpoložljivost na dolgi rok s to nalogo. Sporočite nam spodaj, če odkrijete kakršnakoli vprašanja.

{{/isPost}}