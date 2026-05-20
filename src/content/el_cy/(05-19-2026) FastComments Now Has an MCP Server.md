---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]Το FastComments Τώρα Έχει έναν Server MCP[/postlink]

{{#unless isPost}}
Μπορείτε τώρα να κατευθύνετε τον Claude Code, τον Claude Desktop, τον Cursor ή οποιοδήποτε άλλο πελάτη Model Context Protocol στο FastComments και να καλέσετε απευθείας το API μας.
{{/unless}}

{{#isPost}}

### Τι Νέο

Το FastComments τώρα παρέχει έναν φιλοξενούμενο [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) server. Το MCP είναι το ανοιχτό πρότυπο που χρησιμοποιούν οι AI κωδικοί βοηθοί για να επικαλεστούν εργαλεία server-side. Κατευθύνετε τον πελάτη σας σε μία διεύθυνση URL και μπορεί να απαριθμήσει τα σχόλιά σας, να τα μετριάσει, να διαχειριστεί τους χρήστες SSO, να ρυθμίσει widgets και οτιδήποτε άλλο κάνει το [API](https://docs.fastcomments.com/guide-api.html).

### Πού Βρίσκεται

Από τον πίνακα ελέγχου FastComments, ανοίξτε **Integrate, στη συνέχεια MCP Server**, ή επισκεφθείτε το απευθείας στο
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Επιλέξτε ποιο API key θέλετε να χρησιμοποιήσει ο πελάτης, και η σελίδα θα δημιουργήσει μία προγεμισμένη διεύθυνση URL συν αποσπάσματα για να αντιγράψετε και να επικολλήσετε για τον Claude Code και τα αρχεία ρύθμισης του Claude Desktop / Cursor.

### Claude Code

Μία εντολή για εγγραφή:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Στη συνέχεια, το `/mcp` μέσα σε μία συνεδρία δείχνει τη σύνδεση και απαριθμεί κάθε εργαλείο που εκθέτει ο server. Ρωτήστε πράγματα όπως "δείξε μου τα τελευταία 20 επισημασμένα σχόλια στο /blog/launch", "μπλοκάρε αυτόν τον σχολιαστή σε όλους τους ιστότοπούς μου", ή "ποιο είναι το ποσοστό ανίχνευσης ανεπιθύμητης αλληλογραφίας μας την τελευταία εβδομάδα". Ο Claude δρομολογεί μέσω της σωστής κλήσης εργαλείου.

### Claude Desktop και Cursor

Προσθέστε αυτό το μπλοκ στη ρύθμιση MCP του πελάτη σας (`claude_desktop_config.json` για τον Claude Desktop, `mcp.json` για τον Cursor):

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

Επανεκκινήστε τον πελάτη και ο server θα εμφανιστεί δίπλα σε οποιουσδήποτε άλλους MCP servers έχετε ρυθμίσει.

### Ασφάλεια

Το API key είναι ενσωματωμένο στη διεύθυνση URL, οπότε χειριστείτε τη διεύθυνση URL ως μυστική. Μην την επικολλάτε σε δημόσιες συνομιλίες, στιγμιότυπα οθόνης ή commits. Εάν εκτεθεί ένα κλειδί, αλλάξτε το από τη [σελίδα API Keys](https://fastcomments.com/auth/my-account/api-secret) και αντιγράψτε ξανά το απόσπασμα από τη σελίδα ρύθμισης. Για να περιορίσετε τι μπορεί να κάνει ένας πράκτορας, δημιουργήστε ένα ειδικό API key για κάθε βοηθό και κλειδώστε το στη σωστή τομέα. Το αναδυόμενο μενού στη σελίδα ρύθμισης σας αφήνει να αλλάξετε ποιο κλειδί χρησιμοποιούν τα αποσπάσματα με μία κίνηση.

### Γιατί το Δημιουργήσαμε

Οι άνθρωποι χρησιμοποιούν ολοένα και περισσότερα εργαλεία με χαρακτηριστικά πράκτορα για καθημερινές εργασίες που αφορούν SaaS προϊόντα. Οποιοσδήποτε διασυνδέει μία συνεδρία Claude ή Cursor για να διαχειριστεί τη λίστα μετρίασης του, ή έναν προσαρμοσμένο πράκτορα για να αναδείξει νήματα που αξίζει να προσκολληθούν, μπορεί τώρα να παραλείψει εντελώς τη στρώση περιτυλίγματος.

### Στο Συμπέρασμα

Ανοίξτε [Integrate, στη συνέχεια MCP Server](https://fastcomments.com/auth/my-account/mcp-setup) στον πίνακα ελέγχου σας, αντιγράψτε το απόσπασμα για τον αγαπημένο σας MCP πελάτη, και είστε έτοιμοι. Ο πλήρης οδηγός βρίσκεται στον [οδηγό LLM Kit](https://docs.fastcomments.com/guide-llm-kit.html).

Όπως πάντα, ενημερώστε μας παρακάτω αν αντιμετωπίσετε οτιδήποτε.

Cheers!

{{/isPost}}