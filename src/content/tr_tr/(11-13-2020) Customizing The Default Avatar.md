---
[category:UI & Customization]

###### [postdate]
# [postlink]Varsayılan Avatarı Özelleştirme[/postlink]

{{#unless isPost}}
Varsayılan avatar resmi artık özelleştirilebilir.
{{/unless}}

{{#isPost}}

### <i class="circle">!</i> Bu Makale Teknik Terimler İçermektedir

#### Giriş

Varsayılan simge, FastComments'ın piyasaya sürüldüğünden beri aynı kalmıştır. Varsayılan profil simgesinin görkemiyle tanışın.

<div class="text-center">
    <img src="https://fastcomments.com/images/unknown-person.png" title="Varsayılan Profil Simgesi" alt="Varsayılan Profil Simgesi" />
</div>

Ancak şimdi, bunu özelleştirebilirsiniz.

#### Kodsuz

Öncelikle, <a href="https://fastcomments.com/auth/my-account/customize-widget" target="_blank">bir özelleştirme kuralı ekleyin veya düzenleyin</a>. Özelleştirme kuralları sadece bir sayfaya, bir alan adına veya tüm hesabınıza uygulanabilir. Profil resmini genel olarak değiştirmek istiyorsanız, URL ID alanını boş bırakabilirsiniz.

"Varsayılan Avatar" bölümüne kadar aşağı kaydırın.

<img 
    src="/images/fc-customize-default-icon-button.png"
    alt="FastComments Hackaday Ayarları"
    class='lozad' />
    
Bir JPG, PNG veya GIF dosyası yüklemek için butona tıklayın. Maksimum boyut 20mb olmalıdır. Resim 100px kareye yeniden boyutlandırılacaktır.

#### Kodla

Varsayılan avatarı barındırmak istiyorsanız ve bunun için halihazırda bir kamu URL'sine sahipseniz, örnekteki gibi kodla tanımlanabilir.

<div class="code">    window.FastCommentsUI(document.getElementById('fastcomments-widget'), {
        tenantId: 'demo',
        defaultAvatarSrc: 'https://example.com/some-100-x-100-image.png'
    });
</div>

Resim kare olmalı ve boyutu 100px kare olmalıdır. Bu sınırlamalara uymak en iyi deneyimi sağlamak için önemlidir.

#### Dikkat Edilmesi Gerekenler

1. Varsayılan profil resmini özelleştirmek yalnızca sitenizi etkiler. Bu, bildirim e-postalarını veya kullanıcı hesaplarını hiçbir şekilde etkilemez.
2. Bu değişiklikten önce oluşturulan yorumlar hala eski profil resmini gösterebilir. Varsayılan profil simgesini ayarladıysanız ve sitenizde eski profil simgesini kullanan birçok yorum gözlemliyorsanız, <a href="https://fastcomments.com/auth/my-account/help" target="_blank">bize bildiriniz</a>.

#### Sonuç Olarak

Bu kılavuzu faydalı ve okunması kolay bulmuş olmanızı umuyoruz. Herhangi bir sorunuz varsa aşağıda yorum yapmaktan çekinmeyin.

Sağlıcakla!

{{/isPost}}