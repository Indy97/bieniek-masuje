# Bieniek masuje — strona internetowa

Strona mobilnego gabinetu masażu zdrowotnego z Płocka.
Statyczny HTML/CSS/JS — bez frameworka, bez builda. Hostowana na GitHub Pages.

## Struktura

```
index.html      — cała treść strony (jednostronicowa)
css/style.css   — style
js/main.js      — menu, animacje, kalendarz rezerwacji
assets/img/     — zdjęcia (z profilu na Facebooku)
assets/favicon.svg
```

## Jak włączyć rezerwację online (Cal.com)

1. Załóż darmowe konto na [cal.com](https://cal.com) (możesz zalogować się kontem Google).
2. Połącz swój Kalendarz Google (Ustawienia → Calendars) — klienci zobaczą
   tylko realnie wolne terminy.
3. Utwórz typ wydarzenia, np. **„Masaż 60 min"** — ustaw czas trwania,
   godziny dostępności i bufor na dojazd (Ustawienia wydarzenia → Limits → Buffer).
4. Skopiuj swój link, np. `bieniek-masuje/masaz-60-min`.
5. W pliku `js/main.js` wpisz go w pierwszej linii konfiguracji:
   ```js
   const CAL_LINK = "bieniek-masuje/masaz-60-min";
   ```
6. Zapisz i wgraj zmiany (commit + push) — kalendarz pojawi się w sekcji
   „Rezerwacja" automatycznie.

Dopóki `CAL_LINK` jest pusty, sekcja rezerwacji pokazuje telefon i Messenger.

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
