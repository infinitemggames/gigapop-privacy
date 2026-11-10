# gigapop-privacy

Sajt za igre developera Nemanje Maslakovića (Next.js 16, statičan export). Za svaku igru: stranica i politika privatnosti.
U korenu sajta je `app-ads.txt` za AdMob (jedan za sve igre).

| Adresa | Šta je |
|---|---|
| `/` | početna, spisak igara |
| `/gigapop/` | stranica igre Gigapop |
| `/gigapop/privacy/` | **politika privatnosti** (link za Google Play, App Store i dugme u igri) |
| `/app-ads.txt` | AdMob `app-ads.txt` |

## Pokretanje na računaru

```
npm install
npm run dev        # http://localhost:3000
npm run build      # gotov sajt u folderu out/
```

Projekat je na OneDrive-u: `node_modules` je veliki (stotine MB), pa ga posle probe slobodno obriši.

## Objava (besplatno, Vercel)

1. vercel.com → Sign up with GitHub → **Add New → Project** → izaberi repozitorijum `gigapop-privacy` → **Deploy**
   (Vercel sam prepozna Next.js; ništa ne treba podešavati).
2. Za minut dobiješ adresu, npr. `https://gigapop-privacy.vercel.app`. Proveri:
   - `https://gigapop-privacy.vercel.app/gigapop/privacy/`
   - `https://gigapop-privacy.vercel.app/app-ads.txt`
3. Te adrese upiši:
   - u igru: `scripts/config.gd` → `PRIVACY_POLICY_URL` (pa novi build),
   - u Play Console: **Privacy policy** = adresa politike, **Website** = adresa sajta (zbog `app-ads.txt`).

Svaka izmena koju pošalješ na GitHub automatski se objavi. Sajt može i na Netlify / GitHub Pages
(`npm run build`, pa se objavi folder `out/`). Ako kasnije kupiš domen, povežeš ga u
Vercel → Settings → Domains; tada promeni adrese u igri i u prodavnicama.

## Izmene

- Ime developera, email i spisak igara: `lib/site.ts`
- Tekst politike: `app/gigapop/privacy/page.tsx` (promeni i `policyDate` u `lib/site.ts`)
- Kad igra izađe, upiši link prodavnice u `lib/site.ts` (`googlePlay`, `appStore`)
- Nova igra: dodaj je u `GAMES` u `lib/site.ts` i napravi `app/<ime>/page.tsx` i `app/<ime>/privacy/page.tsx`
  (kopija od gigapop)
