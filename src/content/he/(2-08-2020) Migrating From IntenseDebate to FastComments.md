---
[category:Migration]

###### [postdate]
# [postlink]הגירה מ-IntenseDebate ל-FastComments[/postlink]

{{#unless isPost}}
קראו את הפוסט הזה כדי להראות כיצד לבצע הגירה מלאה מ-IntenseDebate ל-FastComments.
{{/unless}}

{{#isPost}}
## אם אתה על וורדפרס

ל-FastComments יש תוסף ייעודי לוורדפרס: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

התוסף עושה את ההתקנה, ההגדרה, והתיאום מאוד קלות. אם תבחר במסלול הזה, תוכל להתעלם משאר ההנחיות כאן.

## התקנה ידנית, כללית

### ייצוא התגובות הקיימות שלך

כדי לייצא את נתוני התגובות והמשתמשים של האתר שלך מ-IntenseDebate מלוח הבקרה שלהם, עבור ל-Sites -> Your Site -> Tools -> XML Export.

תשym noticed שהקובץ שתקבל בדוא"ל מגיע עם סיומת קובץ מסתורית "gz". אם אתה קצת יותר טכנולוגי, אתה עשוי לדעת שזה מסמל "gzip" וזהו אמצעי פופולרי ויעיל לדחיסת קבצים.

### אל תפתח את קובץ ה-"gz"

התקנה ברירת מחדל של Windows 10 לא תוכל לפתוח את הקובץ מ-IntenseDebate. זה בסדר, כי אתה לא צריך לעשות זאת עם FastComments. המערכת שלנו מבינה את הקובץ הדחוס הזה.

אחר כך, אם אתה מחובר לחשבון שלך, תוכל לעבור <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">הנה כדי לייבא את הקובץ</a>. בחר ב-IntenseDebate מתוך התפריט הנפתח והעלה את הקובץ שלך.

### חכה כמה דקות

הייבוא של FastComments הוא "אסינכרוני". זה אומר שהעלאת הקובץ ועיבודו הם שני שלבים נפרדים.

אז, בהתאם לגודל הקובץ שלך, ייתכן שתקבל את הודעת ההצלחה מיד. בדף הייבוא בתחתית יש טבלה - כל שורה מייצגת ניסיון ייבוא.
תוכל לרחוץ על הדף הזה בבטחה כדי לראות את הסטטוס של הייבוא שלך וכמה שורות יובאו עד כה.

### כשזה הסתיים

תקבל דוא"ל כשסיום הייבוא - בין אם זה מצליח ובין אם לא. תוכל לסגור את הדף לאחר שהעלאת הקובץ מצליחה ורואה את הייבוא שלך בדף הייבוא. יהיה לו סטטוס כמו "מבוקש" וכאשר הוא מתחיל, הסטטוס יהיה "בתהליך".

זה בטוח לייבא שוב כמה פעמים שיידרש - אם הייבוא שלך נכשל אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">פנה אלינו</a> כדי שנוכל לעזור.

### החלפת קוד IntenseDebate בקוד FastComments

זה פשוט עניין של הסרת הקוד הקטן ש-IntenseDebate נתנו לך והחלפתו ב-<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">שלנו</a>.
אתה יכול אפילו להריץ את IntenseDebate ו-FastComments באותו אתר באופן זמני כדי לבדוק ולשדרג את המראה והתחושה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנחנו יכולים לעזור בזה</a>.

אם אתה משתמש בווידג'טים של IntenseDebate ורוצה להחליף אותם אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">צור קשר איתנו כאן</a>.

### הגירה של URLs באותו זמן

התגובות עצמן קשורות לשדות "קישור" בייצוא של IntenseDebate, ולכן כל עוד שה-URLs שלך לא משתנים, המעבר הוא קל. אם אתה רוצה להגר URLs ולשמור על התגובות שלך אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנא יידע אותנו</a> על ידי שליחת ה-URLs הישנים והחדשים. דף העזרה מאפשר להעלות קבצי טקסט קטנים, אז אם אתה מיגר יותר מכמה URLs צור גיליון Excel.

### סיכום

1. ייצא את הנתונים שלך
2. ייבא ל-FastComments
3. החלף את החתימה של JavaScript של IntenseDebate ב-<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">FastComments</a>

## למה IntenseDebate לא שולח לי את הקובץ שלי?
לאתרים גדולים, IntenseDebate עשוי לא להיות מסוגל ליצור את הקובץ המיוצא עקב מגבלות טכניות מצד שלהם. יש לנו את היכולת לגרד את האתר הקיים שלך ולהוציא את התגובות ממנו, אך זה יכול להיות יחסית מותאם אישית ובגלל הזמן המעורב בכך תצטרך להיות בעל חבילת תמיכה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">תוכל לבקש עזרה בזה כאן</a>.
{{/isPost}}

---