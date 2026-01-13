---
[קטגוריה:עיבוד]

###### [תאריך הפרסום]
# [קישור לפוסט]המיגרציה של ריאקציות מ-Hyvor Talk נתמכת עכשיו[/קישור לפוסט]

{{#unless isPost}}
כאשר אתה מייבא את ייצוא הנתונים שלך מ-Hyvor Talk, אנחנו יכולים עכשיו למגר את הריאקציות ברמת הדף שלך.
{{/unless}}

{{#isPost}}

### מה חדש

כאשר אתה מייבא תגובות כדי למגר אותן מ-Hyvor Talk, FastComments יכול עכשיו לייבא את הריאקציות של הדף שלך. בנוסף, נזהה אם
חוטי התגובה בדפים סגורים או לא, ונמגר את הסטטוס הזה גם כן.

הרצת המייבא מחדש לא תגרום להכפלת סופרי התגובות או לאיבוד ערכי ריאקציות כלשהן מהייבוא הקודם.

### כיצד להגדיר ריאקציות

הצגת ריאקציות בדף אינה אוטומטית. כדי להתחיל, תצטרך לעדכן את הקונפיגורציה של הווידג'ט שלך:

```
<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div id="fastcomments-widget"></div>
<script>
    FastCommentsUI(document.getElementById('fastcomments-widget'), {
        "tenantId": "demo",
        pageReactConfig: {
            reacts: [
                {id: 'superb', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F929.png'}, // מְפַנְקֵן
                {id: 'love', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/2764.png'}, // לב אדום
                {id: 'wow', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F62E.png'}, // פנים עם פה פתוח
                {id: 'sad', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F622.png'}, // פנים בוכות
                {id: 'laugh', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F602.png'}, // פנים עם דמעות של שמחה
                {id: 'angry', src: 'https://raw.githubusercontent.com/hfg-gmuend/openmoji/master/color/618x618/1F620.png'}  // פנים כועסות
            ]
        }
    });
</script>
```

הIDs חייבים להתאים לאלה מייצוא ה-Hyvor Talk. הדוגמה הזו משתמשת בערכים הנכונים.

תצטרך לספק את תמונות הריאקציות שלך. הן יכולות להיות בכל פורמט, כולל gif. הדוגמה למעלה משתמשת בכמה מהפרויקט OpenMoji.

### לסיכום

כמו בכל שחרור גדול, אנחנו שמחים שיכולנו לקחת את הזמן לאופטימיזציה, בדיקות ושחרור נכון של תכונה זו. תודיע לנו
למטה אם אתה מגלה בעיות כלשהן.

שתיה טובה!

{{/isPost}}

---