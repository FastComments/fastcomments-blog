---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments a maintenant un serveur MCP[/postlink]

{{#unless isPost}}
Vous pouvez maintenant pointer Claude Code, Claude Desktop, Cursor, ou tout autre client de Protocole de Contexte de Modèle vers FastComments et le faire appeler notre API directement.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

FastComments expédie maintenant un serveur [Protocole de Contexte de Modèle](https://modelcontextprotocol.io/) (MCP) hébergé. MCP est la norme ouverte que les assistants de codage AI utilisent pour invoquer des outils côté serveur. Orientez votre client vers une URL et il peut répertorier vos commentaires, les modérer, gérer les utilisateurs SSO, configurer des widgets, et tout ce que fait l'[API](https://docs.fastcomments.com/guide-api.html).

### Où Il Se Trouve

Depuis votre tableau de bord FastComments, ouvrez **Intégrer, puis Serveur MCP**, ou visitez-le directement à
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup).
Choisissez quelle clé API vous souhaitez que le client utilise, et la page génère une URL pré remplie ainsi que des extraits à copier-coller pour Claude Code et les fichiers de configuration de Claude Desktop / Cursor.

### Claude Code

Une commande pour enregistrer :

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Ensuite, `/mcp` à l'intérieur d'une session montre la connexion et liste chaque outil que le serveur expose. Posez des questions comme "montre-moi les 20 derniers commentaires signalés sur /blog/launch", "bloque ce commentateur sur tous mes sites", ou "quel est notre taux de détection de spam au cours de la dernière semaine". Claude passe par le bon appel d'outil.

### Claude Desktop et Cursor

Ajoutez ce bloc à la configuration MCP de votre client (`claude_desktop_config.json` pour Claude Desktop, `mcp.json` pour Cursor) :

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

Redémarrez le client et le serveur apparaîtra aux côtés de tous les autres serveurs MCP que vous avez configurés.

### Sécurité

La clé API est intégrée dans l'URL, donc traitez l'URL elle-même comme un secret. Ne la copiez pas dans des discussions publiques, des captures d'écran, ou des commits. Si une clé est exposée, faites-la tourner depuis la [page des Clés API](https://fastcomments.com/auth/my-account/api-secret) et recopie le snippet depuis la page de configuration. Pour limiter ce qu'un agent peut faire, générez une clé API dédiée par assistant et verrouillez-la à la bonne domaine. Le menu déroulant sur la page de configuration vous permet de changer la clé que les extraits utilisent en un clic.

### Pourquoi Nous L'avons Créé

Les gens utilisent de plus en plus d'outils agentiques pour les tâches quotidiennes interagissant avec des produits SaaS. Quiconque configurant une session Claude ou Cursor pour trier sa file de modération, ou un agent personnalisé pour mettre en avant des fils à épingler, peut maintenant sauter complètement la couche d'enveloppe.

### En Conclusion

Ouvrez [Intégrer, puis Serveur MCP](https://fastcomments.com/auth/my-account/mcp-setup) dans votre tableau de bord, copiez l'extrait pour votre client MCP préféré, et vous êtes en ligne. La documentation complète se trouve dans le [guide du Kit LLM](https://docs.fastcomments.com/guide-llm-kit.html).

Comme toujours, faites-nous savoir ci-dessous si vous rencontrez quoi que ce soit.

À la vôtre !

{{/isPost}}

---