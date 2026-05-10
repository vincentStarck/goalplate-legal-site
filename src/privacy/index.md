# Privacy Policy

> **Status:** DIY draft — version 1.0. Not lawyer-reviewed. Tailored to
> GoalPlate's actual subprocessors and data flows as of 2026-05-04. Replace
> the `[BRACKETED]` placeholders before publishing. Re-prompt consent
> (bump `CURRENT_CONSENT_VERSION` in both `backend/data/consent_store.py`
> and `GoalPlate/src/context/ConsentContext.tsx`) when you change anything
> material in this document.

**Effective date:** [YYYY-MM-DD when you publish this]
**Last updated:** [YYYY-MM-DD]
**Policy version:** 1.0

---

## 1. Who we are

GoalPlate (the "app", "we", "us", "our") is operated by **[LEGAL ENTITY NAME — e.g. "GoalPlate Inc." or your full legal name]**, with a contact address at **[BUSINESS ADDRESS]**. You can reach us at **privacy@goalplate.app**.

This policy explains what personal data we collect about you when you use GoalPlate, how we use it, who we share it with, how long we keep it, and the rights you have over it.

## 2. What data we collect

### Data you give us when you create an account

When you sign in with Apple, Google, or Facebook, the auth provider gives us:

- Your **email address**
- Your **display name** (where the provider exposes it)
- A **stable identifier** (Firebase UID) we use to link your data together internally

We do not see or store your password. With "Sign in with Apple", we receive a private relay email if you choose that option.

### Data you give us by using the app

- **Goal data** — the type, target, deadline, progress check-ins, and AI-generated coaching tips for each goal you create (fitness, budget, sustainability)
- **Fitness profile** (only if you create a fitness goal) — biological sex, birth year, height, weight, activity level. We use these to compute calorie estimates (BMR/TDEE)
- **Recipes** — the prompt you typed, the recipe the AI generated, dietary filters you selected, language, and whether you saved or made it public
- **Meal plans** — the weeks, meal slots, and slot-level details you create
- **Preferences** — language, unit system (metric/imperial), notification times
- **Consent record** — when you accepted these documents, which version, and the IP address of the request (kept as evidence the acceptance happened)
- **Subscription state** — your current tier and any billing issues, received from RevenueCat (RevenueCat sees your Apple/Google purchase events; we receive a summary)

### Data we collect automatically

- **Push tokens** — when you enable notifications, Firebase Cloud Messaging gives us a token for your device so we can send reminders and weekly recaps
- **Diagnostic logs** — Azure Application Insights collects anonymised error reports, request paths, and performance metrics so we can diagnose problems
- **Usage counters** — counts of how many recipes and hero images you've generated this month (used to enforce subscription quotas). These reset monthly and are deleted automatically after 90 days

### Data we do NOT collect

- We do not have advertising trackers in the app
- We do not sell your data to third parties
- We do not access your contacts, photos, or location
- We do not store your payment card details — those stay with Apple, Google, and RevenueCat

## 3. How we use your data

| Purpose | Data used | Legal basis (GDPR) |
|---|---|---|
| Run the service (generate recipes, track goals, store meal plans) | Account, goal, recipe, meal plan, preferences | Performance of the contract you accepted |
| Personalise AI suggestions (tailor recipes to your profile and dietary filters) | Fitness profile, dietary preferences, prompt | Legitimate interest in giving you a useful product |
| Send push notifications you enabled (reminders, weekly recap) | Push token, goal data, preferences | Consent (you can disable per-type in Settings) |
| Bill you for paid tiers | Subscription state from RevenueCat | Performance of the contract |
| Detect and fix bugs, prevent abuse | Diagnostic logs, usage counters | Legitimate interest in keeping the service up |
| Comply with legal requests | Whatever the request specifies | Legal obligation |

We do not use your data for advertising, profiling for credit decisions, or any automated decision that has legal or significant effect on you.

## 4. Who we share your data with (subprocessors)

GoalPlate runs on third-party infrastructure. Each subprocessor sees only the data they need to do their job:

