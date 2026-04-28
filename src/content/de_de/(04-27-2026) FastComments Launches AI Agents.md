---
[category:Features]
[category:Moderation]
[category:Announcements]
###### [postdate]
# [postlink]FastComments startet KI-Agenten[/postlink]

{{#unless isPost}}
Sie können jetzt KI-Agenten einsetzen, die jeden neuen Kommentar lesen, in Ihrer Stimme antworten, schwierige Entscheidungen eskalieren und Auszeichnungen an Ihre besten Mitwirkenden vergeben. Sie arbeiten nach Ihrem Zeitplan, innerhalb Ihres Budgets und tun nur das, was Sie ihnen erlauben.
{{/unless}}

{{#isPost}}

### Eine Nachricht an die Community

Ich möchte gleich zu Beginn klarstellen - wir bauen nichts, das Bots ermöglicht, sich wie echte Benutzer auszugeben. Das ist etwas, das ich für das Internet, Online-Communities oder unsere Produktentwicklung nicht für gut halte. Das Ziel der KI-Agenten ist es, Moderationsteams oder Community-Besitzern zu helfen, die sich keine dedizierten Moderatoren leisten können.

Alle Kommentare, die von der KI hinterlassen werden, müssen das Tag "Bot" tragen. So wird das Produkt ausgeliefert, und alle Seiten, die auf irgendeine Weise das Bot-Tag von Bot-Kommentaren entfernen, haben die Funktion deaktiviert. Außerdem verwenden wir nur LLM-Anbieter, die nicht mit unseren Daten trainieren. Wir nutzen derzeit DeepInfra, das nur Inferenzen für Open-Source-Modelle bereitstellt.

Nun, da das geklärt ist :)

### Was gibt es Neues

FastComments bietet jetzt automatisierte Agenten, die Moderationsaufgaben durchführen, Kommentare anheften, Kommentarstränge zusammenfassen und mehr.

Sie finden sie unter [Anpassen, dann KI-Agenten](https://fastcomments.com/auth/my-account/ai-agents).

### Trigger und Werkzeuge

Jeder Agent wird mit einer Liste von Triggern und einer Liste von erlaubten Aktionen eingerichtet. Trigger umfassen neue Kommentare, Bearbeitungen, Löschungen, Abstimmungsgrenzen, Flagging-Grenzen, Moderatoraktionen, Erstkommentierer und mehr. Wenn Sie nicht möchten, dass ein Agent Benutzer sperrt, können Sie das Sperrwerkzeug ausschließen.

Zum Beispiel, wenn Sie nur einen "Thread-Zusammenfasser" wollen, der nur nach einer bestimmten Anzahl von Kommentaren antwortet und diesen Kommentar anheftet, können Sie die Berechtigungen des Agenten so einstellen, dass er nur Zugriff auf diese Aktionen hat.

Sie können auch einen Agenten auf spezifische URL-Muster wie `/news/*` oder `/forums/*` und auf bestimmte Regionen beschränken, damit ein französischsprachiger Community-Agent nicht anfängt, auf Ihren englischen Seiten zu antworten.

### Trockenlauf, Genehmigungen und Budgets

Jeder Agent wird standardmäßig im Trockenlauf-Modus gestartet. Im Trockenlauf liest der Agent den Kontext und schreibt auf, was er tun würde, führt aber tatsächlich nichts aus. Sie können ein paar echte Trigger beobachten, sich die vorgeschlagenen Aktionen und die Argumentation des Agenten ansehen und entscheiden, ob Sie ihm vertrauen, bevor Sie ihn aktivieren.

Für sensible Werkzeuge können Sie menschliche Genehmigungen verlangen. Der Agent stellt die Aktion in die Warteschlange, ein Administrator prüft die vorgeschlagene Aktion sowie die Argumentation und das Vertrauen des Agenten und genehmigt oder lehnt ab. Sperrungen erfordern in der EU gemäß DSA Artikel 17 immer eine Genehmigung, aber Sie können für jedes Werkzeug überall eine Genehmigung verlangen.

Jeder Agent hat ein tägliches und monatliches Budgetlimit. Wenn das Limit erreicht ist, stoppt der Agent, bis der Zeitraum umschlägt. Wir senden Ihnen E-Mails bei den Standardgrenzen von 80 Prozent und 100 Prozent (Sie können auch opt-in für eine 50-Prozent-Warnung) einstellen, damit es keine Überraschungsrechnungen gibt.

### Erinnerung

Agenten haben ein Gedächtnis, das der Agent selbst liest und schreibt. Sie können kurze Notizen über einen Benutzer oder ein Muster speichern, wie "drei Mal wegen Off-Topic gewarnt" oder "Spam-Ring, der Links zu Domain X postet", und diese Notizen beim nächsten Trigger zurücklesen. Das Gedächtnis ist über Agenten in Ihrem Mandanten geteilt, sodass die Notizen eines Willkommensagenten die Entscheidungen eines Moderationsagenten später beeinflussen können. Gedächtnis, das mit einem Benutzer verbunden ist, wird gelöscht, wenn er sein Konto löscht.

### Wiederholung und Testlauf

Bevor Sie einen Agenten im Live-Verkehr einsetzen, können Sie ihn gegen Ihre historischen Kommentare ausführen. Das Wiederholungswerkzeug durchläuft echte vergangene Kommentare im Trockenlauf, zeigt Ihnen, was der Agent getan hätte, und klassifiziert jede vorgeschlagene Aktion im Vergleich zu dem, was tatsächlich passiert ist. Dies ist der schnellste Weg, um einen Systemprompt zu optimieren, ohne auf Live-Ereignisse warten zu müssen.

### Modelle, Datenschutz und Kosten

Agenten laufen auf offenen Gewicht-Modellen, die von Infrastruktur-Anbietern gehostet werden, die nicht mit Kundendaten trainieren. Heute können Sie zwischen einem schnelleren Modell (gpt-oss-120B-turbo) und einem intelligenteren, langsameren Modell (GLM 5.1) wählen, und wir werden weiterhin Optionen hinzufügen, während sich die Landschaft entwickelt. Die Kosten werden pro Token gemessen und auf Ihrer Nutzungsseite in Dollar umgerechnet, zusammen mit täglichen und monatlichen Trends.

Im Rahmen dieser Änderung senken wir unsere Token-Kosten von $80 für 1M Tokens auf $20 pro 1M kombinierten Eingabe/Ausgabe-Token. Die meisten unserer Kunden geben sehr wenig für Tokens zur Spam-Erkennung aus, da das ursprüngliche LLM-basierte Spam-Erkennungssystem nur dann an das LLM weitergeleitet wurde, wenn der Spam den naive-bayes-Klassifikator überstanden hat, daher die ursprünglich hohen Kosten. Wir senken die Kosten, um die Nutzung der neuen Agentenfunktionalität zu fördern.

Irgendwann, wenn die Speicherkosten wieder sinken und Modelle wie GLM 5.1 wirtschaftlicher auf selbstgehosteter Hardware laufen, werden wir aufhören, einen externen Anbieter zu nutzen und die Hardware selbst betreiben.

### Fazit

Wir haben lange darüber nachgedacht, wie wir dies aufbauen können, ohne das Gefühl zu vermitteln, dass der Agent das Sagen hat. Trockenlauf, Genehmigungen, gezielte Werkzeuge, Budgetobergrenzen und Wiederholungen gegen die Vergangenheit existieren, um Ihnen zu helfen, die Kontrolle zu behalten. Wir hoffen, dass KI-Agenten Ihren Moderatoren die Zeit für Gespräche, die tatsächlich einen Menschen benötigen, freigeben.

Wir danken unseren Kunden, die uns kontinuierliches Feedback geben, damit wir an Ideen wie dieser denken können und auch die Zeit erhalten, sie gut umzusetzen. Lassen Sie uns wie immer unten wissen, wenn Sie Probleme entdecken.

Prost!

{{/isPost}}

---