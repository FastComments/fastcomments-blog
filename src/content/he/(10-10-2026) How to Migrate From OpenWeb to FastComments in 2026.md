[category:Migration]
[category:Tutorials]

###### [postdate]
# [postlink]כיצד לבצע מעבר מ-OpenWeb ל-FastComments ב-2026[/postlink]

{{#unless isPost}}
מדריך תכונה‑ב‑תכונה למוציאים לאור שעוברים מ‑OpenWeb (לשעבר Spot.IM): מה ממופה 1:1, מה שונה, איך פועל ייבוא ה‑CSV, איך שינויי ה‑SSO מתבצעים, ותוכנית חיתוך שלב‑אחר‑שלב.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> מאמר זה מכיל מונחים טכניים

המדריך מיועד למנהלי מוצר והנדסה ולמנהלי קהילה שמפעילים היום את OpenWeb וזקוקים לתוכנית מעבר. הוא עובר על כל משטח של OpenWeb, מציין את המקבילה ב‑FastComments, ומבהיר במפורש היכן שאין התאמה 1:1.

### למה עכשיו

ב‑30 ספטמבר 2026 בית המשפט המחוזי בתל אביב ציווה על מינוי מנהל זמני על OpenWeb לבקשת המשקיע שלו, Mars Growth Capital, שמחזיק בעיקול ראשוני על נכסי החברה והחשבונות ומנסה לאכוף אותו כנגד נכסי OpenWeb בישראל, חשבונות בנק וקניין רוחני (<a href="https://www.calcalistech.com/ctechnews/article/aaji32ku3" target="_blank">Calcalist, Sept 30</a>). מנהל זמני, עו"ד אהוד גינדס, מונה ביום שלמחרת (<a href="https://www.calcalistech.com/ctechnews/article/rmmk2cphu" target="_blank">Calcalist, Oct 4</a>). בתחילת 2026 מיקרוסופט, אחד מלקוחות OpenWeb הגדולים, סיימה את ההתקשרות והחזיקה בתשלומים עקב מחלוקת תעבורה ש‑OpenWeb דוחה (<a href="https://www.calcalistech.com/ctechnews/article/s1kfnxo5mx" target="_blank">Calcalist, Sept 28</a>).

OpenWeb אומר שהפלטפורמה ממשיכה לפעול. פיקוח בית משפט, משקיע שמאכוף עיקולים על הקניין הרוחני שהווידג'ט שלכם תלוי בו, ומנהל זמני שמטרתו לשמר ערך נכסים אינם תנאים שמוציא לאור רוצה תחת משטח ליבה. אם עדיין לא ביצעתם ייצוא מלא של הנתונים, עשו זאת תחילה, היום, לפני כל דבר אחר במדריך זה.

### מה אתם צריכים לפני שמתחילים

אספו את הדברים הבאים לפני שמגעים בקוד:

- **ייצוא התגובות שלכם מ‑OpenWeb.** OpenWeb מציע API ייצוא (v4) שמייצר קבצי CSV דחוסים, עד 100,000 תגובות לכל קובץ, עם חלונות טווח תאריכים של עד חודש וקישורי הורדה שפוגים אחרי שבוע (<a href="https://developers.openweb.com/docs/export-comments-v4" target="_blank">OpenWeb docs</a>). בקשו כל חלון שאתם צריכים ושמרו את הקבצים במקום בטוח. אם איש הקשר שלכם ב‑OpenWeb סיפק בעבר ייצוא CSV מממשק הניהול, שמרו גם אותו. המייבא של FastComments קורא את CSV של OpenWeb עם עמודות כגון `id`, `post_id`, `parent_comment_id`, `user_name`, `user_display_name`, `content`, `written_at`, `message_status`, `likes_count`, `dislikes_count`, `reports_count` ו‑`url`.
- **Spot ID שלכם ורשימת מזהי הפוסטים.** כל `data-post-id` שאתם מעבירים למפעיל הופך למזהה URL של FastComments. אם מזהי הפוסטים שלכם הם מזהי מאמרים במערכת ניהול תוכן, שימו לב איך הם נוצרו כדי שתוכלו לשדר את אותם ערכים בצד FastComments.
- **רשימת משתמשי SSO שלכם.** במיוחד ערכי `primary_key` ו‑`user_name` שהרשמתם ב‑OpenWeb. מחבריות של תגובה מתואמת על שם משתמש במהלך הייבוא, ולכן תרצו להעביר את אותם שמות משתמש ב‑payload של SSO ב‑FastComments.
- **רשימת המודרטורים והתפקידים שלהם.** חשבונות מנהל, מודרטור ועיתונאי, והאיזורים שכל אחד מודרטור.
- **תצורת המודרציה שלכם.** מדיניות אתר רחבה (אישור הכל, פרסום ומודרציה, דרישת אישור), חריגות לפי מאמר, רשימת מילים מוגבלות, משתמשים מושתקים וחסומים.
- **CSS מותאם והגדרות ערכת נושא.** ייצאו כל מה שיש לכם בממשק הניהול כדי שתוכלו לבנות זאת מחדש בעמוד התאמה של FastComments.
- **היכן המפעיל נמצא בתבניות שלכם**, כולל כל דפים שמריצים Reactions, Topic Tracker, Spotlight, פעמון ההתראות או מודעה Standalone ללא שיחה.

### איך מזהי פוסט של OpenWeb ממופים למזהי URL של FastComments

FastComments מקשר שרשרת תגובות ל‑`urlId`. כברירת מחדל מזהה ה‑URL הוא כתובת הדף המנוקה, אך ניתן להגדיר כל מחרוזת, וזה בדיוק מה שהמייבא של OpenWeb עושה: הוא קורא את עמודת `post_id` ומשתמש בה כמזהה URL של FastComments לכל תגובה במאמר. הוא גם שומר את עמודת `url` כ‑URL תצוגה כך שקישורי מודרציה והודעות דוא"ל מצביעים על העמוד הנכון.

לכן הכלל לתבניות שלכם הוא: בכל מקום שהעברת `data-post-id="POST_ID"` ו‑`data-post-url="ARTICLE_URL"` ל‑OpenWeb, העבירו `urlId: 'POST_ID'` ו‑`url: 'ARTICLE_URL'` ל‑FastComments. שרשורים מיובאים מתיישרים עם שרשורים חיים ללא הפניות וללא שינוי URL. ראו <a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#url-id" target="_blank">תיעוד מזהה ה‑URL</a>.

אם אתם מעדיפים למפתחות שרשורים לפי URL במקום לפי מזהה פוסט, ייבאו תחילה ואז השתמשו בכלי "Migrate Comments" תחת Manage Data כדי להעביר שרשורים ממזהה פוסט ל‑URL במרוכז.

### מפת התכונות

| OpenWeb | FastComments | הערות |
| --- | --- | --- |
| Conversation with real-time updates | Comment widget with live commenting | Live כברירת מחדל. תגובות חדשות מתכווצות מאחורי כפתור "Show N New Comments", או מופיעות מיידית עם `showLiveRightAway`. |
| Likes and dislikes on comments | Up and down votes | הייבוא משמר `likes_count` ו‑`dislikes_count`. סגנון לב ובחירה "disable voting" הם אפשרויות תצורה. |
| Reactions (article-level icons) | Page Reacts | סט אייקונים ניתן לתצורה בעמוד, נשמר למשתמש. |
| Replies and threading | Threaded replies, unlimited depth | `maxReplyDepth` מגביל עומק. ראו את ההערה על שרשורים למטה. |
| Sorting: best, newest, oldest | Most Relevant, Newest First, Oldest First | `defaultSortDirection` מגדיר ברירת מחדל לכל אתר או לכל תבנית URL. |
| User profiles | User profiles | אווטר, ביוגרפיה, תגיות, קארמה, פעילות, הודעות פרטיות. עובד עם משתמשי SSO. |
| Author Badge | `displayLabel`, `isAdmin`, `isModerator`, badges | מוגדר ב‑payload של SSO. אין צורך בקריאת backend. |
| Pinned Live Blog updates, highlighted comments | Pin and Unpin on any comment | מודרטורים יכולים להצמיד/להסיר הצמדה מהווידג'ט או מהלוח. תבנית סוכן AI מצמידה תגובות מובילות. |
| In Conversation Polls | Polls on comments | 2 עד 10 אפשרויות, תאריכי סגירה, מצבי פרטיות, הגבלות יוצר. |
| Ask Me Anything formats | No dedicated product | פועל כשרשור עם משתמש SSO של המחבר מתויג והקשר מצומד. |
| Live Blog | No 1:1 equivalent | וידג'ט Live Chat וקבוצת תגובות במצב צ'אט קיימים. בלוגינג עריכתי נשאר במערכת ניהול התוכן שלכם. |
| Topic Tracker (follow topics and authors) | Page subscriptions | משתמשים עוקבים אחרי עמוד, לא אחרי נושא או מחבר. אין מעקב חוצה מאמרים. |
| Notification Bell | Notification bell in the widget | תגובות, אזכורים, פעילות שרשור, הצבעות, מנויים, תגיות, הודעות פרטיות. |
| Email notifications | Email notifications with templates | אפשרות opt‑in לכל משתמש דרך דגלי SSO. תבניות מותאמות, שולח ממותג. |
| SSO handshake (codeA/codeB) | Secure SSO (HMAC‑SHA256 payload) | אין קריאת register‑user. חותמים payload בצד השרת, מעבירים ל‑widget. |
| Third-party SSO (Auth0, Gigya, Piano) | Secure SSO after your provider authenticates | אותו payload. ה‑backend חותם אחרי שהמשתמש מחובר. |
| Identity (OpenWeb registration screens) | Magic‑link login, Simple SSO | קוראים עם קישור אימייל. ללא סיסמאות. |
| Moderation policy per article | Customization rules per URL ID pattern | מצב אישור, מסנן ספאם ועוד משתנים לפי תבנית `*/section/*`. |
| Aida AI moderation | Spam classifiers, ChatGPT 4 option, image moderation, AI Agents | סוכנים מתחילים במצב dry run ויכולים לדרוש אישור אנושי. |
| Restricted words | Word blacklist | ~450 ביטויים ברירת מחדל, ניתנים לעריכה. |
| User muting | Block User | חסימת משתמש מהתפריט של תגובה. |
| Bans | Bans | קבועים, מתוזמנים, צללים, hashed IP, plus‑alias aware. |
| Moderation Panel | Moderate Comments dashboard | מסננים, פעולות מרובות עם undo, קבוצות מודרציה, דוחות דיגסט עם אישור בלחיצה אחת. |
| Notification Webhook | Webhooks | אירועי תגובה נוצר, עודכן, נמחק. אין webhook לכל משתמש. |
| Engagement dashboard | Analytics | משתמשים פעילים בזמן אמת, דפים מובילים, טעינות דף, תגובות, הצבעות, חשבונות יומיים. אין דיווח על הכנסות פרסומות. |
| In-conversation ads, Standalone Ad | None | FastComments אינו מציג מודעות. אתם שומרים על ערכת המודעות שלכם סביב הווידג'ט. |
| Social Reviews (star ratings) | Ratings and Reviews | מוצר נפרד באותו חשבון. |
| Popular in the Community | Recent Discussions and Top Pages widgets | חזרה על פעילות על בסיס תגובות. |
| Comment Counter | Comment count widgets | יחיד ומרובה. |
| Export Comments API | CSV export, API, webhooks | ייצוא מהלוח בכל זמן. |
| Export and Delete User Data (GDPR/CCPA) | Account and data deletion, EU region | eu.fastcomments.com שומר נתונים באיחוד האירופי. DPA זמין. |
| Android, iOS, React Native SDKs | Android, iOS, React Native SDKs | UI מקורי, SSO, עדכונים בזמן אמת, שרשור, פעולות מודרציה. |
| Launcher, Virtual Pages, React SDK | Embed script, `fcConfigs`, React, Vue, Angular, SolidJS libraries | `update()` ו‑`destroy()` ל‑SPA. |

החלק הבא של הסעיף עובר על כל קבוצה בפירוט.

### Conversation, Votes and Reactions

Conversation של OpenWeb הוא שרשור בזמן אמת. וידג'ט התגובות של FastComments הוא גם כן: תגובות, עריכות, מחיקות, הצבעות ופעולות מודרציה נדחפות לכל הצופים בשרשור (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#disable-live-commenting" target="_blank">docs</a>). כברירת מחדל תגובות חדשות מאנשים אחרים מופיעות מאחורי כפתור "Show 2 New Comments" כדי שהדף לא יקפץ תחת הקורא. לאירועים חיים קבעו `showLiveRightAway` כדי שהן יוצגו מייד, ו‑`newCommentsToBottom` אם ברצונכם שהן יזרמו למטה כמו צ'אט.

לייקים ולא לייקים הופכים להצבעות למעלה ולמטה. המייבא משמר את שני הספירות לכל תגובה. אם הקהילה שלכם רגילה ללייק יחיד, החליפו את סגנון ההצבעה ל‑hearts בעמוד התאמה של הווידג'ט. אפשר גם לכבות הצבעה לחלוטין.

Reactions של OpenWeb הוא וידג'ט נפרד עם שניים עד ארבעה אייקונים מתוייגים במאמר (<a href="https://developers.openweb.com/docs/reactions" target="_blank">OpenWeb docs</a>). המקבילה ב‑FastComments היא Page Reacts: סט אייקונים ניתן לתצורה המצורף לוידג'ט התגובות, נשמר למשתמש ולדף (<a href="https://docs.fastcomments.com/guide-page-reacts.html" target="_blank">docs</a>). ספירות תגובות אינן חלק מייצוא ה‑CSV של OpenWeb, ולכן הן מתחילות מאפס.

מיון ממופה ישירות. ערכי `data-sort-by` של OpenWeb – best, newest, oldest – תואמים ל‑Most Relevant, Newest First ו‑Oldest First. קבעו ברירת מחדל עם `defaultSortDirection` (`MR`, `NF`, `OF`) בקוד או בכללית בתצורת התאמה. הקוראים יכולים לשנות זאת בוידג'ט.

`data-read-only="true"` הופך ל‑`readonly: true`, שחוסם תגובות חדשות, הצבעות, עריכות ומחיקות. ל‑`data-post-staleness-days` אין מקביל ישיר, אך כלל התאמה יכול להחיל `readonly` על תבנית מזהה URL, וגם אפשר להחליף זאת בתבניות לפי גיל המאמר. `data-messages-count` הוא גודל העמוד, מוגדר בעמוד התאמה של הווידג'ט בין 10 ל‑200 תגובות.

### Replies and Threading

FastComments תומך בעומק בלתי מוגבל כברירת מחדל; `maxReplyDepth` מגביל אותו (`1` נותן מבנה דו‑שלבי שטוח). קובץ ה‑CSV של OpenWeb כולל עמודות `parent_id` ו‑`parent_comment_id`. המייבא הנוכחי מייבא כל שורה כתגובה ברמה העליונה בעמוד שלה, לפי סדר תאריך, עם מחבר, חותמת זמן, הצבעות, ספירת דגלים ומצב אישור שלם. הוא אינו בונה מחדש את עץ ה‑parent‑child. אם השרשורים שלכם כבדים בתשובות, הודיעו לנו כשאתם שולחים את הייצוא ונטפל בשרשור כחלק מהייבוא במקום להשאיר אתכם עם שרשור שטוח.

### User Profiles and Badges

משתמשי FastComments, כולל משתמשי SSO, מקבלים פרופיל עם אווטר, שם תצוגה, ביוגרפיה, קישורים חברתיים, תגיות, קארמה, ספירת תגובות, פיד פעילות ציבורי והודעות פרטיות (<a href="https://docs.fastcomments.com/guide-user-profiles.html" target="_blank">docs</a>). כל אחד מהמשטחים של פעילות, תגובות פרופיל והודעות פרטיות ניתן לכבות למשתמש ב‑payload של SSO או גלובלית בתצורה.

תגית המחבר של OpenWeb דורשת קריאת `GET /sso/v1/user/{primary_key}` והצבת ה‑ID שהוחזר ב‑`data-author-id`. ב‑FastComments אתם מגדירים `displayLabel: 'Author'` (או כל תווית עד 100 תווים) ב‑payload של SSO, ו‑`isAdmin` או `isModerator` לצוות. התווית מוצגת לצד השם בכל תגובה. למערכת עשירה יותר, קבעו תגיות תחת Customize, Badges: תמונות או תגיות טקסט, ניתנות להקצאה אוטומטית על סמך ספים (ספירת תגובות, הצבעות, תגובות מוצמדות, וותק, מהירות תגובה) או ידנית, וניתן להקצות מה‑payload של SSO עם `badgeConfig` (<a href="https://docs.fastcomments.com/guide-badges.html" target="_blank">docs</a>).

### Pinned Comments, Polls and Q&A

כל מודרטור יכול להצמיד או להסיר הצמדה של תגובה מתפריט הווידג'ט או מלוח המודרציה. תגובות מוצמדות נדחפות בזמן אמת לכל הצופים בשרשור. אם ברצונכם לאוטומט זאת, תכונת סוכני AI מספקת תבנית Top Comment Pinner שמצמידה תגובה ברמה עליונה ברגע שהיא חוצה סף הצבעות (<a href="https://docs.fastcomments.com/guide-ai-agents.html" target="_blank">docs</a>).

ה‑Polls של OpenWeb מאפשרים למנהלים לצרף סקר של 2‑4 אפשרויות לתגובה ברמה עליונה. סקרים של FastComments מצורפים גם הם לתגובה, עם 2‑10 אפשרויות, תאריך סגירה אופציונלי, פרטיות תוצאות (אנונימי, מנהלים בלבד, כולם), ומצב "הצבעה לצפייה בתוצאות". אתם בוחרים מי יכול ליצור סקרים (מושבת, מנהלים ומודרטורים, כולם) והאם קוראים אנונימיים יכולים להצביע. סקרים חשופים גם ב‑API הציבורי ליצירתם ממערכת ניהול התוכן שלכם.

OpenWeb הציע פורמט Ask Me Anything. FastComments אין מוצר Q&A נפרד. הפתרון המעשי הוא שרשור רגיל ב‑URL ID ייעודי: משתמש ה‑SSO של האורח נושא `displayLabel`, אתם מצמידים את תגובת הפתיחה, הקוראים שואלים בתגובות ברמה עליונה, האורח משיב בשרשור, והאזכורים והתגובות מחזירים את האנשים. קבעו `noNewRootComments` אחרי סגירת החלון כך שרק תגובות ימשיכו.

Community Spotlight (איסוף אימיילים, מונה והפניות של OpenWeb) אין לו מקביל. הווידג'ט תומך ב‑HTML כותרת מותאם מעל קלט התגובה דרך `headerHTML`, שמספק קריאה לפעולה אך לא טופס לכידת אימייל.

### Live Blog

אין Live Blog ב‑FastComments. Live Blog של OpenWeb הוא מוצר עריכתי: מדווחים בממשק הניהול מפרסמים עדכונים עם קישורים משובצים, ציוצים וסרטונים, והקוראים עוקבים (<a href="https://developers.openweb.com/docs/live-blog" target="_blank">OpenWeb docs</a>).

מה ש‑FastComments מציע לכיסוי חי הוא צד הקורא: וידג'ט Live Chat (`embed-live-chat.min.js`) לשיחה בזמן אמת, וידג'ט התגובות במצב צ'אט (`showLiveRightAway` + `newCommentsToBottom`) לצד הכיסוי החי שלכם. לעדכונים עריכתיים, מפרסמים שעוברים מ‑OpenWeb משאירים אותם במערכת ניהול התוכן או בכלי Live Blog ייעודי ומטמיעים FastComments מתחת לדיון. מוטמעים מדיה (YouTube, SoundCloud ועוד) בתגובות, כך שהעדכונים של הצוות בתגובות נושאים מדיה עשירה.

### Topic Tracker, Notifications and Email

Topic Tracker של OpenWeb מאפשר לקורא לעקוב אחרי נושאים ומחברים מתוך מטא‑דאטה של העמוד ולקבל התראות כשמאמרים חדשים תואמים (<a href="https://developers.openweb.com/docs/topic-tracker" target="_blank">OpenWeb docs</a>). FastComments אין מעקב נושא או מחבר חוצה מאמרים. הקוראים מנויים לעמוד דרך פעמון ההתראות ומקבלים עדכונים לשרשור, בתדירות שנבחרת למנוי: כל דקה, תקציר שעתי או יומי. אם מעקב חוצה מאמרים חשוב למספרי השימור שלכם, תכונה זו תיעלם.

כל שאר ההתאמות בפעמון ההתראות ממופות. הווידג'ט מציג פעמון שמתחיל אדום עם ספירת הלא‑נקראו ומציג: תגובות אליכם, תגובות בשרשור שבו הגבתם, אזכורים, הצבעות על תגובותיכם, פעילות בעמודים מנויים, תגים ו‑DMs (<a href="https://docs.fastcomments.com/guide-notifications.html" target="_blank">docs</a>). התראות באפליקציה הן בזמן אמת דרך WebSocket. הודעות דוא"ל על תגובות והאזכורים נשלחות כל דקה רק לתגובות מאושרות.

למשתמשי SSO, העבירו `optedInNotifications` ו‑`optedInSubscriptionNotifications` ב‑payload וה‑FastComments יעדכן את ההעדפות בטעינת דף הבאה. דוא"ל דורש כתובת במטען. תבניות דוא"ל ניתנות לעריכה לפי סוג ולפי שפה תחת Customize, Email Templates, ושליחתן מהדומיין שלכם עם DKIM נתמכת. מודרטורים ומנהלים מקבלים תקציר יומי, שבועי או חודשי עם אפשרות לאישור בלחיצה אחת, תגובה וקישורים לספאם.

Webhook ההתראות של OpenWeb מפרסם אירועי התראה לכל משתמש (`replied-message`, `liked-message`, `topic-by-keyword` וכו') לנקודת הקצה שלכם. Webhooks של FastComments מכסים את משאב התגובה: נוצר, עודכן ונמחק, עם כמה נקודות קצה שתרצו (<a href="https://docs.fastcomments.com/guide-webhooks.html" target="_blank">docs</a>). אם השתמשתם ב‑webhook ההתראות כדי להזין מערכת דוא"ל משלהם, תצטרכו לבנות מחדש את הלוגיקה על אירועי תגובה, או לאפשר ל‑FastComments לשלוח את המיילים.

### SSO: From codeA/codeB to a Signed Payload

ה‑handshake של OpenWeb כולל שישה שלבים: המתן ל‑`spot-im-api-ready`, OpenWeb מייצר `codeA`, הלקוח שלכם שולח אותו ל‑backend, ה‑backend מאמת את המשתמש וקורא `GET https://www.spot.im/api/sso/v1/register-user?code_a=...&access_token=...&primary_key=...&user_name=...`, OpenWeb מחזיר `codeB`, והלקוח שלכם מחזיר `codeB` ל‑OpenWeb (<a href="https://developers.openweb.com/docs/single-sign-on" target="_blank">OpenWeb docs</a>). קריאת יציאה היא `window.SPOTIM.logout()`.

Secure SSO של FastComments אינו דורש סיבוב ואין נקודת קצה חדשה בצד שלכם. כאשר אתם מציגים את העמוד למשתמש מחובר, ה‑backend שלכם מסיראל את המשתמש, מקודד Base64, וחותם עם HMAC‑SHA256 בעזרת סוד ה‑API שלכם. הווידג'ט שולח את ה‑payload עם הבקשות ו‑FastComments מאמת את החתימה (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-secure" target="_blank">docs</a>). ב‑Node:

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

ה‑timestamp הוא מילישניות מאז epoch ונדחה אם הוא יותר משני ימים. עבור קורא שלא מחובר, השמיטו את שלושת השדות החתומים והעבירו רק `loginURL` (או פונקציית `loginCallback`) והווידג'ט יציג תיבת כניסה במקום מחבר. דוגמאות מלאות ב‑Node, Java ו‑PHP נמצאות במאגר <a href="https://github.com/FastComments/fastcomments-code-examples/tree/master/sso" target="_blank">code examples repository</a>.

משתמשים נוצרים בטעינת דף ראשונה. אינכם רושמים במרוכז. מכיוון שהמייבא של OpenWeb משווה מחברי תגובות לפי `user_name`, משתמש שה‑payload שלו נושא את אותו `username` תופס את התגובות המיובאות בפעם הראשונה שהוא טוען שרשור ויכול לערוך או למחוק אותן משם והלאה. יש גם API משתמשי SSO אם תרצו ליצור משתמשים מראש.

בכל פעם שה‑payload נשלח, FastComments מעדכן את רשומת המשתמש ממנו, כך ששינוי שם תצוגה או אווטר בצד שלכם מתפשט בתצוגת הדף הבא. קבעו שדה ל‑`null` כדי לנקותו.

אם השתמשתם ב‑SSO של צד שלישי של OpenWeb עם Auth0, Gigya או Piano דרך `window.SPOTIM.startSSOForProvider`, זרימת FastComments זהה: לאחר שהספק שלכם מאמת את המשתמש, ה‑backend שלכם בונה וחותם את ה‑payload. אין אינטגרציה ספציפית לספק שיש להגדיר ב‑FastComments.

שתי אפשרויות נוספות קיימות. Simple SSO מעביר את אובייקט המשתמש ללא חתימה מהלקוח, לפלטפורמות ללא backend, ומסמן פעילות כמאומתת כאשר יש אימייל (<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#sso-simple" target="_blank">docs</a>). SAML 2.0 חותם את הצוות שלכם ללוח המחוונים של FastComments דרך Okta, Azure AD או ADFS, עם מיפוי תפקידים, וזמין בתוכניות Enterprise (<a href="https://docs.fastcomments.com/guide-saml.html" target="_blank">docs</a>).

### Moderation

API מדיניות המודרציה לכל מאמר של OpenWeb מציע ארבע ערכים: `spot_policy`, `approve_all`, `publish_and_moderate` ו‑`require_approval`. FastComments מגדיר את אותם התנהגויות ב‑Moderation Settings: אישור אוטומטי מופעל או כבוי, דרישת אישור רק לתגובה הראשונה של משתמש, ואישור אוטומטי רק לתגובות מאומתות (מחוברות או SSO). כללים חלים על כל האתר או על תבנית מזהה URL כגון `*/politics/*`, כך שניתן לשחזר מדיניות לפי מדור. כל תגובה, מאושרת או לא, מגיעה ללוח Moderate Comments, ולכן מודל פרסום‑אחר‑ביקורת הוא ברירת המחדל שם (<a href="https://docs.fastcomments.com/guide-moderation.html" target="_blank">docs</a>).

הייבוא מעביר את מצב המודרציה. `message_status` של OpenWeb עם ערך `approved` מיובא כהמאושר והמבוקר; `rejected` מיובא כספאם והמבוקר; כל ערך אחר מיובא כלא מאושר ולא מבוקר ולכן מופיע בתור תור המודרציה שלכם. `reports_count` הופך לספירת הדגלים של התגובה.

המודרציה האוטומטית ב‑FastComments משולבת ולא מערכת יחידה כמו Aida:

- מסווג ספאם, מאומן באופן רציף, זמין כמודל משותף לכל השוכרים או מבודד לשוכר שלכם, עם גורם אמון שמרפה סינון למשתמשים ותיקים או מצומדים.
- בדיקת ספאם אופציונלית עם ChatGPT 4 בחשבון Flex.
- מודרציית תוכן תמונה ברגישות נמוכה, בינונית או גבוהה לתמונות שהועלו.
- רשימת מילים שחורות של כ‑450 ביטויים ברירת מחדל, ניתנת לעריכה, שמסתירה התאמות עם כוכביות. כאן נכנסות המילים המוגבלות שלכם מ‑OpenWeb.
- סף דגלים שמסתיר תגובה אוטומטית אחרי N דיווחים.
- מניעת הודעות חוזרות או כמעט זהות, תמיד פעילה.
- סוכני AI: סוכנים מונעי אירועים עם רשימת כלים מפורשת (סימון ספאם, אישור, נעילה, הצמדה, אזהרה ב‑DM, חסימה, תגים, תגובה). כל סוכן מתחיל במצב dry run, כלים רגישים יכולים להיות מגודרים מאישור אנושי, וכל פעולה מתועדת עם נימוק וציון רמת ביטחון.

API השתקת משתמש של OpenWeb מאפשר למשתמש SSO אחד להשתיק אחר. המקבילה ב‑FastComments היא Block User בתפריט התגובה, זמינה לכל קורא מחובר. חסימות הן פעולה של מודרטור: קבועה או לתקופה, אפשרות חסימה בצל (המשתמש רואה את תגובתו אך אחרים לא), אפשרות hashed IP, ו‑plus‑aliases של אימייל מטופל ככתובת אחת. רשימת המשתמשים החסומים ניתנת לחיפוש לפי אימייל, שם, מודרטור והתגובה שהביאה לחסימה.

לוח Moderate Comments תומך במסננים (דורש ביקורת, דורש אישור, ספאם, מדוגל, ממשתמשים חסומים) ובחיפוש טקסט, פעולות מרובות עם undo והפסקה, "select all matching" לתורים גדולים, קבוצות מודרציה כך שהצוות שלכם רואה רק שרשורים של מדור מסוים, יומני תגובה שמציגים מדוע אימייל נשלח או לא, וקישורים מסוננים שניתנים לשיתוף. מודרטורים רואים רק את הלוח; הם אינם יכולים לשנות הגדרות או לייבא נתונים.

### Analytics

Analytics של FastComments מציג משתמשים מקוונים כעת על פני האתרים שלכם ועל פי דף, דפים מובילים לפי תגובות או לפי קוראים חיים, וסדרה יומית של טעינות דף, תגובות, הצבעות וחשבונות שנוצרו (<a href="https://docs.fastcomments.com/guide-analytics.html" target="_blank">docs</a>). סטטיסטיקות מודרטורים נפרדות. הספירות קרובות לזמן אמת, מעוכבות לכל היותר דקה, וכל טעינת דף נספרת ולא מדגם.

מה שלא תמצאו הוא כל מידע על מילוי מודעות, CPM או הכנסות, מכיוון שאין מודעות. אם לוח המחוונים של OpenWeb היה מקור לדיווח על מעורבות‑להכנסה, הדיווח הזה יעבור לערמת המודעות שלכם.

### Monetization

OpenWeb מציב מודעות בתוך ומסביב ל‑Conversation ומציע יחידת Standalone Ad, עם קמפיינים דרך איש הקשר שלכם ב‑OpenWeb (<a href="https://developers.openweb.com/docs/standalone-ad" target="_blank">OpenWeb docs</a>). FastComments אינו מריץ מודעות ב‑widget, אינו מציע שיתוף רווחים, ולא טוען סקריפטים של מודעות או מעקב של צד שלישי. ה‑widget הוא iframe שאתם ממקמים; משבצות המודעות מעל ומתחת לו הן שלכם ופועלות דרך מה שכבר משתמשים בו.

המסחר הוא מפורש: אתם מאבדים את מה ש‑OpenWeb שילם לכם, ומקבלים עלות קבועה, צפויה, ו‑widget שלא מוסיף בקשות מודעה לדף. המיתוג מוסר בתוכניות Flex ו‑Pro, ולבנה לבנה זמינה בתוכניות Pro ו‑Enterprise.

### Data Export and Privacy

כל ייצוא נתוני תגובות מה‑Dashboard של FastComments כ‑CSV בכל זמן, עם תאריכים בפורמט UTC ISO, והנתונים זהים זמינים דרך ה‑API. Webhooks מכסים סינכרון מתמשך. קבצי ייבוא נמחקים מ‑FastComments ברגע שהייבוא מסתיים.

לגבי GDPR ו‑CCPA, OpenWeb מספק API ייצוא ומחיקה שבו תגובות של משתמשים מחוקים נשארות מצורפות לחשבון אורח אקראי (<a href="https://developers.openweb.com/docs/export-and-delete-user-data" target="_blank">OpenWeb docs</a>). FastComments תומך בבקשות ייצוא ומחיקה, מציע Data Processing Agreement, ומריץ פריסה נפרדת באיחוד האירופי ב‑<a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> עם שכפול נתונים רק בתוך נקודות נוכחות באירופה. צרו חשבון שם אם הקוראים שלכם באירופה. באיזור EU, איסור סוכן AI תמיד דורש אישור אנושי כדי לעמוד ב‑Article 17 של DSA.

נתוני תגובה בפריסה גלובלית משוכפלים בין אזורים כולל צומת סינגפור, וה‑widget מוגש מ‑DNS ו‑CDN של FastComments. סקריפט ההטמעה הוא מתחת ל‑30 KB על הדיסק וכ‑6 KB דחוס על הקו.

### Mobile SDKs

OpenWeb משחרר SDKs ל‑Android, iOS ו‑React Native עם Conversation, Articles, Authentication, Notifications, Reactions ו‑In Conversation Polls. FastComments משחרר ספריות <a href="https://docs.fastcomments.com/guide-lib-android.html" target="_blank">Android</a>, <a href="https://docs.fastcomments.com/guide-lib-ios.html" target="_blank">iOS</a> ו‑<a href="https://docs.fastcomments.com/guide-lib-react-native-sdk.html" target="_blank">React Native</a> עם תגובות משורשרות, עדכונים חיים ב‑WebSocket, Secure SSO, הצבעות, אזכורים, העלאות תמונות, פעולות מודרציה (דגל, הצמדה, נעילה, חסימה), ערכת נושא, מצב Live Chat ורכיב פיד חברתי. אזור EU הוא דגל תצורה. אין SDK מודעות נפרד מכיוון שאין מודעות.

### Embed and SPA Integration

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

מזהה השוכר שלכם נמצא ב‑<a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">דף קוד ההטמעה</a> ברגע שיש לכם חשבון. ל‑`data-article-tags` אין מקביל מכיוון שאין מעקב נושא; האשטאגים בתוך תגובות הם תכונה נפרדת.

לגלילה אינסופית ו‑SPA, הגישה של Virtual Pages של OpenWeb היא קונטיינר אחד לכל מאמר. ב‑FastComments אתם קוראים `FastCommentsUI(element, config)` לכל שרשור ולאחר מכן `instance.update(newConfig)` להחלפת מזהה URL או `instance.destroy()` להסרה (<a href="https://docs.fastcomments.com/guide-dynamic-comment-widget.html" target="_blank">docs</a>). ספריות React, Vue, Angular ו‑SolidJS מטפלות בזה כאשר פרופ ה‑config משתנה. קריאות חיי‑מחזור (`onInit`, `onRender`, `commentCountUpdated`, `onReplySuccess`, `onVoteSuccess`, `onAuthenticationChange`, `onCommentSubmitStart`) מחליפות את אירועי `spot-im-*` שהייתם מאזינים להם.

ספירות תגובות בעמודי אינדקס משתמשות ב‑widget ספירת תגובות, יחיד או מרובה. עבור SEO, תגובות מוצגות ישירות בדף למנועי חיפוש במקום בתוך iframe, כך שאין קריאת API SEO לתצורה.

### Step-by-Step Cutover

**1. צור את החשבון והגדר את הבסיסיות.** הירשמו ב‑fastcomments.com או eu.fastcomments.com. קבעו את הגדרות המודרציה, רשימת מילים חסומות, סגנון הצבעה, מיון ברירת מחדל, ו‑CSS מותאם בעמוד התאמה של הווידג'ט. הוסיפו מודרטורים וקבוצות מודרציה. אם יש לכם הרבה משתמשי מנהל, תמכו בייבוא שלהם עבורכם.

**2. הריצו ייבוא ראשון.** עברו ל‑<a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">Manage Data, Import</a>, בחרו OpenWeb (.csv) והעלו. הייבוא רץ כ‑job ברקע; העמוד מציג ספירת שורות ומצב, ואתם מקבלים דוא"ל כשזה מסתיים (<a href="https://docs.fastcomments.com/guide-migrations.html" target="_blank">docs</a>). כל מזהה הודעה של OpenWeb הופך למזהה תגובה של FastComments, כך שהרצה חוזרת של ייבוא לא תיצור כפילויות.

**3. אמתו ספירות.** השוו את ספירת השורות של ה‑job לייצוא שלכם. פתחו כמה מזהי URL בעלי תנועה גבוהה בלוח המודרציה ובדקו מחברים, תאריכים, סך הצבעות ומצב אישור. ודאו שהתגובות שנדחו מוצגות כספאם והמתנות יושבות בתור.

**4. בנו את payload של SSO.** מימשו את קוד החתימה שלמעלה ב‑backend שלכם, תוך שימוש ב‑`id` ו‑`username` שהשתמשתם ב‑OpenWeb. בדקו עם חשבון צוות בעמוד סביבה: תגובות מיובאות מופיעות כבעלות המשתמש, ועריכה ומחיקה מופיעות בתפריט שלו.

**5. החליפו את ההטמעה בתבנית סביבה.** החליפו את המפעיל והקונטיינר ב‑snippet של FastComments, ממפים `data-post-id` ל‑`urlId` ו‑`data-post-url` ל‑`url`. הסירו `window.SPOTIM.logout()` ומאזיני `spot-im-*`, או מיפו אותם לקריאות חזרה. החילו את ה‑CSS שלכם בכללית בתצורת התאמה במקום בקוד כדי לבדוק בכל שחרור של FastComments.

**6. הריצו במקביל.** הציבו FastComments על מדור או אחוז מסוים של מאמרים בעוד OpenWeb נשאר בשאר. אין צורך לשנות דבר בצד OpenWeb. עקבו אחרי תור המודרציה ועמוד האנליטיקה. קוראים שמגיבים בעמודי FastComments במהלך החלון אינם נמצאים בייצוא OpenWeb שלכם, ולכן תכננו את הייבוא הסופי לפני שהם מתחילים, לא אחרי.

**7. CSP ו‑DNS.** אם מריצים Content‑Security‑Policy, אפשרו `cdn.fastcomments.com` ו‑`fastcomments.com` (או `eu.fastcomments.com`) עבור `script-src`, `frame-src` ו‑`connect-src`, והסירו את ערכי `spot.im` ו‑`openweb.com` ברגע שהמפעיל נעלם. אין שינוי ב‑DNS שלכם. אין צורך ב‑redirects מכיוון שמזהי URL תואמים.

**8. ייבוא סופי והפעלה.** שלפו ייצוא OpenWeb נוסף המכסה את חלון הריצה במקביל, העלו אותו (re‑import בטוח), ואז פרסו את שינוי התבנית על כל העמודים והסירו את המפעיל, Reactions, Topic Tracker, Spotlight, פעמון והקונטיינרים של מודעות.

**9. רשימת בדיקה לפני השקה.**

- תגובות חיות נראות במאמר ייצור משני דפדפנים.
- כניסה ויציאה ב‑SSO ותגובה תחת חשבון מנוי אמיתי.
- מודרטורים מקבלים את הדיגסט ויכולים לאשר ממנו.
- הודעות תגובה והאזכורים מגיעות וקושרות לדף הנכון.
- רשימת חסימות ורשימת מילים חסומות מלאה.
- Page Reacts וספירות תגובות מוצגות במקום Reactions והמונה שהיה.
- דוחות CSP נקיים.
- השוואת ספירת תגובות אחרונה בין הייצוא שלכם ללוח.

### מה אתם מאבדים ומה שונה

הבה נציג את הפערים:

- **Live Blog.** אין מקביל. שמרו זאת במערכת ניהול התוכן או בכלי Live Blogging והציבו FastComments מתחתיו.
- **Topic Tracker.** אין מעקב נושא או מחבר חוצה מאמרים. רק מנויים לעמוד.
- **Community Spotlight.** אין מוצר כרטיס CTA. `headerHTML` נותן לכם הודעה מעל המקלדת, לא טופס לכידת אימייל.
- **הכנסות מודעות.** אין. הווידג'ט ללא מודעות בתכנון.
- **Webhook התראות.** Webhooks מתמקדים באירועי תגובה, לא באירועי התראה לכל משתמש.
- **שרשור בייבוא.** המייבא הנוכחי משטח תגובות לתגובות ברמה העליונה באותו עמוד. הודיעו אם אתם צריכים לבנות מחדש את העץ.
- **היסטוריית תגובות.** ספירות תגובות ברמת מאמר אינן בייצוא והן מתחילות מאפס.
- **היסטוריית סקרים.** הגדרות סקר והצבעות אינן בייצוא; טקסט הסקר מיובא, הסקר עצמו לא.
- **מודל כניסה.** קוראים ללא SSO נכנסים בקישור קסם במקום סיסמה או כפתור רשת חברתית.
- **צוות מודרציה אנושי.** OpenWeb מספק צוות מודרציה עם Aida. FastComments מספק כלים, מסווגים וסוכנים; האנשים הם שלכם.

מה שאתם מרוויחים, באותו רוח: וידג'ט שמוסיף סקריפט קטן אחד וללא בקשות מודעה, מודרציה שאדם אחד יכול לנהל עבור אתר גדול עם פעולות מרובות וסוכנים, SSO שהוא פונקציית חתימה ולא פרוטוקול, וספק שלא נמצא תחת פיקוח בית משפט.

### לוח זמנים והצעת ייבוא חינמית

תכננו שבוע‑שבועיים עבור מפרסם עם אינטגרציית SSO אחת ומאות אלפי תגובות: יום‑יומיים לייצוא והייבוא הראשון, כמה ימים ל‑SSO ותבניות, חלון ריצה במקביל, ואז הייבוא הסופי והמעבר. הפלטפורמה כבר מתמודדת עם קנה מידה זה: United Cloud מריץ יותר מעשר פורטלים ומיליוני תגובות ב‑FastComments, ו‑itsfoss.com העביר היסטוריית של 88,000 תגובות מספק אחר דרך המייבא האוטומטי.

FastComments מייבא את קובץ ה‑CSV של OpenWeb בחינם, מסייע לכם להריץ OpenWeb ו‑FastComments במקביל במהלך החיתוך, ועוזר במעבר עצמו, כולל שאלות על שרשור והתאמת משתמשים. תוכניות Enterprise כוללות SLA, תגובות תמיכה תוך שעה במהלך שעות עבודה, ואפשרות לפריסה מבודדת בענן שלכם (<a href="https://docs.fastcomments.com/guide-your-own-cloud.html" target="_blank">docs</a>). תמחור Flex מבוסס שימוש זמין לאתרים שרוצים להתחיל ללא חוזה.

כתבו ל‑<a href="mailto:sales@fastcomments.com">sales@fastcomments.com</a> עם גודל הייצוא והגדרת ה‑SSO שלכם ונחזור אליכם עם תוכנית.

### סיכום

הורידו את הייצוא שלכם היום. שאר המהלך הוא מכני: מזהי פוסט זהים הופכים למזהי URL, שמות משתמשים תופסים את תגובותיהם דרך SSO, מצב מודרציה נושא, וההטמעה היא החלפה ישירה. המקומות שבהם FastComments שונה מפורטים למעלה כדי שתוכלו לקבל החלטה עם העובדות מול העיניים.

בהצלחה!  

{{/isPost}}

---