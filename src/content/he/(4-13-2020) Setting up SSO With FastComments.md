---
[category:API & Development]

###### [postdate]
# [postlink]הגדרת SSO עם FastComments[/postlink]

{{#unless isPost}}
FastComments מספקת פתרונות SSO לפלטפורמות שונות ואינטגרציות מותאמות אישית.
{{/unless}}

{{#isPost}}

# סקירה כללית

## מה זה SSO?

SSO, או כניסה יחידה, היא מכלול של conventions המאפשרים לך או למשתמשים שלך להשתמש ב-FastComments מבלי צורך ליצור חשבון נוסף.

בהנחה שאינך מאפשר הערות אנונימיות, נדרש חשבון כדי להוסיף תגובות עם FastComments. אנחנו עושים את תהליך ההרשמה הזה מאוד קל - המשתמש פשוט משאיר את כתובת האימייל שלו כשיש לו תגובה. עם זאת, אנחנו מבינים שאפילו זה הוא חיכוך נוסף שחלק מהאתרים רוצים להימנע ממנו.

## איך אני מקבל את זה?

כל סוגי החשבונות כרגע מקבלים גישה ל-SSO כמו גם תמיכה. עם זאת, מספר המשתמשים המרבי ל-SSO שונה בהתאם לחבילתך.

### משתמשי WordPress

אם אתה משתמש בתוסף ה- <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">WordPress</a> שלנו, אז אין צורך לכתוב קוד! פשוט עבור לדף הניהול של התוסף, לחץ על הגדרות SSO ואז הפעל.

זה יוביל אותך לאשף בלחיצה אחת שיצור את מפתח ה-API שלך, ישלח אותו להתקנת ה-WordPress שלך ויפעיל את ה-SSO. ריכזנו את זה ללחיצה אחת בשבילך.

שימו לב, אם אתה מתקין את התוסף בפעם הראשונה, תצטרך לעבור את תהליך ההגדרה לפני שתראה את דף הניהול עם כפתור הגדרות ה-SSO.

### אינטגרציות מותאמות אישית

ה-SSO של FastComments משתמש בהצפנת HMAC-SHA256 כמנגנון ליישום SSO. קודם נדון בארכיטקטורה הכללית, נספק דוגמאות, וצעד אחר צעד מפורטים. עם זאת, בסוף מאמר זה יש הוראות ל-**הגירה מ-Disqus ו-Commento**.

הזרימה נראית כך:

<div class="text-center">
<img src="/images/sso-diagram.png" alt="FastComments SSO Diagram" title="FastComments SSO Diagram" class="lozad" />
</div>

אתה לא צריך לכתוב שום נקודות קצה API חדשות עם FastComments SSO. פשוט הצפן את המידע של המשתמש באמצעות המפתח הסודי שלך ו/pass את המידע ל-widget התגובה.

אנחנו מספקים דוגמאות קוד פונקציונליות בשפות/הרצות שונות כולל NodeJS, Java/Spring, ו-PHP בגרסתה הבסיסית. למרות שאנחנו משתמשים ב-ExpressJS בדוגמת NodeJS וב-Spring בדוגמת Java, אין צורך במסגרת/ספריות באותן הרצות כדי ליישם את FastComments SSO - חבילות ה-crypto המקוריות עובדות.

אתה יכול למצוא את מאגר דוגמות הקוד כאן:

<a href="https://github.com/fastcomments/fastcomments-code-examples" class="btn" target="_blank">דוגמאות קוד ל-SSO של FastComments</a>

#### קבלת מפתח הסוד של ה-API שלך

המפתח הסודי שלך ל-API ניתן לקבל מדף זה <a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">הדף הזה</a>. אתה יכול למצוא את הדף הזה גם על ידי מעבר לחשבון שלי, לחיצה על לוח ה-API/SSO ואז לחץ על "קבלת מפתח סודי ל-API".

#### פרמטרים ל-widget התגובה

תיעוד API ברמה גבוהה עבור widget התגובה ניתן למצוא <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">כאן</a> ולחיצה על "הצג אפשרויות מתקדמות". חפש SSO בדף.

בוא ניכנס לפרטים נוספים על מה הפרמטרים האלה אומרים.

ה-widget התגובה לוקח אובייקט תצורה - אתה כבר מעביר את זה אם אתה משתמש ב-FastComments להעביר את מזהה הלקוח שלך (נקרא tenantId).

כדי לאפשר SSO, העבר אובייקט "sso" חדש, שמוכרחים שיהיו לו את הפרמטרים הבאים. הערכים צריכים להיווצר **בצד השרת**.

- userDataJSONBase64: נתוני המשתמש בפורמט JSON, אשר ממומש ב-Base64.
- verificationHash: ההאשט HMAC-SHA256 שנוצר מ-UNIX_TIME + userDataJSONBase64.
- timestamp: הזמן הנוכחי ב-unix. **אסור להיות בעתיד, או יותר משלוש שעות בעבר.**
- loginURL: כתובת URL שה-widget התגובה יכול להציג כדי להיכנס למשתמש.
- logoutURL: כתובת URL שה-widget התגובה יכול להציג כדי לצאת את המשתמש.
- loginCallback: כאשר ניתנה במקום כתובת ה-URL של ההתחברות, פונקציה שה-widget התגובה יבצע כאשר ילחצו על כפתור ההתחברות.
- logoutCallback: כאשר ניתנה במקום כתובת ה-URL של היציאה, פונקציה שה-widget התגובה יבצע כאשר ילחצו על כפתור היציאה.

#### אובייקט המשתמש 

אובייקט המשתמש מכיל את הסכימה הבאה:

- id (מחרוזת, נדרש) (1k תווים מקסימום)
- email (מחרוזת, נדרש) (1k תווים מקסימום). הערה: חייב להיות ייחודי.
- username (מחרוזת, נדרש) (1k תווים מקסימום). הערה: שם המשתמש לא יכול להיות דוא"ל. לא חייב להיות ייחודי.
- avatar (מחרוזת, אופציונלית) (3k תווים מקסימום)
- optedInNotifications (בוליאני, אופציונלי)
- displayLabel (מחרוזת, אופציונלית, 100 תווים מקסימום). תווית זו תוצג ליד שמו.
- websiteUrl (מחרוזת, אופציונלית, 2000 תווים מקסימום). השם של המשתמש יקשר לזה.

#### הודעות

כדי לאפשר או לבטל הודעות, קבע את הערך של optedInNotifications ל-true או false בהתאמה. בפעם הראשונה שמשתמש טוען את הדף עם ערך זה בנתוני ה-SSO,
הגדרות ההודעות שלו יתעדכנו.

#### משתמשים VIP ותוויות מיוחדות

אתה יכול להציג תווית מיוחדת ליד שמו של המשתמש על ידי שימוש בשדה ה-"displayLabel" האופציונלי.

#### משתמשים לא מאומתים

כדי לייצג משתמש לא מאומת, פשוט אל תמלא את userDataJSONBase64, verificationHash, או timestamp. ספק loginURL.

#### דוגמאות ישירות לסידור והאשטת נתוני משתמש

פרטים נוספים כדוגמות <a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/nodejs/routes/index.js#L26" target="_blank">כאן (js)</a>,
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/java/src/main/java/com/winricklabs/ssodemo/DemoController.java#L54" target="_blank">כאן (java)</a> ו
<a href="https://github.com/fastcomments/fastcomments-code-examples/blob/master/sso/php/server.php#L27" target="_blank">כאן (php)</a>.


### המרה מ-Disqus SSO

ההבדלים הגדולים ביותר בין Disqus ל-SSO של FastComments הם ש-Disqus משתמשת ב-SHA1 להצפנה בזמן שאנו משתמשים ב-SHA256.
זה אומר שההגירה מ-Disqus היא קלה - פשוט שנה את אלגוריתם ההאשט מש SHA1 ל-SHA256 ועודכן את שמות המאפיינים שעוברים ל-UI.

### המרה מ-Commento SSO

Commento משתמשת בגישה שונה לחלוטין ל-SSO - הם דורשים ממך שתהיה נקודת קצה שתפעילו כדי לאמת את המשתמש. FastComments היא ההפך -
רק יש לקודד ולהאשט את המידע של המשתמש באמצעות המפתח הסודי שלך ולחוש אותו הלאה.

אנחנו מבינים שכל אינטגרציה יכולה להיות תהליך מסובך וכואב. אל תהסס לפנות לנציג שלך או להשתמש בדף <a href="https://fastcomments.com/auth/my-account/help" target="_blank">התמיכה</a>.

{{/isPost}}

---