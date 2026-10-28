[category:Features]
[category:UI & Customization]

###### [postdate]
# [postlink]評論現在已為每位讀者翻譯[/postlink]

{{#unless isPost}}
FastComments 現在可以翻譯評論本身，而不僅僅是其周圍的小工具。您可以在每個站點或每個頁面上啟用它，無論是自動翻譯還是使用翻譯按鈕，所有讀者都能以自己的語言看到對話，原文只需點擊一次即可查看。
{{/unless}}

{{#isPost}}

### 新功能

FastComments 已經翻譯成二十八種語言有一段時間了，因此按鈕、標籤和電子郵件已經以讀者的語言顯示。  
但評論沒有。  
在英文頁面上的西班牙語評論仍然是西班牙語，任何不懂的人都會直接捲過去。

此版本新增 **評論翻譯** 功能。啟用後，以非讀者語言撰寫的評論會顯示翻譯內容，下面會有一行小字說明來源，並提供 **Show original** 連結以查看實際原文。

<img src="images/fc-comment-translation-auto.png" alt="An English reader seeing a Spanish comment translated, with a Translated from Spanish line and a Show original link under it" title="Automatic Comment Translation" class="lozad" />

### 兩種模式

**自動** 會提前翻譯。每則其他語言的評論都會以翻譯後的形式呈現，讀者若想查看原文可切換回去。此模式適用於真正以兩種或多種語言撰寫的社群，讓所有人閱讀相同的對話。

**手動** 會在每則評論下加入 **Translate** 連結，直到點擊前不會執行翻譯。讀者自行決定哪些評論值得翻譯，未被點擊的評論不會產生費用。若評論已是讀者的語言，會直接顯示而不會假裝翻譯。

<img src="images/fc-comment-translation-manual.png" alt="Manual mode, where a Spanish comment has been translated on click and an English comment reports it is already in the reader's language" title="Manual Comment Translation" class="lozad" />

在兩種模式下，讀者的語言皆為小工具目前顯示的語言：您在自訂規則中設定的 **Locale / Language**，或是訪客的瀏覽器語言（若未設定）。訪客無需安裝、註冊或設定任何東西。無論小工具是嵌入在您的頁面、像 Google Sites 這樣的網站建構器內，或是獨立的 FastComments 評論頁面，都會以相同方式運作。

### 啟用方式

打開您的 <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">小工具自訂</a>，在 **Locale / Language** 之下找到 **Comment Translation**，然後選擇自動或手動。預設為關閉。

由於它屬於自訂規則，您可以依需求設定範圍：整個網站、單一網域，或是您知道受眾混合的單一頁面。這是伺服器端設定，無法僅透過小工具的 JavaScript 設定來開啟。

### 費用說明

翻譯由語言模型產生，並以 LLM 代幣計費，與 [AI Agents](/(04-27-2026)-fastcomments-launches-ai-agents.html) 使用相同的計量方式。任何方案皆可啟用此功能。

每則評論會針對每種語言翻譯一次，且翻譯結果會與評論一起儲存。若有一千名西班牙語讀者開啟同一篇英文討論串，翻譯工作只會執行一次。一般評論大約是幾百個代幣，依 Flex 價率計算約為半分錢。若作者或審核者編輯評論，已儲存的翻譯會被丟棄，下一次檢視時會重新翻譯，避免讀者看到已不存在的文字翻譯。

手動模式在有人點擊之前不會產生任何費用。

### 細節說明

翻譯後的文字會被視為使用者自行輸入的評論。它會經過與原文相同的清理與連結規則，因此翻譯不會包含原文無法包含的內容。提及與標籤會保留其格式。

過長的評論，或是語言無法自信偵測的評論，會保留原文不做翻譯。翻譯評論下方的語言說明也會以讀者的語言呈現，因此西班牙語讀者看到英文評論時會看到「Traducido del inglés」與「Mostrar original」。

### 額外負擔

此新功能的程式碼僅在啟用時才會載入，不會拖慢其他使用者的評論小工具。

### 文件說明

<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#comment-translation" target="_blank">評論翻譯指南</a>  
涵蓋兩種模式、規則設定與計費方式。  
<a href="https://docs.fastcomments.com/guide-customizations-and-configuration.html#locale" target="_blank">語系指南</a>  
說明小工具語言的最初選擇方式。

### 結論

此功能源自一個社區協會，居民以英語與西班牙語留言，他們希望兩個語言的群體能閱讀同一討論串，且不需要任何人安裝瀏覽器擴充功能或註冊任何服務。

如果您管理的社群使用多種語言，請啟用此功能並在下方告訴我們翻譯的效果如何。

敬祝順心！

{{/isPost}}