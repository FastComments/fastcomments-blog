---
[category:Migration]
[category:Tutorials]
###### [postdate]
# [postlink]מעבר מ-Disqus ל-FastComments[/postlink]

{{#unless isPost}}
קראו את הפוסט הזה כדי לראות כיצד לעבור באופן מלא מ-Disqus ל-FastComments.

אם אתם משתמשים באינטגרציה כללית עם Disqus, אז זה פשוט עניין של להסיר את הקוד הקטן שהם נותנים לכם ולשנות אותו ב- <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">שלנו</a>.
אתם יכולים אפילו להריץ את Disqus ו-FastComments באתר אחד באופן זמני כדי לבדוק ולשפר את המראה והתחושה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנחנו יכולים לעזור עם זה</a>.

אם אתם לא משתמשים באינטגרציה כללית, אז ההוראות יהיו שונות בהתאם לפלטפורמה שלכם - שוב <a href="https://fastcomments.com/auth/my-account/help" target="_blank">פנו אלינו</a>.
{{/unless}}

{{#isPost}}
יש הרבה דברים ש-Disqus עושה נכון, אבל איפה שהם לא מצליחים, שם FastComments נכנס לפעולה.

## אם אתם על WordPress

ל-FastComments יש תוסף ייעודי ל-WordPress: <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">https://wordpress.org/plugins/fastcomments/</a>.

התוסף מקל על ההתקנה, ההגדרה והסנכרון. אם אתם בוחרים בדרך זו, אתם יכולים להתעלם משאר ההוראות כאן.

## התקנה ידנית, כללית

### ייצוא התגובות הקיימות שלכם

המאגר של FastComments יגרום להעברת התגובות שלכם, שמות המשתמשים, איקוני המשתמשים ודימויי INLINE. אנו נעביר את התמונות לשרתים שלנו בצורה חלקה.

דבר אחד ש-Disqus עושה נכון הוא איך שהם מטפלים בייצוא נתונים. אתם תבחינו לאחר שתעקבו אחרי הצעדים במדריך שלהם <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">כאן</a> שהתוצאה 
קובץ שאתם מקבלים במייל מגיע עם סיומת קובץ מסתורית "gz". אם אתם יודעים טיפה יותר טכנולוגית, אתם עשויים לדעת שזה מייצג "gzip" ושזו שיטה פופולרית ויעילה לדחיסת קבצים.

### אל תפתחו את קובץ ה-"gz"

התקנה ברירת המחדל של Windows 10 לא תוכל לפתוח את הקובץ מ-Disqus. זה בסדר, כי אתם לא צריכים עם FastComments. הצד האחורי שלנו מבין את 
הקובץ הדחוס הזה, אז כל מה שאתם צריכים לעשות זה לעקוב אחרי ההוראות שלהם <a href="https://help.disqus.com/en/articles/1717199-importing-exporting" target="_blank">כאן כדי לקבל את הקובץ המדובר</a>.

לאחר מכן, אם אתם מחוברים, אתם יכולים ללכת <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">כאן כדי לייבא את הקובץ</a>. בחרו את Disqus מהתפריט הנפתח והעלו את הקובץ שלכם.

### המתן מספר דקות

היבוא של FastComments הוא "אסינכרוני". משמעות הדבר היא שהעלאת הקובץ ועיבודו הם צעדים נפרדים.

אז, בהתאם לגודל הקובץ שלכם, אתם עשויים לקבל את הודעת ההצלחה מיד. בדף הייבוא, בתחתית יש טבלה - כל שורה מייצגת ניסיון ייבוא.
אתם יכולים לרענן את הדף הזה בבטחה כדי לראות את מצב הייבוא שלכם וכמה שורות יובאו עד כה.

### כאשר זה יסתיים

תקבלו אימייל כאשר הייבוא יסתיים - אם הוא מצליח או לא. אתם יכולים לסגור את הדף לאחר שהעלאת הקובץ מצליחה ואתם רואים את הייבוא שלכם בדף הייבוא. זה יהיה עם סטטוס כמו "הוזמן" וכאשר זה מתחיל הסטטוס יהיה "פועל".

זה בטוח לייבא שוב כמה פעמים שדרוש - עם זאת, אם הייבוא שלכם נכשל, אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">פנו אלינו</a> כדי שנוכל לעזור.

### החליפו את הקוד של Disqus עם FastComments

אם אתם משתמשים באינטגרציה כללית עם Disqus, אז זה פשוט עניין של להסיר את הקוד הקטן שהם נותנים לכם ולשנות אותו ב- <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">שלנו</a>.
אתם יכולים אפילו להריץ את Disqus ו-FastComments באתר אחד באופן זמני כדי לבדוק ולשפר את המראה והתחושה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אנחנו יכולים לעזור עם זה</a>.

אם אתם לא משתמשים באינטגרציה כללית, אז ההוראות יהיו שונות בהתאם לפלטפורמה שלכם - שוב <a href="https://fastcomments.com/auth/my-account/help" target="_blank">פנו אלינו</a>.

### מעבר ל-URLs באותו הזמן

התגובות עצמן קשורות לשדות ה-"link" בייצוא של Disqus, אז כל עוד שה-URLs שלכם לא משתנים, השינוי קל. אם אתם רוצים להעביר URLs ולשמור על התגובות שלכם, אז <a href="https://fastcomments.com/auth/my-account/help" target="_blank">תנו לנו לדעת</a> על ידי שליחת ה-URLs הישנים והחדשים. דף העזרה מאפשר העלאת קבצי טקסט קטנים, אז אם אתם מעבירים יותר מכמה URLs, צרו גיליון Excel.

### סיכום

1. ייצא את הנתונים שלכם
2. יבוא ל-FastComments
3. החליפו את קוד JavaScript של Disqus ב- <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">של FastComments</a>

## למה Disqus לא שולח לי את הקובץ שלי?
אתרים גדולים יותר, Disqus עשוי לא להיות מסוגל ליצור את קובץ הייצוא בגלל מגבלות טכניות מצידם. יש לנו את היכולת לגרד את האתר הקיים שלכם ולשלוף את התגובות ממנו, עם זאת זה יכול להיות יחסית מותאם אישית ושעקב הזמן הנדרש זה ידרוש מכם שיהיה את חבילת התמיכה. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">אתם יכולים לבקש עזרה עם זה כאן</a>.
{{/isPost}}