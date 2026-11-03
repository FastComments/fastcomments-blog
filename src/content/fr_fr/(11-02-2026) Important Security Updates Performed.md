[category:Security]
[category:Announcements]

###### [postdate]
# [postlink]Mises à jour de sécurité importantes effectuées[/postlink]

{{#unless isPost}}
Nous avons corrigé le système d'exploitation sur tous nos serveurs pour résoudre une récente vulnérabilité TCP de Linux, et nous avons mis à jour Node.js pour intégrer sa version de sécurité d'octobre. Aucune action n'est requise de votre part.
{{/unless}}

{{#isPost}}

### Nouveautés

Nous avons récemment effectué deux mises à jour de sécurité sur l'infrastructure FastComments : une mise à jour du système d'exploitation pour corriger une vulnérabilité du code TCP du noyau Linux, et une mise à jour de Node.js pour intégrer la dernière version de sécurité.

### Linux Kernel

Tous nos serveurs ont été corrigés et exécutent désormais un noyau incluant le correctif pour
<a href="https://security-tracker.debian.org/tracker/CVE-2026-98432" target="_blank">CVE-2026-98432</a>.

Il s'agit d'un use‑after‑free dans le code TCP IPv4 du noyau. Le noyau pouvait libérer les options IP attachées à une connexion alors qu'un autre CPU les lisait encore, par exemple lors de la construction de la réponse SYNACK pendant une poignée de main TCP. Le correctif attend que aucun CPU ne puisse encore lire cette mémoire avant de la libérer.

### Node.js

FastComments fonctionne sur Node.js, et nous sommes passés à la version 24.22.1, la version corrigée de la branche 24.x provenant de la <a href="https://nodejs.org/en/blog/vulnerability/october-2026-security-releases" target="_blank">release de sécurité Node.js d'octobre 2026</a>.

Cette version corrige 10 vulnérabilités dans les versions prises en charge de Node.js. 8 d'entre elles affectent la branche 24.x, et 4 sont classées comme critiques : deux dans la validation TLS des adresses IP, une dans la gestion des noms DNS, et une dans le décodeur Brotli. Elle met également à jour les dépendances intégrées, notamment OpenSSL, c‑ares, Undici et le bundle de certificats CA.

### Ce que vous devez faire

Rien. Ces mises à jour sont entièrement gérées de notre côté, vos widgets, intégrations API et configurations SSO ne nécessitent aucun changement.

### En conclusion

Maintenir notre infrastructure à jour fait partie intégrante de l'exploitation de FastComments, et nous continuerons à appliquer des mises à jour comme celles-ci dès leur sortie. Si vous avez des questions, faites‑le nous savoir ci‑dessous.

Cordialement!

{{/isPost}}

---