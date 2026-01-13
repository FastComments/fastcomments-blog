---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Kako napraviti sistem komentara kao Hackaday.com[/postlink]

{{#unless isPost}}
Ovde ćemo istražiti pravljenje niza komentara koji izgleda kao onaj na Hackaday.

Ako kliknete na link do ovog posta, celokupni stil stranice kao i FastComments Blog će se promeniti.

{{/unless}}

{{#isPost}}
###### 24. januar 2020
<div class="post-header">
    <div class="by left">autor: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## OPA ŠTA SE DESILO?

Ovaj post je demonstracija korišćenja FastComments za pravljenje sistema komentara koji izgleda poput https://hackaday.com.

Ne predlažemo da ih kopirate. Ali ovo pokazuje fleksibilnost FastComments.

Uređivanje FastComments na ovaj način je jednostavno!
Napravili smo UI za to! Na primer, ovde je konfiguracija koju smo koristili da FastComments prilagodimo ovoj stranici:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

Ako želite da to uradite u kodu, isto je lako.

Samo moramo da postavimo nekoliko opcija. Pa, sedam. Evo isječaka koda (prilagođeni CSS je izostavljen). Samo određena količina CSS-a može biti ubačena na ovaj način. Preporučujemo da koristite
gore navedeni UI za definisanje CSS-a. Takođe će ga minimizovati umesto vas, dok će definisanje svojstva customCSS primeniti bez optimizacija minimizacije.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] MISLI O "KAO DA NAPRAVITE SISTEM KOMENTARA KAO HACKADAY.COM"',
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

Šta svaka od ovih opcija znači?
- commentCountFormat = Format naslova iznad niza komentara. "[count]" se menja sa stvarnim lokalizovanim brojem.
- commentCountUpdated = Funkcija koja se poziva kada se broj komentara menja. Koristimo ovo da postavimo broj komentara na
vrhu stranice.
- headerHTML = HTML koji se prikazuje iznad kutije "ostavite odgovor". U ovom slučaju ga koristimo da ubacimo element naslova.
- hideAvatars = Hackaday nema avatare. Tako da ovo postavljamo na true da ih sakrijemo.
- inputAfterComments = Premesti kutiju za odgovor na dno niza komentara.
- absoluteDates = Menja podrazumevani format datuma (npr, "11 minuta ranije") u apsolutni datum.
- customCSS = Prilagođeno stilizovanje

Sve opcije konfiguracije su dokumentovane <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">ovde</a>.

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