---
[category:Moderation]
###### [postdate]
# [postlink]Ažuriranje maskiranja uvredljivih reči[/postlink]

{{#unless isPost}}
FastComments detekcija i maskiranje uvredljivih reči dobija unapređenje
{{/unless}}

{{#isPost}}

### Šta je novo

Ranije, FastComments je omogućavao samo definisanje jedne globalne liste reči za maskiranje na vašem celokupnom nalogu.

Ova lista reči za maskiranje, ili za korišćenje u detekciji spama ukoliko je to poželjno, nije mogla biti definisana po jeziku. Takođe je mogla sadržati samo
listu reči, a ne fraze.

Sada su napravljena sledeća unapređenja:

1. Lista za maskiranje može biti definisana po-lokaciji (jezik + regija).
2. Pored reči, fraze se sada mogu maskirati ili koristiti za detekciju spama.
3. Ažuriranje konfiguracije detekcije uvredljivih reči je sada *uživo* i *odmah*. Ranije je moglo potrajati do pet minuta da se promene primene.

### Kako to koristiti

Link do liste reči za maskiranje se nije promenio i ostaje na [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) i
još je uvek dostupan iz `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

Na ovoj stranici sada ćete videti padajući meni za jezike kako biste prilagodili listu reči po lokaciji.

Nakon što izaberete lokaciju, možete definisati reči ili fraze za maskiranje.

### Ograničenja

Može se definisati do 5,000 reči ili fraza po lokaciji. Ako vam je potrebno povećanje ovog limita, obratite se podršci.

### To je uživo!

Sve promene koje napravite na listi reči ili fraza za maskiranje se sada odmah primenjuju na sistem.

### Ko dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup novim funkcijama *liste reči* i *liste fraza* za maskiranje.

### Zaključak

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzim i lakim za korišćenje.

Živeli!

{{/isPost}}

---