---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Как да създадете система за коментари като Hackaday.com[/postlink]

{{#unless isPost}}
Тук ще разгледаме как да създадем нишка с коментари, която изглежда като тази на Hackaday.

Ако щракнете на връзката към този пост, общият стил на страницата, както и блогът на FastComments ще се променят.

{{/unless}}

{{#isPost}}
###### 24 януари 2020 г.
<div class="post-header">
    <div class="by left">от: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## УАУ, КАКВО СЕ СЛУЧИ?

Този пост е демонстрация на използването на FastComments, за да се направи система за коментари, която изглежда като https://hackaday.com.

Не препоръчваме да ги копирате. Но това демонстрира гъвкавостта на FastComments.

Да направим FastComments да изглеждат по този начин е просто!
Създадохме UI за него! Например, ето конфигурацията, която използвахме, за да накараме FastComments да съвпадне с тази страница:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Настройки на FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Ако искате да го направите в код, е толкова лесно.

Просто трябва да зададем няколко опции. Всъщност, седем. Ето фрагмент от кода (пользите CSS са пропуснати). Само толкова CSS може да бъде въведен по този начин. Препоръчваме да използвате
горния UI за определяне на CSS. Той ще го минифицира за вас, за разлика от задаването на свойството customCSS, което няма да прилага оптимизации за минификация.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] МИСЛИ ЗА "КАК ДА НАПРАВИТЕ СИСТЕМА ЗА КОМЕНТАРИ КАТО HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Коментари';
        },
        headerHTML: '<h1>Оставете Отговор</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'въведете-тука-ползите-css'
    });`
</script>

Какво означава всяка от тези опции?
- commentCountFormat = Форматът на заглавието над нишката с коментари. "[count]" се замества с актуалния локализиран брой.
- commentCountUpdated = Функция, която се извиква, когато броят на коментарите се промени. Използваме това, за да зададем броя на коментарите в
горната част на страницата.
- headerHTML = HTML, което се показва над "оставете отговор" полето. В този случай го използваме, за да вмъкнем елемент заглавие.
- hideAvatars = Hackaday няма аватари. Докато задаваме тази опция на true, за да ги скрием.
- inputAfterComments = Премества полето за отговор в дъното на потока с коментари.
- absoluteDates = Променя формата на датата по подразбиране (т.е. "11 минути назад") на абсолютна дата.
- customCSS = Персонализиране на стила.

Всички опции за конфигурация са документирани <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">тук</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Коментари';
    };
</script>

{{/isPost}}

---