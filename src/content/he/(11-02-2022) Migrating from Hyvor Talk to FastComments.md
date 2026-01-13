---
[קטגוריה:הגירה]
###### [תאריך הפוסט]
# [פוסטלינק]הגירה מ-Hyvor Talk ל-FastComments[/פוסטלינק]

{{#unless isPost}}
קרא פוסט זה כדי לראות כיצד להגר במלואה מ-Hyvor Talk ל-FastComments.

אם אתה משתמש בהתקנה ידנית באמצעות קוד עם Hyvor Talk, אז פשוט עליך להסיר את הקטע הקטן שהם נותנים לך ולהחליף אותו ב- <a href="https://fastcomments.com/install-wizard" target="_blank">הקוד שלנו</a>.
אפילו תוכל להריץ את Hyvor ואת FastComments באותו אתר באופן זמני כדי לבדוק ולשנות את המראה והתחושה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנחנו יכולים לעזור בזה</a>.

אם אינך משתמש בהתקנה מבוססת קוד, אז ההוראות משתנות בהתאם לפלטפורמה שלך - שוב <a href="https://fastcomments.com/auth/my-account/help" target="_blank">צור קשר איתנו</a>.
{{/unless}}

{{#isPost}}

## אם אתה על WordPress

ל-FastComments יש תוסף ייעודי ל-WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

התוסף עושה את ההתקנה, ההגדרה והסנכרון קלים מאוד. אם אתה הולך בדרך הזו, תוכל להתעלם מהשאר ההוראות כאן. רק ודא
שסנכרנת את תגובות Hyvor Talk שלך חזרה להתקנה של WordPress שלך.

אם זה לא עובד לך כפי שדווח על ידי כמה מהלקוחות שלנו, אולי תרצה להשתמש בתוסף ה-WordPress שלנו, אך לבצע ייבוא נתונים
על ידי ייצוא מ-Hyvor Talk באופן ידני. תוכל למצוא ייבוא נתונים ב- [ניהול נתונים -> ייבוא תגובות](https://fastcomments.com/auth/my-account/manage-data/import).

## התקנה ידנית, כללית

### ייצא את התגובות הקיימות שלך

המייבא של FastComments יגרום להעברת חוטי התגובות שלך, שמות המשתמשים, אווטרי המשתמשים, אמוג'י ודימויים מקוונים. נעביר את הדימויים לשרתים שלנו בצורה חלקה.

נכון ל-2022, Hyvor Talk לא מייצא מיילים או מצביעים. אם תוכל לקבל מהם ייצוא עם מידע זה, נוכל לייבא אותו.

### ייבוא קובץ .JSON

לאחר שהורדת את ייצוא ה-Hyvor, התחבר לדשבורד של FastComments שלך ועבור <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">כאן כדי לייבא את הקובץ</a>. בחר ב-Hyvor Talk מתוך הרשימה הנפתחת והעלה את הקובץ שלך.

### חכה כמה דקות

הייבוא של FastComments הוא "אסינכרוני". פירוש הדבר ש-uploading הקובץ ועיבודו הם צעדים נפרדים.

כך, בהתאם לגודל הקובץ שלך, ייתכן שתקבל את הודעת ההצלחה מיד. בדף הייבוא בתחתית יש טבלה - כל שורה מייצגת ניסיון ייבוא.
תוכל לרענן את הדף הזה בביטחה כדי לראות את מצב הייבוא שלך וכמה שורות יובאו עד כה.

### כאשר זה נגמר

תקבל אימייל כאשר הייבוא נגמר - אם הוא מצליח או לא. תוכל לסגור את הדף לאחר שההעלאה של הקובץ מצליחה, וראות את הייבוא שלך בדף הייבוא. זה ייכנס עם מצב כמו "מבוקש" וכאשר זה מתחיל המצב יהיה "מתנהל".

זה בטוח לייבא מחדש כמה פעמים שצריך - אם הייבוא שלך נכשל אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">צור קשר איתנו</a> כדי שנוכל לעזור.

### החלף את הקוד של Hyvor Talk בקוד של FastComments

אם אתה משתמש בהתקנה מבוססת קוד עם Hyvor, אז פשוט עליך להסיר את הקטע הקטן שהם נותנים לך ולהחליף אותו ב- <a href="https://fastcomments.com/install-wizard" target="_blank">הקוד שלנו</a>.
אנחנו גם תומכים בהרבה מסגרות צדדיות אשר [תוכל למצוא כאן](https://fastcomments.com/install-wizard). אפילו תוכל להריץ את Hyvor ואת FastComments באותו אתר באופן זמני כדי לבדוק ולשנות את המראה והתחושה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנחנו יכולים לעזור בזה</a>.

אם אינך משתמש בהתקנה מבוססת קוד, אז ההוראות משתנות בהתאם לפלטפורמה שלך - שוב <a href="https://fastcomments.com/auth/my-account/help" target="_blank">צור קשר איתנו</a>.

אנו מציעים אשף התקנה עצמי [כאן](https://fastcomments.com/install-wizard).

### הגירת URLs באותו הזמן

עצם התגובות קשורות לשדות מזהי הדף בייצוא, כך שכל עוד ה-URLs שלך לא משתנים, המעבר קל. אם אתה רוצה להגר URLs ולשמור את
התגובות שלך, אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">תודיע לנו</a> על ידי שליחת ה-URLs הישנים והחדשים שלך. דף העזרה מאפשר להעלות קבצי טקסט קטנים, כך שאם
אתה מגלה יותר מכמה URLs, צור גיליון Excel.

### האיחוד האירופי

אם אתה באיחוד האירופי, probably תרצה ליצור את החשבון שלך ב- [eu.fastcomments.com](https://eu.fastcomments.com) כך שנתוני הלקוח שלך יישארו באיחוד האירופי.

### סיכום

1. ייצא את הנתונים שלך
2. ייבא ל-FastComments
3. החלף את קטע JavaScript של Hyvor עם <a href="https://fastcomments.com/install-wizard" target="_blank">של FastComments</a>

## למה Hyvor לא שולחת לי את הקובץ שלי?
לאתרים גדולים ייתכן ש-Hyvor לא תוכל ליצור את הקובץ המיוצא עקב מגבלות טכניות מצידם. יש לנו את היכולת לגרד את האתר הקיים שלך ולשלוף את התגובות ממנו, אך זה יכול להיות
מאוד מותאם וכשמדובר בזמן ידרוש ממך שיהיה לך את חבילת התמיכה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">תוכל לבקש עזרה בזה כאן</a>.
{{/isPost}}

---