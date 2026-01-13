---
[category:Moderacija]
###### [postdate]
# [postlink]Ažuriranje maskiranja uvredljivih reči[/postlink]

{{#unless isPost}}
FastComments Detekcija i maskiranje uvredljivih reči dobija unapređenje
{{/unless}}

{{#isPost}}

### Šta je novo

Prethodno, FastComments je dozvoljavao definisanje jedne globalne crne liste reči na vašem celom nalogu.

Ova lista reči za maskiranje, ili za korišćenje u detekciji spama ako je to poželjno, nije mogla biti definisana po jeziku. Takođe je mogla sadržati
samo listu reči, a ne fraze.

Sada su napravljena sledeća unapređenja:

1. Crna lista može biti definisana po lokaciji (jezik + region).
2. Pored reči, fraze sada mogu biti maskirane, ili korišćene za detekciju spama.
3. Ažuriranje konfiguracije detekcije uvredljivih reči sada je *uživo* i *odmah*. Prethodno, moglo je potrajati do pet minuta da promene stupe na snagu.

### Kako to koristiti

Link ka crnoj listi reči se nije promenio, i ostaje na [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) i
još uvek je dostupan iz `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

Na ovoj stranici sada ćete videti padajući meni za jezik kako biste prilagodili crnu listu po lokaciji.

Kada odaberete lokaciju, možete definisati reči ili fraze za maskiranje.

### Ograničenja

Do 5,000 reči ili fraza može biti definisano po lokaciji. Ako vam treba povećanje ovog limita, obratite se podršci.

### Uživo je!

Sve promene koje napravite na listi reči ili fraza za maskiranje sada se primenjuju na sistem odmah.

### Ko to dobija

Svi trenutni i novi korisnici FastComments-a, na svim nivoima, sada imaju pristup novim *rečnim* i *fraznim* funkcijama crne liste.

### Na kraju

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju naći brzom i jednostavnom za korišćenje.

Pozdrav!

{{/isPost}}

---