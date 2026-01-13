---
[category:UI & Customization]
###### [postdate]

# [postlink]FastComments Krijgt een Nieuwe Uiterlijk[/postlink]

{{#unless isPost}} FastComments is bijgewerkt. Leer meer over de update en hoe je deze kunt verkrijgen. {{/unless}}

{{#isPost}}

### <i class="circle">!</i> Dit Artikel Bevat Technisch Veelgebruikte Taal

### Een Nieuwe Uiterlijk

Tot vandaag is het uiterlijk en de ervaring van de FastComments comment widget slechts geleidelijk geëvolueerd. Vandaag brengen we een
hele nieuwe versie uit!

Bekijk de vergelijking hieronder (sleep de schuifregelaar om te vergelijken):

<div class="text-center">
    <div class="screenshot-comparison twentytwenty-container">
      <img src="images/fc-redesign-old.png" />
      <img src="images/fc-redesign-new.png" />
    </div>
</div>

### Bestaande Klanten

Aangezien een groot deel van onze gebruikers de comment widget aanpast, hebben we de nieuwe UI volledig gescheiden gehouden. Je zou geen
wijzigingen moeten zien totdat je bent gemigreerd.

### Wie Krijgt Het

Nieuwe klanten die zich vanaf vandaag aanmelden, krijgen automatisch het nieuwe ontwerp. Al onze frameworks, bibliotheken en
plug-ins zijn bijgewerkt om de nieuwe versie van de FastComments comment widget te integreren.

### Einde Ondersteuning Voor Vorige Versie

We stellen momenteel geen einde van de vorige versie van de comment widget in. Dit betekent niet dat we dit in de toekomst niet zullen
aankondigen. Echter, wanneer we dat doen, zullen we een redelijke termijn geven (6 - 12 maanden van aankondiging tot stopzetting).

Onze geautomatiseerde test suite is bijgewerkt om verschillende versies van de comment widget te ondersteunen, zodat de vorige versie
nog steeds continue geautomatiseerde tests ontvangt.

### Donkere Modus & Andere Functies

Het nieuwe ontwerp ondersteunt de donkere modus, net zoals de oorspronkelijke comment widget. Alle functievlaggen en instellingen zijn gemigreerd.

Wat betreft de Donkere Modus, met de oude comment UI werden de middelen voor de Donkere Modus altijd geladen tijdens het laden van de pagina, zelfs als ze
niet werden gebruikt. Dit was ongeveer 2kb extra die altijd naar de cliënt werd gedownload - zelfs als het niet nodig was.

De nieuwe versie van de comment widget haalt deze middelen, inclusief styling, alleen op indien nodig.

### Standaard Avatar

De standaard avatar die in de nieuwe UI wordt gebruikt, is anders. Bij de migratie zal de standaard avatar die in het hele product in het beheerderspaneel en alle
notificatiemails wordt gebruikt, ook worden bijgewerkt.

### Gevolgen Voor Aanpassingsregels

We zijn ons ervan bewust dat wanneer we stylingwijzigingen aanbrengen in de publiek beschikbare comment widget, we de aanpassingen van onze klanten
kunnen verstoren. Maak je geen zorgen, we hebben je gedekt en hebben door ieders aangepaste widget styling gekeken om ervoor te zorgen dat het
niet is teruggevallen. Als je echter problemen ondervindt, laat het ons dan weten.

### Gevolgen Voor Prestaties

De totale grootte van de comment widget is toegenomen van 15.4kb naar 17.4kb. Terwijl we denken dat een lichte toename in bundelgrootte
voor hoeveel beter de UI eruitziet het waard is, hebben we maatregelen gepland om dit weer naar beneden te krijgen.

Over het algemeen laad de nieuwe UI sneller, aangezien meer middelen nu samen zijn gebundeld, wat resulteert in minder aanvragen.

### Hoe te Migreren

#### Via Ondersteuning

Neem eenvoudig contact op met je ondersteuningsvertegenwoordiger, of begin het gesprek [hier](https://fastcomments.com/auth/my-account/help).

#### WordPress

Als je **WordPress** draait, upgrade dan eenvoudig naar de nieuwste versie en werk eventuele aangepaste styling bij die je hebt.

#### Aangepaste Integraties

Als je de **VanillaJS** comment widget gebruikt, verander dan eenvoudig:

        <script src="https://cdn.fastcomments.com/js/embed.min.js"></script>

In:

        <script src="https://cdn.fastcomments.com/js/embed-v2.min.js"></script>

Als je de **React, Angular of Vue** bibliotheken gebruikt, upgrade dan eenvoudig naar versie 2.

### Enkele Nerdy Statistieken

Vanaf conceptie, ontwerp en implementatie was dit een project van twee maanden dat zich uitstrekte over **100+ bestanden** en meer dan **negen duizend regels code** veranderde.

We hebben ook ons build-systeem volledig vernieuwd om een gedeelde codebasis tussen versies van de comment widget te kunnen hebben. Dit systeem stelt ons in staat om compileertijduitdrukkingen te gebruiken om alleen code voor de juiste versie van de
UI op te nemen, waardoor de grootte van de widgetbundel wordt verlaagd.

### Vooruitdenken

Het vorige ontwerp heeft ons gediend van 2019 tot medio 2021. We hopen dat deze nieuwe uitstraling ons verder de toekomst in draagt, en onze
nieuwe infrastructuur voor het beheren van meerdere versies van de comment UI zal FastComments in staat stellen om te groeien zonder onderbreking van onze
klantenbasis in de loop van de tijd.

Vrolijk commentaar!

<link href="image-compare/twentytwenty.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> 
<script src="image-compare/jquery.twentytwenty.js"></script> 
<script src="image-compare/jquery.event.move.js"></script>
<script src="image-compare/new-look.js"></script>

{{/isPost}}

---