---
[category:מאפיינים]
[category:דוא"ל]

###### [postdate]
# [postlink]כעת זמין כיוונון DKIM בממשק המשתמש[/postlink]

{{#unless isPost}}
FastComments עכשיו מספק ממשק משתמש לכיוונון DKIM, מה שמקל על שיפור שיעורי המסירה של דוא"ל מבלי להשתמש ב-API.
{{/unless}}

{{#isPost}}

### מה חדש

כעת קל יותר להגדיר DKIM לדומיין הדוא"ל המותאם אישית שלך. בעבר, כיוונון DKIM דרש שימוש ב-
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> ישירות. עכשיו, אתה יכול
להגדיר DKIM ישירות מהממשק הניהול של FastComments.

### מדוע DKIM חשוב

כאשר אתה מתאים את דומיין השולח להודעות דוא"ל ש-FastComments שולח בשם שלך, ספקי הדוא"ל צריכים לאשר ש
ההודעות הללו חוקיות. DKIM (DomainKeys Identified Mail) הוא אחד מהמכאניזמים המרכזיים לאימות שעוזרים בכך.
בלי כיוונון DKIM נכון, הודעות דוא"ל שנשלחות בשם הדומיין שלך סביר יותר שיגמרו בתיקיות דואר זבל.

### איך להגדיר את זה

עבור לדף <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">הדומיינים שלי</a> ולחץ
על "הצג מתקדם" עבור הדומיין שברצונך לכוון. תראה את הגדרות DKIM שבהן תוכל להזין את שם הדומיין שלך, בורר המפתח,
ומפתח פרטי.

לאחר השמירה, כיוונון ה-DKIM יחול על כל ההודעות שנשלחות מאותו דומיין.

### ה-API עדיין פועל

אם אתה מעדיף לנהל את כיוונון DKIM בצורה תכנותית, ה-
<a href="https://docs.fastcomments.com/guide-api.html#domain-config-structure" target="_blank">Domain Configs API</a> ממשיך לפעול
כמו בעבר.

### לסיכום

אנו מקווים שזה מקל עליך לוודא שמשתמשים שלך מקבלים את ההודעות ש-FastComments שולח בשם שלך. יידע אותנו
למטה אם יש לך שאלות.

לחיי!

{{/isPost}}

---