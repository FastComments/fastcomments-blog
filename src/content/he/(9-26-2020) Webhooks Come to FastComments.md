---
[category:API & Development]
###### [postdate]
# [postlink]וובוקס מגיעים ל-FastComments[/postlink]

{{#unless isPost}}
FastComments יכולה כעת לקרוא ל-API שלך ליצירת תגובות, עדכונים ומחיקות.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל מושגים טכניים

#### מה חדש

עם FastComments ניתן כעת לקרוא לנקודת API בכל פעם שתגובה מתווספת, מעודכנת או מוסרת מהמערכת שלנו.

אנו מבצעים זאת באמצעות וובוקס אסינכרוניים על גבי HTTP/HTTPS.

#### איך להשתמש בזה

ראשית, נווט ל-<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">ניהול וובוקס</a>. זה נגיש דרך ניהול נתונים -> וובוקס.

משם תוכל לציין נקודות קצה לכל סוג של אירוע תגובה.

לכל סוג של אירוע, הקפד ללחוץ על **שלח נטל בדיקה** כדי לוודא שהגדרת את האינטגרציה שלך נכונה. ראה את הסעיף הבא, "בדיקה", לפרטים.

<div class="text-center">
    <img src="images/fc-webhooks-test-verified.png" alt="דוגמה להגדרת וובוקס" title="דוגמה להגדרת וובוקס" class="lozad" />
</div>

#### בדיקה

ב-<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">ניהול וובוקס</a> קיימים כפתורי "שלח נטל בדיקה" עבור כל סוג אירוע (יצירה, עדכון, מחיקה). אירועי יצירה ועדכון שולחים עצם WebhookComment מדמה, בעוד שבדיקת מחיקה תשלח גוף בקשה מדמה עם רק מזהה.

הבדיקה תבצע שתי קריאות כדי לאמת את קוד התגובה עבור תרחישי "שמחה" (מפתח API נכון) ו"עצב" (מפתח API לא תקף).

כאשר הבדיקה שולחת מפתח API לא תקף, עליך להחזיר קוד מצב 401 כדי שהבדיקה תעבור לחלוטין. אם לא תבדוק כראוי את ערך הטוקן, תראה שגיאה כמו:

<div class="text-center">
    <img src="images/fc-webhooks-test-expected-401.png" alt="כישלון בדיקת אימות וובוקס" title="כישלון בדיקת אימות וובוקס" class="lozad" />
</div>

#### מבנה עצם התגובה
<div class="code">/**
 * @typedef {Object} WebhookComment
 * @property {string} id
 * @property {string} urlId
 * @property {string} url
 * @property {string} userId
 * @property {string} commenterEmail
 * @property {string} commenterName
 * @property {string} comment
 * @property {string} commentHTML
 * @property {string} parentId
 * @property {DateString} date
 * @property {number} votes
 * @property {boolean} verified
 * @property {number} verifiedDate
 * @property {boolean} reviewed
 * @property {string} avatarSrc
 * @property {boolean} isSpam
 * @property {boolean} aiDeterminedSpam
 * @property {boolean} hasImages
 * @property {number} pageNumber
 * @property {boolean} approved
 * @property {string} locale
 */
</div>

#### מבנה אירוע ה"יצירה"

גוף הבקשה של אירוע "יצירה" הוא עצם WebhookComment.

#### מבנה אירוע ה"עדכון"

גוף הבקשה של אירוע "עדכון" הוא עצם WebhookComment.

#### מבנה אירוע ה"מחיקה"

גוף הבקשה של אירוע "מחיקה" הוא עצם WebhookComment, **אך כולל רק את המזהה**.

#### למה יצירה ועדכון משתמשים שניהם ב-HTTP PUT ולא ב-POST?

**מכיוון שכל הבקשות שלנו כוללות מזהה**, חזרה על אותה בקשת יצירה או עדכון **לא אמורה ליצור אובייקטים חדשים בצד שלך**. המשמעות היא שקוראים אלו הם אידמפוטנטיים וצריכים להיות אירועי PUT בהתאם למפרט HTTP.

#### איך זה עובד

כל שינוי בעצם התגובה במערכת מפעיל אירוע שנכנס לתור. תוכל לנטר את התור הזה ב-<a href="https://fastcomments.com/auth/my-account/manage-data/webhooks" target="_blank">ניהול וובוקס</a> במקרה שה-API שלך מתמוטט. אם בקשה ל-API שלך נכשלת, אנחנו נשחזר אותה בתור על פי לוח הזמנים. לוח הזמנים הוא 1 דקה * מספר הניסיונות. אם הקריאה נכשלה פעם אחת, היא תנסה שוב בעוד דקה. אם היא נכשלת פעמיים, היא תמתין שתיים דקות, וכן הלאה. זה כדי שלא נעמיס על ה-API שלך אם אתה מתמוטט מסיבות הקשורות לעומס.

#### אבטחה וטוקן API

בכותרת הבקשה נעביר את ה- <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">סוד ה-API שלך</a> בפרמטר שנקרא "token".

אם לא תבדוק כראוי את הפרמטר הזה, האינטגרציה שלך לא תסומן כמאומתת. זו הגנה כדי להבטיח שאינטגרציות עם FastComments יהיו בטוחות.

#### לסיכום

אנו מקווים שתמצא את אינטגרציית הוובוקס של FastComments קלה להבנה ומהירה להגדרה.

אם יש לך שאלות נוספות, אל תהסס לפנות ל-<a href="https://fastcomments.com/auth/my-account/help" target="_blank">דף תמיכת לקוחות</a>.

בברכה!

{{/isPost}}