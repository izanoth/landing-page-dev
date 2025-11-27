# Actionable Tasks for: Ivan Cilento's Developer Landing Page

This document outlines the tasks required to implement the feature. Tasks are organized into phases, starting with project setup and moving through user stories in priority order.

## Phase 1: Project Setup & Configuration

- [x] T001 Install core dependencies: `npm install next@14 react@19 react-dom@19`
- [x] T002 Install Tailwind CSS and its dependencies: `npm install -D tailwindcss@4 postcss autoprefixer`
- [x] T003 Initialize Tailwind CSS configuration: `npx tailwindcss init -p`
- [x] T004 Configure Tailwind CSS template paths in `tailwind.config.ts`
- [x] T005 Install shadcn/ui and its dependencies: `npm i -D @types/node` and `npx shadcn-ui@latest init`
- [x] T006 Install supporting utility libraries: `npm install class-variance-authority clsx tailwind-merge`
- [x] T007 Install icon library: `npm install lucide-react`
- [x] T008 Configure ESLint for Next.js and TypeScript in `eslint.config.mjs`

## Phase 2: Foundational UI & Styling

- [x] T009 Create a new directory for components: `mkdir -p components/ui` and `mkdir -p components/sections`
- [x] T010 Configure global styles in `app/globals.css` with the primary color palette (purple-to-blue gradients) and modern font (e.g., Inter from Google Fonts).
- [x] T011 Set up the main layout in `app/layout.tsx` to apply the global font and background styles.
- [x] T012 Update `tailwind.config.ts` to extend theme with custom gradient colors and any other design tokens.

## Phase 3: [US1] Build Static Page Content

This phase focuses on building the main informational sections of the landing page.

- **Goal**: A visitor can scroll through the page and see all the primary content sections.
- **Independent Test**: The page renders with all sections (Hero, About, Projects, Services, Contact, Footer) populated with placeholder content.

- [x] T013 [P] [US1] Create the Hero section component in `components/sections/hero.tsx`.
- [x] T014 [P] [US1] Create the About Me section component in `components/sections/about.tsx`.
- [x] T015 [P] [US1] Create the Project Card component in `components/ui/project-card.tsx`.
- [x] T016 [US1] Create the Projects section component in `components/sections/projects.tsx`, which uses the `ProjectCard` component.
- [x] T017 [P] [US1] Create the Service Item component in `components/ui/service-item.tsx`.
- [x] T018 [US1] Create the Services section component in `components/sections/services.tsx`, using the `ServiceItem` component.
- [x] T019 [P] [US1] Create the Contact section component in `components/sections/contact.tsx`.
- [x] T020 [P] [US1] Create the Footer component in `components/sections/footer.tsx`.
- [x] T021 [US1] Assemble all created section components into the main page file at `app/page.tsx`.

## Phase 4: [US2] Implement Interactive Contact Elements

This phase focuses on making the contact methods functional.

- **Goal**: A visitor can easily initiate contact with Ivan via social media or WhatsApp.
- **Independent Test**: Clicking the social media links and the WhatsApp button directs the user to the correct external pages.

- [x] T022 [US2] Implement the fixed WhatsApp button component in `components/ui/whatsapp-button.tsx`.
- [x] T023 [US2] Add the WhatsApp button to the main layout in `app/layout.tsx` so it's visible on the page.
- [x] T024 [US2] Ensure all social media links in `components/sections/contact.tsx` and `components/sections/footer.tsx` open in a new tab.

## Phase 5: Polish & Cross-Cutting Concerns

- [x] T025 Implement smooth scrolling behavior for anchor links if any are added for navigation.
- [x] T026 Add subtle hover animations and transitions to interactive elements (buttons, cards, links) using Tailwind CSS.
- [x] T027 Perform a comprehensive responsive design check, ensuring the layout is optimal on device widths from 320px to 1920px.
- [x] T028 Run a Lighthouse audit and address any performance, accessibility, or SEO issues to meet the success criteria.
- [x] T029 Add the logo images to the `public/img` directory and integrate them into the Header/Hero section.

## Dependencies

- **US1** is a prerequisite for **US2**, as the contact section and footer are built as part of the initial page structure.
- **Foundational UI (Phase 2)** must be completed before **US1 (Phase 3)**.
- **Project Setup (Phase 1)** must be completed before **Foundational UI (Phase 2)**.

The completion order should be: `Phase 1 -> Phase 2 -> Phase 3 (US1) -> Phase 4 (US2) -> Phase 5`.

## Parallel Execution

- Within **Phase 3 (US1)**, the creation of individual section components (`T013`, `T014`, `T015`, `T017`, `T019`, `T020`) can be done in parallel as they are independent of each other until the final assembly (`T021`).

## Implementation Strategy

The strategy is to build the application incrementally, starting with the core setup and foundational UI. The MVP (Minimum Viable Product) will be the completion of **Phase 3**, which delivers a complete, viewable landing page. Subsequent phases add interactivity and polish. This approach ensures that a valuable, testable version of the product is available early in the process.
