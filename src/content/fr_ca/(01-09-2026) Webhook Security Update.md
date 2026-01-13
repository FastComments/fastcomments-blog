---
[category:Sécurité]
[category:Caractéristiques]
[category:Webhooks]
###### [postdate]
# [postlink]Mise à jour de la sécurité des Webhooks[/postlink]

{{#unless isPost}}
Les webhooks de FastComments incluent désormais des signatures HMAC-SHA256 pour la vérification des charges utiles, ainsi qu'une nouvelle sélection de méthode HTTP.
{{/unless}}

{{#isPost}}

### Quoi de neuf

Auparavant, il y avait une friction supplémentaire pour configurer les Webhooks par rapport à d'autres plateformes. Nous considérions cela comme une bonne chose
en raison des mesures de sécurité supplémentaires requises, cependant nous avons récemment adopté un mécanisme qui est tout aussi sûr
mais dont la sécurité est facultative.

### Comportement précédent

Auparavant, le système transmettait votre clé API dans les charges utiles et s'attendait à ce que vous la validiez. Si vous ne retourniez pas un 401
pour une clé API invalide, le système n'autorisait pas la configuration.

### Nouveau comportement

Maintenant, le système ne transmettra pas de clé API pour les nouvelles configurations de webhook. Au lieu de cela, pour les intégrations nouvelles et existantes,
une signature HMAC signée est incluse. Vous pouvez ou non vouloir valider cette signature, selon le niveau
de sécurité requis.

Les configurations existantes continueront à passer la clé API - vous pouvez maintenant demander à désactiver cela via un ticket de support.

### Vérification de la signature HMAC

FastComments envoie désormais les en-têtes suivants avec chaque demande de webhook :

| En-tête | Description |
|---------|-------------|
| `X-FastComments-Timestamp` | Horodatage Unix (secondes) lorsque la demande a été signée |
| `X-FastComments-Signature` | Signature HMAC-SHA256 au format `sha256=<hex>` |
| `token` | Votre secret API (gardé pour la compatibilité ascendante) |

#### Comment la signature est calculée

1. Concaténez : `timestamp + "." + JSON_payload_body`
2. Calculez HMAC-SHA256 en utilisant votre secret API comme clé
3. Encodez le résultat en hexadécimal

#### Exemple de vérification (Python)

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

### Sélection de la méthode HTTP

De plus, inclus avec cette mise à jour - vous pouvez maintenant configurer la méthode HTTP pour chaque type d'événement webhook :

- **Créer un événement** : POST ou PUT (par défaut : PUT)
- **Mettre à jour un événement** : POST ou PUT (par défaut : PUT)
- **Supprimer un événement** : DELETE, POST ou PUT (par défaut : DELETE)

### Avantages en matière de sécurité

Le nouveau système présente quelques avantages :

- Protection contre les attaques de type homme du milieu
- Prévention des attaques par rejeu via la vérification de l'horodatage
- Détection de falsification des charges utiles

### Compatibilité ascendante

L'en-tête `token` contenant votre secret API est toujours envoyé avec chaque demande. Les intégrations existantes continueront de fonctionner sans modification, et comme
mentionné précédemment, vous pouvez demander à désactiver l'ancien comportement via le support.

### Documentation

Pour la documentation complète, consultez notre [Guide des Webhooks](https://docs.fastcomments.com/guide-webhooks.html).

### En conclusion

Comme toutes les grandes versions, nous sommes ravis d'avoir pu prendre le temps d'optimiser, de tester et de publier correctement ces changements. Faites-nous savoir
ci-dessous si vous découvrez des problèmes.

À votre santé !

{{/isPost}}

---