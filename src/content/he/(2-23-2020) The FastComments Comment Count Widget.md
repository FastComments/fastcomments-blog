---
[category:Features]

###### [postdate]
# [postlink]ווידג'ט ספירת התגובות של FastComments[/postlink]

רוצה להראות את מספר התגובות בעמוד לפני שהמשתמש לוחץ? אין בעיה עם FastComments.

{{#isPost}}
הראשון מבין רבים שיבואו - FastComments עכשיו תומך בווידג'טים של ספירת תגובות.

לדוגמה, עמוד זה יש בו <b><span id="fastcomments-widget-comment-count"></span></b>. המספר הזה מוכנס דרך הווידג'ט! 
<script src="https://cdn.fastcomments.com/js/widget-comment-count.min.js"></script>
<script>
    window.FastCommentsCommentCount(document.getElementById('fastcomments-widget-comment-count'), {
        tenantId: 'L177BUDVvSe',
        isLive: true
    });
</script>

זו ספירה חיה, עם מטמון של 60 שניות כדי לעזור לרשימות פופולריות מאוד להיות מהירות יותר. זה אומר שייתכן שתראה את הספירה החיה מפגרת אחרי הספירה של
התגובות שלך בדקה, אבל זה כדי להבטיח ש-FastComments תעמוד בשם שלה.

דוגמה טובה יותר עשויה להיות רשימת פוסטים בבלוג, לדוגמה:

### פוסט #1
##### 64 תגובות


### פוסט #2
##### 128 תגובות


### פוסט #3
##### 256 תגובות

אתה יכול גם לראות דוגמה חיה של זה ב<a href="https://blog.fastcomments.com" target="_blank">עמוד הבית</a> של הבלוג.

ווידג'ט ספירת התגובות אינו מציג בתוך iframe, כך שהוא ניתן להתאמה אישית מלאה דרך CSS. הוא י inherit אוטומטית את העיצוב של העמוד שלך - גופנים, צבעים, גובהי שורות, וכן הלאה.

כדי לקבל גישה לקוד ווידג'ט ספירת התגובות לחשבון שלך פשוט לך <a href="https://fastcomments.com/auth/my-account/widgets/widget/widget-comment-count" target="_blank">כאן</a>.

תוכל למצוא זאת דרך ממשק המשתמש בעמוד החשבון, ואז ללחוץ על קבלת קוד ווידג'ט ואז ווידג'טים נוספים.

<style>
.content #post-1, .content #post-2, .content #post-3 {
    margin-bottom: 0;
}
.content h5[id="64-comments"], .content h5[id="128-comments"], .content h5[id="256-comments"] {
    margin-top: 0;
}
</style>
{{/isPost}}

---