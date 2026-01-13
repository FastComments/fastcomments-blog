---
[category:API & Development]

###### [postdate]
# [postlink]שוחרר API אגרגציה חדש[/postlink]

{{#unless isPost}}
FastComments מעניקה ללקוחות שלה גישה בלתי מנוצחת לנתונים שלהם עם API אגרגציה גמיש ומהיר
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> המאמר הזה מכיל ז'רגון טכני

### מה חדש

FastComments מעניקה ללקוחות שלה גישה בלתי מנוצחת לנתונים שלהם עם API אגרגציה גמיש. API זה מאפשר לך לספור, לחקור, לחתוך ולשלב
את התגובות, הקולות ו**34 משאבים נוספים**!

### דוגמה - ספירת תגובות לפי אימייל ודף

לדוגמה, עם ה-API החדש אנחנו יכולים לקבל ספירה של תגובות לפי דף (`urlId`) ואימייל משתמש (`commenterEmail`):  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

זה ייתן לנו משהו כמו:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

או שאולי אנחנו רוצים לספור את התגובות המובאות והמגוּדות שלנו:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

נותן לנו:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

ה-API תומך גם בסינון שאילתות ובקבוצות מעמיקות יותר.

### תיעוד

[אתה יכול למצוא את התיעוד המלא כאן.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### עידוד

אנחנו רוצים שללקוחות שלנו תהיה היכולת לבנות לוחות מחוונים כדי לנטר את החשבון שלהם, לבנות דוחות, להתמודד עם בקשות לקוחות, ולחקור את הנתונים שלהם לפי הצורך.

### מי מקבל את זה & מגבלות

כל הלקוחות של FastComments יש גישה ל-API. השימוש שלך מוגבל בהתאם לאשראי ה-API הזמין שלך שיתבסס על החבילה שרכשת.

### לסיכום

כמו כל השחרורים הגדולים, אנחנו שמחים שלקחנו את הזמן לאופטימיזציה, לבדוק ולהשיק כראוי את השינויים הללו. תן לנו לדעת
מטה אם אתה מוצא בעיות כלשהן.

לחיים!

{{/isPost}}

---