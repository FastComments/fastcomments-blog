---
[category:UI & Customization]

###### [postdate]
# [postlink]Anpassung des Standardavatars[/postlink]

{{#unless isPost}}
Das Standardavatar-Bild kann jetzt angepasst werden.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dieser Artikel enthält Fachbegriffe

#### Einführung

Das Standard-Icon ist seit der Einführung von FastComments gleich geblieben. Behalte die Herrlichkeit des Standardprofil-Icons im Auge.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Standard-Profil-Icon" alt="Standard-Profil-Icon" />
</div>

Jetzt kannst du es jedoch anpassen.

#### Ohne Code

Zuerst, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">füge eine Anpassungsregel hinzu oder bearbeite sie</a>. Anpassungsregeln können
für eine Seite, eine Domain oder dein gesamtes Konto angewendet werden. Wenn du das Profilbild global ändern möchtest, kannst du das URL-ID-Feld leer lassen.

Scrolle nach unten zum Abschnitt "Standardavatar".

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Einstellungen"
    class='lozad' />
    
Klicke auf die Schaltfläche, um ein JPG, PNG oder GIF von bis zu 20 MB hochzuladen. Es wird auf eine quadratische Größe von 100px skaliert.

#### Im Code

Wenn du den Standardavatar hosten möchtest und bereits eine öffentliche URL dafür hast, kann er im Code wie im gegebenen Beispiel definiert werden.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Das Bild sollte quadratisch sein und eine Größe von 100px x 100px haben. Wenn du diese Vorgaben befolgst, wird das beste Erlebnis gewährleistet.

#### Stolperfallen

1. Die Anpassung des Standardprofilbildes betrifft nur deine Website. Sie hat keinen Einfluss auf Benachrichtigungs-E-Mails oder die Konten der Benutzer.
2. Kommentare, die vor dieser Änderung erstellt wurden, können weiterhin das alte Profilbild anzeigen. Wenn du das Standardprofil-Icon anpasst und viele Kommentare auf deiner Website mit dem alten Profil-Icon beobachtest, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">lass es uns wissen</a>.

#### Fazit

Wir hoffen, dass du diese Anleitung hilfreich und leicht verständlich fandest. Zögere nicht, unten Fragen zu stellen.

Prost!

{{/isPost}}

---