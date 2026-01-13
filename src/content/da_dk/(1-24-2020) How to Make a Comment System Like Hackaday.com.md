---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Hvordan man laver et kommentar system som Hackaday.com[/postlink]

{{#unless isPost}}
Her vil vi udforske oprettelsen af en kommentartråd, der ligner den på Hackaday.

Hvis du klikker på linket til dette indlæg, vil den overordnede side-styling samt FastComments Blog ændre sig.

{{/unless}}

{{#isPost}}
###### Jan 24nd 2020
<div class="post-header">
    <div class="by left">af: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WOW HVA SKETE DER?

Dette indlæg er en demonstration af at bruge FastComments til at lave et kommentar system, der ligner https://hackaday.com.

Vi foreslår ikke, at du kopierer dem. Men dette demonstrerer fleksibiliteten i FastComments.

At få FastComments til at se sådan ud er enkelt!
Vi har bygget en UI til det! For eksempel, her er konfigurationen, vi brugte til at få FastComments til at matche denne side:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Indstillinger"
        class='lozad'
        height="850px" />
</div>

Hvis du vil gøre det i koden, er det lige så nemt.

Vi skal bare indstille et par valgmuligheder. Nå, syv. Her er kode-eksemplet (tilpasset CSS udeladt). Kun så meget CSS kan indsættes på denne måde. Vi anbefaler, at du bruger
den ovenstående UI til at definere CSS. Den vil også minimere det for dig, mens det at definere customCSS-egenskaben ikke vil anvende nogen minificationsoptimeringer.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] TANKER OM "HVORDAN MAN LAVER ET KOMMENTAR SYSTEM SOM HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Kommentarer';
        },
        headerHTML: '<h1>Efterlad et svar</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'indsæt-tilpasset-css-her'
    });`
</script>

Så hvad betyder hver af disse?
- commentCountFormat = Formatet på titlen ovenfor kommentartråden. "[count]" Bliver erstattet med det faktiske lokaliserede antal.
- commentCountUpdated = En funktion, der kaldes, når kommentarantallet ændres. Vi bruger dette til at sætte kommentarantalet på toppen af siden.
- headerHTML = HTML der vises over "efterlad et svar" boksen. I dette tilfælde bruger vi det til at indsætte et hovedelement.
- hideAvatars = Hackaday har ikke avatars. Så vi sætter dette til true for at skjule dem.
- inputAfterComments = Flytter svarkassen til bunden af kommentarstrømmen.
- absoluteDates = Ændrer det standard datoformat (dvs. "11 minutter siden") til en absolut dato.
- customCSS = Tilpasset styling

Alle konfigurationsmuligheder er dokumenteret <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">her</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Kommentarer';
    };
</script>

{{/isPost}}

---