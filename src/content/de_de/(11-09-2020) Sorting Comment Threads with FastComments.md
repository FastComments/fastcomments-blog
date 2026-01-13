---
[category:Features]
###### [postdate]
# [postlink]Kommentare sortieren mit FastComments[/postlink]

{{#unless isPost}}
Seit dem Start erlaubte FastComments nicht, die Sortierreihenfolge des Kommentar-Threads zu ändern. Das ändert sich mit diesem Release!
{{/unless}}

{{#isPost}}

#### Zielgruppe

Die Zielgruppe für diesen Artikel besteht aus sowohl Administratoren als auch Kommentatoren.

#### Einführung

Kommentare wurden immer anhand einer Kombination aus ihrem Alter und Karma (Auf- und Abvotes) sortiert. Bis jetzt war das die einzige erlaubte Sortierrichtung.

#### Neue Sortierrichtungen

Das FastComments Kommentar-Widget unterstützt jetzt zusätzlich die Sortierung nach Neueste und Älteste zuerst.

#### Sortierrichtung ändern

Wenn die Anzahl der Oberkommentare größer als eins ist, erscheint ein neues Dropdown-Menü, um die Sortierrichtung zu ändern.

<div class="text-center">
    <img src="images/fc-sort-dropdown.png" alt="Sortenauswahl-Dropdown" title="Sortenauswahl-Dropdown" />
</div>

Beim Auswählen von Neueste oder Älteste zuerst berücksichtigen wir das Karma des Kommentars nicht.

#### Standard-Sortierrichtung ändern

Während die Standard-Sortierrichtung Am relevantesten ist, kann die Standard-Sortierrichtung einfach angepasst werden, indem eine <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Anpassungsregel</a> erstellt wird.

#### Schnell bleiben

Damit FastComments weiterhin seinem Namen gerecht wird, wurde viel Zeit darauf verwendet, um sicherzustellen, dass die Sortierung in allen Richtungen gut optimiert ist. Kommentare werden sortiert, während sie hinterlassen werden, sodass beim Laden der Seite keine tatsächliche Sortierung stattfindet. Dies stellt sicher, dass das Laden des Kommentar-Widgets und das Ändern der Sortierrichtung schnell ist, egal wie viele Kommentare Sie haben.

#### Zum Abschluss

Wir hoffen, dass Sie dieses Update hilfreich fanden. Fühlen Sie sich frei, unten mit Fragen zu kommentieren.

Prost!

{{/isPost}}

---