---
[קטגוריה:מאפיינים]
[קטגוריה:ממשקי API ופיתוח]
###### [תאריך פרסום]
# [קישור לפוסט]FastComments משחררת רינדור בצד השרת[/קישור לפוסט]

{{#unless isPost}}
הוסף תגובות לאתר שלך ללא שימוש ב-JavaScript.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל בז'רגון טכני

## מה חדש

מיום ההשקה בתחילת 2020, FastComments השתמשה אך ורק ב-JavaScript כדי להציג את ווידג'ט התגובות.

מה אם נגיד לך שאתה יכול לקבל כמעט את כל הפונקציות הבסיסיות, אך ללא שימוש ב-JS?

<div class="text-center">
    <div class="sm">זה צילום מסך, אל תנסה ללחוץ עליו.</div>
    <img src="images/ssr-demo.png" alt="SSR Demo" title="SSR Demo" />
</div>

צילום המסך למעלה הוא ווידג'ט התגובות של FastComments, ללא JavaScript. [אתה יכול לצפות בעמוד הזה, ללא JavaScript, כאן.](https://fastcomments.com/ssr/comments?tenantId=L177BUDVvSe&urlId=ssr-test&url=https%3A%2F%2Ffastcomments.com%2Fssr%2Fcomments%2F%3FtenantId%3DL177BUDVvSe%26urlId%3Dssr-test)

## איך להשתמש בזה

אם אתה משתמש ב-WordPress, גרסת פלאגין FastComments 3.10.1 מוסיפה אוטומטית תמיכה לרינדור בצד השרת כפתרון לגולשים שלך שמבקרים עם JS מכובה.

להטמעה מותאמת, קח את ממשק המשתמש של שורת התגובות, פשוט קרא ל-`/ssr/comments` עבור העמוד הזה:

<div class="code"><div class="line">https://fastcomments.com/ssr/comments?tenantId=$tenantId&urlId=$urlId&url=$url</div></div>

כאשר `$urlId` הוא ה-url, או מזהה, של העמוד. תיעוד על כך נמצא [כאן](https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id).

לדוגמה, עם PHP אנחנו יכולים לשלוח iframe לעמוד שמציג את שורת התגובות בתוכה:

<div class="code"><div class="title">דוגמת SSR מבוססת PHP</div><div class="contribute-code-snippet"></div><div class="line"><span class="line-number">1</span></div><div class="line"><span class="line-number">2</span><span class="hljs-meta">&lt;?php</span></div><div class="line has-tenant-id"><span class="line-number">3</span><span class="hljs-variable">$tenantId</span> = rawurlencode(<span class="hljs-string">"my-tenant-id"</span>);</div><div class="line"><span class="line-number">4</span><span class="hljs-variable">$urlId</span> = rawurlencode(<span class="hljs-string">"my-page-url-article-id"</span>);</div><div class="line"><span class="line-number">5</span><span class="hljs-variable">$url</span> = rawurlencode(<span class="hljs-string">"my-page-url"</span>);</div><div class="line"><span class="line-number">6</span></div><div class="line has-tenant-id"><span class="line-number">7</span><span class="hljs-variable">$fastcomments_url</span> = <span class="hljs-string">"https://fastcomments.com/ssr/comments?tenantId=<span class="hljs-subst">$tenantId</span>&amp;urlId=<span class="hljs-subst">$urlId</span>&amp;url=<span class="hljs-subst">$url</span>"</span>;</div><div class="line"><span class="line-number">8</span><span class="hljs-meta">?&gt;</span></div><div class="line"><span class="line-number">9</span>&lt;iframe</div><div class="line"><span class="line-number">10</span>    src=<span class="hljs-string">"&lt;?php echo <span class="hljs-subst">$fastcomments_url</span>; ?&gt;"</span></div><div class="line"><span class="line-number">11</span>    horizontalscrolling=<span class="hljs-string">"no"</span></div><div class="line"><span class="line-number">12</span>    allowtransparency=<span class="hljs-string">"true"</span></div><div class="line"><span class="line-number">13</span>    frameborder=<span class="hljs-string">"0"</span></div><div class="line"><span class="line-number">14</span>    title=<span class="hljs-string">"FastComments"</span></div><div class="line"><span class="line-number">15</span>    width=<span class="hljs-string">"100%"</span></div><div class="line"><span class="line-number">16</span>    height=<span class="hljs-string">"1500px"</span></div><div class="line"><span class="line-number">17</span>    style= <span class="hljs-string">"width: 1px !important; min-width: 100% !important; border: none !important; overflow: hidden !important;"</span></div><div class="line"><span class="line-number">18</span>&gt;&lt;/iframe&gt;</div><div class="line"><span class="line-number">19</span></div></div>

אנחנו גם יכולים לעשות קריאה ל-API כדי לקבל את ה-HTML של שורת התגובות, ולרנדר או לאחסן אותו.

תיעוד מלא זמין ב-[תיעוד SSR ב-docs.fastcomments.com](https://docs.fastcomments.com/guide-ssr.html).

## SSO

כיוון שאנחנו אוהבים אקרונים נשמעים של חברות, אל תדאג, SSR תומך ב-SSO. [דוגמה לסינגל סיין און עם SSR נמצאת כאן.](https://github.com/FastComments/fastcomments-code-examples/blob/master/sso/php/ssr/server.php#L44)

## לוקליזציה

הנקודת הקצה מבוססת SSR משבצת אוטומטית את התגובה על סמך כותרות השפה שדפדפן שולח. היא יכולה גם להשתמש באותם תיקונים של לוקליזציה כמו ווידג'ט המבוסס על JavaScript.

## מדוע זה נבנה

אחת התלונות המרכזיות לגבי שירותים כמו FastComments היא שהם דורשים JS. אנו כבר עושים את ווידג'ט התגובות שלנו דק ככל האפשר, ומוודאים שאנחנו עומדים ב-SLA של קריאות ה-API שלנו של < 20ms, אבל הרבה קהילות קטנות לא יסכימו לבחור בפתרון כזה אם זה אומר להוסיף JS לאתר שלהם.

זה גם פותח את ההזדמנות להשתמש במנועי רינדור שאין להם גישה ל-JavaScript.

## הטכנולוגיה

FastComments משתמשת במסגרת מיקרו קטנה משלה כדי לרנדר את ממשק המשתמש. מסגרת זו משתמשת בגישה דומה ל-React, חוץ מזה שמניפולציות DOM ידניות מחוץ לרינדור הראשוני מותרים.

לספריית ווידג'ט התגובות הליבה יש נקודת כניסה אחת - היא לוקחת קבוצת מצב ויוצרת HTML ו-CSS תוצאה להיות מנותבים. אנו פשוט קוראים לזה מהשרת גם. כשמשתמש אינטראקציה עם העמוד, המצב משתנה וה-HTML החדש נטען. זה נבנה כתוצאה מהאקתון שהתרחש כחלק מהשנה החדשה.

## תגובות חיות

מכיוון שה-UI מוכן על ידי השרת, פעם אחת, תכונות תגובות חיות אינן זמינות.

בנוסף, פעמון ההודעות אינו זמין כרגע. אנחנו פתוחים להוסיף את התכונה הזו בעתיד.

## ביצועים

ממשק המשתמש המוכן על ידי השרת משתמש באותן אופטימיזציות אחסון ומנוע רינדור כמו הווידג'ט המבוסס על JavaScript. עבור שורות תגובות קטנות, הביצועים הם למעשה טובים יותר, מכיוון שהמשתמש אינו צריך להוריד סקריפט שאחריו שולף את התגובות ומציג את הממשק.

## סורקים ו-SEO

FastComments כבר עובד טוב עם סורקי אינטרנט; אם SEO הוא דאגה, השימוש ב-SSR אינו דרוש.

## יישומים עתידיים

אנחנו מתכננים להשיק פתרון פורום בעתיד. מסורתית, פורומים הם מעמודים, ומיוצרים בצד השרת. פתרונות פורום מודרניים מתרחקים מהנורמה הזאת על ידי שימוש בגלילה אינסופית ורינדור בצד הלקוח. אנחנו לא חושבים שזה חייב להיות האפשרות היחידה לשימוש בפתרון פורום של צד שלישי.

## לסיכום

אנחנו מקווים שמצאתם את המדריך הזה מועיל וקל לקריאה. אל תהססו להגיב למטה עם שאלות כלשהן.

תהנו!

<style>/*

סגנון Monokai Sublime. נגזר מ-Monokai על ידי noformnocontent http://nn.mit-license.org/

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #23241f;
}

.hljs,
.hljs-tag,
.hljs-subst {
  color: #f8f8f2;
}

.hljs-strong,
.hljs-emphasis {
  color: #a8a8a2;
}

.hljs-bullet,
.hljs-quote,
.hljs-number,
.hljs-regexp,
.hljs-literal,
.hljs-link {
  color: #ae81ff;
}

.hljs-code,
.hljs-title,
.hljs-section,
.hljs-selector-class {
  color: #a6e22e;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-name,
.hljs-attr {
  color: #f92672;
}

.hljs-symbol,
.hljs-attribute {
  color: #66d9ef;
}

.hljs-params,
.hljs-class .hljs-title {
  color: #f8f8f2;
}

.hljs-string,
.hljs-type,
.hljs-built_in,
.hljs-builtin-name,
.hljs-selector-id,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-addition,
.hljs-variable,
.hljs-template-variable {
  color: #e6db74;
}

.hljs-comment,
.hljs-deletion,
.hljs-meta {
  color: #75715e;
}
</style>

{{/isPost}}

---