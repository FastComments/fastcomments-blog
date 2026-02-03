---
[category:Moderation]

###### [postdate]
# [postlink]Kreiranje tima moderatora komentara sa FastComments[/postlink]

Vojska jednog čoveka može se proširiti samo do određenog nivoa. Šta radite kada vas preplavi broj komentara koje treba da pregledate?

{{#unless isPost}}
Pročitajte ovaj post da vidite kako da pozovete moderatore komentara na FastComments.
{{/unless}}

{{#isPost}}
### Problem

Imate puno sadržaja i puno komentara. To je dobro - vaša korisnička baza je dovoljno angažovana da interaguje sa vama. Ali sada ste preplavljeni
i potrebno je skalirati vašu operaciju.

### Moderacija FastComments

Alati za moderaciju FastComments pružaju efikasno okruženje za pregled komentara, označavanje kao spam ili (ako morate) brisanje.

Kontrolna tabla je takođe responzivna, tako da možete pregledati i moderirati komentare u pokretu!

Međutim, pristup moderiranju komentara na vašem sajtu nije ograničen samo na vaš nalog. Neko može da napravi svoj vlastiti FastComments nalog i bude pozvan
na vaš sajt putem administratorske kontrolne table, [ili u grupama putem API-ja](https://docs.fastcomments.com/guide-api.html#moderator-structure). Oni čak ne moraju da znaju za FastComments ili da kreiraju nalog unapred. Link za poziv koji ćemo vam pokazati
kako da pošaljete vodiće ih kroz kreiranje naloga.

Jednostavno se prijavite na svoj nalog i pređite mišem preko Moderirati komentare. Videćete opciju za Upravljanje moderatorima.

<img 
    src="images/fc-add-moderator-menu.png"
    alt="Upravljanje moderatorima"
    title="Upravljanje moderatorima"
    class='lozad' />

Ako još niste dodali nijednog moderatora, ovaj dugme će vas odvesti do čarobnjaka koji će vas voditi kroz dodavanje moderatora.

Biće potrebno da navedete ime i email. Automatski će im biti poslat pozivni link koji će ih takođe voditi kroz kreiranje naloga.

Opcionalno, možete postaviti moderatore i komentare u posebne grupe. [Saznajte više o grupama moderacije i daljim funkcijama moderacije ovde.](https://docs.fastcomments.com/guide-moderation.html)

Ako imate tim moderatora, možete videti njihov napredak sa istog mesta - lista moderatora komentara pruža statistiku za svakog moderatora. Ovo uključuje
broj komentara koje su označili kao pregledane, spam, i obrisane.

To je to. Nakon što pošaljete taj pozivni link, mogu da kreiraju svoj nalog i imaće potpuni pristup za moderiranje vaših komentara. Videće samo pojednostavljenu
verziju stranice za moderiranje komentara - moderatorima nije omogućena mogućnost promene postavki.

Srećno komentarisanje!

{{/isPost}}

---