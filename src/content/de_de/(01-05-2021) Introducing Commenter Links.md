---
[category:Features]
###### [postdate]
# [postlink]Einführung der Kommentator-Links[/postlink]

{{#unless isPost}}
Unser erstes Release von 2021 bringt die Möglichkeit (wenn auf Mieter-Ebene aktiviert), dass Nutzer ihren Blog-Link beim Kommentieren hinzufügen können.
{{/unless}}

{{#isPost}}

## Was gibt es Neues

Unser erstes Release von 2021 bringt die Möglichkeit (wenn auf Mieter-Ebene aktiviert), dass Nutzer ihren Blog-Link beim Kommentieren hinzufügen können.

## Was sind Kommentator-Links?

Wie wir in diesem sehr neugierigen Austausch sehen, hat einer dieser Nutzer seinen Benutzernamen unterstrichen, um anzuzeigen, dass es sich um einen Link handelt:

<div class="text-center">
    <img src="images/fc-blog-links.png" alt="Kommentator-Links" title="Kommentator-Links Demo" />
</div>

Das liegt daran, dass die Website ihre FastComments-Installation so konfiguriert hat, dass ein neues Feld beim Kommentieren ausgefüllt werden kann, in dem der
Nutzer einen Link hinterlassen kann:

<div class="text-center">
    <img src="images/fc-blog-link-input.png" alt="Kommentator-Link Eingabe" title="Kommentator-Link Eingabe" />
</div>

Dieser Link kann auch durch Bearbeitung Ihrer <a href="https://fastcomments.com/auth/my-account/edit-details" target="_blank">Kontodetails</a> angepasst werden.

## Aktivierung der Kommentator-Links

Durch das Erstellen einer <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Anpassungsregel</a> können wir das neue Eingabefeld aktivieren. Aktivieren Sie einfach die Option "Kommentator-Links aktivieren".

<div class="text-center">
    <img src="images/fc-commenter-links-enabling.png" alt="Aktivierung der Kommentator-Links" title="Blog-Links" />
</div>

## Überschreiben des Platzhaltertextes im Eingabefeld

Standardmäßig ist der Platzhaltertext im Kommentator-Link-Feld "Ihre Blog-URL.". Dies kann über die gleiche Anpassungsregel überschrieben werden, die Sie zur Aktivierung der Funktion verwendet haben, indem Sie auf "Benutzerdefinierten Text anzeigen" klicken.

## Verbesserung der Spam-Klassifizierung

Diese Funktion hat den Nebeneffekt, dass Inhalte, die fälschlicherweise als Spam markiert werden, reduziert werden können. Kommentare mit wenig Text und einem Link haben eine höhere Wahrscheinlichkeit, als Spam eingestuft zu werden. Der Kommentator-Link beeinflusst jedoch nicht die Klassifizierung, ob der Kommentar Spam ist oder nicht. Das bedeutet, dass ein Nutzer mit seinem Blog-Link kommentieren kann, ohne ein viel höheres Risiko zu haben, dass der Kommentar als Spam markiert wird.

Aus diesen Gründen möchten Websites mit hohen Mengen an Spam diese Funktion möglicherweise nicht aktivieren, jedoch werden diejenigen, die dies nicht tun, den Wert in der Verwendung dieser Funktion bei bestimmten Zielgruppen finden.

## Auswirkungen auf bestehende Kunden

Wenn Sie ein bestehender Kunde sind, der FastComments verwendet, werden Ihre Nutzer keine Änderungen in der Funktionalität erleben, es sei denn, Sie aktivieren diese Funktion. Das gilt auch für neue Kunden - Sie werden feststellen, dass diese Funktion standardmäßig deaktiviert ist.

## Fazit

Wir hoffen, dass diese Funktion der Beginn eines besseren Jahres als das letzte ist. Viel Spaß beim Kommentieren!

{{/isPost}}