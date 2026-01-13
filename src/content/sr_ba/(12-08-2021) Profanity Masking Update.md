---
[category:Moderation]
###### [postdate]
# [postlink]Ažuriranje Maske za Psovke[/postlink]

{{#unless isPost}}
FastComments detekcija i maskiranje psovki dobija unapređenje
{{/unless}}

{{#isPost}}

### Šta je Novog

Prethodno, FastComments je omogućavao definisanje samo jedne globalne liste reči za blokiranje na vašem celom nalogu.

Ova lista reči za maskiranje, ili za korišćenje u detekciji spama ako želite, nije mogla biti definisana po jeziku. Takođe je mogla da sadrži
samo listu reči, a ne fraze.

Sada su napravljena sledeća unapređenja:

1. Lista za blokiranje može biti definisana po lokalitetu (jezik + region).
2. Pored reči, sada je moguće maskirati fraze, ili ih koristiti za detekciju spama.
3. Ažuriranje konfiguracije detekcije psovki je sada *uživo* i *odmah*. Prethodno je moglo potrajati do pet minuta da se promene primene.

### Kako da To Koristite

Link ka listi reči za blokiranje nije se promenio i ostaje na [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) i
i dalje je dostupan iz `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

Na ovoj stranici sada ćete videti padajući meni za jezik koji će omogućiti prilagođavanje liste za blokiranje po lokalitetu.

Kada odaberete lokalitet, možete definisati reči ili fraze za maskiranje.

### Ograničenja

Može se definisati do 5,000 reči ili fraza po lokalitetu. Ako vam je potrebno povećanje ovog limita, obratite se podršci.

### To Je Uživo!

Sve promene koje napravite na listi reči ili fraza za maskiranje sada se odmah primenjuju na sistem.

### Ko To Dobija

Svi trenutni i novi FastComments korisnici, na svim nivoima, sada imaju pristup novim funkcijama *liste reči* i *liste fraza* za blokiranje.

### Na Zaključku

Kao i ostatak FastComments-a, nadamo se da ćete ovu funkciju smatrati brzim i lakim za korišćenje.

Pozdrav!

{{/isPost}}