# **Takım İsmi**

Takım 134

# Ürün İle İlgili Bilgiler

## Takım Elemanları

- Sıla KARATAŞ: Product Owner
- Samet DÖNMEZ: Scrum Master
- Ceren KARABAĞ: Team Member/Developer
- Anıl DİNÇ: Team Member/Developer
- Burak BAŞODA: Team Member/Developer


## Ürün İsmi

--Bereket AI--

## Ürün Açıklaması

- Evdeki mevcut malzemeleri, bozulma sürelerini ve haftalık bütçeyi kullanarak en az maliyetle en az gıda israfı oluşturacak yemek planı çıkaran yapay zeka destekli mobil mutfak planlayıcısı. YZTA Bootcamp projesi.

## Ürün Özellikleri

- Evdeki mevcut malzemeleri serbest metin veya hızlı seçim listesiyle girme
- Malzemelerin bozulma sürelerine göre önceliklendirilmesi (önce bitecek olan kullanılır)
- Haftalık bütçeye göre en düşük maliyetli yemek planı oluşturma
- Kişi sayısına göre porsiyon/miktar otomatik ayarlama
- Alerji ve diyet kısıtlamalarına (glutensiz, vejetaryen vb.) uygun filtreleme
- Eksik malzemeler için otomatik alışveriş listesi ve tahmini fiyat çıkarma
- Her plan için "neden bu seçildi" açıklaması gösterme (maliyet, israf riski gibi)
- Beğenilmeyen tarifler için alternatif öneri isteme
- Geçmiş tercihleri (sevmediği yemekler, sık kullanılan malzemeler) hatırlama
- Haftalık plan sonunda "ne kadar uyguladın" geri bildirimi alma

## Hedef Kitle

- Bütçesini dikkatli yönetmek isteyen haneler
- Yoğun çalışan, yemek planlamaya vakit ayıramayan bireyler/çiftler
- Gıda israfını azaltmak isteyen çevre bilinçli kullanıcılar
- Kalabalık aileler (3+ kişi, haftalık alışveriş planlaması yapanlar)
- Öğrenciler ve sınırlı bütçeyle yaşayan genç yetişkinler
- 20 - 55 yaş arası, mutfakla ilgilenen ama karar yorgunluğu yaşayan kullanıcılar

## Product Backlog URL

[Jira Board](https://yzta-team-134.atlassian.net/jira/core/projects/Y1/board?filter=&groupBy=none)

---

# Sprint 1

- **Backlog düzeni ve Story seçimleri**: Backlog'umuz, 2 günlük kısıtlı süre göz önünde 
bulundurularak öncelik sırasına göre düzenlenmiştir. Sprint 1'de hedef, uçtan uca akışın 
(kiler girişi → mock plan → alışveriş listesi) mobilde görülebilir hale getirilmesidir. 
Bu nedenle gerçek AI optimizasyonu yerine mock/statik veri kullanan story'ler önceliklendirilmiştir. 
Story'ler task'lere bölünmüştür: Jira Pano'da "Yapılacaklar / Devam Ediyor / Tamam" 
sütunlarında her task ayrı bilet olarak, `sprint-1` etiketiyle takip edilmektedir.

- **Daily Scrum**: Daily Scrum toplantıları zamansal sebeplerden ötürü [Slack/WhatsApp] 
üzerinden yapılmasına karar verilmiştir. Daily Scrum toplantı notları örneği Readme'de 
paylaşılmaktadır: [Sprint 1 Daily Scrum Notları](link)

- **Sprint board update**: Sprint board screenshotları:
  ![Board 1](link-to-screenshot-1)
  ![Board 2](link-to-screenshot-2)

- **Ürün Durumu**: Sprint 1 sonunda elde edilen çıktı — mobil PWA'da onboarding, kiler 
girişi ve mock plan sonucu ekranlarının çalışır hali. Ekran görüntüleri:
  ![Onboarding Ekranı](link)
  ![Kiler Girişi Ekranı](link)
  ![Mock Plan Sonucu](link)

- **Sprint Review**: 
Alınan kararlar: Gerçek AI optimizasyon motoru (OR-Tools entegrasyonu) ve canlı fiyat 
verisi bağlantısı Sprint 2'ye ertelenmiştir; MVP'nin mock veriyle akışı doğrulaması 
yeterli görülmüştür. Fiyat verisi için canlı API yerine statik tablo kullanılmasına 
karar verilmiştir (marketfiyati.org.tr API riski nedeniyle). Çıkan ürünün akışında 
problem görülmemiştir. Sprint Review katılımcıları: [Sıla KARATAŞ- Samet DÖNMEZ- Ceren KARABAĞ- Anıl DİNÇ- Burak BAŞODA]

- **Sprint Retrospective:**
  - Görev dağılımının rol bazlı netleştirilmesi kararı alınmıştır (PO, Scrum Master, 
    Data Scientist, AI Engineer, Full-Stack)
  - Sprint süresinin kısa olması nedeniyle bir sonraki sprintte daha gerçekçi tahmin 
    puanlaması yapılmasına karar verilmiştir
  - Veri hazırlığı (tarif, fiyat) ile agent geliştirmenin paralel ilerlemesi için 
    Data Scientist ve AI Engineer arasında veri formatının (JSON şeması) baştan 
    netleştirilmesi gerektiği görülmüştür
---

# Sprint 2


---

# Sprint 3

---
