---
[category:Features]
[category:API & Development]
[category:Integrations]
###### [postdate]
# [postlink]FastComments Artık MCP Sunucusuna Sahip[/postlink]

{{#unless isPost}}
Artık Claude Code, Claude Desktop, Cursor veya diğer herhangi bir Model Context Protocol istemcisini FastComments'a yönlendirebilir ve API'mizi doğrudan çağırabilirsiniz.
{{/unless}}

{{#isPost}}

### Yenilikler

FastComments artık barındırılan bir [Model Context Protocol](https://modelcontextprotocol.io/) (MCP) sunucusu ile geliyor. MCP, AI kodlama asistanlarının sunucu tarafı araçlarını çağırmak için kullandığı açık standarttır. İstemcinizi tek bir URL'ye yönlendirerek yorumlarınızı listeleyebilir, moderasyon yapabilir, SSO kullanıcılarını yönetebilir, widget'ları yapılandırabilir ve [API](https://docs.fastcomments.com/guide-api.html)'nin yaptığı her şeyi gerçekleştirebilirsiniz.

### Nerede Bulunur

FastComments kontrol panelinizden **Entegre, ardından MCP Sunucusu** seçeneğini açın veya doğrudan şu adrese gidin: 
[fastcomments.com/auth/my-account/mcp-setup](https://fastcomments.com/auth/my-account/mcp-setup). 
İstemcinin kullanmasını istediğiniz API anahtarını seçin ve sayfa, Claude Code ve Claude Desktop / Cursor yapılandırma dosyaları için önceden doldurulmuş bir URL ile kopyala-yapıştır parçaları oluşturur.

### Claude Code

Kaydetmek için bir komut:

    claude mcp add --transport http fastcomments 'https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY'

Sonra bir oturum içinde `/mcp` komutu bağlantıyı gösterir ve sunucunun sunduğu her aracı listeler. "blog/launch'taki son 20 işaretlenmiş yorumu göster", "bu yorumcuyu tüm sitelerimde engelle", veya "son bir haftadaki spam yakalama oranımız nedir" gibi şeyler sorabilirsiniz. Claude, doğru araç çağrısını yönlendirecektir.

### Claude Desktop ve Cursor

İstemcinin MCP yapılandırmasına bu bloğu ekleyin (`claude_desktop_config.json` için Claude Desktop, `mcp.json` için Cursor):

```json
{
  "mcpServers": {
    "fastcomments": {
      "type": "http",
      "url": "https://fastcomments.com/mcp?tenantId=YOUR_TENANT_ID&API_KEY=YOUR_API_KEY"
    }
  }
}
```

İstemciyi yeniden başlatın ve sunucu, yapılandırmış olduğunuz diğer tüm MCP sunucularının yanında görünecektir.

### Güvenlik

API anahtarı URL'ye gömülüdür, bu yüzden URL'yi bir gizli bilgi olarak kabul edin. Bunu halk sohbetlerinde, ekran görüntülerinde veya commitlerde yapıştırmayın. Bir anahtar ifşa olursa, [API Anahtarları sayfasından](https://fastcomments.com/auth/my-account/api-secret) anahtarı değiştirebilir ve kurulum sayfasından parçayı yeniden kopyalayabilirsiniz. Bir ajanın ne yapabileceğini sınırlamak için, her asistan için özel bir API anahtarı oluşturun ve doğru alana kilitleyin. Kurulum sayfasındaki açılır menü, parçaların hangi anahtarı kullanacağını bir tıklama ile değiştirmenize olanak tanır.

### Neden Bunu Geliştirdik

İnsanlar, SaaS ürünleriyle etkileşimde bulunmak için giderek daha fazla ajans araçları kullanıyor. Moderasyon sırasını yönetmek için bir Claude veya Cursor oturumu kuran ya da iğnelemeye değer dizileri ortaya çıkarmak için özel bir ajan oluşturan herkes, artık tamamen sarmalayıcı katmanı atlayabilir.

### Sonuç Olarak

Kontrol panelinizde [Entegre, sonra MCP Sunucusu](https://fastcomments.com/auth/my-account/mcp-setup) seçeneğini açın, favori MCP istemciniz için parçayı kopyalayın ve yayına geçin. Tam dökümantasyon [LLM Kit kılavuzunda](https://docs.fastcomments.com/guide-llm-kit.html) mevcuttur.

Her zamanki gibi, karşılaştığınız bir sorun olursa aşağıda bize bildirin.

Selamlar!

{{/isPost}}