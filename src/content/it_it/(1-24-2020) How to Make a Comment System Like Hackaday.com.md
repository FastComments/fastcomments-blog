---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Come creare un sistema di commenti simile a Hackaday.com[/postlink]

{{#unless isPost}}
Qui esploreremo come creare un thread di commenti che assomiglia a quello di Hackaday.

Se clicchi sul link a questo post, lo stile complessivo della pagina così come il FastComments Blog cambieranno.

{{/unless}}

{{#isPost}}
###### 24 Gennaio 2020
<div class="post-header">
    <div class="by left">di: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WOW COS'È SUCCESSO?

Questo post è una dimostrazione di come utilizzare FastComments per creare un sistema di commenti che assomiglia a https://hackaday.com.

Non suggeriamo di copiarli. Ma questo dimostra la flessibilità di FastComments.

Far apparire FastComments in questo modo è semplice!
Abbiamo costruito un'interfaccia per questo! Ad esempio, qui ci sono le impostazioni che abbiamo utilizzato per far combaciare FastComments con questa pagina:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Impostazioni FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Se vuoi farlo in codice, è altrettanto semplice.

Dobbiamo solo impostare alcune opzioni. Beh, sette. Ecco il frammento di codice (CSS personalizzato omesso). Solo una certa quantità di CSS può essere inserita in questo modo. Ti raccomandiamo di utilizzare
l'interfaccia sopra per definire il CSS. Essa lo minificherà anche per te, mentre la definizione della proprietà customCSS non applicherà ottimizzazioni di minificazione.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] PENSIERI SU "COME CREARE UN SISTEMA DI COMMENTI SIMILE A HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Commenti';
        },
        headerHTML: '<h1>Lascia una Risposta</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Quindi, cosa significano ciascuna di queste?
- commentCountFormat = Il formato del titolo sopra il thread di commenti. "[count]" viene sostituito con il conteggio effettivo localizzato.
- commentCountUpdated = Una funzione che viene chiamata quando il conteggio dei commenti cambia. La utilizziamo per impostare il conteggio dei commenti nella parte
superiore della pagina.
- headerHTML = HTML che viene mostrato sopra la casella "lascia una risposta". In questo caso lo utilizziamo per inserire un elemento intestazione.
- hideAvatars = Hackaday non ha avatar. Quindi impostiamo questo su true per nasconderli.
- inputAfterComments = Riposiziona la casella di risposta in fondo al feed di commenti.
- absoluteDates = Cambia il formato della data predefinito (cioè, "11 Minuti Fa") in una data assoluta.
- customCSS = Stile personalizzato.

Tutte le opzioni di configurazione sono documentate <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">qui</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Commenti';
    };
</script>

{{/isPost}}

---