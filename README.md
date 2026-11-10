# gigapop-privacy

Politika privatnosti za igru **Gigapop** (Next.js 16, statičan export). Politika je na početnoj adresi sajta (`/`).

Spisak igara i `app-ads.txt` za AdMob su na developer sajtu: https://developer-five-iota.vercel.app/
(jedan `app-ads.txt` važi za sve igre na istom AdMob nalogu, zato ga ovde nema).

## Pokretanje na računaru

```
npm install
npm run dev        # http://localhost:3000
npm run build      # gotov sajt u folderu out/
```

Projekat je na OneDrive-u: `node_modules` je veliki (stotine MB), pa ga posle probe slobodno obriši.

## Objava (besplatno, Vercel)

1. vercel.com → **Add New → Project** → izaberi repozitorijum `gigapop-privacy` → **Deploy**
   (Vercel sam prepozna Next.js; ništa ne treba podešavati).
2. Za minut dobiješ adresu, npr. `https://gigapop-privacy.vercel.app/`. To je adresa politike.
3. Tu adresu upiši:
   - u igru: `scripts/config.gd` → `PRIVACY_POLICY_URL` (pa novi build),
   - u Play Console → **Privacy policy**, i u App Store Connect → **Privacy Policy URL**.

Svaka izmena koju pošalješ na GitHub automatski se objavi.

## Prodavnice i AdMob (`app-ads.txt`)

AdMob traži `app-ads.txt` u korenu sajta koji je u prodavnici upisan kao sajt developera. Za Gigapop upiši developer sajt
`https://developer-five-iota.vercel.app/`, ne ovaj:

- Play Console → Store presence → Store settings → Store listing contact details → **Website**
- App Store Connect → **Marketing URL**

## Izmene

- Ime developera, email, adresa developer sajta i datum politike: `lib/site.ts`
- Tekst politike: `app/page.tsx` (kad ga menjaš, promeni i `POLICY_DATE` u `lib/site.ts`)
