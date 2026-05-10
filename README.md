# goalplate-legal-site

Static site that hosts GoalPlate's Privacy Policy and Terms of Service at `https://goalplate.app/{privacy,terms}`.

Tiny markdown -> HTML pipeline using `marked`. Hosted on Azure Static Web Apps (Free tier). One source of truth: the markdown files under `src/`.

## Build locally

```bash
npm install
npm run build
```

Output goes to `dist/`. Open `dist/index.html` in a browser to preview.

## Editing legal text

Source markdown lives under `src/`:

| Page | Source |
|---|---|
| `goalplate.app/` | `src/index.md` |
| `goalplate.app/privacy` | `src/privacy/index.md` |
| `goalplate.app/terms` | `src/terms/index.md` |

After editing, run `npm run build` locally to verify, then push to `main`. Azure Static Web Apps will rebuild and deploy automatically.

## Brackets to fill before the first publish

The Privacy Policy and Terms still contain `[BRACKETED]` placeholders. Fill these in `src/privacy/index.md` and `src/terms/index.md` before the first deploy:

- `[YYYY-MM-DD when you publish this]` &mdash; effective date
- `[YYYY-MM-DD]` &mdash; last-updated date
- `[Eric: pick your Azure region ...]` (Privacy Policy section 4) &mdash; e.g. `Canada Central` or `East US`
- `[CHOSEN US ARBITRATION SEAT ...]` (Terms section 17) &mdash; e.g. `Delaware` (consult a lawyer if uncertain)
- Any other `[BRACKETED]` text not listed above &mdash; grep the source files to make sure none are missed

## Bumping the consent version

If you change anything **material** in the Privacy Policy or Terms after the first publish, bump `CURRENT_CONSENT_VERSION` in both:

- `goal-plate-ia-project/backend/data/consent_store.py`
- `goal-plate-ia-project/GoalPlate/src/context/ConsentContext.tsx`

That re-prompts existing users for consent on next app launch. Cosmetic typo fixes don't bump.

## Deploy (one-time setup with Azure Static Web Apps)

1. Create a new GitHub repo (e.g. `goalplate-legal-site`) and push this directory.
2. Azure Portal &rarr; Create resource &rarr; **Static Web App** &rarr; Free plan.
3. Connect the GitHub repo. Build settings:
   - **Build preset:** Custom
   - **App location:** `/`
   - **Output location:** `dist`
   - **Build command:** `npm run build`
4. Azure auto-creates a GitHub Action that runs `npm install && npm run build` and deploys `dist/` on every push to `main`.
5. SWA blade &rarr; Custom domains &rarr; add `goalplate.app` (validate via Cloudflare DNS). Repeat for `www.goalplate.app` if desired.
6. Free auto-renewing SSL via Azure Managed Certificate kicks in within ~5 minutes after validation.

## Multi-language (post-launch)

When ready to translate, add language-suffixed sources alongside the canonical English files:

```
src/privacy/
  index.md       # English (controlling)
  fr.md
  es.md
  de.md
```

Then extend `routes` in `build.js` to render each into `/privacy/fr/index.html`, etc., and link them from the page footer or a language switcher. The "English controls" clause in each translation closes the legal-enforceability gap until a lawyer review.

## Cross-references

- App repo: `goal-plate-ia-project` &mdash; the `[BRACKETED]` originals live in `docs/privacy-policy.md` and `docs/terms-of-service.md` as the historical seed; `src/privacy/index.md` and `src/terms/index.md` here are the copies that get published. Keep them in sync if you ever update the originals.
- Pre-launch infrastructure plan: `goal-plate-ia-project/docs/pre-launch-infrastructure.md` step 5.
