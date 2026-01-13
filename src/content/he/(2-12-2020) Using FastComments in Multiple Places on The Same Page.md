---
[category:Tutorials]

###### [postdate]
# [postlink]שימוש ב-FastComments במספר מקומות באותה דף[/postlink]

FastComments גמיש. הוא מחובר לאלמנט רגיל בדף כך שהוא עובד עם כל מסגרת רשת.

{{#unless isPost}}
קראו פוסט זה כדי לראות דוגמה למספר מקרים של FastComments באותו דף.
{{/unless}}

{{#isPost}}
זה אומר שאנחנו יכולים שיהיו כמה שיותר שיחות בדף שאנחנו רוצים. לדוגמה, כאן יש שתי שיחות זה לצד זה.

<style>
.content {
    max-width: 1220px;
}

.content .widgets {
    text-align: center;
}

.content .widget {
    display: inline-block;
    width: 49%;
    vertical-align: top;
}

#fastcomments-widget {
    display: none;
}

@media(max-width: 768px) {
    .content .widget {
        display: block;
        width: 100%;
    }
}
</style>

<script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>
<div class="widgets">
    <div class="widget left" id="fastcomments-widget2"></div>
    <div class="widget right" id="fastcomments-widget3"></div>
</div>

<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?cats',
        headerHTML: '<h1>שיחת על חתולים</h1>',
        customCSS: '.footer { display: none }'
    });
</script>
<script>
    window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
        tenantId: 'L177BUDVvSe',
        urlId: window.location.href + '?dogs',
        headerHTML: '<h1>שיחת על כלבים</h1>',
        customCSS: '.footer { display: none }'
    });
</script>

### איך זה עובד

הנה הקוד שגורם לכך להתרחש. אנחנו מותאמים את פרמטר urlId כדי להפוך כל שיחה לייחודית. שימו לב שאנחנו משתמשים במזהים, אך אתם יכולים
לעביר כל אלמנט DOM שנשאל בכל אופן שתרצו.

<div class="code" id="code">&lt;script src="https://cdn.fastcomments.com/js/embed-v2.min.js"&gt;&lt;/script&gt;
&lt;div class="widgets"&gt;
   &lt;div class="widget left" id="fastcomments-widget2"&gt;&lt;/div&gt;
   &lt;div class="widget right" id="fastcomments-widget3"&gt;&lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget2'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?cats',
   headerHTML: '&lt;h1&gt;שיחת על חתולים&lt;/h1&gt;'
 });
&lt;/script&gt;
&lt;script&gt;
 window.FastCommentsUI(document.getElementById('fastcomments-widget3'), {
   tenantId: 'L177BUDVvSe',
   urlId: window.location.href + '?dogs',
   headerHTML: '&lt;h1&gt;שיחת על כלבים&lt;/h1&gt;'
 });
&lt;/script&gt;</div>

{{/isPost}}

---