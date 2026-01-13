---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Як створити систему коментарів, схожу на Hackaday.com[/postlink]

{{#unless isPost}}
Тут ми розглянемо створення потоку коментарів, який виглядає як на Hackaday.

Якщо ви натиснете на посилання на цей пост, загальний стиль сторінки, а також блог FastComments зміняться.

{{/unless}}

{{#isPost}}
###### 24 січня 2020
<div class="post-header">
    <div class="by left">автор: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ОГО, ЩО СТАЛОСЯ?

Цей пост є демонстрацією використання FastComments для створення системи коментарів, яка виглядає як https://hackaday.com.

Ми не радимо вам копіювати їх. Але це демонструє гнучкість FastComments.

Зробити FastComments таким чином дуже просто!
Ми створили UI для цього! Ось конфігурація, яку ми використали, щоб налаштувати FastComments під цю сторінку:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Налаштування FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Якщо ви хочете зробити це в коді, це так само просто.

Нам потрібно лише встановити кілька параметрів. Що-ж, сім. Ось фрагмент коду (куски CSS опущені). Лише стільки CSS можна вставити таким чином. Ми рекомендуємо використовувати
вищезазначений UI для визначення CSS. Це також зменшить його для вас, тоді як визначення параметру customCSS не застосовуватиме жодних оптимізацій для зменшення.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] ДУМКОК О "ЯК СТВОРИТИ СИСТЕМУ КОМЕНТАРІВ, СХОЖУ НА HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Коментарів';
        },
        headerHTML: '<h1>Залишити відповідь</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'вставте-налаштоване-css-тут'
    });`
</script>

Отже, що означає кожен з них?
- commentCountFormat = Формат заголовка над потоком коментарів. "[count]" замінюється фактичним локалізованим числом.
- commentCountUpdated = Функція, яка викликається, коли кількість коментарів змінюється. Ми використовуємо це, щоб задати кількість коментарів у
верхній частині сторінки.
- headerHTML = HTML, що відображається над полем "залишити відповідь". У цьому випадку ми використовуємо його, щоб вставити елемент заголовка.
- hideAvatars = Hackaday не має аватарів. Тому ми встановлюємо це значення в true, щоб їх приховати.
- inputAfterComments = Переміщує поле для відповідей в кінець потоку коментарів.
- absoluteDates = Змінює стандартний формат дати (тобто "11 хвилин тому") на абсолютну дату.
- customCSS = Користувацький стиль.

Усі параметри конфігурації документовані <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">тут</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Коментарів';
    };
</script>

{{/isPost}}

---