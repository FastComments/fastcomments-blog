[category:Features]  
[category:Moderation]  
###### [postdate]  
# [postlink]Gesloten opmerkingen zijn nu daadwerkelijk gesloten[/postlink]  
  
{{#unless isPost}}  
Het sloticoon wordt eindelijk weergegeven op gesloten opmerkingen, en gesloten opmerkingen kunnen niet meer worden bewerkt of verwijderd totdat een beheerder ze ontgrendelt.  
{{/unless}}  
  
{{#isPost}}  
  
### Wat is nieuw  
  
Moderators kunnen opmerkingen al lange tijd sluiten. Een opmerking sluiten voorkomt nieuwe reacties, wat handig is wanneer een draad zijn doel heeft bereikt of een subgesprek uit de hand loopt.  
  
Het probleem was dat "gesloten" niet veel gewicht had. Lezers hadden geen visuele indicatie dat een opmerking gesloten was. En zelfs als nieuwe reacties werden geblokkeerd, kon de oorspronkelijke auteur of iedereen met bewerkingsrechten de opmerking nog steeds bewerken of verwijderen. Dat is niet echt gesloten. Deze update verhelpt beide problemen.  
  
### Het sloticoon  
  
Wanneer een moderator een opmerking sluit, verschijnt er nu een klein hangslot in de rechterbovenhoek van de opmerking, direct naast het pinnicoon. Het wordt voor elke lezer weergegeven - niet alleen voor moderators. Het ontgrendelen van de opmerking verwijdert het.  
  
Het icoon houdt rekening met de lichte en donkere modus, net als het pinnicoon.  
  
### Bewerken en verwijderen zijn geblokkeerd  
  
Een gesloten opmerking kan door niemand worden bewerkt of verwijderd, inclusief beheerders en moderators. Als je een gesloten opmerking wilt bewerken of verwijderen, ontgrendel deze dan eerst, maak de wijziging en vergrendel opnieuw als je dat wilt.  
  
Dit geldt voor elk pad dat een opmerking aanraakt:  
  
- De gebruikersinterface voor de widget verbergt de menu-items Bewerken en Verwijderen voor gesloten opmerkingen.  
- De openbare API PATCH- en DELETE-eindpunten geven een `locked` foutmelding als de doelopmerking gesloten is.  
- De beheerdersmoderatie UI toont de gesloten fout als je probeert te verwijderen zonder eerst te ontgrendelen.  
  
### Uitzonderingen  
  
Een handvol paden omzeilt opzettelijk het slot zodat ze hun werk kunnen doen:  
  
- Accountverwijdering. Als een gebruiker zijn FastComments-account verwijdert, worden zijn opmerkingen schoon gemaakt ongeacht de slotstatus.  
- Tenant / SSO gebruikersopruiming. Zelfde idee voor tenant-niveau gebruikersverwijdering.  
- Geplande automatische verwijdering. Als je een opmerking hebt gepland om op een specifiek tijdstip te worden verwijderd, hoeft de planner zich geen zorgen te maken over slots.  
- Duplicate opruiming. De dedupe-tool verwijdert gesloten duplicaten zonder ceremonie.  
- Moderatorverboden met "verwijder alle opmerkingen van deze gebruiker". Een gebruiker verbannen en zijn geschiedenis opruimen is een enkele opzettelijke actie, dus het verwijdert ook de slots.  
  
Alles wat betreft de widget, de moderatie UI, de openbare API, externe aanroepen - respecteert het slot.  
  
### API Foutvorm  
  
Als je de openbare API aanroept om een gesloten opmerking te bewerken of te verwijderen, krijg je een reactie zoals:  
  
<div class="code">{
    "status": "failed",
    "code": "locked",
    "reason": "Opmerking is gesloten.",
    "translatedError": "Deze opmerking is gesloten en kan niet worden bewerkt of verwijderd. Ontgrendel het eerst."
}</div>  
  
De HTTP-status is 401. Het veld `translatedError` gebruikt de geconfigureerde locatie van jouw tenant en eventuele aangepaste vertaling die je hebt ingesteld.  
  
### Conclusie  
  
Kleine verandering, maar het sluit een kloof die al een tijdje open was. Gesloten betekent nu echt gesloten.  
  
Proost!  
  
{{/isPost}}