[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Wichtige Sicherheitsupdates durchgeführt[/postlink]

{{#unless isPost}}
Wir haben das Betriebssystem auf allen unseren Servern gepatcht, um eine aktuelle Linux‑TCP‑Schwachstelle zu beheben, und Node.js aktualisiert, um das Oktober‑Sicherheitsrelease zu übernehmen. Auf Ihrer Seite ist keine Aktion erforderlich.
{{/unless}}

{{#isPost}}

### What's New

Wir haben kürzlich zwei Sicherheitsupdates in der FastComments‑Infrastruktur abgeschlossen: ein Betriebssystem‑Update, um eine
Schwachstelle im TCP‑Code des Linux‑Kernels zu beheben, und ein Node.js‑Update, um das neueste Sicherheitsrelease zu übernehmen.

### Linux Kernel

Alle unsere Server wurden gepatcht und laufen jetzt mit einem Kernel, der die Korrektur für
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a> enthält.

Dies ist ein Use‑After‑Free im IPv4‑TCP‑Code des Kernels. Der Kernel konnte die an einer Verbindung angehängten IP‑Optionen freigeben, während
eine andere CPU sie noch ausgelesen hat, zum Beispiel beim Aufbau der SYN‑ACK‑Antwort während eines TCP‑Handshakes. Die Korrektur wartet, bis
keine CPU mehr diesen Speicher lesen kann, bevor er freigegeben wird.

### Node.js

FastComments läuft auf Node.js, und wir haben auf Version 24.22.1 aktualisiert, das gepatchte Release für die 24.x‑Linie aus dem
<a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">Oktober‑2026‑Node.js‑Sicherheitsrelease</a>.

Dieses Release behebt 10 Schwachstellen in den unterstützten Node.js‑Versionen. 8 davon betreffen die 24.x‑Linie, und 4 von ihnen
werden als hoch eingestuft: zwei bei der TLS‑Validierung von IP‑Adressen, eine bei der DNS‑Namensverarbeitung und eine im Brotli‑Decoder. Es aktualisiert außerdem
gebündelte Abhängigkeiten, darunter OpenSSL, c-ares, Undici und das CA‑Zertifikats‑Bundle.

### What You Need To Do

Nichts. Diese Updates erfolgen ausschließlich auf unserer Seite, sodass Ihre Widgets, API‑Integrationen und SSO‑Konfigurationen keine Änderungen benötigen.

### In Conclusion

Unsere Infrastruktur aktuell zu halten ist ein fortlaufender Teil des Betriebs von FastComments, und wir werden weiterhin Updates wie diese
einspielen, sobald sie veröffentlicht werden. Wenn Sie Fragen haben, lassen Sie es uns unten wissen.

Viele Grüße!

{{/isPost}}

---