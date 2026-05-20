---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]פאשׁט-קומנטס עכשיו יש שרת MCP[/postlink]

{{#unless isPost}}
עכשיו אתה יכול להתייחס ל-Claude Code, Claude Desktop, Cursor או כל לקוח אחר של Model Context Protocol ב-FastComments ולהפעיל את ה-API שלנו ישירות.
{{/unless}}

{{#isPost}}

### מה חדש

FastComments עכשיו מספק שרת [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) מאוחסן. MCP הוא הסטנדרט הפתוח שבו משתמשים מסייעי קוד המבוססים על AI כדי לקרוא כלים בצד השרת. הפנה את הלקוח שלך ל-URL אחד והוא יכול לרשום את התגובות שלך, למתן אותן, לנהל משתמשי SSO, לקבוע תצורות ווידג'טים, וכל דבר אחר שעושה ה-[API](https://docs.fastcomments.com/guide-api.html).

### היכן זה נמצא

מ-דשבורד FastComments שלך, פתח **אינטגרציה, ואז MCP Server**, או היכנס אליו ישירות בכתובת
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
בחר איזו מפתח API אתה רוצה שהלקוח ישתמש בו, והעמוד יוצר URL מוכנס מראש יחד עם קטעי העתקה להדבקה עבור קבצי הקונפיגורציה של Claude Code ושל Claude Desktop / Cursor.

### Claude Code

פקודה אחת להירשם:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

אז `/mcp` בתוך מושב מציג את החיבור ומפרט כל כלי שהשרת חושף. שאל דברים כמו "הראה לי את 20 התגובות המסומנות האחרונות על /blog/launch", "חסום את המגיב הזה בכל האתרים שלי", או "מה שיעור הפילטרון שלנו על ספאם בשבוע האחרון". Claude מנתב דרך קריאת הכלים הנכונה.

### Claude Desktop ו-Cursor

הוסף את הבלוק הזה לקונפיגורציית MCP של הלקוח שלך (`claude_desktop_config.json` עבור Claude Desktop, `mcp.json` עבור Cursor):

```json
{
  "mcpServers": {
    "fastcomments": {
      "type": "http",
      "url": "https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY"
    }
  }
}
```

הפעל מחדש את הלקוח והשרת יופיע לצד כל שאר שרתי MCP שהגדרת.

### אבטחה

מפתח ה-API משולב ב-URL, לכן התייחס ל-URL עצמו כסוד. אל תדביק אותו בצ'אטים ציבוריים, צילומי מסך, או קומיטים. אם מפתח נחשף, שנה אותו מעמוד ה-[API Keys](https://fastcomments.com/auth/my-account/api-secret) והעתק מחדש את קטע הקוד מעמוד ההגדרה. כדי להגביל מה סוכן יכול לעשות, צור מפתח API ייעודי לכל מסייע ונעל אותו לדומיין הנכון. תפריט הנפתח בעמוד ההגדרה מאפשר לך להחליף איזה מפתח משתמשים בקטעים בלחיצה אחת.

### מדוע בנינו את זה

אנשים משתמשים בכלים מנהליים יותר ויותר למשימות יומיומיות באינטראקציה עם מוצרים של SaaS. כל אחד שמחבר מושב של Claude או Cursor כדי למיין את תור המודרציה שלו, או סוכן מותאם אישית כדי לחשוף נושאים ששווה להקליט, יכול עכשיו לדלג על שכבת העטיפה לחלוטין.

### לסיכום

פתח את [אינטגרציה, ואז MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) בדשבורד שלך, העתק את הקטע עבור לקוח MCP האהוב עליך, ואתה חי. תיעוד מלא נמצא במדריך [סט ערכות LLM](https://docs.fastcomments.com/guide-llm-kit.html).

כפי תמיד, ת告 לנו למטה אם אתה נתקל בכל דבר.

בתיאבון!

{{/isPost}}

---