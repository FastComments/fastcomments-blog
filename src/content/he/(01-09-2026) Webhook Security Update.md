---
[category:אבטחה]
[category:תכונות]
[category:Webhook]
###### [postdate]
# [postlink]עדכון אבטחת Webhook[/postlink]

{{#unless isPost}}
ה-Webhooks של FastComments כוללים כעת חתימות HMAC-SHA256 לאימות מטען, בנוסף לבחירת שיטת HTTP חדשה.
{{/unless}}

{{#isPost}}

### מה חדש

בעבר הייתה חווית הגדרה קשה יותר של Webhooks בהשוואה לפלטפורמות אחרות. ראינו בכך דבר חיובי
בשל אמצעי האבטחה הנוספים הנדרשים, אך לאחרונה הגענו להסכם על מנגנון שהוא באותה מידה מאובטח
אך האבטחה היא על פי בחירה.

### התנהגות קודמת

בעבר, המערכת הייתה מעבירה את מפתח ה-API שלך במטענים וציפתה ממך לאמת אותו. אם לא חזרת על קוד שגיאה 401
למפתח API לא חוקי, המערכת לא הייתה מאפשרת הגדרה.

### התנהגות חדשה

כעת, המערכת לא תעביר מפתח API עבור תצורות webhook חדשות. במקום זאת, עבור אינטגרציות חדשות וקיימות
נכללת חתימה HMAC חתומה. ייתכן שתבחר לאמת חתימה זו, בהתאם לרמת האבטחה הנדרשת שלך.

תצורות קיימות ימשיכו להעביר את מפתח ה-API - כעת תוכל לבקש לכבות את זה באמצעות כרטיס תמיכה.

### אימות חתימת HMAC

FastComments כעת שולחת את הכותרות הבאות עם כל בקשת webhook:

| כותרת | תיאור |
|--------|-------------|
| `X-FastComments-Timestamp` | חותמת זמן של Unix (שניות) כאשר הבקשה נחתמה |
| `X-FastComments-Signature` | חתימת HMAC-SHA256 בפורמט `sha256=<hex>` |
| `token` | סוד ה-API שלך (שמור לשימור תאימות עם גרסאות קודמות) |

#### איך מחושבת החתימה

1. חיבור: `timestamp + "." + JSON_payload_body`
2. חשבון HMAC-SHA256 תוך שימוש בסוד ה-API שלך כמפתח
3. קידוד היפ Hex של התוצאה

#### דוגמת אימות (Python)

```python
import hmac
import hashlib
import time
import json

def verify_webhook_signature(headers, body, api_secret):
    timestamp = headers.get('X-FastComments-Timestamp')
    signature = headers.get('X-FastComments-Signature')

    if not timestamp or not signature:
        return False

    # אימות שהחותמת היא עדכנית
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # אימות החתימה
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### בחירת שיטת HTTP

בנוסף, כלול עם עדכון זה - עכשיו תוכל להגדיר את שיטת ה-HTTP עבור כל סוג אירוע webhook:

- **יצירת אירוע**: POST או PUT (ברירת מחדל: PUT)
- **עדכון אירוע**: POST או PUT (ברירת מחדל: PUT)
- **מחיקת אירוע**: DELETE, POST, או PUT (ברירת מחדל: DELETE)

### יתרונות אבטחה

למערכת החדשה יש כמה יתרונות:

- הגנה מפני התקפות של איש באמצע
- מניעת התקפות חזרה באמצעות אימות חותמת זמן
- גילוי חדירה במטען

### תאימות עם גרסאות קודמות

הכותרת `token` המכילה את סוד ה-API שלך עדיין נשלחת עם כל בקשה. אינטגרציות קיימות ימשיכו לפעול ללא שינוי, וכפי
שהוזכר קודם לכן תוכל לבקש לכבות את ההתנהגות הישנה באמצעות תמיכה.

### תיעוד

למידע תיעודי שלם, עיין במדריך ה-Webhooks שלנו [Webhooks Guide](https://docs.fastcomments.com/guide-webhooks.html).

### לסיכום

כמו בכל השקות הגדולות, אנו שמחים שיכולנו לקחת את הזמן לייעל, לבדוק ולשחרר את השינויים האלה כראוי. יידע אותנו
למטה אם תמצא בעיות כלשהן.

לחיים!

{{/isPost}}