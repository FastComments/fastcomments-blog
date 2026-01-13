---
[category:Integrations]
###### [postdate]
# [postlink]Kommentare zu einem BigCommerce-Blog hinzufügen[/postlink]

{{#isPost}}

#### Fügen Sie das Engagement des Publikums zu jeder Seite hinzu
Was wäre, wenn Ihr Publikum auf Ihre Blogbeiträge kommentieren, Fragen stellen und Feedback geben könnte? Jetzt kann es mit FastComments.

#### Anpassbare Themen
Um FastComments zu Ihrem BigCommerce-Shopblog hinzuzufügen, müssen Sie Ihre Themenvorlagen bearbeiten. Wir führen Sie Schritt für Schritt durch den Prozess.

Gehen Sie im BigCommerce-Dashboard zu Storefront -> Meine Themen.

<div class="text-center">
    <img style="vertical-align: top;" src="images/fc-bigcommerce-store-link.png" alt="Store Link" title="Store Link" class="lozad" />
    <img style="vertical-align: top;" src="images/fc-bigcommerce-my-themes.png" alt="Meine Themen Link" title="Meine Themen Link" class="lozad" />
</div>

Unter "Aktuelles Thema" sehen Sie ein Dropdown-Menü mit der Bezeichnung "Erweitert".

<div class="text-center">
    <img src="images/fc-bigcommerce-advanced-dropdown.png" alt="Theme Advanced Dropdown" title="Theme Advanced Dropdown" class="lozad" />
</div>

In diesem Dropdown-Menü ist die erste Option "Theme-Dateien bearbeiten". Wenn diese Option nicht anklickbar ist, müssen Sie zunächst das Thema über "Eine Kopie erstellen" kopieren.

Sobald Sie den Vorlageneditor öffnen können, sehen Sie auf der linken Seite Ihres Browsers einen Datei-Browser. Dies ist ein Datei-Browser für die Vorlagen in Ihrem Thema.

Sie möchten zur HTML-Vorlage navigieren, die einen Blogbeitrag darstellt. Sie befindet sich unter templates/components/blog/post.html, wie hier gezeigt:

<div class="text-center">
    <img src="images/fc-bigcommerce-editor-post-file.png" alt="Position der Editor-Post-Datei" title="Position der Editor-Post-Datei" class="lozad" />
</div>

Ihr FastComments-Code-Snippet, das Sie <a href="https://fastcomments.com/auth/my-account/get-acct-code" target="_blank">hier</a> erhalten können, sollte sofort nach Zeile 48 eingefügt werden, die den Text "&#123;{>components/common/share}&#125;" enthält.

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-script-location.png" alt="Platz zum Einfügen von FastComments" title="Platz zum Einfügen von FastComments" class="lozad" />
</div>

#### Denken Sie daran!
Sie müssen die Domain Ihres Shops zu FastComments hinzufügen, was Sie <a href="https://fastcomments.com/auth/my-account/configure-domains" target="_blank">hier</a> tun können.

#### Fazit
So sollte FastComments auf Ihrem BigCommerce-Blog aussehen. Prost!

<div class="text-center">
    <img src="images/fc-bigcommerce-blog-post-example.png" alt="FastCommence auf einem BigCommerce-Blog" title="FastCommence auf einem BigCommerce-Blog" class="lozad" />
</div>

{{/isPost}}

---