---
[category:API & Development]
[category:Performance]
[category:Announcements]

###### [postdate]
# [postlink]עדכון מערכת תגובות React Native SDK[/postlink]

{{#unless isPost}}
שוב בנינו את fastcomments-react-native-sdk מהיסוד: ניהול מצב חדש ויעיל יותר, עיצוב מחדש באמצעות Design Tokens, ווידג'ט צ'אט חי ייעודי, ותמיכה מעולה בווב.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> המאמר הזה מכיל מונחים טכניים

### מה חדש

המשכנו לגרסה 5.1 של `fastcomments-react-native-sdk`, הספרייה שלנו עבור React Native שמציגה תגובות וצ'אט עם רכיבים אמיתיים של נייטיב במקום WebView.

שכתבנו את הפנימיות, עיצבנו מחדש את המראה כולו, הוספנו ווידג'ט צ'אט חי, הבאנו את ה-SDK לווב, ועדכנו אותו לגרסאות האחרונות של React Native ו-React.

<div class="text-center">
    <img src="images/rn-sdk-light.png" alt="FastComments React Native SDK, light theme" title="FastComments React Native SDK" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
    <img src="images/rn-sdk-dark.png" alt="FastComments React Native SDK, dark theme" title="FastComments React Native SDK, dark theme" style="max-width:280px;display:inline-block;margin:8px;vertical-align:top" />
</div>

### מדוע יש שתי ספריות React Native?

רק תזכורת, כי אנחנו מקבלים את השאלה הזו. אנחנו מספקים שתי אפשרויות:

- `fastcomments-react-native` הוא עטיפה דקה סביב הווידג'ט הוובי שלנו שפועל ב-WebView. זו הדרך המהירה ביותר לקבל כל תכונה מיד, וזה נהנה מתיקונים של הווב באופן אוטומטי.
- `fastcomments-react-native-sdk` (זה) מציג את ה-UI עם רכיבי React Native אמיתיים ללא WebView. זה יותר גמיש, ניתן לעיצוב מלא, ומרגיש נייטיב כי זה נייטיב.

למניסיון הטוב ביותר אנחנו ממליצים על ה-SDK. שאר הפוסט הזה עוסק במה שחדש ב-5.0.

### ניהול מצב חדש

המניע הראשי לשינוי הזה הוא לוודא שהספרייה שלנו נשארת נאמנה לשמה ונשארת מהירה. היו לנו מספר לקוחות שהתלוננו על הביצועים של הספרייה, אז כעת זה תוקן.

ה-SDK במקור שמר את עץ התגובות שלו ב-Hookstate. זה עבד, אבל ככל שיש יותר שיחות ועדכונים חיים הדברים החלו לאט.

החלפנו את Hookstate ב-Zustand ובחנות שטוחה ומדודה. התגובות עכשיו נמצאות במפה `byId` לצד אינדקסים `childrenByParent`, `rootOrder`, ו-`pinnedIds`, במקום עץ מקונן בתוך מצב.

השכר:

- אירועים חיים (תגובה חדשה, הצבעה, עריכה) הפכו למוטציות O(1) במקום לעבור ולהעתיק עץ.
- הפסדנו שני העתקות JSON עמוקות של העץ שהיו מתבצעות על כל fetch.
- רכיבים מתחברים בדיוק לחלקים שהם קוראים, המודל הסטנדרטי של בורר, כך שההצבעה על תגובה אחת משפיעה על תגובה אחת.

הנקודה האחרונה חשובה יותר ממה שזה נשמע. עם מנויים מבוססי בורר, שורה רק מתחדשת כאשר הנתונים שלה משתנים.

### עיצוב מחדש מבוסס טוקנים

המראה הישן היה פיסת סטיילים קבועים. ברירת המחדל החדשה נובעת מסט של טוקני עיצוב סמנטיים (`FastCommentsTheme`): צבעים, רווחים, רדיוסים, גדלי גופנים, משקלים של גופנים, וגדלי אווטרים. כל עץ הסטייל נגזר מאותם טוקנים.

זה אומר שעיצוב מחדש הוא רק פרופ:

```tsx
<FastCommentsLiveCommenting config={config} theme=\{{ colors: { primary: '#FF5500' } }}/>
```

מצב כהה הוא סט טוקנים אחד מרחק:

```tsx
import { getDarkTheme } from 'fastcomments-react-native-sdk';

<FastCommentsLiveCommenting config={config} theme={getDarkTheme()}/>
```

העיצוב מחדש עצמו מציע מראה נקי, מודרני-נייטרלי: מפרידים דקים, כפתורי הצבעה וצ'יפסים בצורת כדור, כפתורים ראשיים מלאים, אווטרים מעוגלים, וטיפוגרפיה אחידה. פרופ ה-`styles` עדיין קיים עבור שיפוטים כירורגיים, כך ששילובים קיימים ממשיכים לפעול.

### ווידג'ט צ'אט חי ייעודי

הוספנו `FastCommentsLiveChat`, תבנית צ'אט על אותו מנוע שמשכפלת את תצוגת הצ'אט של ה-SDK שלנו לאנדרואיד: הודעות כרונולוגיות עם החדשות בתחתית, המלחין מתחת לרשימה, רצועת כותרת חיה עם נקודת חיבור ומספר משתמשים, גלילה אוטומטית שנעצרה בזמן שאתה קורא הודעות ישנות, והיסטוריה אינסופית ככל שאתה מגלגל למעלה. כל תבנית ניתנת לשינוי באמצעות `config`.

```tsx
<FastCommentsLiveChat config=\{{ tenantId: 'demo', urlId: 'my-room' }}/>
```

### עכשיו גם בווב

אותו SDK רץ עכשיו גם בווב דרך `react-native-web`. המלחין טקסט עשיר (המוננע על ידי `react-native-enriched`) מציג את אותו אופן על iOS, אנדרואיד, ודפדפן, כך שחוויית העריכה היא אחידה בכל מקום עם יישום אחד. שכבות שאחרת היו חתוכות על ידי רשימת התגובות (תפריטים, בוחר GIF, רשימת התראות) מעוגנות מתחת למניעי שלהן בבניית הווב.

אתה יכול לנסות כל ווידג'ט בעצמך בבחינת <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">מרכיבי קומפוננטות</a>, שזה ה-SDK הזה רץ בדפדפן באמצעות `react-native-web`.

### נשארים עדכניים עם React Native

5.0 נבנתה ונבדקה מול React Native 0.81 ו-React 19, והיא מכוונת למבנה החדש (Fabric), שזה מה שהעורך הטקסט העשיר דורש. להישאר עדכני כאן הוא לא עבודה מיותרת: העורך, טיפול במחוות, והייצוג כולם נהיים מהירים ונכונים יותר ככל ש-React Native מתקדמת, ונשמח לקחת את השדרוגים הללו בהדרגה מאשר להישאר מאחור שנים.

### לסיכום

שכתוב זה היה על מתן ל-SDK של React Native את אותו מעמד ראשון של הספריות האחרות שלנו: מודל נתונים מהיר וניבא, מראה שאתה יכול לעצב בפרופ אחד, ווידג'ט צ'אט, ותמיכה באינטרנט, כל זאת על בסיס React Native מודרני.

אתה יכול למצוא את ה-SDK ב- <a href="https://www.npmjs.com/package/fastcomments-react-native-sdk" target="_blank">NPM</a>, המקור, עם דוגמאות, ב- <a href="https://github.com/FastComments/fastcomments-react-native-sdk" target="_blank">GitHub</a>, וכל ווידג'ט רץ בלייב ב- <a href="https://fastcomments.com/commenting-system-for-react-native" target="_blank">מרכיבי קומפוננטות</a>. תיידע אותנו למטה אם אתה נתקל במשהו.

בהצלחה!

{{/isPost}}

---