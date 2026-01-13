---

[category:Features]
###### [postdate]
# [postlink]הושק תגובת דף[/postlink]

{{#unless isPost}}
FastComments תומך כעת בהצגת תגובות דף יחד עם סופרות מעל לשורת התגובות.
{{/unless}}

{{#isPost}}

### מה חדש

FastComments כבר תמך במה שאנחנו מכנים את מודול המשוב שלנו, שבו תוכלו להציג דירוג כוכבים, NPS, או שאלות אחרות מעל לאזור התגובות.

עם זאת, הרבה משתמשים רוצים משהו פשוט יותר - להציג כמה אייקונים עם תגובות מעל לשורת התגובות, להיות מסוגלים להתאים אישית את האייקונים הללו, אולי להתאים אישית את האפשרויות לכל משתמש, וכן הלאה.

נכון להיום, השקנו תכונה זו.

כל התכניות של FastComments כוללות כעת גישה לתגובות דף.

### הדגמה חיה

הפעלנו תצורת הדגמה של תגובות דף עבור פוסט הבלוג הזה באופן ספציפי, תוכלו למצוא אותה למטה!

### תיעוד

[אתם יכולים למצוא את תיעוד המפתחים עבור הגדרת תגובות דף כאן.](https://docs.fastcomments.com/guide-page-reacts.html)

### רשימת המשתמשים המגיבים

תגובות דף יכולות גם להיות מוגדרות להציג חלון קופץ שיחשוף את רשימת המשתמשים שהשאירו תגובה מסוימת.

### לסיכום

אנחנו מודים ללקוחות שלנו שנותנים לנו משוב מתמשך כך שנוכל לחשוב על רעיונות כאלה וגם נותנים לנו את הזמן להשיק תכונות אופטימליות היטב. אנו מקווים שאתם ממשיכים לאהוב את FastComments.

יישר כוח!

<script>
    window.demoOverrides = {
        pageReactConfig: {
            showUsers: true,
            reacts: [
                {id: 'droll', src: 'https://docs.fastcomments.com/images/emojis/droll.png'},
                {id: 'he', src: 'https://docs.fastcomments.com/images/emojis/heart-eyes.png'},
                {id: 'laugh', src: 'https://docs.fastcomments.com/images/emojis/laugh.png'},
                {
                    id: 'puke',
                    src: 'https://docs.fastcomments.com/images/emojis/puke.png',
                    selectedSrc: 'https://docs.fastcomments.com/images/emojis/puke-bw.png'
                },
                {id: 'rofl', src: 'https://docs.fastcomments.com/images/emojis/rofl.png'},
            ]
        }
    }
</script>

{{/isPost}}

---