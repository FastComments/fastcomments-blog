---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Jak stworzyć system komentarzy podobny do Hackaday.com[/postlink]

{{#unless isPost}}
Tutaj zbadamy, jak stworzyć wątek komentarzy, który wygląda jak ten na Hackaday.

Jeśli klikniesz ten link, styl całej strony, a także bloga FastComments, zmieni się.

{{/unless}}

{{#isPost}}
###### 24 stycznia 2020
<div class="post-header">
    <div class="by left">autor: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## O CO CHODZI?

Ten post jest demonstracją użycia FastComments do stworzenia systemu komentarzy, który wygląda jak https://hackaday.com.

Nie sugerujemy, abyś je kopiował. Ale to pokazuje elastyczność FastComments.

Sprawienie, by FastComments wyglądało w ten sposób, jest proste!
Stworzyliśmy dla niego interfejs! Na przykład, oto konfiguracja, którą użyliśmy, aby dopasować FastComments do tej strony:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Ustawienia FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Jeśli chcesz to zrobić w kodzie, to równie łatwe.

Po prostu musimy ustawić kilka opcji. Cóż, siedem. Oto fragment kodu (niestandardowy CSS pominięty). Tylko tyle CSS można wprowadzić w ten sposób. Zalecamy użycie
powyzszego interfejsu do definiowania CSS. On również zminimalizuje go dla ciebie, podczas gdy definiowanie właściwości customCSS nie zastosuje żadnych optymalizacji minimalizacji.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] KOMENTARZY NA "JAK STWORZYĆ SYSTEM KOMENTARZY PODOBNY DO HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentarzy';
        },
        headerHTML: '<h1>Zostaw Odpowiedź</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'wstaw-niestandardowy-css-tutaj'
    });`
</script>

Co oznaczają poszczególne elementy?
- commentCountFormat = Format tytułu nad wątkiem komentarzy. "[count]" Zostaje zastąpione rzeczywistą zlokalizowaną liczbą.
- commentCountUpdated = Funkcja, która jest wywoływana, gdy liczba komentarzy się zmienia. Używamy tego do ustawiania liczby komentarzy na
górze strony.
- headerHTML = HTML wyświetlany powyżej pola "zostaw odpowiedź". W tym przypadku używamy go do wstawienia elementu nagłówka.
- hideAvatars = Hackaday nie ma awatarów. Ustawiamy to na true, aby je ukryć.
- inputAfterComments = Przesuwa pole odpowiedzi na dół strumienia komentarzy.
- absoluteDates = Zmienia domyślny format daty (tj. "11 minut temu") na datę absolutną.
- customCSS = Niestandardowe style

Wszystkie opcje konfiguracyjne są udokumentowane <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">tutaj</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Komentarzy';
    };
</script>

{{/isPost}}

---