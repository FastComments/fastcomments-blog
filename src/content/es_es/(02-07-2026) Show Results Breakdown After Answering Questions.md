---
[category:Funcionalidades]
[category:Calificaciones y Reseñas]
###### [postdate]
# [postlink]Mostrar Desglose de Resultados Después de Responder Preguntas[/postlink]

{{#unless isPost}}
FastComments now lets you show users an aggregated breakdown of all responses after they answer a rating or survey question.
{{/unless}}

{{#isPost}}

### Novedades

When collecting feedback via Star ratings, NPS, Thumbs Up/Down, or Slider questions, you can now show users an aggregated results breakdown immediately after they answer.

Previously, users would answer a question and simply see their selection highlighted. Now, with the new **Mostrar Desglose de Resultados Después de Responder** setting, they see how everyone else on that page has responded.

### Cómo Se Ve

For **Star ratings**, the breakdown shows the average rating with partial-fill stars, a per-star distribution bar chart with percentages, and the total response count.

For **NPS questions**, it displays the NPS score along with Promoter, Passive, and Detractor percentages with color-coded bars.

For **Thumbs Up/Down**, users see the percentage split between thumbs up and thumbs down.

For **Slider questions**, the average value and total response count are shown.

Sub-questions each get their own individual breakdown as well.

### Cómo Habilitarlo

1. Go to the [Personalizar UI](https://fastcomments.com/auth/my-account/customize-widget).
2. Edit your customization rule (or create a new one).
3. Under the question settings, check **Mostrar Desglose de Resultados Después de Responder**.
4. Save.

That's it. The breakdown will appear for users on that page after they submit their answer.

### Rendimiento

The breakdown data is aggregated per-page and cached server-side, so it does not add significant load. When a user submits a new answer, the cache is refreshed so the breakdown reflects the latest data immediately.

### Modo Oscuro

The breakdown fully supports dark mode. When your site uses a dark background, the bars, labels, and text colors adapt automatically.

### En Conclusión

This feature gives users immediate social proof and context after answering, which can increase engagement with your ratings and surveys. It works with all four question types and requires no code changes to enable.

We hope you enjoy this addition. Let us know below if you have any feedback!

Cheers!

{{/isPost}}

---