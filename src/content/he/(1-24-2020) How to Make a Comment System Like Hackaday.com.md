---
[category:Tutorials]
[category:UI & Customization]
{{#unless isPost}}
###### [postdate]
{{/unless}}
# [postlink]איך ליצור מערכת תגובות כמו Hackaday.com[/postlink]

{{#unless isPost}}
כאן נחקור איך ליצור תThrds של תגובות שיראו כמו זה שב-Hackaday.

אם תלחץ על הקישור לפוסט הזה, סגנון הדף הכולל כמו גם הבלוג של FastComments ישתנו.

{{/unless}}

{{#isPost}}
###### 24 בינואר 2020
<div class="post-header">
    <div class="by left">מאת: <a>דבון וינריק</a></div>
    <a id="post-header-comment-count" class="right" href="#fastcomments-widget"></a>
</div>

## וואו מה קרה?

פוסט זה הוא הדגמה של שימוש ב-FastComments כדי ליצור מערכת תגובות שנראית כמו https://hackaday.com.

אנחנו לא מציעים לך להעתיק אותם. אבל זה מדגים את הגמישות של FastComments.

לעשות את FastComments להיראות בצורה הזו זה פשוט!
בנינו ממשק משתמש לזה! לדוגמה, הנה ההגדרות בהן השתמשנו כדי לגרום ל-FastComments להתאים לדף הזה:

<div class="text-center">
    <img 
        src="images/fc-custom-settings-hackaday.png"
        alt="הגדרות FastComments Hackaday"
        class='lozad'
        height="850px" />
</div>

אם אתה רוצה לעשות את זה בקוד, זה קל לא פחות.

רק עלינו להגדיר כמה אפשרויות. טוב, שבע. הנה קטע הקוד (CSS מותאם הושמט). ניתן להכניס CSS כך רק עד כמה. אנחנו ממליצים להשתמש
בממשק המשתמש מעלה כדי להגדיר CSS. זה גם ימזער את זה בשבילך, בזמן שהגדרת פרמטר customCSS לא תיישם אופטימיזציות של מזעור.

<div class="code" id="code"></div>
<script>
document.getElementById('code').innerText = `
    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        commentCountFormat: '[count] מחשבות על "איך ליצור מערכת תגובות כמו HACKADAY.COM"',
        commentCountUpdated: function(count) {
            document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' תגובות';
        },
        headerHTML: '<h1>השאר תגובה</h1>',
        hideAvatars: true,
        inputAfterComments: true,
        absoluteDates: true,
        customCSS: 'insert-custom-css-here'
    });`
</script>

אז מה כל אחד מהדברים האלה אומר?
- commentCountFormat = הפורמט של הכותרת מעל שרשרת התגובות. "[count]" מוחלף במניין הממוקם בפועל.
- commentCountUpdated = פונקציה שמתבצעת כאשר מספר התגובות משתנה. אנחנו משתמשים בזה כדי לכוון את מספר התגובות בראש הדף
- headerHTML = HTML שמוצג מעל תיבת "השאר תגובה". במקרה הזה אנו משתמשים בזה כדי להכניס אלמנט כותרת.
- hideAvatars = ב-Hackaday אין תמונות מוקדמות. אז אנחנו מגדירים את זה לאמת כדי להסתיר אותם.
- inputAfterComments = מעביר את תיבת התגובה לתחתית זרם התגובות.
- absoluteDates = משנה את פורמט התאריך ברירת המחדל (כלומר, "לפני 11 דקות") לתאריך מוחלט.
- customCSS = עיצוב מותאם אישית

כל האפשרויות להגדרה מתועדות <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts" target="_blank">כאן</a>.

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
        document.getElementById('post-header-comment-count').innerHTML = Number(count).toLocaleString() + ' תגובות';
    };
</script>

{{/isPost}}

---