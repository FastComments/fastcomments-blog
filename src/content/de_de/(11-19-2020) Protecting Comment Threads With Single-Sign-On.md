---
[category:Security]

###### [postdate]
# [postlink]Schutz von Kommentarthreads mit Single-Sign-On[/postlink]

{{#unless isPost}}
Halten Sie Ihre Kommentarthreads nicht für öffentlich? Haben Sie SSO zur Authentifizierung eingerichtet? Dies könnte für Sie von Interesse sein.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel Enthält Fachbegriffe

#### Einführung

FastComments SSO <a href="/(4-13-2020)-setting-up-sso-with-fastcomments.html" target="_blank">(Details hier)</a> bietet Ihren Benutzern eine Möglichkeit,
zu kommentieren, ohne sich auf einer anderen Plattform anmelden zu müssen.

Dies allein sichert jedoch Ihre Kommentarthreads nicht, da standardmäßig Kommentardaten öffentliche Informationen sind - jeder, der die Seite ansehen kann, kann auch die Kommentare sehen. Dieses Update ändert das jedoch.

#### No-Code Setup

Wir können das Anzeigen und Interagieren mit unseren Kommentarthreads verhindern, wenn SSO eingerichtet ist, indem wir eine <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">Anpassungsregel</a> erstellen.

Suchen Sie dazu nach SSO, und Sie finden diese Option:

<div class="text-center">
    <img src="/images/fc-sso-protection.png" title="Konfigurationsoption zum Sperren von Kommentaren über SSO" alt="Konfigurationsoption zum Sperren von Kommentaren über SSO" class="lozad" />
</div>

Aktivieren Sie diese Option und speichern Sie die Anpassungsregel.

#### Nur Eine Bestimmte Domain oder Seite Schützen

Um nur eine bestimmte Domain oder Seite zu schützen, konfigurieren wir einfach die Anpassungsregel entsprechend.

Ganz oben in der Anpassungsbenutzeroberfläche finden wir zwei Eingabefelder: Domain und URL-ID.

<div class="text-center">
    <img src="/images/fc-sso-protection-by-page.png" title="Konfigurationsoption nach Seite oder Domain" alt="Konfigurationsoption nach Seite oder Domain" class="lozad" />
</div>

Um nur eine bestimmte Domain zu schützen, geben Sie die betreffende Domain in das Feld "Domain" ein.

Um eine bestimmte Seite zu schützen, geben Sie eine Seiten-URL in das Feld "URL-ID" ein. Wenn Sie eine benutzerdefinierte Integration mit FastComments haben, können Sie hier anstelle einer URL eine Art von ID eingeben.

#### Schutz Über Das Lesen Hinaus

Die Aktivierung dieser Option schützt die Seite oder Domain davor, kommentiert zu werden, es sei denn, der Benutzer ist über SSO angemeldet. 

#### Fallstricke

Alle Benutzer, die Kommentare vor Ihrer SSO-Integration erstellt haben, können diese nicht sehen, es sei denn, sie melden sich über Ihre SSO-Integration an.

#### Fazit

Wir hoffen, Sie fanden diesen Leitfaden hilfreich und leicht verständlich. Zögern Sie nicht, unten mit Fragen zu kommentieren.

Prost!

{{/isPost}}

---