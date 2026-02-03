---
[category:Security]
[category:Features]
[category:Webhooks]
###### [postdate]
# [postlink]Mise à jour de la sécurité des Webhooks[/postlink]

{{#unless isPost}}
Les webhooks FastComments incluent désormais des signatures HMAC-SHA256 pour la vérification du payload, ainsi qu'une nouvelle sélection de méthode HTTP.
{{/unless}}

{{#isPost}}

### Quoi de Neuf

Auparavant, il y avait un surplus de friction pour configurer les Webhooks par rapport à d'autres plateformes. Nous considérions cela comme un bon point en raison des mesures de sécurité supplémentaires requises, cependant, nous avons récemment mis en place un mécanisme qui est tout aussi sécurisé mais dont la sécurité est facultative.

### Comportement Précédent

Auparavant, le système transmettait votre clé API dans les payloads et s'attendait à ce que vous la validiez. Si vous ne retorniez pas un 401 pour une clé API invalide, le système ne permettrait pas la configuration.

### Nouveau Comportement

Maintenant, le système ne transmettra pas de clé API pour les nouvelles configurations de webhook. À la place, pour les nouvelles intégrations et les intégrations existantes, une signature HMAC signée est incluse. Vous pouvez décider de valider ou non cette signature, en fonction de votre niveau de sécurité requis.

Les configurations existantes continueront de transmettre la clé API - vous pouvez désormais demander à désactiver cela via un ticket de support.

### Vérification de la Signature HMAC

FastComments envoie maintenant les en-têtes suivants avec chaque requête webhook :

| En-tête | Description |
|---------|-------------|
| `X-FastComments-Timestamp` | Horodatage Unix (secondes) lors de la signature de la requête |
| `X-FastComments-Signature` | Signature HMAC-SHA256 au format `sha256=<hex>` |
| `token` | Votre secret API (conservé pour la compatibilité ascendante) |

#### Comment la Signature est Calculée

1. Concaténez : `timestamp + "." + JSON_payload_body`
2. Calculez HMAC-SHA256 en utilisant votre secret API comme clé
3. Encodez en hexadécimal le résultat

#### Vérification Exemple (Python)

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

    # Vérifier que l'horodatage est récent
    now = int(time.time())
    if abs(now - int(timestamp)) > 300:
        return False

    # Vérifier la signature
    payload = json.dumps(body, separators=(',', ':'))
    message = f"{timestamp}.{payload}"
    expected = hmac.new(
        api_secret.encode(),
        message.encode(),
        hashlib.sha256
    ).hexdigest()

    return signature == f"sha256={expected}"
```

### Sélection de la Méthode HTTP

De plus, inclus avec cette mise à jour - vous pouvez désormais configurer la méthode HTTP pour chaque type d'événement webhook :

- **Créer un Événement** : POST ou PUT (par défaut : PUT)
- **Mettre à Jour un Événement** : POST ou PUT (par défaut : PUT)
- **Supprimer un Événement** : DELETE, POST ou PUT (par défaut : DELETE)

### Avantages de Sécurité

Le nouveau système présente plusieurs avantages :

- Protection contre les attaques de type homme du milieu
- Prévention des attaques par rejeu via vérification de l'horodatage
- Détection de falsification de payload

### Compatibilité Ascendante

L'en-tête `token` contenant votre secret API est toujours envoyé avec chaque requête. Les intégrations existantes continueront de fonctionner sans modification, et comme mentionné précédemment, vous pouvez demander à désactiver l'ancien comportement via le support.

### Documentation

Pour une documentation complète, consultez notre [Guide des Webhooks](https://docs.fastcomments.com/guide-webhooks.html).

### En Conclusion

Comme pour toutes les grandes versions, nous sommes heureux d'avoir pu prendre le temps d'optimiser, tester et publier correctement ces changements. Faites-nous savoir ci-dessous si vous découvrez des problèmes.

Cheers!

{{/isPost}}

---