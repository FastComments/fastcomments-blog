---
[category:Moderation]
[category:Tutorials]
###### [postdate]
# [postlink]So verhindern Sie Spam in Ihren Kommentaren[/postlink]

Es gibt keine Möglichkeit, Spam zu 100 % zu bekämpfen. Aber FastComments setzt mehrere Maßnahmen ein, um zu helfen.

{{#isPost}}

## Site Admin Dokumentation

Eine Standardinstallation von FastComments hat sowohl Spam- als auch Schimpfwörterfilter aktiviert.

Diese Standardeinstellungen finden ein Gleichgewicht zwischen der Verhinderung von Spam und der Vermeidung zu aufdringlicher Maßnahmen für die meisten Gemeinschaften.

[Sie möchten möglicherweise den Moderationsleitfaden überprüfen](https://docs.fastcomments.com/guide-moderation.html).

## Wie es funktioniert

Unser Spamfilter verwendet einen [Naive Bayes-Klassifikator](https://en.wikipedia.org/wiki/Naive_Bayes_classifier), um Spam zu identifizieren.

Er wird im Laufe der Zeit trainiert, basierend darauf, was Administratoren als Spam und nicht-Spam markieren.

FastComments läuft in einem iframe auf Ihrer Website. Dies erschwert es automatisierten Spam-Bots, Ihren Kommentarbereich anzugreifen. Wenn sie jedoch
doch versuchen und unser Klassifikator herausfindet, dass ihre Kommentare "spammy" sind, werden sie Ihren Nutzern verborgen. Wie alle anderen Kommentare werden sie auch als
"muss überprüft werden" auf der [Moderationsseite](https://fastcomments.com/auth/my-account/moderate-comments) des Dashboards markiert.

Die Schimpfwörterfilterung führt jedoch standardmäßig nicht dazu, dass Kommentare verborgen werden. Es maskiert einfach die "schlechten Wörter" mit Sternchen.

## Spam vollständig blockieren

Standardmäßig lässt FastComments den Spam zu, verbirgt ihn jedoch und markiert ihn zur Überprüfung.

Wenn Sie dem Nutzer mitteilen möchten, dass sein Kommentar als Spam erkannt wurde, und ihn bitten möchten, diesen zu überarbeiten, kann dies in den [Moderationseinstellungen](https://fastcomments.com/auth/my-account/moderate-comments/settings) 
durch Aktivieren der Einstellung `Spam blockieren` erfolgen.

## Obszöne Kommentare verbergen

Obszöne Kommentare können verborgen werden, indem die Option `Obszöne Kommentare automatisch als Spam kennzeichnen` in den [Moderationseinstellungen](https://fastcomments.com/auth/my-account/moderate-comments/settings) aktiviert wird.

## Einstellungen

Sowohl Schimpfwörter- als auch Spamfilterung können in den [Moderationseinstellungen](https://fastcomments.com/auth/my-account/moderate-comments/settings) individuell deaktiviert werden.

## Kommentarverifizierung

FastComments verwendet ein Verifizierungssystem, bei dem standardmäßig [nicht verifizierte Kommentare](https://docs.fastcomments.com/guide-comment-vote-verification.html#unverified-comments) für alle Nutzer sichtbar als solche markiert werden.

Indem Nutzern ermöglicht wird, Kommentare abzugeben, ohne vollständig eingeloggt zu sein, wird die Einstiegshürde für eine Diskussion gesenkt. Das nicht verifiziert-Label kann durch Anpassungsregeln ausgeblendet werden.

Nicht verifizierte Kommentare werden standardmäßig angezeigt, können jedoch bis zur Verifizierung per E-Mail verborgen werden, indem Sie `Nur automatisch genehmigte verifizierte Kommentare` aktivieren.

Beachten Sie, dass bei SSO alle Kommentare immer verifiziert sind. Wenn ein Nutzer in einer verifizierten Sitzung eingeloggt ist, werden seine Kommentare auch immer verifiziert.

Nicht verifizierte Kommentare können auch zur Entfernung geplant werden.

## Für Kommentatoren

Wenn Ihr Kommentar als Spam erkannt wird, sehen Sie sofort eine Nachricht. Dies sollen Sie darüber informieren, dass der Kommentar überprüft werden muss,
bevor er anderen angezeigt wird. Die Spam-Erkennung kann nicht 100 % genau sein, daher verstehen wir, wenn Sie etwas Frustration erleben. Wenn Ihr Kommentar legitim ist, sollte der 
Site-Administrator in der Lage sein, dies zu erkennen und Ihren Kommentar als nicht-Spam zu markieren.

{{/isPost}}

---