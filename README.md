# Interactive Shipping Calculator

A React-based front-end project to help merchants quickly calculate shipping quotes using dynamic APIs. This project focuses on UI/UX best practices, scalable state management, strict form validation, and robust error handling.

## Features
- **Multi-Step Form** powered by `react-hook-form`.
- **Validation** using `zod` for strong typing and explicit error states.
- **Real-Time Synchronization**: Context-managed state updates automatically as users type.
- **Modern UI** built with Material UI (MUI), featuring responsive grids, skeletons, and micro-interactions.

---

### 1. Handling API Errors (e.g., DHL Rate Service Outage)

In a real-world scenario where third-party courier services frequently face downtime or severe rate limits, handling API failures gracefully is essential:

- **Circuit Breaker Pattern**: If DHL's rate service goes down, the backend/BFF should implement a circuit breaker to avoid cascading failures. On the frontend, if a specific courier fails, the UI should still present the other available couriers rather than breaking the entire experience.
- **Idempotent Retries**: In `QuoteResults`, the UI provides a "Retry" mechanism if the overall fetch fails. In production, this can be automated using tools like React Query (`@tanstack/react-query`) with exponential backoff.
- **Graceful Degradation**: If live rates cannot be fetched, the system could fall back to cached or "flat-rate" estimations (clearly marked as estimated to the merchant) to ensure the quoting process isn't completely blocked.

### 2. Optimizing Bundle Size for Slow 3G Connections

Emerging markets or merchants operating in warehouses often experience slow 3G network conditions. To ensure the app remains highly performant:

- **Asset Optimization**: Use modern formats (WebP, AVIF) for courier logos, and consider embedding tiny SVGs directly into the bundle rather than triggering separate HTTP requests.
- **Service Workers (PWA)**: Implement a service worker to cache the UI shell and static assets so subsequent loads are near-instantaneous, even on unstable connections.

---

## folder structure:
src/
│
├── app/
│   └── App.tsx
│
├── components/
│   ├── CourierCard.tsx
│   ├── SidebarSummary.tsx
│   ├── QuoteResults.tsx
│   ├── states/
│   │     ├── LoadingSkeleton.tsx
│   │     ├── EmptyState.tsx
│   │     └── ErrorState.tsx
│   └── form/
│         ├── MultiStepForm.tsx
│         ├── steps/
│         │     ├── OriginStep.tsx
│         │     ├── DestinationStep.tsx
│         │     └── PackageStep.tsx
│
├── context/
│   └── QuoteContext.tsx
│
├── hooks/
│   ├── useCallQuotes.ts
│   ├── useCountries.ts
│   └── useQuote.ts
│
├── mocks/               ← MSW
│   ├── apis.ts
│   ├── browser.ts
│   └── handlers.ts
│
├── schema/
│   └── schema.ts
│
├── services/
│   ├── countryService.ts
│   └── qouteService.ts
│
├── stores/
│   └── countryStore.ts
│
├── theme/
│   └── theme.ts
│
├── types/
│   └── quote.types.ts
│
├── tests/
│   └── CourierCard.test.tsx
│
└── main.tsx

## application flow:

1. **Entry Point (`main.tsx`)**: Bootstraps the React application, applies the MUI Theme (`ThemeProvider`), and provides the global `QuoteProvider`. It also initializes the MSW worker in development to mock the API backend.
2. **Layout & Orchestration (`App.tsx`)**: The main layout wrapper initializing `react-hook-form` and rendering the `SidebarSummary` alongside the `MultiStepForm`. A custom `FormObserver` synchronizes form values into the `QuoteContext` in real-time.
3. **Form Progression (`MultiStepForm.tsx` & `steps/`)**: Guides the merchant through Origin, Destination, and Package details. Strict validation rules (via Zod in `schema.ts`) are enforced before progressing to the next step.
4. **State Management (`QuoteContext.tsx`)**: Acts as the single source of truth for the UI, keeping the form state, UI state, and API payload in sync without deep prop drilling.
5. **Data Fetching (`useCallQuotes.ts` & `qouteService.ts`)**: Triggered upon form submission, making an asynchronous call to the backend (mocked by MSW) and dispatching loading, error, or success data to the context.
6. **Results Rendering (`QuoteResults.tsx`)**: Reacts to the Context. It gracefully delegates to `states/` components (`LoadingSkeleton`, `EmptyState`, `ErrorState`) or maps out the retrieved quotes into dynamic `CourierCard` elements, highlighting the most optimal choices.

## Running the Project

```bash
npm install
npm run dev
```

To run the automated tests:
```bash
npm run test
```
