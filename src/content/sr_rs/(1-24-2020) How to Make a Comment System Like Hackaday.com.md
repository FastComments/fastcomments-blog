[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]Како направити систем коментара попут Hackaday.com[/postlink]

{{#unless isPost}}
Овде ћемо истражити прављење нити коментара која изгледа као она на Hackaday.

Ако кликнете на везу до овог поста, целокупан стил странице, као и FastComments блог, ће се променити.

{{/unless}}

{{#isPost}}
###### Jan 24nd 2020
<div class="post-header">
    <div class="by left">by: <a>Devon Winrick</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## ОПА, ШТА СЕ ДЕСИ?

Овај пост је демонстрација коришћења FastComments за прављење система коментара који изгледа као https://hackaday.com.

Не препоручујемо вам да их копирате. Али ово демонстрира флексибилност FastComments.

Постизање овог изгледа у FastComments је једноставно!
Изградили смо корисничко сучеље за то! На пример, ево конфигурације коју смо користили да FastComments прилагодимо овој страници:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="FastComments Hackaday Settings"
        class='lozad'
        height="850px" />
</div>

Ако желите да то урадите у коду, такође је једноставно.

Треба само да поставимо неколико опција. Погодно, седам. Ево кода (прилагођени CSS је изостављен). Овако се може уметнути само ограничена количина CSS-а. Препоручујемо вам да користите горње сучеље за дефинисање CSS-а. Оно ће такође минифицирати CSS за вас, док дефинисање својства customCSS не примењује оптимизације минификације.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] THOUGHTS ON "HOW TO MAKE A COMMENT SYSTEM LIKE HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
        },
        headerHTML: '<h2>Leave a Reply</h2>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

Шта значи свака од ових опција?
- commentCountFormat = Формат наслова изнад нити коментара. „[count]“ се замењује стварним локализованим бројем.
- commentCountUpdated = Функција која се позива када се број коментара промени. Користимо је да поставимо број коментара на врху странице
- headerHTML = HTML који се приказује изнад поља „остави одговор“. У овом случају га користимо за уметање елемента наслова.
- hideAvatars = Hackaday не користи аватаре. Дакле, постављамо ово на true да их сакријемо.
- inputAfterComments = Премешта поље за одговор на дно нити коментара.
- absoluteDates = Мења подразумевани формат датума (нпр. „пре 11 минута“) у апсолутни датум.
- customCSS = Прилагођени стил

Све опције конфигурације су документоване <a href="https://github.com/FastComments/fastcomments-typescript" target="_blank">овде</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' Comments';
    };
</script>

{{/isPost}}

---