---
[category:Moderation]
###### [postdate]
# [postlink]Ažuriranje maskiranja psovki[/postlink]

{{#unless isPost}}
FastComments Detekcija i maskiranje psovki dobiva nadogradnju
{{/unless}}

{{#isPost}}

### Što je novo

Ranije, FastComments je dopuštao definiranje samo jedne globalne crne liste riječi na vašem cijelom računu.

Ova lista riječi za maskiranje, ili za korištenje u detekciji spama ako je to poželjno, nije mogla biti definirana po jeziku. Također je mogla sadržavati samo
listu riječi, a ne fraze.

Sada su napravljene sljedeće nadogradnje:

1. Crna lista može biti definirana po lokalitetu (jezik + regija).
2. Pored riječi, fraze se sada mogu maskirati ili koristiti za detekciju spama.
3. Ažuriranje konfiguracije detekcije psovki sada je *uživo* i *imediatno*. Ranije je moglo trajati do pet minuta da promjene budu primijenjene.

### Kako to koristiti

Veza za crnu listu riječi nije se promijenila i ostaje na [/auth/my-account/moderate-comments/blacklist](https://fastcomments.com/auth/my-account/moderate-comments/blacklist) i
još uvijek je dostupna iz `Moderate Comments -> Moderation Settings -> Edit Word Blacklist`.

Na ovoj stranici sada ćete vidjeti padajući izbornik jezika za prilagodbu crne liste po lokalitetu.

Odabirom lokaliteta možete definirati riječi ili fraze za maskiranje.

### Ograničenja

Do 5.000 riječi ili fraza može biti definirano po lokalitetu. Ako trebate povećati ovaj limit, obratite se podršci.

### To je uživo!

Sve promjene koje napravite na listi riječi ili fraza za maskiranje sada se odmah primjenjuju na sustav.

### Tko to dobiva

Svi trenutni i novi kupci FastCommenta, na svim razinama, sada imaju pristup novim značajkama *crne liste riječi* i *crne liste fraza*.

### U zaključku

Kao i ostatak FastCommenta, nadamo se da ćete ovu funkciju smatrati brzom i jednostavnom za korištenje.

Živjeli!

{{/isPost}}

---