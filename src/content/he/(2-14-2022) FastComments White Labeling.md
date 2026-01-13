---
[category:API & Development]

###### [postdate]
# [postlink]White Labeling של FastComments[/postlink]

{{#unless isPost}}
White Labeling, עם אינטגרציה מלאה של API וכלי אוטומציה, מגיע ל-FastComments.
{{/unless}}

{{#isPost}}

## מה חדש

FastComments יכולה כעת להשתלב עם אפליקציות אחרות וספקי צד שלישי באמצעות White Labeling. White Labeling מאפשרת לך ליצור חשבונות FastComments (המכונים שוכנים), משתמשים, מנהלי מודרציה ועוד.

כעת אנו מציעים [API מקיף](https://docs.fastcomments.com/guide-white-labeling.html#white-labeling-using-the-api) לאוטומטיזציה של האינטגרציה
עם צדדים שלישיים.

כעת, באמצעות ה-API:

- ליצור לקוחות (שוכנים ילדים) המנוהלים על ידי השוכן שלך.
- לנהל את החבילות הזמינות ללקוחות שלך ואיך תטפל בחיוב.
- להוסיף ולנהל משתמשים בשוכנים המנוהלים שלך.
- להוסיף ולנהל מנהלי מודרציה בשוכנים המנוהלים שלך.
- להזמין מנהלי מודרציה ולשלוח קישורי כניסה למשתמשי השוכן.

## חיוב

עם חיוב, ישנן שתי אפשרויות:

1. באמצעות FastComments Flex, השימוש בשוכנים הילדים שלך נארז אוטומטית ומחויב לשוכן ההורה. זה יכול להתאמן דרך [דף אנליטיקת החיוב](https://fastcomments.com/auth/my-account/analytics/billing).
2. באמצעות FastComments Pro, אתה מקבל גישה ליצירת מספר קבוע של שוכני ילדים במחיר חודשי קבוע.

## הסרת מיתוג

שוכנים מנוהלים יכולים להפעיל הסרת מיתוג, שמסירה את הלוגואים שלנו מהווידג'ט של התגובות.

## איך להשיג White Labeling

כיום, תוכניות FastComments Flex ו-Pro מציעות גישה ל-API של White Labeling.

## תסריטים ודוגמאות

תסריט דוגמה שמשתמש ב-API כדי להגדיר שוכן עם משתמשים ומנהלי מודרציה [זמין כאן](https://github.com/FastComments/fastcomments-code-examples/tree/master/white-labeling).

## אימות מקיף

לכל משאב API יש אימותים ומגבלות מקיפים, עם הודעות שגיאה מועילות, כדי להנחות אותך בשימוש נכון בהם.

<div class="code"><div class="title">דוגמא לשגיאה מפורטת</div><div class="line">{</div><div class="line">  "status": "failed",</div><div class="line">  "reason": "משתמש עם מזהה זה לא קיים בשוכן הזה. צור את המשתמש קודם ואחר כך הפוך אותו למנהל מודרציה.",</div><div class="line">  "code": "not-found"</div><div class="line">}</div></div>

## מקרים נוספים לשימוש

ה- [API של משתמשי שוכנים](https://docs.fastcomments.com/guide-api.html#tenant-user-structure) וה- [API של מנהלי מודרציה](https://docs.fastcomments.com/guide-api.html#moderator-structure) יכולים גם לשמש כדי
להוסיף ולנהל משאבים אלו בשוכן שלך, ללא קשר ל-White Labeling.

## תיעוד

אתה יכול למצוא תיעוד מלא של White Labeling ואיך להשתמש ב-API [כאן](https://docs.fastcomments.com/guide-white-labeling.html).

## לסיכום

אנו מקווים שמצאתם את העדכון הזה ואת התיעוד שלו שימושיים. אינטגרציה מהנה!

{{/isPost}}