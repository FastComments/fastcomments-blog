---
[category:Moderation]
###### [postdate]
# [postlink]Ažuriranje maskiranja nepristojnih reči[/postlink]

{{#unless isPost}}
FastComments otkrivanje i maskiranje nepristojnih reči dobija unapređenje
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno, FastComments je omogućavao definisanje samo jedne globalne crne liste reči za ceo vaš nalog.

Ova lista reči koje treba maskirati, ili koristiti za otkrivanje spama, nije mogla biti definisana po jeziku. Takođe, mogla je sadržati samo
listu reči, a ne fraze.

Sada su izvršena sledeća unapređenja:

1. Crna lista može biti definisana po lokalitetu (jezik + regija).
2. Pored reči, fraze se sada mogu maskirati, ili koristiti za otkrivanje spama.
3. Ažuriranje konfiguracije za otkrivanje nepristojnih reči je sada *uživo* i *trenutno*. Prethodno je moglo potrajati do pet minuta da se promene primene.

### Kako to koristiti

Link ka crnoj listi reči se nije promenio, i ostaje na [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) i
i dalje je dostupan iz `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

Na ovoj stranici ćete sada videti padajući meni za jezik kako biste prilagodili crnu listu po lokalitetu.

Nakon odabira lokaliteta, možete definisati reči ili fraze za maskiranje.

### Ograničenja

Možete definisati do 5.000 reči ili fraza po lokalitetu. Ako vam je potrebno da povećate ovaj limit, obratite se podršci.

### Uživo je!

Sve promene koje napravite na listi reči ili fraza za maskiranje se sada odmah primenjuju na sistem.

### Ko to dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup novim funkcijama *crne liste reči* i *crne liste fraza*.

### U zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzom i jednostavnom za korišćenje.

Živeli!

{{/isPost}}

---