---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Как создать систему комментариев, похожую на Hackaday.com[/postlink]

{{#unless isPost}}
Здесь мы исследуем создание потока комментариев, который выглядит как на Hackaday.

Если вы нажмете на ссылку на этот пост, общая стилизация страницы, а также блог FastComments изменятся.

{{/unless}}

{{#isPost}}
###### 24 января 2020
<div class="post-header">
    <div class="by left">автор: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ВОУ, ЧТО СЛУЧИЛОСЬ?

Этот пост является демонстрацией использования FastComments для создания системы комментариев, похожей на https://hackaday.com.

Мы не рекомендуем вам их копировать. Но это демонстрирует гибкость FastComments.

Сделать FastComments такими простыми! Мы разработали интерфейс для этого! Например, вот конфигурация, которую мы использовали, чтобы сделать FastComments похожими на эту страницу:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="Настройки FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

Если вы хотите сделать это в коде, это так же просто.

Нам нужно установить несколько опций. Ну, семь. Вот фрагмент кода (пользовательский CSS опущен). Только определённое количество CSS можно вставить таким образом. Мы рекомендуем вам использовать
вышеуказанный интерфейс для определения CSS. Он также минимизирует его для вас, в то время как определение свойства customCSS не применяет никаких оптимизаций минимизации.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] МЫСЛИ О "КАК СОЗДАТЬ СИСТЕМУ КОММЕНТАРИЕВ, ПОХОЖУЮ НА HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Комментариев';
        },
        headerHTML: '<h1>Оставить ответ</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'вставить-пользовательский-css-сюда'
    });`
</script>

Что означают все эти параметры?
- commentCountFormat = Формат заголовка над потоком комментариев. "[count]" заменяется фактическим локализованным количеством.
- commentCountUpdated = Функция, которая вызывается при изменении количества комментариев. Мы используем это, чтобы установить количество комментариев в
верхней части страницы
- headerHTML = HTML, который отображается над полем "оставить ответ". В данном случае мы используем его для вставки заголовка.
- hideAvatars = Hackaday не имеет аватаров. Поэтому мы устанавливаем это значение в true для их скрытия.
- inputAfterComments = Перемещает поле ответа в конец потока комментариев.
- absoluteDates = Изменяет формат даты по умолчанию (т.е. "11 минут назад") на абсолютную дату.
- customCSS = Пользовательский стиль

Все параметры конфигурации задокументированы <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">здесь</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Комментариев';
    };
</script>

{{/isPost}}

---