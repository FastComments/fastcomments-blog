[category:Features]
[category:Performance]

###### [postdate]
# [postlink]FastComments artık daha da hızlı[/postlink]

{{#unless isPost}}
Yorum widget'ını yüklerken bir ağ isteğini kaldırdık, bu da yükleme sürelerini daha da azaltıyor.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Jargon İçeriyor

### Yenilikler

FastComments'ın son beş yıl boyunca nasıl çalıştığı, küçük bir betik yüklememiz, iframe'in yüklenmesi, ardından stilini içeren betiğin ve yorumları çizmeye ihtiyaç duyulan her şey için API'ye bir isteğin yapılmasıdır. Bu çok şey gibi görünse de, çoğu sisteme kıyasla oldukça kompakt bir yapıdır!

Ancak, artık bir istek daha az. Widget'ı teslim eden iframe yanıtı aynı zamanda yorumları ve kullanıcının başlangıçta ihtiyaç duyduğu tüm verileri de taşır, böylece son API isteği ortadan kalkar.

API, ona bağımlı olan herkes için geriye dönük uyumluluk sağlamak amacıyla korunmaya devam ediyor.

### Yapılandırılacak Bir Şey Yok

Bunun için bir ayar yok ve yükseltilecek bir sürüm de yok. FastComments'ı script'imizle gömüyorsanız, zaten sahip olduğunuz şey bu.

Sayfanız her iki durumda da etkilenmez. Widget hâlâ bir iframe içinde yüklenir ve içeriğinizi engellemez, tam olarak önceki gibi.

### Nerelerde Uygulanmaz

Birkaç yol bunu kullanmaz ve her zaman olduğu gibi davranır:

- Arama motoru tarayıcıları, yorumları zaten bir iframe yerine doğrudan sayfaya render eder
- Kullanıcı etkinlik akışları ve etiket filtreleme, farklı uç noktalardan okur

### Sonuç Olarak

Platformumuzu kullanmaya devam etmenizi ve yaptığımız iyileştirmelerin değer kattığını umarız. :)

Sağlıcakla!

{{/isPost}}

---