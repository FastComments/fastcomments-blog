---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Hoe een commentsysteem te maken zoals Hackaday.com[/postlink]

{{#unless isPost}}
Hier zullen we onderzoeken hoe we een commentaarthread kunnen maken die eruitziet als die op Hackaday.

Als je op de link naar deze post klikt, zullen de algemene paginastijl en de FastComments Blog veranderen.

{{/unless}}

{{#isPost}}
###### 24 jan 2020
<div class="post-header">
    <div class="by left">door: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WOW WAT IS ER GEBEUREN?

Deze post is een demonstratie van het gebruik van FastComments om een commentsysteem te maken dat lijkt op https://hackaday.com.

We raden je niet aan om ze te kopiëren. Maar dit toont de flexibiliteit van FastComments aan.

FastComments zo laten lijken is eenvoudig!
We hebben er een UI voor gebouwd! Bijvoorbeeld, hier is de configuratie die we hebben gebruikt om FastComments deze pagina te laten matchen:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Instellingen"
        class='lozad'
        height="850px" />
</div>

Als je het in-code wilt doen, is het net zo eenvoudig.

We hoeven gewoon een paar opties in te stellen. Nou, zeven. Hier is de code snippet (aangepaste CSS weggelaten). Er kan maar zoveel CSS op deze manier worden ingevoegd. We raden je aan om
de bovenstaande UI te gebruiken voor het definiëren van CSS. Het zal het ook voor je verkleinen, terwijl het definiëren van de customCSS-eigenschap geen optimalisaties voor verkleining toepast.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] GEDACHTES OVER "HOE EEN COMMENTSYSTEEM TE MAKEN ALS HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Reacties';
        },
        headerHTML: '<h1>Laat een reactie achter</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Wat betekenen deze opties?
- commentCountFormat = Het formaat van de titel boven de commentaarthread. "[count]" wordt vervangen door het werkelijke gelokaliseerde aantal.
- commentCountUpdated = Een functie die wordt aangeroepen wanneer het aantal reacties verandert. We gebruiken dit om het aantal reacties bovenaan de pagina in te stellen.
- headerHTML = HTML die boven het "laat een reactie achter" vak wordt weergegeven. In dit geval gebruiken we het om een koptekst-element in te voegen.
- hideAvatars = Hackaday heeft geen avatars. Dus hebben we dit op true gezet om ze te verbergen.
- inputAfterComments = Verplaatst het reactie vak naar de onderkant van de commentaarfeed.
- absoluteDates = Verandert de standaard datumindeling (d.w.z. "11 Minuten Geleden") naar een absolute datum.
- customCSS = Aangepaste stijl

Alle configuratie-opties zijn gedocumenteerd <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">hier</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Reacties';
    };
</script>

{{/isPost}}

---