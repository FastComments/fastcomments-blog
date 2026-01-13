---
[category:Features]

###### [postdate]
# [postlink]Eenvoudige ondersteuning voor codefragmenten met FastComments[/postlink]

Sommige van onze klanten hebben software-ontwikkelingsgerelateerde sites en blogs. In deze gemeenschappen is het gebruikelijk om codefragmenten te delen. Dit is hoe FastComments dat eenvoudig maakt.

{{#isPost}}

FastComments maakt het delen van code eenvoudig door deze in het opmerkingenvak te plakken. Het kan worden gemengd met andere tekst en afbeeldingen, en vereist niet dat je handmatig enige "code" tags toevoegt om de opmaak toe te voegen. Plak gewoon!

Hier is een snelle demo die het in actie laat zien.

<video src="images/fc-code-snippet-demo.mp4" autoplay controls loop=true alt="Code Fragment Delen Demo" title="Code Fragment Delen Demo"></video>

### Prestatie-implicaties

Het toevoegen van deze functie heeft slechts ~150 bytes aan de client-side widget toegevoegd, aangezien de meeste functionaliteit server-gebonden is. In feite, als je dit bundelt met de recente Markdown functies die zijn toegevoegd, is de widgetgrootte daadwerkelijk gedaald met deze recente functies!

### Dingen om op te merken

Als je een gemeenschap hebt die veel code deelt, moet je overwegen de maximale commentgrootte te verhogen om het delen van codefragmenten gemakkelijker te maken. Dit kan gedaan worden via het tabblad "Aanpassen" van het beheerdersdashboard.

### Code Detectie

Om de grootte van de client-side widget laag te houden, zullen we alleen automatisch geplakte code detecteren voor C en Python-achtige talen (Java, JavaScript, CSS, C++, bijvoorbeeld) die ofwel "{" of spaties gebruiken voor controleflow. Als je vaak een taal gebruikt die niet automatisch wordt gedetecteerd, neem dan contact met ons op.

Om handmatig een blok code in te voegen, schrijf een opmerking zoals: ```<code>(defun someLispCode(1, 2, 3))</code>```. We kunnen ongeveer 150 talen automatisch detecteren.

### Migreren van Bestaande Opmerkingen

Als je wilt migreren naar FastComments en veel opmerkingen hebt met codefragmenten die je correct opgemaakt wilt hebben, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">kunnen we helpen</a>.

### Conclusie

Dat is het! We hebben dit uitgerold naar alle online gemeenschappen op FastComments.

Veel plezier met commentaar geven!

{{/isPost}}