---
[category:API & Development]
###### [postdate]
# [postlink]שימוש ב-FastComments באפליקציות Single Page ב-VanillaJS[/postlink]

{{#unless isPost}}
בעוד שיש לנו רכיבים ייעודיים ל-Reac ו-VueJS, הווידג'ט הווניל יכול לשמש גם באפליקציות Single Page.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל מונחים טכניים

#### קהל יעד

מאמר זה מיועד למפתחים.

#### מבוא

כמעט כל דוגמת השימוש בוווידג'ט FastComments VanillaJS היא קטע קוד מאוד פשוט שמטען את חוט התגובות לכתובת ה-URL של הדף הנוכחי. הסיבה לכך היא שזו היא השימוש הנפוץ ביותר עבור רוב הלקוחות שלנו, אך לאחרונה ראינו גידול במספר המפתחים הבונים אפליקציות SPAs ומשתמשים ב-FastComments.

ראשית, יש לזכור שיש ל-FastComments רכיבי <a href="https://github.com/FastComments/fastcomments-react" target="_blank">React</a> ו<a href="https://github.com/FastComments/fastcomments-vue" target="_blank">Vue</a> ייעודיים, אז בדוק את אלה אם אתה משתמש בספריות הללו כדי שלא תצטרך לבנות עטיפה משלך סביב FastComments.

אם אתה בונה את האפליקציה שלך באמצעות VanillaJS, תוכל להפעיל ולעדכן את הווידג'ט התגובות בצורה דינמית.

#### ראשית, ה-URL ומזהה ה-URL

ל-FastComments יש שני זיהויים לדף או למאמר שחוט התגובות קשור אליו. באובייקט ההגדרה, הם המאפיינים "url" ו-"urlId".

ה-URL הוא הכתובת של הווידג'ט התגובות. אידיאלי, אתה אמור להיות מסוגל לבקר בכתובת זו מבחוץ לאפליקציה שלך. זה יחשף כקישור במיילי ההודעה ובכלים של המנהל.

מזהה ה-URL הוא מיתר שהוא או כתובת URL או מזהה - זה יכול להיות כל ערך כל עוד הוא מייצג את הדף הנוכחי. אם יש לך מזהה לפוסט, מאמר או דף, תוכל להשתמש בו במקום בכתובת ה-URL עבור ערך זה. הסיבה לכך שמזהה ה-URL נפרד היא שאתה עשוי לרצות לאחסן מידע נוסף בכתובת ה-URL שיגרום לכתובת לא להיות ייחודית לדף.

שים לב שתיעדנו את ההגדרה המלאה שהווודג'ט תומך בה ב-TypeScript <a href="https://github.com/FastComments/fastcomments-typescript/blob/main/src/fastcomments-config.ts#L14" target="_blank">ב-GitHub</a>.

#### פרטים ודemo אמיתי

כאשר הווודג'ט מופעל, קלט את התוצאה מתוך הפונקציה FastCommentsUI שאותה היית קורא בדרך כלל:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
</div>

לאחר מכן, תוכל לקרוא למתודה "update" על אובייקט המופע כדי לעדכן את ההגדרה. זה יבצע רענון של הרכיב:

<div class="code">    const config = {tenantId: 'demo'};
    const widgetInstance = window.FastCommentsUI(document.getElementById('fastcomments-widget'), config);
    widgetInstance.update({
        ...config,
        urlId: getUrlId(),
        url: getUrl()
    });
</div>

אתה יכול לראות דוגמה עובדת <a href="https://jsfiddle.net/winrid/y4wrs3h2/4/" target="_blank">עם הפידל הזה</a>.

שים לב שבדוגמה זו אנו משתמשים document.getElementById, אבל אתה יכול להשתמש בכל מנגנון שתרצה כדי להשיג את האלמנט המטרה.

#### תקלות

בעוד שעדכון "urlId" בלבד יעבוד, עליך לעדכן גם את "urlId" וגם את "url" אפילו אם הם אותו דבר כך שהקישורים ממיילי ההודעה וכלי המודרציה יעבדו. עדכון רק את "url" לא יעבוד - התגובות קשורות ל-"urlId".

#### לסיכום

אנו מקווים שהמדריך הזה היה מועיל עבורך. אל תהסס להגיב למטה עם כל שאלה.

בהצלחה!

{{/isPost}}

---