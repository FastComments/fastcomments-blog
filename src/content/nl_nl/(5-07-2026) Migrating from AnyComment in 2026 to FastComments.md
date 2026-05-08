---
[category:Migration]
###### [postdate]
# [postlink]Migreren Van AnyComment in 2026 Naar FastComments[/postlink]

{{#unless isPost}}
Lees deze post om te zien hoe je volledig kunt migreren van AnyComment naar FastComments in 2026.
{{/unless}}

{{#isPost}}

We hebben een aantal klanten gehad die vroegen naar de migratie van AnyComment in 2026.

## AnyComment Leeft Binnen WordPress

AnyComment is een WordPress-plugin. In tegenstelling tot standalone platforms zoals Disqus of Hyvor Talk, draait het niet op een eigen backend - je opmerkingen worden rechtstreeks in je WordPress-database opgeslagen, in dezelfde `wp_comments` tabel die de kern van WordPress gebruikt. Dit is geweldig nieuws voor migratie: er is geen aparte AnyComment-export om te regelen, en ook geen derde-partij-server om mee te coördineren. Je data staat al op je eigen server.

Dat betekent dat de standaard FastComments WordPress-migratiestroom AnyComment zonder extra stappen afhandelt.

## Optie 1: De FastComments WordPress Plugin (Aanbevolen)

De gemakkelijkste weg is om de <a href="https://wordpress.org/plugins/fastcomments/" target="_blank">FastComments WordPress-plugin</a> te installeren. De plugin begeleidt je bij het koppelen van je WordPress-installatie met FastComments en kopieert je bestaande opmerkingen automatisch over. Er is niets dat je handmatig hoeft te downloaden of te uploaden. De data wordt van je WordPress-database naar onze servers gekopieerd, zodat dit ook de belasting van je servers vermindert zodra de migratie is voltooid.

Bijna alle migraties zijn binnen enkele minuten voltooid.

Nadat de data is overgezet, deactiveer je AnyComment. Opmerkingen worden voortaan bediend door FastComments, en de plugin houdt je WordPress-database in sync als een backup (als je die functie inschakelt), zodat je altijd je data bezit.

## Optie 2: WordPress XML Export

Als je liever handmatig migreert, of als je al van WordPress bent verhuisd en alleen een back-up XML hebt, gebruik dan de ingebouwde export van WordPress.

1. Ga in je WordPress-admin naar **Tools -> Export** en download het XML-bestand.
2. Log in op je FastComments-dashboard en ga <a href="https://fastcomments.com/auth/my-account/manage-data/import" target="_blank">hier om het bestand te importeren</a>.
3. Selecteer **WordPress (.xml)** uit de dropdown en upload je bestand.

Aangezien AnyComment naar `wp_comments` schrijft, is elke AnyComment-thread in dat XML-bestand naast je andere WordPress-opmerkingen. De importer koppelt ze automatisch aan de juiste post.

## Vervangen Van De AnyComment Widget

Als je Optie 1 hebt gebruikt, vervangt de FastComments WordPress-plugin AnyComment al op je site - deactiveer gewoon AnyComment nadat de migratie is voltooid.

Als je Optie 2 hebt gebruikt en je je WordPress-installatie behoudt, installeer dan daarna de FastComments-plugin om de widget-rendering en voortdurende synchronisatie af te handelen. Als je helemaal weggaat van WordPress, voeg dan onze <a href="https://fastcomments.com/install-wizard" target="_blank">install snippet</a> toe op je nieuwe site - we ondersteunen veel front-end frameworks die <a href="https://fastcomments.com/install-wizard" target="_blank">je hier kunt vinden</a>. <a href="https://fastcomments.com/auth/my-account/help" target="_blank">We kunnen daarbij helpen</a>.

## EU

Als je in de EU bent, wil je waarschijnlijk je account aanmaken op <a href="https://eu.fastcomments.com" target="_blank">eu.fastcomments.com</a> zodat je klantgegevens in de EU blijven.

## Samenvatting

1. Installeer de FastComments WordPress-plugin en laat deze je data overkopiëren, **of** exporteer vanuit WordPress als XML en upload deze op de importpagina
2. Deactiveer AnyComment
3. Als je ook van WordPress vertrekt, verwissel dan de widgetcode op je nieuwe site

{{/isPost}}

---