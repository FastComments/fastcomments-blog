---
[category:Integrations]
###### [postdate]
# [postlink]הוספת תגובות לבלוג של BigCommerce[/postlink]

{{#isPost}}

#### הוסף מעורבות קהל לכל עמוד
מה אם הקהל שלך יוכל להגיב על הפוסטים בבלוג שלך, לשאול שאלות ולתת משוב? עכשיו הם יכולים עם FastComments.

#### תבניות מותאמות אישית
כדי להוסיף את FastComments לבלוג של חנות ה-BigCommerce שלך, תצטרך לערוך את תבניות העיצוב שלך. אנחנו נלווה אותך בתהליך.

בדשבורד של BigCommerce, עבור אל Storefront -> My Themes.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="My Themes Link" title="My Themes Link" class="lozad" />
</div>

מתחת ל"Current Theme" תראה תפריט נפתח עם הכותרת "Advanced".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

בתפריט הנפתח הזה, אפשרות הראשונה היא "Edit Theme Files". אם אפשרות זו אינה ניתנת ללחיצה, תצטרך קודם להעתיק את התבנית דרך "Make a Copy".

לאחר שתוכל לפתוח את עורך התבניות, תראה דפדפן קבצים בצד השמאלי של הדפדפן שלך. זהו דפדפן קבצים לתבניות בעיצוב שלך.

תרצה לנווט אל תבנית ה-HTML המייצגת פוסט בבלוג. היא נמצאת ב-templates/components/blog/post.html, כפי שמוצג:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Editor Post File Location" title="Editor Post File Location" class="lozad" />
</div>

קטע הקוד של FastComments שלך, אותו תוכל לקבל מ-<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">כאן</a>, צריך להיות ממוקם מיד אחרי שורה 48, שהיא בעלת הטקסט "&#123;{>components/common/share}&#125;".

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Place to insert FastComments" title="Place to insert FastComments" class="lozad" />
</div>

#### זכור!
תצטרך להוסיף את הדומיין של החנות שלך ל-FastComments, שתוכל לעשות זאת <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">כאן</a>.

#### לסיכום
כך צריך להיראות FastComments בבלוג של BigCommerce שלך. לחיים!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence on a BigCommerce Blog" title="FastCommence on a BigCommerce Blog" class="lozad" />
</div>

{{/isPost}}

---