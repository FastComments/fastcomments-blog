---
[category:Integrations]
###### [postdate]
# [postlink]הטמעת תגובות באתר GatsbyJS עם FastComments[/postlink]

{{#unless isPost}}
עכשיו אתם יכולים להשתמש ב-FastComments כדי להטמיע תגובות באתר שנוצר עם Gatsby!
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל מושגים טכניים

#### מה חדש

לאחרונה השקתנו את <a href="https://blog.fastcomments.com/(8-12-2020)-fastcomments-goes-react.html" target="_blank">רכיב ה-React</a> שלנו עבור FastComments.

זה פותח הרבה הזדמנויות - כולל שילוב של FastComments עם Gatsby.

#### אם כתבתם עטיפה משלכם

אם כתבתם עטיפת React משלכם עבור FastComments - שקלו להחליף אותה בעטיפה החדשה שלנו. אנחנו נשמור על הה抽象 הזאת עבורכם - והיא מכילה הרבה דברים שימושיים כמו <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx#L8" target="_blank">הפעלה אוטומטית של עדכון על שינויים בהגדרות</a>.

#### איך זה עובד

מאחר ש-FastComments יש רכיב React כמו עטיפה סביב ווידג'ט הליבה שלנו - זה רק עניין של שימוש בספריית React שלנו כדי לאתחל את הווידג'ט בצד הלקוח.

אנחנו תומכים לחלוטין ברכיב הזה ונשמור אותו מעודכן.

#### דוגמאות?

התחלנו להקים דוגמאות, שאתם יכולים למצוא <a href="https://github.com/FastComments/fastcomments-gatsbyjs-example" target="_blank">כאן</a>.

#### מצב לילה

אחת מהדוגמאות שיש לנו היא "מצב לילה" - הצגת FastComments באתר עם רקע שחור (או מאוד כהה): <a href="https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx" target="_blank">https://github.com/FastComments/fastcomments-react/blob/master/example/src/DarkModeApp.tsx</a>.

בנוסף, מכיוון שהווידג'ט מגיב לשינויים בהגדרות, זה אומר שאתם יכולים שיהיה לכם מצב להחליף את ערכת הנושא של האתר שלכם וליידע בקלות את fastcomments-react לעדכן.

#### לסיכום

אנחנו מקווים שתמצאו את השילוב של FastComments באתר Gatsby שלכם מהיר ונוח.

להתראות!

{{/isPost}}

---