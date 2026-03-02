---
[category:Integrations]
[category:API & Development]

###### [postdate]
# [postlink]חבילת Laravel הרשמית שוחררה[/postlink]

{{#unless isPost}}
שחררנו חבילת Laravel רשמית עם רכיבי Blade שמתאימים להוספה, SSO אוטומטי, ואינטגרציית API.
{{/unless}}

{{#isPost}}

### מה חדש

אנו נרגשים להכריז על שחרור החבילה הרשמית שלנו ל-Laravel, `fastcomments/laravel`. אם אתה בונה עם Laravel ורוצה להוסיף
תגובות, צ'אט חי, או ספירת תגובות לאפליקציה שלך, אתה יכול כעת לעשות זאת עם התקנה אחת של Composer וכמה רכיבי Blade.

החבילה תומכת ב-Laravel 10, 11, ו-12 על PHP 8.1+.

### איך להתחיל

התקן עם Composer:

    composer require fastcomments/laravel

לאחר מכן הוסף את מזהה השוכר שלך ואת מפתח ה-API שלך ל-.env:

    FASTCOMMENTS_TENANT_ID=your-tenant-id
    FASTCOMMENTS_API_KEY=your-api-key

זה כל מה שיש. ספק השירות והפאסייד מתגלים באופן אוטומטי - אין צורך ברישום ידני. אתה יכול לפרסם את קובץ ההגדרות להמשך התאמה אישית:

    php artisan vendor:publish --tag=fastcomments-config

### רכיבי Blade שמתאימים להוספה

החבילה מגיעה עם שלושה רכיבי Blade שאתה יכול להשתמש בהם ישירות בתבניות שלך:

**וידג'ט תגובות:**

    <x-fastcomments url-id="my-page" />

**וידג'ט צ'אט חי:**

    <x-fastcomments-live-chat url-id="my-chat-room" />

**ספירת תגובות:**

    <x-fastcomments-comment-count url-id="my-page" />

כל רכיב תומך בפרופס כמו `url`, `locale`, `readonly`, `has-dark-background`, ו-`default-sort-direction`. הסקריפטים נטענים
באופן אסינכרוני ומבוטלים, כך שאתה יכול בבטחה למקם מספר ווידג'טים באותה עמודה.

### SSO אוטומטי

SSO יכול להיות מופעל עם שני משתני סביבה:

    FASTCOMMENTS_SSO_ENABLED=true
    FASTCOMMENTS_SSO_MODE=secure

ברגע שהוא מופעל, רכיבי התגובה והצ'אט החי קוראים אוטומטית את `Auth::user()` ומזריקים את העומס המכוון של SSO לתוך קונפיגורציית הווידג'ט.
משתמשים מחוברים מאומתים בצורה חלקה. אורחים רואים קישורים עבור כניסה ויציאה המוגדרים כברירת מחדל לנתיבי ה`login` ו-`logout` של Laravel שלך.

ישנן שתי דרכים לשלוט כיצד מודל המשתמש שלך מתאם לנתוני המשתמש של FastComments:

**מיפוי מבוסס קונפיגורציה** - הגדר שמות תכונות (כולל נוטציה נקודתית) או קריאות ב`config/fastcomments.php`:

```php
'user_map' => [
    'id' => 'id',
    'email' => 'email',
    'username' => 'name',
    'avatar' => 'profile_photo_url',
],
```

**מיפוי מבוסס ממשק** - יישם `MapsToFastCommentsUser` על מודל המשתמש שלך לשליטה מלאה:

```php
use FastComments\Laravel\SSO\Contracts\MapsToFastCommentsUser;

class User extends Authenticatable implements MapsToFastCommentsUser
{
    public function toFastCommentsUserData(): array
    {
        return [
            'id' => (string) $this->id,
            'email' => $this->email,
            'username' => $this->name,
            'avatar' => $this->avatar_url,
            'is_admin' => $this->hasRole('admin'),
        ];
    }
}
```

גם מצב Secure SSO (חתום ב-HMAC, מומלץ לייצור) וגם מצב Simple SSO נתמכים.

### אינטגרציית API

החבילה גם עוטפת את ה-API של FastComments עם פאסייד, הזרקת תלויות, והזרקת לקוח SDK ישירה:

```php
use FastComments\Laravel\Facades\FastComments;

// Admin API
$comments = FastComments::admin()->getComments(...);

// Public API
$counts = FastComments::publicApi()->getCommentCounts(...);

// SSO token for custom use
$token = FastComments::sso()->tokenFor($user);
```

### מושבות נתונים של האיחוד האירופי

לקוחות המשתמשים באזור האיחוד האירופי שלנו, משתנה סביבה יחיד מפעיל את כל הנקודות הקצה - ווידג'טים, קריאות API, ו-SSO:

    FASTCOMMENTS_REGION=eu

### לסיכום

אנו מקווים שהחבילה הזו מקלה עליך להוסיף FastComments לאפליקציות Laravel שלך. היא זמינה עכשיו ב-<a href="https://packagist.org/packages/fastcomments/laravel" target="_blank">Packagist</a>
והמקור נמצא ב-<a href="https://github.com/FastComments/fastcomments-laravel" target="_blank">GitHub</a>.

תודיעו לנו למטה אם יש לכם משוב!

לחיים!

{{/isPost}}

---