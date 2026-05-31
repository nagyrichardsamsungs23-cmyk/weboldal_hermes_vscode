# Pannon Volt Weboldal — TODO lista

Utolsó frissítés: 2026.05.31.
Következő ellenőrzés: —

---

## ⚠️ KRITIKUS — Nem működő dolgok

### 1. ~~Kitakart telefonszám a tel: linkekben~~ ✅ KÉSZ (2026.05.31.)
**Hol:** Minden HTML fájl header-jében és a FAB gombban  
**Probléma:** `tel:+363****7052` szerepelt, a böngésző nem tudta tárcsázni  
**Megoldva:** `tel:+36303617052` -re cserélve mind a 13 fájlban
- [x] index.html
- [x] villanyszereles.html
- [x] klímaszereles.html
- [x] okosotthon.html
- [x] napelem-szereles.html
- [x] hoszivattyu.html
- [x] biztonsagtechnika.html
- [x] hibaelharitas.html
- [x] kapcsolat.html
- [x] rolunk.html
- [x] ajanlatkeres.html
- [x] cookie.html
- [x] adatkezeles.html

### 2. WhatsApp és Messenger linkek üresek
**Hol:** Minden oldal FAB buborékjában  
**Probléma:** `<a href="#">` -re mutatnak, nem nyitják meg a chat alkalmazást  
**Teendő:** Valós linkek beillesztése
- [ ] WhatsApp: `https://wa.me/3630...` formátumra cserélni
- [ ] Messenger: `https://m.me/...` formátumra cserélni (vagy Facebook oldal link)

---

## 🔧 TECHNIKAI HIBÁK

### 3. Duplikált CSS szabály
**Hol:** css/style.css, 420-430. sor környéke  
**Probléma:** A `.quote-hero__subtitle` kétszer van definiálva egymás alatt  
**Teendő:** A duplikátum törlése
- [ ] style.css javítása

### 4. Inline JavaScript kiszervezése
**Hol:** hibaelharitas.html  
**Probléma:** ~150 sor JS kód a HTML-be ágyazva  
**Teendő:** Külön js fájlba kiszervezni
- [ ] js/sos-kalkulator.js létrehozása
- [ ] hibaelharitas.html-ből script áthelyezése

### 5. Sitemap URL-encode probléma
**Hol:** sitemap.xml  
**Probléma:** `kl%C3%ADmaszereles.html` — ékezetes karakter kódolva  
**Teendő:** Vagy átnevezni a fájlt ékezet nélkülire, vagy elfogadni
- [ ] Mérlegelni: klímaszereles.html → klimaszereles.html?

---

## 📝 TARTALMI HIÁNYOSSÁGOK (helykitöltők cseréje)

### 6. Rólunk oldal — Lorem ipsum + placeholder adatok
**Hol:** rolunk.html  
**Probléma:** Nincsenek valós nevek, foglalkozások, bemutatkozó szövegek és képek  
**Teendő:**
- [ ] Csapatfotók elhelyezése (kepek/en.jpg, kepek/apa.jpg)
- [ ] [Név] → valós nevek
- [ ] [Foglalkozás] → valós foglalkozások (pl. villanyszerelő, klímaszerelő)
- [ ] Lorem ipsum szövegek cseréje valódi bemutatkozásra ("Kik vagyunk?", "Küldetésünk")

### 7. Kapcsolat oldal — Lorem ipsum + kamu adatok
**Hol:** kapcsolat.html  
**Probléma:** Hamis telefonszám, email, és lorem ipsum cím  
**Teendő:**
- [ ] Telefonszám cseréje: +36 30 000 0000 → valós szám
- [ ] Email cseréje: info@pelda-email.hu → valós email
- [ ] Működési terület címének cseréje
- [ ] Hero szekció lorem ipsum cseréje

### 8. Adatkezelési tájékoztató — Hiányzó cégadatok
**Hol:** adatkezeles.html  
**Probléma:** Nincs kitöltve a cégforma, székhely, adószám  
**Teendő:**
- [ ] Cégforma pontosítása (E.V. / Kft. / Bt.)
- [ ] Székhely cím megadása
- [ ] Adószám megadása
- [ ] Email cím frissítése (info@pelda-email.hu → valós)

### 9. Cookie tájékoztató — Placeholder email
**Hol:** cookie.html  
**Probléma:** info@pelda-email.hu szerepel  
**Teendő:**
- [ ] Email cím cseréje valósra

### 10. SOS oldal — TODO komment az áraknál
**Hol:** hibaelharitas.html  
**Probléma:** JavaScript-ben TODO komment van az árak módosításáról  
**Teendő:**
- [ ] Átnézni, hogy a BASE_PRICE=15000, PRICE_PER_KM=500, PECS_RADIUS_KM=10 megfelelő-e

---

## 🎨 DESIGN HIÁNYOSSÁGOK

### 11. OG Image "Névtelen terv.png"
**Hol:** Minden HTML oldal head-jében  
**Probléma:** A közösségi médiában ez jelenik meg képként — "Névtelen terv" nem profi  
**Teendő:**
- [ ] Renderelt logó vagy professzionális OG kép készítése
- [ ] Fájl átnevezése és link frissítése mind a 13 oldalon

### 12. Nincs cookie consent banner
**Hol:** Az egész oldalon  
**Probléma:** Bár van cookie tájékoztató, nincs felugró elfogadó sáv  
**Teendő:**
- [ ] Cookie hozzájárulás kérő banner hozzáadása (GDPR miatt ajánlott)

---

## 🚀 JÖVŐBELI FEJLESZTÉSEK (gemini_otletek.txt alapján)

- [ ] Referencia / Előtte-Utána galéria (fotók korábbi munkákról)
- [ ] Ügyfélvélemények szekció (Google Értékelések stílusban)
- [ ] "Miért minket válasszon" kiemelés a főoldalon (garanciák pontokban)
- [ ] Hivatalos minősítések, logók megjelenítése
- [ ] Online időpontfoglaló naptár
- [ ] Google Local Business Schema beépítése (SEO-hoz)

---

## 📌 RICHARD ÉSZREVÉTELEI

<!-- Ide írd a saját megjegyzéseidet, Richard! -->