| Subprocessor | What they see | Their purpose | Where |
|---|---|---|---|
| **Microsoft Azure** (Cosmos DB, Functions, Application Insights, Azure OpenAI) | All of your account, goal, recipe, and meal-plan data; recipe prompts and AI completions | Hosting, compute, AI inference | [Eric: pick your Azure region — e.g. Canada Central / East US] |
| **Google Firebase** (Authentication, Cloud Messaging) | Email, Firebase UID, push tokens, sign-in events | Identity and push delivery | Google data centres (multiple regions) |
| **RevenueCat** | A pseudonymous user ID, subscription tier, transaction events from the stores | Subscription management and webhooks | United States |
| **Apple** (Sign in with Apple, App Store) | Apple ID identifier, payment events for App Store purchases | Identity and billing | Apple data centres |
| **Google** (Google Sign-In, Play Store) | Google account identifier, payment events for Play Store purchases | Identity and billing | Google data centres |
| **Meta** (Facebook Login) | Facebook account identifier, when you choose Facebook sign-in | Identity | Meta data centres |

We do not sell your data, lend it, share it for advertising, or transfer it to anyone outside the list above except as described in section 9 (legal requests).

## 5. International transfers

Depending on which Azure region you are routed to and where our subprocessors operate, your data may be processed outside your country (including in the United States and the European Union). When we transfer data out of jurisdictions with stricter rules (e.g. EU/EEA, UK, Quebec), we rely on the standard contractual clauses or the equivalent mechanism each subprocessor publishes.

## 6. How long we keep your data

- **Account data, goals, recipes, meal plans, preferences** — kept until you delete your account. You can delete your account in-app at any time (Settings → Delete my account); we then cascade-delete every record across our systems.
- **Usage counters** — automatically deleted 90 days after the month they were created
- **Diagnostic logs** in Azure Application Insights — kept for the default Azure retention period (currently 90 days)
- **Push tokens** — invalidated when you uninstall the app or sign out
- **Backups** — incremental Cosmos DB backups retained per Microsoft's standard policy (typically up to 30 days)
- **Consent record** — kept while your account exists, then deleted with the account

If you ask us to delete your account, we cannot retrieve it. Deletion is permanent and immediate.

## 7. Your rights

Depending on where you live, you have some or all of the following rights:

- **Access** — see what we have about you (most of it is already visible in the app; for the rest, contact us)
- **Deletion** — delete your account in-app, or ask us to delete it via privacy@goalplate.app
- **Correction** — fix inaccurate data via your in-app profile, or ask us
- **Portability** — request an export of your data in a machine-readable format
- **Withdraw consent** — disable specific notifications in Settings, or delete your account to revoke all consents at once
- **Object** — object to legitimate-interest processing
- **Complaint** — lodge a complaint with your data protection authority. In Canada, that's the [Office of the Privacy Commissioner](https://www.priv.gc.ca/) (federal) or the [Commission d'accès à l'information du Québec](https://www.cai.gouv.qc.ca/) (Quebec). In the EU, your national DPA.

To exercise a right, email **privacy@goalplate.app**. We will respond within the time required by your local law (30 days under PIPEDA / GDPR; 45 days under CCPA).

## 8. Children's privacy

GoalPlate is not for children under 13. We confirm age at first launch. If you believe we have collected data from a child under 13, contact us and we will delete it.

In some EU member states the minimum age for consent to data processing is 16. If you are between 13 and 16 in such a jurisdiction, please use the app only with the consent of a parent or guardian.

## 9. Legal disclosures

We may disclose your data when required by a valid legal request (court order, subpoena, lawful government request) or when we have a good-faith belief disclosure is necessary to protect our rights, your safety, or the safety of others.

## 10. Security

We use TLS for all network traffic, encrypt data at rest in Azure Cosmos DB, sign authentication tokens, and limit internal access to the minimum needed. No system is perfectly secure — if we discover a breach affecting your data, we will notify you and the relevant authorities as required by your local law.

## 11. Changes to this policy

When we change this policy materially, we will:

1. Post the new version at the same URL with an updated "Last updated" date
2. Bump the policy version (current: 1.0)
3. Re-prompt you for consent the next time you open the app

For minor edits (typo fixes, clarifications), we update the document without re-prompting.

## 12. Contact

- **General questions:** privacy@goalplate.app
- **Mailing address:** [BUSINESS ADDRESS]

If you do not get a response within 30 days, you can lodge a complaint with the data protection authority in your jurisdiction (see section 7).
