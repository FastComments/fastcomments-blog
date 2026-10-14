[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]איך לבצע מעבר מ-OpenWeb ל-FastComments ב-2026[/postlink]

{{#unless isPost}}
מדריך תכונה‑ב‑תכונה עבור מפרסמים שעוברים מ‑OpenWeb (לשעבר Spot.IM): מה ממופה 1:1, מה שונה, איך ייבוא ה‑CSV עובד, איך שינויי ה‑SSO handshake, ותוכנית חיתוך שלב‑אחר‑שלב.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל מונחים טכניים

מדריך זה מיועד למנהלי מוצר והנדסה ולמנהלי קהילה שמפעילים היום את OpenWeb וזקוקים לתוכנית למעבר. הוא עובר על כל מרכיב של OpenWeb, מציין את המקבילה ב‑FastComments, ומציין במפורש היכן שאין התאמה 1:1.

### למה עכשיו

ב‑30 בספטמבר 2026 בית המשפט המחוזי בתל‑אביב ציווה על מינוי מנהל זמני על OpenWeb לבקשת המשקיע שלו, Mars Growth Capital, שמחזיק בזכות משוערת ראשונה על נכסי החברה והחשבונות ומנסה לאכוף זאת כנגד נכסי OpenWeb בישראל, חשבונות הבנק וקניין רוחני (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). מנהל זמני, Adv. Ehud Gindes, מונה ביום הבא (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). מוקדם יותר ב‑2026 מיקרוסופט, אחד מלקוחות OpenWeb הגדולים, סיימה את ההתקשרות והחזיקה בתשלומים עקב מחלוקת תנועה ש‑OpenWeb דוחה (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb אומר שהפלטפורמה ממשיכה לפעבוד. פיקוח בית המשפט, משקיע שמאכוף שעבודים על הקניין הרוחני שהווידג'ט שלכם תלוי בו, ומנהל שמטרתו לשמר ערך נכסים אינם תנאים שברצונכם כמוציאים לאור עבור מרכיב ליבה. אם עדיין לא שלפתם ייצוא נתונים מלא, עשו זאת תחילה, היום, לפני כל דבר אחר במדריך זה.

### מה אתם צריכים לפני שמתחילים

- **ייצוא ההערות של OpenWeb שלכם.** OpenWeb חושפת Export API (v4) שמייצר קבצי CSV דחוסים, עד 100,000 תגובות לכל קובץ, עם חלונות טווח תאריכים של עד חודש וקישורי הורדה שפוגים אחרי שבוע (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). בקשו כל חלון שאתם צריכים ושמרו את הקבצים במקום בטוח. אם איש הקשר שלכם ב‑OpenWeb סיפק ייצוא CSV מלוח ניהול בעבר, שמרו גם אותו. המייבא של FastComments קורא את CSV של OpenWeb עם עמודות כגון `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` ו‑`url`.
- **מזהה ה‑Spot שלכם ורשימת מזהי הפוסטים.** כל `data-post-id` שאתם מעבירים למפעיל הופך למזהה URL של FastComments. אם מזהי הפוסטים שלכם הם מזהי מאמרים במערכת ניהול תוכן, ציינו איך הם נוצרו כדי שתוכלו להפיק את אותם ערכים בצד FastComments.
- **רשימת משתמשי ה‑SSO שלכם.** במיוחד ערכי `primary_key` ו‑`user_name` שהרשמתם ב‑OpenWeb. מחבריות ההערה מתואמת על שם משתמש במהלך הייבוא, ולכן עליכם להעביר את אותם שמות משתמש במטען ה‑SSO של FastComments.
- **רשימת המנהלים שלכם והתפקידים.** חשבונות מנהל, מודרטור ועיתונאי, ואילו חלקים כל אחד מנהל.
- **תצורת המודרציה שלכם.** מדיניות אתר רחבה (אישור הכל, פרסום ומודרציה, דרישת אישור), חריגות למאמר, רשימת מילים מוגבלות, משתמשים מושתקים וחסומים.
- **CSS מותאם אישית והגדרות נושא.** ייצאו כל מה שיש לכם בלוח ניהול כדי שתוכלו לבנות זאת מחדש בעמוד התאמה של וידג'ט FastComments.
- **היכן המפעיל נמצא בתבניות שלכם**, כולל כל דפים שמריצים Reactions, Topic Tracker, Spotlight, פעמון ההתראות או מודעה נפרדת ללא שיחה.

### מיגרציה בעזרת AI

FastComments מספקת [LLM Kit ו‑MCP server כדי לזרז את המיגרציה](https://docs.fastcomments.com/guide-llm-kit.html).

### איך מזהי הפוסטים של OpenWeb ממופים למזהי URL של FastComments

FastComments מקשר שרשור תגובות ל‑`urlId`. כברירת מחדל מזהה ה‑URL הוא כתובת הדף המנוקה, אך ניתן להגדיר אותו לכל מחרוזה, וזה בדיוק מה שהמייבא של OpenWeb עושה: הוא קורא את עמודת `post_id` ומשתמש בו כמזהה URL של FastComments לכל תגובה במאמר זה. הוא גם שומר את עמודת `url` ככתובת תצוגה כך שקישורי מודרציה והודעות אימייל מצביעים על העמוד הנכון.

כך שהכלל לתבניות שלכם הוא: בכל מקום שהעברת `data-post-id="POST_ID"` ו‑`data-post-url="ARTICLE_URL"` ל‑OpenWeb, העבירו `urlId: 'POST_ID'` ו‑`url:'ARTICLE_URL'` ל‑FastComments. שרשורים מיובאים מתיישרים עם שרשורים חיים ללא הפניות מחדש וללא כתיבת URL מחדש. ראו <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">תיעוד מזהה ה‑URL</a>.

אם אתם מעדיפים למפתוח שרשורים לפי URL במקום לפי מזהה פוסט, ייבאו תחילה ואז השתמשו בכלי Migrate Comments תחת Manage Data כדי להעביר שרשורים ממזההפוסט ל‑URL במרוכז.

### מפת התכונות

<div class="pretty-table wide-table">

| OpenWeb | FastComments | הערות |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | חיה כברירת מחדל. תגובות חדשות מתכנסות מאחורי כפתור "הצג N תגובות חדשות", או מופיעות מיידית עם `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | הייבוא משמר `likes_count` ו‑`dislikes_count`. סגנון לבבות ו‑"השבת הצבעה" הם אפשרויות תצורה. |
| Reactions (article-level icons) | Page Reacts | סט אייקונים ניתן להגדרה על העמוד, נשמר לכל משתמש. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` מגביל את העומק. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` מגדיר את ברירת המחדל לכל אתר או לתבנית URL. |
| User profiles | User profiles | או פרופילי משתמש: אווטר, ביוגרפיה, תגיות, קארמה, פעילות, הודעות פרטיות. עובד למשתמשי SSO. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | מוגדר במטען ה‑SSO. אין צורך בקריאת backend. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | מודרטורים מצמידים מהוידג'ט או מהלוח. תבנית סוכן AI מצמידה תגובות עם הצבעות גבוהות. |
| In Conversation Polls | Polls on comments | 2 עד 10 אפשרויות, תאריכי סגירה, מצבי פרטיות, הגבלות יוצר. |
| Ask Me Anything formats | No dedicated product | פועל כשרשור עם משתמש SSO של המחבר מתויג והשאלה מוצמדת. |
| Live Blog | No 1:1 equivalent | קיימים וידג'ט Live Chat והודעות במצב צ'אט. בלוגינג עריכתי חי נשאר במערכת ניהול התוכן שלכם. |
| Topic Tracker (follow topics and authors) | Page subscriptions | משתמשים עוקבים אחרי עמוד, לא אחרי נושא או מחבר. אין מעקב חוצה מאמרים. |
| Notification Bell | Notification bell in the widget | פעמון התראות בוידג'ט: תגובות, אזכורים, פעילות שרשור, הצבעות, מנויים, תגיות, הודעות פרטיות. |
| Email notifications | Email notifications with templates | אפשרות בחירה לכל משתמש דרך דגלי SSO. תבניות מותאמות, שולח ממותג. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC-SHA256 payload) | אין קריאת register-user. חותמים payload בצד השרת, מעבירים לוידג'ט. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | אותו payload. ה‑backend שלכם חותם אותו לאחר שהמשתמש מחובר. |
| Identity (OpenWeb registration screens) | Magic-link login, Simple SSO | קוראים נכנסים עם קישור אימייל. ללא סיסמאות. |
| Moderation policy per article | Customization rules per URL ID pattern | מצב אישור, מסנן ספאם ועוד משתנים לפי תבניות `*/section/*`. |
| Aida AI moderation | Spam classifiers, LLM based filters, image moderation, AI Agents | סוכנים מתחילים במצב dry run ויכולים לדרוש אישור אנושי. |
| Restricted words | Word blacklist customizable by locale | כ‑450 ביטויים ברירת מחדל, ניתנים לעריכה. |
| User muting | Block User | חסימת משתמש לכל קורא מתפריט ההערה. |
| Bans | Bans | קבועים, מתוזמנים, צל, מוצפנים IP, מודעים לכינוי נוסף. |
| Moderation Panel | Moderate Comments dashboard | מסננים, פעולות מרובות עם ביטול, קבוצות מודרציה, אימיילים מסוכמים עם אישור בלחיצה אחת. |
| Notification Webhook | Webhooks | תגובה נוצרה, עודכנה, נמחקה. אין webhook התראות לכל משתמש. |
| Engagement dashboard | Analytics | משתמשים חיים מקוונים, דפים מובילים, טעינת דפים, תגובות, הצבעות, חשבונות לפי יום. אין דיווח על הכנסות מפרסומות. |
| In-conversation ads, Standalone Ad | None | FastComments לא מריץ פרסומות. אתם שומרים את ערמת הפרסומות שלכם סביב הוידג'ט. |
| Social Reviews (star ratings) | Ratings and Reviews | מוצר נפרד באותו חשבון. |
| Popular in the Community | Recent Discussions and Top Pages widgets | חזרה על תוכן מונעת על ידי פעילות תגובות. |
| Comment Counter | Comment count widgets | יחיד ורב. |
| Export Comments API | CSV export, API, webhooks | ייצוא מהלוח בכל זמן. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com שומר נתונים באיחוד. DPA זמין. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | UI מקורי, SSO, עדכונים חיים, שרשור, פעולות מודרציה. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` ו‑`destroy()` ל‑SPA. |

</div>

שארגז זה עובר על כל קבוצה בפירוט.

### שיחה, הצבעות ותגובות

OpenWeb's Conversation הוא שרשור בזמן אמת. וידג'ט התגובות של FastComments הוא גם כן: תגובות, עריכות, מחיקות, הצבעות ופעולות מודרציה נדחפות לכל הצופים בשרשור (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). כברירת מחדל תגובות חדשות מאנשים אחרים מופיעות מאחורי כפתור "הצג 2 תגובות חדשות" כדי שהדף לא יקפץ תחת הקורא. לאירועים חיים קבעו `showLiveRightAway` כך שהם מוצגים מייד, ו‑`newCommentsToBottom` אם אתם רוצים שהם יזרמו למטה כמו צ'אט.

לייקים ושנואים הופכים להצבעות למעלה ולמטה. המייבא שומר את שני הספירות לכל תגובה. אם הקהילה שלכם רגילה ללייק יחיד, החליפו את סגנון ההצבעה ללבבות בעמוד התאמת הוידג'ט. ניתן גם לכבות הצבעה לחלוטין.

OpenWeb Reactions הוא וידג'ט נפרד עם שני עד ארבעה אייקונים מתוייגים על המאמר (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). המקבילה ב‑FastComments היא Page Reacts: סט תמונות תגובה שניתן להגדיר לוידג'ט התגובות, נשמר לכל עמוד ולכל משתמש (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). ספירות תגובות אינן חלק מייצוא ההערות של OpenWeb, ולכן הן מתחילות מאפס.

מיון ממופה ישירות. ערכי `data-sort-by` של OpenWeb – best, newest, oldest – תואמים ל‑Most Relevant, Newest First ו‑Oldest First. קבעו ברירת מחדל עם `defaultSortDirection` (`MR`, `NF`, `OF`) בקוד או בכללון התאמה. קוראים יכולים להחליף בוידג'ט.

`data-read-only="true"` הופך ל‑`readonly: true`, שחוסם תגובות חדשות, הצבעות, עריכות ומחיקות. ל‑`data-post-staleness-days` אין מקבילה ישירה, אך כלל התאמה יכול להחיל `readonly` לתבנית מזהה URL, ואתם יכולים גם להפוך זאת בתבניות שלכם לפי גיל המאמר. `data-messages-count` הוא גודל העמוד, מוגדר בעמוד התאמת הוידג'ט בין 10 ל‑200 תגובות.

### תגובות ושרשור

FastComments תומך בעומק בלתי מוגבל כברירת מחדל; `maxReplyDepth` מגביל אותו (`1` נותן מבנה שני-רמות שטוח). קובץ CSV של OpenWeb כולל עמודות `parent_id` ו‑`parent_comment_id`. המייבא קורא `parent_comment_id` ובונה מחדש את עץ התגובות בעומק מלא, כך שתגובה לתגובה נשארת משורשרת תחת ההורה הישיר, עם מחבר, חותמת זמן, הצבעות, ספירת דגלים ומצב אישור שלם. תגובות מקושרות גם כאשר הן מופיעות לפני ההורה בקובץ, או כאשר ההורה יובא מחלון ייצוא קודם. תגובה שההורה שלה חסר מכל ייצוא הופכת לתגובה ברמה העליונה. מזהה ההודעה של OpenWeb נשמר על כל תגובה, כך שייבוא חוזר של ייצוא ישן משלב אותו במקומו.

### פרופילי משתמש ותגיות

משתמשי FastComments, כולל משתמשי SSO, מקבלים פרופיל עם אווטר, שם תצוגה, ביוגרפיה, קישורים חברתיים, תגיות, קארמה, ספירת תגובות, פיד פעילות ציבורי, והודעות פרטיות (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). כל אחד משטחי הפעילות, תגובות פרופיל והודעות DM ניתן לכבות לכל משתמש במטען ה‑SSO או גלובלית בתצורה.

תג המחבר של OpenWeb דורש קריאה ל‑`GET /sso/v1/user/{primary_key}` עבור המחבר והצבת ה‑ID המוחזר ב‑`data-author-id`. ב‑FastComments אתם מגדירים `displayLabel: 'Author'` (או כל תווית עד 100 תווים) במטען ה‑SSO של המשתמש, ו‑`isAdmin` או `isModerator` לצוות. התווית מוצגת לצד שמו בכל תגובה. למערכת עשירה יותר, קבעו תגיות תחת Customize, Badges: תמונה או תגיות טקסט, מוענקות אוטומטית על ספים (ספירת תגובות, הצבעות למעלה, תגובות מוצמדות, סטטוס ותיק, מהירות תגובה) או ידנית, וניתן להקצות מהמטען SSO עם `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### תגובות מוצמדות, סקרים ושאלות ותשובות

כל מודרטור יכול להצמיד או להסיר הצמדה של תגובה מתפריט ההערה בוידג'ט או מלוח המודרציה. תגובות מוצמדות נדחפות חיות לכל הצופים בשרשור. אם אתם רוצים זאת באופן אוטומטי, תכונת סוכני AI משחררת תבנית Top Comment Pinner שמצמידה תגובות ברמה העליונה ברגע שהיא חוצה סף הצבעות (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

סקרים בתוך השיחה של OpenWeb מאפשרים לצוות לצרף סקר של 2 עד 4 אפשרויות לתגובה ברמה העליונה. סקרים של FastComments גם מצורפים לתגובה, עם 2 עד 10 אפשרויות, תאריך סגירה אופציונלי, פרטיות תוצאות (אנונימי, מנהלים בלבד, כולם), ומצב "הצבע כדי לראות תוצאות". אתם בוחרים מי יכול ליצור סקרים (מושבת, מנהלים ומודרטורים, כולם) והאם קוראים אנונימיים יכולים להצביע. סקרים חשופים גם ב‑API הציבורי ליצירתם ממערכת ניהול התוכן שלכם.

OpenWeb הריץ פורמט Ask Me Anything בפלטפורמה שלו. ל‑FastComments אין מוצר Q&A נפרד. ההחלפה המעשית היא שרשור רגיל ב‑URL ID ייעודי: משתמש ה‑SSO של האורח נושא `displayLabel`, אתם מצמידים את תגובת ההקדמה, קוראים שואלים בתגובות ברמה העליונה, האורח משיב בשרשור, וההתראות על תגובה והזכרת משתמש מחזירות אנשים חזרה. קבעו `noNewRootComments` אחרי סגירת החלון כך שרק תגובות ימשיכו.

Community Spotlight (איסוף אימיילים, מונה וכרטיסי הפנייה של OpenWeb) אין לו מקבילה. הוידג'ט תומך ב‑HTML כותרת מותאם אישית מעל קלט ההערה דרך `headerHTML`, שמספק קריאה לפעולה אך לא טופס לכידת אימייל.

### Live Blog

אין Live Blog ב‑FastComments. Live Blog של OpenWeb הוא מוצר עריכה: מדווחים המוקצים בלוח ניהול מפרסמים עדכונים עם קישורים משובצים, ציוצים ווידאו, וקוראים עוקבים (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

מה ש‑FastComments מציע לכיסוי חי הוא צד הקורא: וידג'ט Live Chat (`embed-live-chat.min.js`) לשידור צ'אט, וידג'ט התגובות במצב צ'אט (`showLiveRightAway` בתוספת `newCommentsToBottom`) לצד הכיסוי החי שלכם. עבור העדכונים הערכתיים עצמם, מפרסמים שעוברים מ‑OpenWeb משאירים אותם במערכת ניהול התוכן שלהם או בכלי Live Blog ייעודי ומשלבים FastComments למטה לדיון. הטמעת מדיה (YouTube, SoundCloud ואחרים) נתמכת בתוך תגובות, כך שהעדכונים של הצוות המתפרסמים כתגובות נושאים מדיה עשירה.

### מעקב נושאים, התראות ודוא"ל

מעקב נושאים של OpenWeb מאפשר לקורא לעקוב אחרי נושאים ומחברים שנלקחים ממטא‑דאטה של העמוד ולקבל התראה כשמאמרים חדשים תואמים (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). ל‑FastComments אין נושא או מעקב אחר מחבר חוצה מאמרים. קוראים מנויים לעמוד דרך פעמון ההתראות ומקבלים עדכונים לשרשור זה, עם תדירות שנבחרת לפי מנוי: כל דקה, תקציר שעתי או תקציר יומי. אם מעקב חוצה מאמרים חשוב למספרי השימור שלכם, הודיעו לנו כי תכונה זו נמצאת במפת הדרכים שלנו.

כל שאר הפונקציות בפעמון ההתראות ממופות. הוידג'ט כולל פעמון שמתחיל אדום עם ספירת הלא‑נקראו ומציג: תגובות אליכם, תגובות בשרשור שהגבתם בו, אזכורים, הצבעות על תגובותיכם, פעילות בעמודים מנויים, תגיות, הודעות פרטיות (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). התראות באפליקציה הן בזמן אמת דרך WebSocket. אימיילי תגובה והזכרת נשלחים כל דקה עבור תגובות מאושרות בלבד.

למשתמשי SSO, העבירו `optedInNotifications` ו‑`optedInSubscriptionNotifications` במטען וה‑FastComments יעדכן את ההעדפות שלהם בטעינת העמוד הבאה. אימיילים דורשים כתובת אימייל במטען. תבניות אימייל ניתנות לעריכה לפי סוג ולפי אזור תחת Customize, Email Templates, ושליחה מהדומיין שלכם עם DKIM נתמכת. מודרטורים ומנהלים מקבלים תקציר יומי, שבועי או חודשי עם אפשרות לאשר בלחיצה אחת, להגיב ולסמן ספאם.

Webhook ההתראות של OpenWeb מפרסם אירועי התראה לכל משתמש (`replied-message`, `liked-message`, `topic-by-keyword` וכו') ל‑endpoint שלכם. Webhooks של FastComments מכסים את משאב ההערה: נוצר, עודכן, נמחק, עם כמה שיותר endpoints מנויים שתרצו (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). אם השתמשתם ב‑webhook ההתראות כדי להזרים למערכת האימייל שלכם, תצטרכו לבנות מחדש את הלוגיקה על אירועי תגובה, או לאפשר ל‑FastComments לשלוח את האימיילים.

### SSO: מקודA/קודB ל‑Payload חתום

החלפת SSO של OpenWeb כוללת שישה שלבים: המתן ל‑`spot-im-api-ready`, OpenWeb מייצר `codeA`, הלקוח שלכם שולח אותו ל‑backend, ה‑backend מאמת את המשתמש וקורא `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb מחזיר `codeB`, והלקוח שלכם מחזיר `codeB` ל‑OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). קריאת יציאה `window.SPOTIM.logout()`.

Secure SSO של FastComments אינו דורש סיבוב ואין נקודת קצה חדשה בצד שלכם. כאשר אתם מציגים את העמוד למשתמש מחובר, ה‑backend שלכם מסרק את המשתמש, מקודד Base64, וחותם עם HMAC‑SHA256 בעזרת סוד ה‑API שלכם. הוידג'ט שולח את המטען עם הבקשות ו‑FastComments מאמתת את החתימה (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). ב‑Node:

<div class="code">    const crypto = require('crypto');
    const user = {
        id: 'your-primary-key',          // same value you used as primary_key with OpenWeb
        email: 'reader@example.com',
        username: 'reader',              // same user_name you registered with OpenWeb
        displayName: 'Reader Name',
        avatar: 'https://example.com/avatars/reader.png',
        displayLabel: 'Subscriber',      // optional, replaces the Author Badge lookup
        optedInNotifications: true
    };
    const userDataJSONBase64 = Buffer.from(JSON.stringify(user)).toString('base64');
    const timestamp = Date.now();
    const verificationHash = crypto
        .createHmac('sha256', process.env.FASTCOMMENTS_API_SECRET)
        .update(timestamp + userDataJSONBase64)
        .digest('hex');
    // Render into the page config:
    // sso: { userDataJSONBase64, verificationHash, timestamp,
    //        loginURL: 'https://example.com/login', logoutURL: 'https://example.com/logout' }
</div>

הטיימסטמפ הוא באפוק זמן במילישניות ונדחה אם הוא יותר משני ימים. עבור קורא לא מחובר, השמיטו את שלושת השדות החתומים והעבירו רק `loginURL` (או פונקציית `loginCallback`) והוידג'ט יציג בקשת התחברות במקום מחבר.

דוגמאות מלאות עובדות ב‑Node, Java ו‑PHP נמצאות במאגר <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">קוד לדוגמא</a>.

משתמשים נוצרו בטעינת העמוד הראשונה. אתם לא רושמים משתמשים במרוכז. מכיוון שהמייבא של OpenWeb מתאם מחברי תגובות לפי `user_name`, משתמש שה‑payload של SSO שלו נושא את אותו `username` תופס את ההערות המיובאות בפעם הראשונה שהוא טוען שרשור ויכול לערוך או למחוק אותן משם והלאה. יש גם API למשתמשי SSO אם תרצו ליצור משתמשים מראש.

בכל פעם שה‑payload נשלח, FastComments מעדכן את רשומת המשתמש ממנו, כך ששינוי שם תצוגה או אווטר בצד שלכם מתפשט בטעינת העמוד הבאה. קבעו שדה ל‑`null` כדי לנקותו.

אם השתמשתם ב‑SSO של צד שלישי של OpenWeb עם Auth0, Gigya או Piano דרך `window.SPOTIM.startSSOForProvider`, זרימת FastComments זהה: לאחר שהספק שלכם מאמת את המשתמש, ה‑backend שלכם בונה וחותם את המטען. אין אינטגרציה ספציפית לספק שיש להגדיר בצד FastComments.

שתי אפשרויות נוספות קיימות. SSO פשוט מעביר את אובייקט המשתמש ללא חתימה מהלקוח, לפלטפורמות ללא backend, ומסמן פעילות כאמתית כאשר יש אימייל (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 חותם את הצוות שלכם בלוח הבקרה של FastComments דרך Okta, Azure AD או ADFS, עם מיפוי תפקידים, וזמין בתוכניות Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### מודרציה

API מדיניות מודרציה לכל מאמר של OpenWeb כולל ארבע ערכים: `spot_policy`, `approve_all`, `publish_and_moderate` ו‑`require_approval`. FastComments מגדיר את אותם התנהגויות בהגדרות מודרציה: אישור אוטומטי מופעל או כבוי, דרישת אישור רק לתגובה הראשונה של משתמש, ואישור אוטומטי רק לתגובות מאומתות (מחוברות או SSO). כללים חלים על כל האתר או על תבנית מזהה URL כגון `*/politics/*`, כך שאתם משחזרים מדיניות לפי חלק. כל תגובה, מאושרת או לא, מגיעה ללוח Moderate Comments, כך שמודל פרסום‑ואחר‑בדיקה הוא ברירת המחדל שם (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

הייבוא מעביר את מצב המודרציה. `message_status` של OpenWeb עם ערך `approved` מיובא כמאושר ונסקר; `rejected` מיובא כספאם ונסקר; כל ערך אחר מיובא כלא מאושר ובלתי נסקר כך שהוא מופיע בתורמת המודרציה שלכם. `reports_count` הופך לספירת דגלים של התגובה.

מודרציה אוטומטית ב‑FastComments משולבת ולא מערכת יחידה כמו Aida:

- מסווג ספאם, מאומן באופן רציף, זמין כמודל משותף לכל השוכרים או מבודד לשוכר שלכם, עם גורם אמון שמרפה סינון למשתמשים ותיקים או מצביעים תדירים.
- בדיקת ספאם LLM אופציונלית בחשבון Flex (מודלים פתוחים כמו GLM-5.3 זמינים)
- מודרציית תוכן תמונה ברגישות נמוכה, בינונית או גבוהה לתמונות שהועלו.
- רשימת שחור מקומית של כ‑450 ביטויים ברירת מחדל, ניתנת לעריכה, שמסתירה התאמות עם כוכביות. כאן נכנסות המילים המוגבלות שלכם מ‑OpenWeb.
- סף דגלים שמסתיר תגובה אחרי N דיווחים.
- מניעת הודעות חוזרות או כמעט זהות, תמיד פעילה.
- סוכני AI: סוכנים מונעי אירוע עם רשימת כלים מפורשת (סימון ספאם, אישור, נעילה, הצמדה, אזהרה ב‑DM, איסור, הענקת תג, תגובה). כל סוכן מתחיל במצב dry run, כלים רגישים יכולים להיות מגודרים על ידי אישור אנושי, וכל פעולה מתועדת עם נימוק וציון רמת ביטחון.

API השתקת משתמש של OpenWeb מאפשר למשתמש SSO אחד להשתיק אחר. המקבילה ב‑FastComments היא Block User בתפריט ההערה, זמינה לכל קורא מחובר. איסורים הם פעולה של מודרטור: קבועים או לתקופה, אפשרי איסור צל (המשתמש רואה את תגובתו אך אחרים לא), אפשרי לפי IP מוצפן, עם תוספת אליאס של אימייל שנחשב ככתובת אחת. רשימת המשתמשים החסומים ניתנת לחיפוש לפי אימייל, שם, מודרטור והתגובה שהביאה לאיסור.

לוח Moderate Comments תומך במסננים (דורש סקירה, דורש אישור, ספאם, מדוגל, ממשתמשים חסומים) וחיפוש טקסט, פעולות מרובות עם ביטול והשהייה, "בחר את כל המתאימים" לתורים גדולים מאוד, קבוצות מודרציה כך שהצוות הספורט שלכם רואה רק שרשורים ספורט, יומני תגובה שמציגים מדוע אימייל נשלח או לא, וקישורים מסוננים שניתנים לשיתוף. מודרטורים רואים רק את הלוח; הם אינם יכולים לשנות הגדרות או לייבא נתונים.

### אנליטיקה

FastComments Analytics מציג משתמשים מקוונים כעת ברחבי האתרים שלכם ולפי דף, דפים מובילים לפי תגובות או לפי משתמשים חיים, וסדרה יומית לטעינת דפים, תגובות, הצבעות, וחשבונות שנוצרו (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). סטטיסטיקות מודרטורים נפרדות. הספירות קרובות בזמן אמת, מעוכבות לכל היותר דקה, וכל טעינת דף נספרת ולא מדגם.

לא תמצאו כאן דבר על מילוי מודעות, CPM או הכנסות, מכיוון שאין מודעות. אם לוח המחוונים של OpenWeb היה מקור לדיווח על מעורבות‑להכנסה, הדיווח הזה יעבור לערמת המודעות שלכם.

### מוניטיזציה

OpenWeb מציב מודעות בתוך ומסביב ל‑Conversation ומציע יחידת Standalone Ad, עם קמפיינים שנקבעים דרך איש הקשר שלכם ב‑OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments אינו מריץ מודעות בוידג'ט, אינו מרוויח משותף רווחים, ואינו טוען סקריפטים של מודעות או מעקב של צד שלישי. הוידג'ט הוא iframe שאתם ממקמים; משבצות המודעות מעל ומתחתיו הן שלכם ומופעלות דרך מה שכבר משתמשים.

המסחר הוא מפורש: אתם מאבדים את מה ש‑OpenWeb שילם לכם, ומקבלים עלות קבועה, צפויה וידג'ט שלא מוסיף בקשות מודעה לעמוד שלכם. המותג מוסר בתוכניות Flex ו‑Pro, ולבנה לבן זמינה בתוכניות Pro ו‑Enterprise.

### ייצוא נתונים ופרטיות

כל ייצואי נתוני תגובות מהלוח של FastComments כ‑CSV בכל זמן, עם תאריכים בפורמט UTC ISO, והנתונים זהים זמינים דרך ה‑API. Webhooks מכסים סינכרון מתמשך. קבצי ייבוא נמחקים מ‑FastComments ברגע שהייבוא מסתיים.

ל‑GDPR ו‑CCPA, OpenWeb מספק API ייצוא ומחיקה שבו תגובות של משתמשים מחוקים נשארות מצורפות לחשבון אורח אקראי (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments תומך בבקשות ייצוא ומחיקת נתונים, מציע הסכם עיבוד נתונים, ומריץ פריסה נפרדת באירופה ב‑<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> עם נתונים משוכפלים רק בנקודות נוכחות באיחוד. צרו חשבון שם אם הקוראים שלכם באירופה. באיזור EU, איסורי סוכן AI תמיד דורשים אישור אנושי כדי לעמוד ב‑Article 17 של DSA.

נתוני תגובות בפריסה גלובלית משוכפלים בין אזורים כולל צומת סינגפור, והוידג'ט מוגש מ‑DNS ו‑CDN של FastComments. סקריפט ההטמעה הוא כ‑35kb דחוס על הקו.

### SDKs למובייל

OpenWeb משגר SDKs ל‑Android, iOS ו‑React Native עם Conversation, Articles, Authentication, Notifications, Reactions ו‑In Conversation Polls. FastComments משגר ספריות <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> ו‑<a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> עם תגובות משורשרות, עדכונים חיים דרך WebSocket, Secure SSO, הצבעה, אזכורים, העלאת תמונות, פעולות מודרציה (דגל, הצמדה, נעילה, חסימה), ערכת נושא, מצב Live Chat ורכיב פיד חברתי. אזור EU הוא דגל תצורה. אין SDK מודעות נפרד מכיוון שאין מודעות.

### הטמעה ואינטגרציה עם SPA

המפעיל והקונטיינר של OpenWeb:

<div class="code">    &lt;script async src="https://launcher.spot.im/spot/SPOT_ID" data-spotim-module="spotim-launcher"&gt;&lt;/script&gt;
    &lt;div data-spotim-module="conversation"
         data-post-id="POST_ID"
         data-post-url="ARTICLE_URL"
         data-article-tags="TOPIC1, TOPIC2"&gt;&lt;/div&gt;
</div>

המקבילה ב‑FastComments:

<div class="code">    &lt;script async src="https://cdn.fastcomments.com/js/embed-v2-async.min.js"&gt;&lt;/script&gt;
    &lt;div id="fastcomments-widget"&gt;&lt;/div&gt;
    &lt;script&gt;
        window.fcConfigs = [{
            target: '#fastcomments-widget',
            tenantId: 'YOUR_TENANT_ID',
            urlId: 'POST_ID',        // was data-post-id
            url: 'ARTICLE_URL',      // was data-post-url
            pageTitle: 'Article title'
        }];
    &lt;/script&gt;
</div>

מזהה השוכר שלכם נמצא ב<a href="https://fastcomments.com/auth/my-account/api-secret" target="_blank">דף האישורים</a> ברגע שיש לכם חשבון. `data-article-tags` אין לו מקבילה מכיוון שאין מעקב נושא; hashtags בתוך תגובות הם תכונה שונה.

לגלילה אינסופית ויישומי עמוד יחיד, גישת Virtual Pages של OpenWeb היא קונטיינר אחד לכל מאמר. ב‑FastComments אתם קוראים `FastCommentsUI(element, config)` לכל שרשור ולאחר מכן `instance.update(newConfig)` להחלפת מזהה URL או `instance.destroy()` להסרה (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). ספריות React, Vue, Angular ו‑SolidJS מטפלות בזה כאשר פרופ ה‑config משתנה. קריאות חיי‑מחזור (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) מחליפות את אירועי DOM `spot-im-*` שהייתם מאזינים להם.

ספירות תגובות בעמודי אינדקס משתמשות בוידג'ט ספירת תגובות, יחיד או מרובה. עבור SEO, תגובות מוצגות ישירות בעמוד למנועי חיפוש במקום בתוך iframe, כך שאין קריאת API SEO לתצורה.

### חיתוך שלב‑אחר‑שלב

**1. צור את החשבון והגדר את היסודות.** הירשמו ב‑fastcomments.com או eu.fastcomments.com. קבעו את הגדרות המודרציה, רשימת מילים חסומות, סגנון הצבעה, מיון ברירת מחדל, ו‑CSS מותאם בעמוד התאמת הוידג'ט. הוסיפו מודרטורים וקבוצות מודרציה. אם יש לכם הרבה משתמשי מנהל, תמכו בייבוא שלהם עבורכם.

**2. הריצו ייבוא ראשון.** עברו ל<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, בחרו OpenWeb (.csv) והעלו. הייבוא רץ כמשימת רקע; העמוד מציג ספירת שורות ומצב, ואתם מקבלים אימייל כשזה מסתיים (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). כל תגובה שומרת את מזהה ההודעה של OpenWeb כ‑ID חיצוני, כך שהרצה חוזרת של ייבוא מעדכנת תגובות קיימות במקום ליצור כפילויות.

**3. אמתו ספירות.** השוו את ספירת השורות של המשימה עם הייצוא שלכם. פתחו כמה מזהי URL בעלי תנועה גבוהה בלוח המודרציה ובדקו מחברים, תאריכים, סך הצבעות ומצב אישור. ודאו שהתגובות שנדחו מוצגות כספאם והמתנות יושבות בתור.

**4. בנו את מטען ה‑SSO.** מימשו את קוד החתימה שלמעלה ב‑backend שלכם, תוך שימוש באותו `id` ו‑`username` שהשתמשתם ב‑OpenWeb. בדקו עם חשבון צוות בעמוד סצנריו: תגובות המיובאות של המשתמש מוצגות כשלו, ועריכה ומחיקה מופיעות בתפריט ההערה שלו.

**5. החליפו את ההטמעה בתבנית סצנריו.** החליפו את המפעיל והקונטיינר בקטע FastComments, ממפים `data-post-id` ל‑`urlId` ו‑`data-post-url` ל‑`url`. הסירו `window.SPOTIM.logout()` ומאזיני `spot-im-*`, או מיפו אותם לקריאות חזרה. החילו את ה‑CSS שלכם בכללון התאמה במקום בקוד כך שהוא נבדק בכל שחרור של FastComments.

**6. הריצו במקביל.** הציבו FastComments על חלק או אחוז מהמאמרים בעוד OpenWeb נשאר בשאר. אין צורך לשנות דבר בצד OpenWeb. עקבו אחרי תור המודרציה ואת דף האנליטיקה. קוראים שמגיבים בעמודי FastComments במהלך החלון אינם נכללים בייצוא OpenWeb שלכם, ולכן תכננו את הייבוא הסופי לפני שהם מתחילים, לא אחרי.

**7. CSP ו‑DNS.** אם אתם מריצים Content‑Security‑Policy, אפשרו `cdn.fastcomments.com` ו‑`fastcomments.com` (או `eu.fastcomments.com`) עבור `script-src`, `frame-src` ו‑`connect-src`, והסירו את ערכי `spot.im` ו‑`openweb.com` ברשימות ברגע שהמפעיל נעלם. אין שינוי ב‑DNS שלכם. אין צורך בהפניות מכיוון שמזהי ה‑URL תואמים.

**8. ייבוא סופי והפעלה.** שלפו ייצוא OpenWeb נוסף המכסה את חלון הריצה המקביל, העלו אותו (ייבוא חוזר בטוח), ואז פרסו את שינוי התבנית בכל העמודים והסירו את המפעיל, Reactions, Topic Tracker, Spotlight, פעמון והקונטיינרים של מודעות.

**9. רשימת בדיקה לפני ההפעלה.**

- תגובות חיות נראות במאמר ייצור משני דפדפנים.
- התחברות SSO, התנתקות והוספת תגובה תחת חשבון מנוי אמיתי.
- מודרטורים מקבלים את התקציר ויכולים לאשר ממנו.
- אימיילי תגובה והזכרת מגיעים וקושרים לדף הנכון.
- רשימת איסורים ורשימת מילים חסומות מלאה.
- Page Reacts וספירות תגובות מוצגות במקום Reactions והמונה שהיה.
- דוחות CSP נקיים.
- השוואת ספירת תגובות אחרונה בין הייצוא שלכם ללוח.

### מה אתם מאבדים ומה שונה

להיות ישיר לגבי הפערים:

- **Live Blog.** אין מקבילה. שמרו זאת במערכת ניהול התוכן שלכם או בכלי Live Blog והציבו FastComments מתחתיו.
- **Topic Tracker.** אין מעקב חוצה מאמרים אחרי נושא או מחבר. רק מנויים לעמודים.
- **Community Spotlight.** אין מוצר כרטיס CTA. `headerHTML` נותן לכם הודעה מעל המלחנה, לא טופס לכידת אימייל.
- **Ad revenue.** אין. הוידג'ט חופשי מפרסומות בתכנון.
- **Notification webhook.** Webhooks מתמקדים באירועי תגובה, לא באירועי התראה לכל משתמש.
- **Reactions history.** ספירות תגובות ברמת המאמר אינן בייצוא והן מתחילות מאפס. אנחנו יכולים לעתים לגרד את אלו מהאתר שלכם.
- **Polls history.** הגדרות סקרים והצבעות אינן בייצוא; טקסט הסקר מיובא, הסקר עצמו לא. אנחנו יכולים לעתים לגרד את אלו מהאתר שלכם.
- **Login model.** קוראים ללא SSO נכנסים בקישור קסם במקום סיסמה או כפתור רשת חברתית כברירת מחדל.
- **Human moderation staff.** OpenWeb מספק צוות מודרציה עם Aida. FastComments מספק כלים, מסווגים וסוכנים; האנשים הם שלכם.

מה שאתם מרוויחים, באותו רוח: וידג'ט שמוסיף סקריפט קטן ולא מבקש בקשות מודעה, מודרציה שאדם אחד יכול לנהל לאתר גדול עם פעולות מרובות וסוכנים, SSO שהוא פונקציית חתימה ולא פרוטוקול, וספק שלא נמצא תחת פיקוח בית משפט.

### לוח זמנים והצעת ייבוא חינם

תכננו שבוע עד שבועיים עבור מפרסם עם אינטגרציית SSO אחת ומאות אלפי תגובות: יום או יומיים על הייצוא והייבוא הראשון, כמה ימים על SSO ותבניות, חלון ריצה מקביל, ואז הייבוא הסופי והמעבר. הפלטפורמה כבר תומכת בקנה זה: United Cloud מריץ יותר מעשר פורטלים ומיליוני תגובות ב‑FastComments, ו‑itsfoss.com העביר היסטוריית 88,000 תגובות מספק אחר דרך ייבוא עצמי זהה.

FastComments מייבא את ייצוא ה‑CSV של OpenWeb בחינם, מסייע לכם להריץ OpenWeb ו‑FastComments במקביל במהלך החיתוך, ועוזר במיגרציה עצמה, כולל שרשור ושאלות התאמת משתמשים. תוכניות Enterprise כוללות SLA של 99.99% ותמיכה בתגובות תוך שעה במהלך שעות עבודה. תמחור Flex מבוסס שימוש זמין לאתרים שרוצים להתחיל ללא חוזה.

<a href="https://fastcomments.com/contact-us">כתבו לנו</a> עם גודל הייצוא שלכם והגדרת ה‑SSO שלכם ונחזור אליכם עם תוכנית.

### לסיכום

הורידו את הייצוא שלכם היום. זכרו: מזהי הפוסטים הופכים למזהי URL, מצב המודרציה מועבר, וההטמעה היא החלפה ישירה. המקומות שבהם FastComments שונה מפורטים למעלה כדי שתוכלו להחליט עם העובדות מולכם. :)

תודה!

{{/isPost}}

---