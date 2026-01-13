---
[category:Integrations]
###### [postdate]
# [postlink]תגובות עבור ה-Jamstack[/postlink]

{{#unless isPost}}
מה שהיה ישן שוב חדש. פר-rendering והגשה של אתרים מק CDN נקראים עכשיו "JamStack" - אבל הם לא חייבים להיות סטטיים לחלוטין!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל שפה טכנית

<a href="https://jamstack.org/" target="_blank">Jamstack</a> היא דרך לכתוב אתר שאינו תלוי בשרת אינטרנט מסורתי. במקום זאת, הם
מוגשים משרתי CDN עבור חווית משתמש מיטבית (הטעינה היא מאוד מהירה). ביצועים הם עדיפות עליונה לאתרים שנכתבים עם Jamstack - בדיוק כמו
FastComments.

#### מדוע FastComments עובד עם ה-Jamstack

FastComments דורש רק קטע קוד קטן (< 11kb כרגע) בתחתית העמוד הסטטי שבו אתם רוצים להוסיף תגובות. לכן, התקנת FastComments באתר Jamstack טיפוסי לוקחת רק כמה שניות כמו כל אתר סטטי.

#### בעיות פוטנציאליות

אנו מבינים שאתרי Jamstack לא תמיד מתחילים כמשהו סטטי. ייתכן שהם עשויים עם Preact, React או Vue לדוגמה. נכתב ב-JS טהור, בנינו את הווידג'ט של FastComments
לתמיכה מקסימלית בעבודה עם כל המסגרות הגדולות. עם זאת, אם אתם נתקלים בבעיות עם FastComments והמסגרת שבחרתם אז
<a href="https://fastcomments.com/auth/my-account/help" target="_blank">תנו לנו לדעת</a>.

#### לסיכום

אנו מקווים ש-fastcomments מאפשרות למשתמשים שלכם ליצור אינטראקציה עם האתר שלכם, לתת משוב ולהשאיר תגובות בדרכים ש normalmente הם לא יכלו באתר סטטי.
למשל, עמוד זה מוכן מראש כמו אתר Jamstack מסורתי, ואתם יכולים לראות את FastComments פועל בשמחה בתחתית.

לחיים!

{{/isPost}}

---