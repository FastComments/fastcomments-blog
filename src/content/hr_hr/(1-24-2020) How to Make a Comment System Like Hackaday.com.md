---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Kako napraviti sustav komentara poput Hackaday.com[/postlink]

{{#unless isPost}}
Ovdje ćemo istražiti kako stvoriti komentarnu nit koja izgleda poput one na Hackaday.

Ako kliknete na vezu do ovog posta, ukupni stil stranice kao i FastComments Blog će se promijeniti.

{{/unless}}

{{#isPost}}
###### 24. siječnja 2020.
<div class="post-header">
    <div class="by left">autor: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## WOW ŠTO SE DOGODILO?

Ovaj post je prikaz korištenja FastComments za izradu sustava komentara koji izgleda kao https://hackaday.com.

Ne preporučujemo da ih kopirate. No, ovo pokazuje fleksibilnost FastComments.

Učiniti da FastComments izgleda ovako je jednostavno!
Izradili smo UI za to! Na primjer, ovo je konfiguracija koju smo koristili da FastComments uskladi s ovom stranicom:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Postavke"
        class='lozad'
        height="850px" />
</div>

Ako želite to učiniti u kodu, jednako je lako.

Samo trebamo postaviti nekoliko opcija. Pa, sedam. Evo špica koda (prilagođeni CSS izostavljen). Samo toliko CSS-a može se umetnuti ovako. Preporučujemo da koristite
gore navedeni UI za definiranje CSS-a. Također će ga minimizirati za vas, dok će definiranje svojstva customCSS primijeniti bez optimizacija minimizacije.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] MISLI O "KAKO NAPRAVITI SUSTAV KOMENTARA POPUT HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentara';
        },
        headerHTML: '<h1>Ostavite odgovor</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Što svaki od ovih znače?
- commentCountFormat = Format naslova iznad komentarne niti. "[count]" će biti zamijenjen stvarnim lokaliziranim brojem.
- commentCountUpdated = Funkcija koja se poziva kada se broj komentara promijeni. Ovo koristimo za postavljanje broja komentara na
vrhu stranice.
- headerHTML = HTML koji se prikazuje iznad okvira "ostavite odgovor". U ovom slučaju koristimo ga za umetanje naslovnog elementa.
- hideAvatars = Hackaday nema avatare. Stoga smo ovo postavili na true da ih sakrijemo.
- inputAfterComments = Premještanje okvira za odgovor na dno feeda komentara.
- absoluteDates = Mijenja zadani format datuma (npr. "Prije 11 minuta") na apsolutni datum.
- customCSS = Prilagođeni stil.

Sve opcije konfiguracije su dokumentirane <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">ovdje</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentara';
    };
</script>

{{/isPost}}

---