# Bieniek masuje — strona internetowa

Strona mobilnego gabinetu masażu zdrowotnego z Płocka.
Statyczny HTML/CSS/JS — bez frameworka, bez builda. Hostowana na GitHub Pages.

## Struktura

```
index.html      — cała treść strony (jednostronicowa)
css/style.css   — style
js/main.js      — menu, animacje przy przewijaniu
assets/img/     — zdjęcia (z profilu na Facebooku)
assets/favicon.svg
```

Sekcje strony: hero → pas miejscowości → o mnie → usługi/cennik →
jak to działa → opinie → częste pytania (FAQ) → kontakt.
Umawianie wizyt odbywa się telefonicznie (793 250 645) lub przez Messengera —
sekcja „Kontakt" na dole strony.

## Jak edytować FAQ

Pytania i odpowiedzi znajdują się w dwóch miejscach w `index.html` —
w sekcji `<section class="faq" id="faq">` (to, co widać na stronie) oraz
w bloku `<script type="application/ld+json">` typu `FAQPage` w `<head>`
(dane dla Google). Zmieniając treść, zaktualizuj oba miejsca.

## Jak podmienić cennik

Ceny i czasy w sekcji „Usługi i cennik" w `index.html` to **przykłady** —
poszukaj komentarza `<!-- CENNIK: ... -->` i wpisz własne wartości.

## Publikacja zmian

Po każdej zmianie:

```
git add -A
git commit -m "Opis zmiany"
git push
```

Strona odświeży się na GitHub Pages w ciągu ~1 minuty.
