---
[category:Features]
[category:Email]

###### [postdate]
# [postlink]DKIM-Konfiguration jetzt in der UI verfügbar[/postlink]

{{#unless isPost}}
FastComments bietet jetzt eine Benutzeroberfläche zur Konfiguration von DKIM, die es einfacher macht, die Zustellraten von E-Mails zu verbessern, ohne die API zu verwenden.
{{/unless}}

{{#isPost}}

### Was gibt's Neues

Die Einrichtung von DKIM für Ihre benutzerdefinierte E-Mail-Domain ist jetzt einfacher geworden. Zuvor erforderte die Konfiguration von DKIM die direkte Nutzung der
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a>. Jetzt können Sie 
DKIM direkt von der FastComments-Admin-Oberfläche aus konfigurieren.

### Warum DKIM wichtig ist

Wenn Sie die Absenderdomain für E-Mails anpassen, die FastComments in Ihrem Auftrag sendet, müssen E-Mail-Anbieter überprüfen, ob 
diese E-Mails legitim sind. DKIM (DomainKeys Identified Mail) ist eines der wichtigsten Authentifizierungsmechanismen, das dabei hilft.
Ohne eine ordnungsgemäße DKIM-Konfiguration ist es wahrscheinlicher, dass E-Mails, die im Auftrag Ihrer Domain gesendet werden, im Spam-Ordner landen.

### So richten Sie es ein

Navigieren Sie zur <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">Seite Meine Domains</a> und klicken Sie auf
„Erweiterte Optionen anzeigen“ für die Domain, die Sie konfigurieren möchten. Dort sehen Sie die DKIM-Einstellungen, in die Sie Ihre Domainname, den Schlüsselwähler und den privaten Schlüssel eingeben können.

Nach dem Speichern wird die DKIM-Konfiguration auf alle E-Mails angewendet, die von dieser Domain gesendet werden.

### Die API funktioniert weiterhin

Wenn Sie die DKIM-Konfiguration programmgesteuert verwalten möchten, funktioniert die 
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> wie zuvor.

### Fazit

Wir hoffen, dass es einfacher wird, sicherzustellen, dass Ihre Benutzer die E-Mails erhalten, die FastComments in Ihrem Auftrag sendet. Lassen Sie uns 
unten wissen, wenn Sie Fragen haben.

Prost!

{{/isPost}}

---