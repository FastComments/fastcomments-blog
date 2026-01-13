---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Wie man ein Kommentarsystem wie Hackaday.com erstellt[/postlink]

{{#unless isPost}}
Hier werden wir die Erstellung eines Kommentarstrangs erkunden, der wie der auf Hackaday aussieht.

Wenn Sie auf den Link zu diesem Beitrag klicken, ändern sich das gesamte Seitenlayout sowie der FastComments Blog.

{{/unless}}

{{#isPost}}
###### 24. Jan 2020
<div class="post-header">
    <div class="by left">von: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WOW, WAS IST PASSIERT?

Dieser Beitrag ist eine Demonstration der Verwendung von FastComments, um ein Kommentarsystem zu erstellen, das wie https://hackaday.com aussieht.

Wir empfehlen Ihnen nicht, sie zu kopieren. Aber dies zeigt die Flexibilität von FastComments.

FastComments so aussehen zu lassen, ist einfach!
Wir haben eine Benutzeroberfläche dafür erstellt! Zum Beispiel ist hier die Konfiguration, die wir verwendet haben, um FastComments an diese Seite anzupassen:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Einstellungen"
        class='lozad'
        height="850px" />
</div>

Wenn Sie es im Code machen möchten, ist es ebenso einfach.

Wir müssen nur ein paar Optionen festlegen. Nun, sieben. Hier ist der Code-Snippet (benutzerdefinierte CSS weggelassen). Nur so viel CSS kann auf diese Weise eingefügt werden. Wir empfehlen Ihnen, die oben genannte Benutzeroberfläche für die Definition von CSS zu verwenden. Sie wird es auch für Sie minimieren, während die Definition der customCSS-Eigenschaft keine Minimierungsoptimierungen anwendet.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] GEDANKEN ZU "WIE MAN EIN KOMMENTARSYSTEM WIE HACKADAY.COM ERSTELLT"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Kommentare';
        },
        headerHTML: '<h1>Hinterlassen Sie eine Antwort</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Was bedeuten diese Punkte?
- commentCountFormat = Das Format des Titels über dem Kommentarstrang. "[count]" wird durch die tatsächliche lokalisierte Anzahl ersetzt.
- commentCountUpdated = Eine Funktion, die aufgerufen wird, wenn die Kommentaranzahl sich ändert. Wir verwenden dies, um die Kommentaranzahl oben auf der Seite festzulegen.
- headerHTML = HTML, das über dem "Antwort hinterlassen"-Feld angezeigt wird. In diesem Fall verwenden wir es, um ein Überschriftselement einzufügen.
- hideAvatars = Hackaday hat keine Avatare. Daher setzen wir dies auf true, um sie auszublenden.
- inputAfterComments = Verschiebt das Antwortfeld an das Ende des Kommentar-Feeds.
- absoluteDates = Ändert das Standarddatumsformat (d.h. "Vor 11 Minuten") in ein absolutes Datum.
- customCSS = Benutzerdefinierte Gestaltung

Alle Konfigurationsoptionen sind <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">hier</a> dokumentiert.

<style>
    body, .content {
        background: #1a1a1a;
        font-family: "proxima-nova-n7","proxima-nova-n6","proxima-nova",sans-serif;
        color: #fff;
    }
    
    .header {
        color: #fff;
        border: none;
    }
    
    .header .header-inner a {
        display: block;
        padding-top: 35px;
        color: #fff;
        text-align: center;
        font-size: 80px;
    }
    
    .header .header-inner .buttons {
        display: none;
    }
    
    .header .header-inner #watchly-target {
        display: none;
    }
    
    .left-right-art {
        display: none;
    }
    
    .content {
        position: relative;
        max-width: 1128px;
        margin: 57px auto;
        padding: 20px 0 20px 0;
        box-shadow: none;
        border-top: 5px solid #fff;
        box-sizing: border-box;
        font-size: 1rem;
        line-height: 1.4;
    }
    
    .content a {
        color: #f3bf10;
        text-decoration: none;
    }
    
    .content a:hover {
        color: #fddb2f;
    }
    
    .content .posts .post .post-description h1, .content .posts .post .post-description h1 a {
        margin: 0;
        padding: 20px 0 10px;
        font-style: normal;
        font-size: 51px !important;
        font-weight: 800;
        line-height: 1;
        text-transform: uppercase;
        color: #fff !important;
    }
    
    .content h6#jan-24nd-2020-1 {
        position: absolute;
        top: -80px;
        right: 0px;
        font-size: 17px;
        font-weight: 700;
    }
    
    .content .by {
        font-size: 20.4px;
    }
    
    .post-header {
        height: 20px;
    }
    
    .post-header a {
        cursor: pointer;
        font-weight: 600;
    }
    
    .post-header .left {
        float: left;
    }
    
    .post-header .right {
        float: right;
    }
    
    @media(max-width: 1024px) {
        .header {
            padding-top: 0;
        }
        
        .header .header-inner a {
            padding: 0;
            font-size: 40px;
        }
        
        .content {
            margin: 7px auto;
            padding: 8px;
        }
        
        .content h6#jan-24nd-2020-1 {
            top: -38px;
            right: 5px;
        }
        
        .content h1 {
            padding: 0 0 10px;
            font-size: 32px;
        }
    }
</style>
<link rel="stylesheet" href="https://use.typekit.net/dru2dki.css" />

<script>
    window.fcCommentCountUpdated = function(count) {
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Kommentare';
    };
</script>

{{/isPost}}

---