---
[category:API & Development]

###### [postdate]
# [postlink]Yeni Aggregation API Yayınlandı[/postlink]

{{#unless isPost}}
FastComments, müşterilerine esnek ve hızlı bir toplama API'si ile verilerine eşsiz bir erişim sağlamaktadır.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

### Yenilikler

FastComments, müşterilerine esnek bir toplama API'si ile verilerine eşsiz bir erişim sağlamaktadır. Bu API, yorumlarınızı, oylarınızı ve **34 daha fazla kaynağı** saymanıza, araştırmanıza, dilimlemenize ve toplamanıza olanak tanır!

### Örnek - Yorumları E-posta ve Sayfa Bazında Sayma

Örneğin, yeni API ile yorumların sayısını sayfa (`urlId`) ve kullanıcı e-posta (`commenterEmail`) bazında alabiliriz:  

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "urlId", "alias": "urlId" },
        { "op": "distinct", "field": "commenterEmail", "alias": "commenterEmail" }
    ]
}' --header 'Content-Type: application/json'
</div>

Bu, bize şöyle bir sonuç verecektir:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "commenterEmail": {
                "distinctCounts": {
                    "someone@somewhere.com": 1,
                    "someone2@somewhere.com": 1
                }
            }
        },
        {
            "urlId": {
                "distinctCounts": {
                    "some-page": 2
                }
            }
        }
    ],
    "stats": { "scanned": 2 }
}
</div>

Ya da belki onaylı ve onaysız yorumlarımızı saymak istiyoruz:

<div class="code">  curl --request POST --url 'https://fastcomments.com/api/v1/aggregate?tenantId=demo&API_KEY=DEMO_API_SECRET&includeStats=true' --data '{
    "resourceName": "Comment",
    "operations": [
        { "op": "distinct", "field": "approved", "alias": "approved" },
    ]
}' --header 'Content-Type: application/json'
</div>

Bize şunu verir:

<div class="code">  {
    "status": "success",
    "data": [
        {
            "approved": { "distinctCounts": { "true": 2200, "false": 231 } }
        }
    ],
    "stats": { "scanned": 2431 }
}
</div>

API ayrıca sorgu filtreleri ve daha derinlemesine gruplama da destekler.

### Dokümantasyon

[Tam dokümantasyonu burada bulabilirsiniz.](https://docs.fastcomments.com/guide-api.html#aggregate-post)

### Motivasyon

Müşterilerimizin hesaplarını izlemek, raporlar oluşturmak, müşteri taleplerini yönetmek ve ihtiyaç duyduklarında verilerini araştırmak için panolar oluşturmalarını istiyoruz.

### Kim Yararlanır & Sınırlamalar

Tüm FastComments müşterileri API'ye erişim hakkına sahiptir. Kullanımınız, satın aldığınız pakete bağlı olarak değişen mevcut API kredilerinize dayanarak sınırlıdır.

### Sonuç Olarak

Tüm büyük sürümlerde olduğu gibi, bu değişiklikleri optimize etmek, test etmek ve düzgün bir şekilde yayınlamak için zaman ayırabildiğimiz için mutluyuz. Aşağıda herhangi bir sorun keşfederseniz bize bildirin.

Şerefe!

{{/isPost}}

---