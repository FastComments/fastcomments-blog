---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Kako narediti sistem komentarjev kot na Hackaday.com[/postlink]

{{#unless isPost}}
Tu bomo raziskovali ustvarjanje komentarja, ki izgleda kot tisti na Hackaday.

Če kliknete na povezavo do te objave, se bo splošno oblikovanje strani ter FastComments Blog spremenilo.

{{/unless}}

{{#isPost}}
###### 24. januar 2020
<div class="post-header">
    <div class="by left">avtor: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## OHO, KAJ SE JE ZGODILO?

Ta objava je prikaz uporabe FastComments za ustvarjanje sistema komentarjev, ki izgleda kot https://hackaday.com.

Ne predlagamo, da jih kopirate. Ampak to prikazuje prilagodljivost FastComments.

Zaradi oblikovanja FastComments na ta način je preprosto!
Za to smo zgradili uporabniški vmesnik! Na primer, tukaj je konfiguracija, ki smo jo uporabili za uskladitev FastComments s to stranjo:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Nastavitve"
        class='lozad'
        height="850px" />
</div>

Če želite to narediti v kodi, je prav tako enostavno.

Samo nastaviti moramo nekaj možnosti. No, sedem. Tukaj je koda (po meri CSS je izpuščena). Le toliko CSS-a lahko vstaviš na ta način. Priporočamo, da uporabite
zgoraj omenjeni uporabniški vmesnik za opredelitev CSS. Prav tako ga bo optimiziral, medtem ko določitev lastnosti customCSS ne bo uporabljala nobenih optimizacij minifikacije.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] MISLI O "KAKO NAREDITI SISTEM KOMENTARJEV KOT HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentarjev';
        },
        headerHTML: '<h1>Pustite odgovor</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'vstavite-css-tukaj'
    });`
</script>

Kaj pomeni vsaka od teh možnosti?
- commentCountFormat = Oblika naslova nad komentarjem. "[count]" se nadomesti z dejanskim lokaliziranim številom.
- commentCountUpdated = Funkcija, ki se pokliče, ko se število komentarjev spremeni. To uporabljamo za nastavitev števila komentarjev na
vrhu strani.
- headerHTML = HTML, ki se prikaže nad poljem "pustite odgovor". V tem primeru ga uporabljamo za vstavljanje naslova.
- hideAvatars = Hackaday nima avatarjev. Zato smo to nastavili na true, da jih skrijemo.
- inputAfterComments = Premakne polje za odgovor na dno komentarjev.
- absoluteDates = Spreminja privzeto obliko datuma (tj. "11 minut nazaj") v absolutno datum.
- customCSS = Prilagojeno oblikovanje.

Vse možnosti konfiguracije so dokumentirane <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">tukaj</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentarjev';
    };
</script>

{{/isPost}}

---