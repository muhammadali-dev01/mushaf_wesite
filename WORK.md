# WORK.md - Complete Project Analysis

## 1. Executive Summary

### What the Project Is

Mushaf Al Noor Academy is a React, Vite, TypeScript, Tailwind CSS, shadcn-ui, and Supabase web application for an online Quran academy. It combines a public marketing website, course landing pages, free trial/contact lead capture, Supabase authentication, student dashboard pages, and a protected admin dashboard for managing courses, teachers, enrollments, students, and blog posts.

### Current Completion Percentage

Estimated completion: **72%**

The public website, authentication foundation, Supabase schema, RLS policies, lead forms, WhatsApp flow, student dashboard shell, and admin listing/management screens are implemented. The project is not fully production-ready because several routed sidebar actions point to missing pages, admin create/edit forms are absent, lint fails, SEO is client-rendered only, and payment/course lesson workflows are incomplete.

### Architecture Overview

- **Frontend:** Vite SPA with React 18, TypeScript, React Router, React Helmet Async, Framer Motion, Tailwind CSS, and shadcn/Radix UI components.
- **Backend/BaaS:** Supabase Auth, Postgres tables, generated Supabase TypeScript types, RLS policies, and a security-definer `has_role` function.
- **Routing:** `src/App.tsx` defines public, student, admin, auth, and fallback routes.
- **Authentication:** `AuthProvider` wraps the app, uses Supabase sessions, reads `user_roles`, and exposes `isAdmin`.
- **Authorization:** Frontend route guards plus Supabase RLS. Admin access requires a user role of `admin`.
- **Forms:** Contact and free-trial forms insert into `form_submissions` and then open WhatsApp with a pre-filled message.
- **Deployment:** Static Vite build output in `dist/`; suitable for Vercel, Netlify, Cloudflare Pages, or similar static hosting with SPA fallback.

## 2. Folder Structure Analysis

### Root

- `package.json`: npm scripts and dependencies for Vite, React, Supabase, shadcn-ui, Tailwind, React Router, Helmet, React Query, Framer Motion, Recharts, and form tooling.
- `package-lock.json` / `bun.lockb`: dependency locks. Both npm and Bun locks exist, which can confuse dependency management.
- `.env`: contains Supabase project URL and anon publishable key variables.
- `index.html`: base document SEO, favicon, OpenGraph, Twitter metadata, canonical URL, and root mount node.
- `vite.config.ts`: Vite config with React SWC, `@` alias, dev server on port `8080`.
- `tailwind.config.ts`: theme tokens, fonts, colors, animations, shadcn-compatible CSS variables, and Tailwind animate plugin.
- `components.json`: shadcn-ui configuration and aliases.
- `eslint.config.js`: ESLint setup.
- `dist/`: built production output.
- `vite-dev.log` / `vite-dev.err.log`: local development logs; should usually not be committed.

### `src/`

- `App.tsx`: central router, providers, protected routes, and global `Chatbot`.
- `main.tsx`: React root and `HelmetProvider`.
- `index.css` / `App.css`: global styling and design utilities.
- `assets/`: local images for logo, teachers, and course cards.
- `components/`: shared UI, layout, chatbot, protected routing, navigation helpers, home sections.
- `hooks/`: authentication context, toast hook, mobile detection.
- `integrations/supabase/`: Supabase client and generated database types.
- `lib/`: utility functions and shared form submission/WhatsApp logic.
- `pages/`: public, auth, student, admin, and course pages.

### `src/components/`

- `layout/`: public `Header` and `Footer`.
- `home/`: reusable home-page sections such as hero, courses, teachers, testimonials, FAQ, CTA.
- `admin/`: `AdminLayout` sidebar shell.
- `student/`: `StudentLayout` sidebar shell.
- `ui/`: shadcn/Radix reusable primitives.
- `Chatbot.tsx`: keyword-based support bot.
- `ProtectedRoute.tsx`: auth/admin route guard.
- `ScrollToTop.tsx`: route-change scroll reset.

### `supabase/`

- `config.toml`: Supabase project ID.
- `migrations/`: SQL schema, enums, triggers, RLS policies, and `form_submissions` extension migration.

### `public/`

- `robots.txt`: allows crawling by major bots.
- `favicon.*`, `placeholder.svg`, `uploads/`: public static assets.

## 3. Feature Analysis

### Public Marketing Website

- **Purpose:** Present academy value proposition, courses, teachers, pricing, FAQs, testimonials, blog, and contact details.
- **Files involved:** `src/pages/Index.tsx`, `About.tsx`, `Courses.tsx`, `Pricing.tsx`, `Teachers.tsx`, `FAQ.tsx`, `Blog.tsx`, `HowItWorks.tsx`, `Testimonials.tsx`, `Privacy.tsx`, `Terms.tsx`, course pages in `src/pages/courses/`.
- **Database tables:** Mostly static content; public course/blog pages currently appear content-driven in UI, while Supabase tables exist for dynamic `courses`, `teachers`, and `blog_posts`.
- **Components used:** `Header`, `Footer`, home sections, cards, buttons, badges, accordions, motion animations.
- **Current status:** Implemented as a polished static/dynamic hybrid marketing site.

### Course Landing Pages

- **Purpose:** Explain Quran learning tracks: Noorani Qaida, Tajweed, Hifz, Translation, Tafseer route alias, Islamic Studies.
- **Files involved:** `src/pages/courses/NooraniQaida.tsx`, `Tajweed.tsx`, `Hifz.tsx`, `Translation.tsx`, `IslamicStudies.tsx`, `src/App.tsx`.
- **Database tables:** `courses`, `lessons`, `teachers` exist for a dynamic course system.
- **Components used:** Public layout, Helmet, cards, CTA buttons.
- **Current status:** Implemented public pages. `/courses/tafseer` currently reuses `NooraniQaida`, which is likely a bug or placeholder.

### Authentication

- **Purpose:** Allow users to sign up, sign in, persist sessions, and access student/admin areas.
- **Files involved:** `src/pages/Auth.tsx`, `src/hooks/useAuth.tsx`, `src/components/ProtectedRoute.tsx`, `src/integrations/supabase/client.ts`.
- **Database tables:** Supabase `auth.users`, `profiles`, `user_roles`.
- **Components used:** shadcn inputs/buttons, toast notifications.
- **Current status:** Implemented. New users are created through Supabase Auth and assigned `student` by the `handle_new_user` trigger.

### Student Portal

- **Purpose:** Let students see dashboard stats, approved courses, pending enrollments, announcements, and profile settings.
- **Files involved:** `src/pages/student/Dashboard.tsx`, `Courses.tsx`, `Settings.tsx`, `src/components/student/StudentLayout.tsx`.
- **Database tables:** `profiles`, `enrollments`, `courses`, `announcements`.
- **Components used:** `StudentLayout`, cards, progress bars, badges, buttons.
- **Current status:** Partially implemented. Dashboard, courses list, and settings exist; sidebar links to enrollments, materials, payments, announcements, and support are not routed.

### Admin Dashboard

- **Purpose:** Give administrators operational counts and links for academy management.
- **Files involved:** `src/pages/admin/Dashboard.tsx`, `src/components/admin/AdminLayout.tsx`.
- **Database tables:** `profiles`, `courses`, `enrollments`, `blog_posts`, `teachers`.
- **Components used:** `AdminLayout`, cards, motion, icons.
- **Current status:** Implemented stats dashboard. Quick links point to unregistered create routes.

### Admin Course Management

- **Purpose:** List, publish/unpublish, and delete courses.
- **Files involved:** `src/pages/admin/Courses.tsx`.
- **Database tables:** `courses`.
- **Components used:** cards, badges, alert dialog, buttons.
- **Current status:** Partially implemented. List/toggle/delete exists; create/edit routes are linked but not implemented.

### Admin Teacher Management

- **Purpose:** List, activate/deactivate, and delete teachers.
- **Files involved:** `src/pages/admin/Teachers.tsx`.
- **Database tables:** `teachers`.
- **Components used:** cards, badges, alert dialog.
- **Current status:** Partially implemented. List/toggle/delete exists; create/edit routes are linked but not implemented.

### Admin Enrollment Management

- **Purpose:** Review enrollments and approve/reject pending requests.
- **Files involved:** `src/pages/admin/Enrollments.tsx`.
- **Database tables:** `enrollments`, `profiles`, `courses`.
- **Components used:** table, badges, filter buttons.
- **Current status:** Implemented as a status-management screen, but it depends on relationship names that should be verified against Supabase foreign key metadata.

### Admin Student Management

- **Purpose:** View and search registered student profiles.
- **Files involved:** `src/pages/admin/Students.tsx`.
- **Database tables:** `profiles`.
- **Components used:** table, search input.
- **Current status:** Implemented read-only student directory.

### Admin Blog Management

- **Purpose:** List, publish/unpublish, and delete blog posts.
- **Files involved:** `src/pages/admin/Blog.tsx`.
- **Database tables:** `blog_posts`.
- **Components used:** cards, badges, alert dialog.
- **Current status:** Partially implemented. List/toggle/delete exists; create/edit routes are linked but not implemented.

### Contact and Free Trial Lead Capture

- **Purpose:** Save leads and open WhatsApp confirmation.
- **Files involved:** `src/pages/Contact.tsx`, `src/pages/FreeTrial.tsx`, `src/lib/formSubmission.ts`.
- **Database tables:** `form_submissions`.
- **Components used:** forms, inputs, selects, textareas, toast notifications.
- **Current status:** Implemented. There is no admin screen to review `form_submissions`.

### WhatsApp Integration

- **Purpose:** Let users contact the academy directly and send pre-filled form details.
- **Files involved:** `src/lib/formSubmission.ts`, `src/components/layout/Footer.tsx`, `src/pages/Contact.tsx`, `src/pages/FreeTrial.tsx`.
- **Database tables:** `form_submissions`.
- **Current status:** Implemented using `https://wa.me/923709076083`.

### Chatbot

- **Purpose:** Provide basic FAQ-style support.
- **Files involved:** `src/components/Chatbot.tsx`, `src/App.tsx`.
- **Database tables:** None.
- **Current status:** Implemented as a local keyword-response bot. It is not AI-backed and does not save chat history.

## 4. Database Analysis

### Tables

- `profiles`: user profile data linked to `auth.users` by `user_id`.
- `user_roles`: role assignments with enum `admin | student`.
- `teachers`: public/admin teacher records.
- `courses`: course catalog with teacher relationship, price, curriculum JSON, publishing flag, rating, and student counts.
- `lessons`: course lessons with content, video URL, PDF URL, ordering, free flag.
- `enrollments`: user-course enrollment records with status and progress.
- `lesson_progress`: per-user lesson completion tracking.
- `blog_posts`: SEO-aware blog content with slug, excerpt, meta description, keywords, author, publish state, views.
- `payments`: payment records tied to users and optional enrollments.
- `announcements`: public/student announcements.
- `assignments`: course assignments.
- `assignment_submissions`: student submissions with grade and notes.
- `contact_messages`: contact message table from the first migration.
- `form_submissions`: generalized lead form table used by current Contact and Free Trial forms.

### Relationships and Foreign Keys

- `profiles.user_id -> auth.users.id`, cascade delete, unique.
- `user_roles.user_id -> auth.users.id`, cascade delete.
- `courses.teacher_id -> teachers.id`, set null.
- `lessons.course_id -> courses.id`, cascade delete.
- `enrollments.user_id -> auth.users.id`, cascade delete.
- `enrollments.course_id -> courses.id`, cascade delete, unique user/course pair.
- `lesson_progress.user_id -> auth.users.id`, cascade delete.
- `lesson_progress.lesson_id -> lessons.id`, cascade delete, unique user/lesson pair.
- `blog_posts.author_id -> auth.users.id`, set null.
- `payments.user_id -> auth.users.id`, cascade delete.
- `payments.enrollment_id -> enrollments.id`, set null.
- `assignments.course_id -> courses.id`, cascade delete.
- `assignment_submissions.assignment_id -> assignments.id`, cascade delete.
- `assignment_submissions.user_id -> auth.users.id`, cascade delete.

### Authentication

Supabase Auth owns users. A trigger `on_auth_user_created` runs `handle_new_user()` after user creation, inserts a `profiles` row, and inserts a `student` role into `user_roles`.

### RLS Policies

RLS is enabled on all application tables. Key policies:

- Profiles: users can view/update own profile; admins can view all.
- User roles: users can view own roles; admins can manage all roles.
- Teachers: anyone can view active teachers; admins can manage.
- Courses: anyone can view published courses; admins can manage.
- Lessons: approved enrolled users, admins, or free lessons can be viewed; admins can manage.
- Enrollments: users can view/create own; admins can manage.
- Lesson progress: users manage own progress.
- Blog posts: anyone can view published posts; admins can manage.
- Payments: users view own; admins manage.
- Announcements: anyone can view active; admins manage.
- Assignments: approved enrolled users and admins can view; admins manage.
- Assignment submissions: users manage own; admins can view all.
- Contact messages: anyone can insert; admins can select.
- Form submissions: anon/authenticated can insert; authenticated admins can select.

### Storage

No Supabase Storage buckets or storage policies are defined in the migrations. Images are mostly local static assets or URL strings in database rows.

## 5. Authentication Flow

1. `AuthProvider` initializes in `src/hooks/useAuth.tsx`.
2. It subscribes to `supabase.auth.onAuthStateChange`.
3. It calls `supabase.auth.getSession()` to restore persisted sessions from `localStorage`.
4. On signup, `Auth.tsx` validates with Zod and calls `signUp(email, password, fullName)`.
5. Supabase receives `full_name` in user metadata.
6. Database trigger creates `profiles` and `user_roles` rows.
7. On login, `signInWithPassword` authenticates the user.
8. `fetchUserRole()` reads `user_roles.role` for the current user.
9. `ProtectedRoute` redirects unauthenticated users to `/auth`.
10. `ProtectedRoute requireAdmin` redirects non-admin users to `/student/dashboard`.
11. Sign out calls `supabase.auth.signOut()` and clears local role state.

Main concern: after signup, `Auth.tsx` immediately navigates to `/student/dashboard`. If email confirmation is required in Supabase settings and no session is returned, the user may land back at auth unexpectedly.

## 6. Route Analysis

### Public Routes

- `/`
- `/about`
- `/courses`
- `/courses/noorani-qaida`
- `/courses/tajweed`
- `/courses/hifz`
- `/courses/translation`
- `/courses/tafseer`
- `/courses/islamic-studies`
- `/pricing`
- `/contact`
- `/free-trial`
- `/teachers`
- `/faq`
- `/blog`
- `/how-it-works`
- `/testimonials`
- `/privacy`
- `/terms`
- `/auth`
- `*` fallback to `NotFound`

### Student Routes

- `/student/dashboard`
- `/student/courses`
- `/student/settings`

### Admin Routes

- `/admin/dashboard`
- `/admin/courses`
- `/admin/enrollments`
- `/admin/students`
- `/admin/teachers`
- `/admin/blog`

### Protected Routes

- All `/student/*` routes are protected by `ProtectedRoute`.
- All `/admin/*` routes are protected by `ProtectedRoute requireAdmin`.

### Missing Routes Referenced by UI

- `/admin/courses/new`
- `/admin/courses/:id/edit`
- `/admin/teachers/new`
- `/admin/teachers/:id/edit`
- `/admin/blog/new`
- `/admin/blog/:id/edit`
- `/admin/announcements`
- `/admin/payments`
- `/admin/messages`
- `/admin/settings`
- `/student/enrollments`
- `/student/materials`
- `/student/payments`
- `/student/announcements`
- `/student/support`
- `/student/courses/:id`

## 7. Component Analysis

### Reusable Components

- `Header`: responsive public nav, course dropdown, auth/admin links, phone CTA.
- `Footer`: footer links, social placeholders, fixed WhatsApp button.
- `ProtectedRoute`: auth/admin route guard.
- `AdminLayout`: admin sidebar and shell.
- `StudentLayout`: student sidebar and shell.
- `Chatbot`: animated support widget with keyword responses.
- `ScrollToTop`: route-change UX helper.
- `home/*`: modular landing sections for hero, features, courses, teachers, FAQ, testimonials, CTA.
- `components/ui/*`: shadcn/Radix primitives for cards, buttons, forms, dialogs, tables, navigation, toast, etc.

### Layout Structure

Public pages generally use `Header` + page content + `Footer`. Student/admin pages use separate dashboard shells with fixed sidebars. Global providers are configured in `App.tsx` and `main.tsx`.

### UI Architecture

The UI is componentized and visually consistent, with Tailwind CSS variables, shadcn primitives, and Framer Motion animations. Some static values are inconsistent, such as phone numbers and placeholder links.

## 8. SEO Audit

### Existing SEO

- `index.html` includes title, description, keywords, author, canonical, OpenGraph, Twitter card metadata.
- Many page modules use `react-helmet-async`.
- Public pages include page-specific titles/descriptions and some canonical URLs.

### Meta Tags

Implemented globally and in many pages through Helmet. Missing centralized SEO helper, reusable metadata component, and consistent metadata coverage audit.

### Canonical URLs

Canonical exists globally and on some pages. Because this is an SPA, canonical tags update client-side only after hydration.

### OpenGraph

Global OpenGraph exists in `index.html`, and the metadata now uses a brand-owned image asset.

### Schema

No JSON-LD schema markup was found for Organization, Course, FAQ, Breadcrumb, Article, or LocalBusiness.

### Sitemap

No `sitemap.xml` was found.

### Robots

`public/robots.txt` allows all major crawlers. It does not reference a sitemap.

### Dynamic SEO

Helmet provides dynamic client-side metadata, but static crawlers will initially see only `index.html`. For stronger SEO, use prerendering/SSR or generate static HTML per route.

### SEO Score

**68/100**

Good baseline metadata and page titles, but missing sitemap, schema, route-level prerendering, robust OG images, and complete canonical strategy.

## 9. Security Audit

### Auth

Supabase Auth is correctly used with persisted sessions and auto refresh. Password validation is basic but present.

### Roles

Roles are stored in `user_roles`; admin checks are performed in RLS and in frontend route guards.

### Validation

Auth forms use Zod. Contact/free-trial forms rely mainly on HTML required fields and database insertion. Admin mutation forms have minimal client-side validation because most admin create/edit screens are missing.

### RLS

RLS is comprehensive and mostly well designed. `has_role` is a `SECURITY DEFINER` function with fixed `search_path`, which is appropriate.

### API Security

All database operations go through Supabase client and RLS. The anon key is correctly public by design, but write exposure depends entirely on RLS.

### Security Issues

- Frontend admin guard is not sufficient by itself; the project correctly uses RLS, but all admin mutations must continue relying on admin-only RLS.
- `form_submissions` allows anonymous inserts with no rate limiting or CAPTCHA.
- WhatsApp lead data is opened in a client URL and may expose submitted details in browser history or external app context.
- No storage policies exist because Supabase Storage is not implemented.
- No payment provider or webhook security implemented.

### Security Score

**78/100**

Strong RLS foundation, but missing anti-spam controls, complete admin workflows, storage policy coverage, and hardened production auth settings documentation.

## 10. Performance Audit

### Build Result

`npm run build` passes.

Build output highlights:

- JS bundle: about **1,002.99 kB minified**, **280.94 kB gzip**.
- CSS bundle: about **81.83 kB**, **13.89 kB gzip**.
- Vite warns that chunks exceed 500 kB.

### Lazy Loading

No route-level lazy loading or dynamic imports are implemented. All pages and admin/student modules are bundled into the main JS chunk.

### Bundle Size

Large due to many UI primitives, Framer Motion, Recharts, React Query, Helmet, admin pages, and all public pages in one bundle.

### Images

Images are local JPG/PNG assets and public uploads. They are bundled/generated by Vite, but there is no responsive image pipeline, `srcset`, CDN optimization, or lazy image helper.

### Code Splitting

Not implemented.

### React Optimization

Most data fetching is direct `useEffect`; React Query is installed and provided but not used for Supabase queries. This causes missed caching, retries, invalidation, and shared loading-state benefits.

### Performance Score

**70/100**

The app builds successfully and asset sizes are acceptable for a rich SPA, but code splitting and image optimization are needed before serious production traffic.

## 11. Code Quality

### Folder Organization

Good separation between pages, layouts, UI components, hooks, integrations, assets, and Supabase schema.

### Naming

Mostly clear and domain-oriented. The package name now reflects the Mushaf Al Noor brand.

### Reusability

UI primitives and layouts are reusable. Public course pages may contain repeated patterns that could be abstracted. Admin list screens also repeat CRUD card/table patterns.

### Maintainability

Maintainability is fair. Main risks are incomplete routes, static data mixed with database-backed tables, no route lazy loading, and missing admin form abstractions.

### Lint Result

`npm run lint` fails with **5 errors** and **10 warnings**.

Errors:

- `src/components/ui/command.tsx`: empty interface rule.
- `src/components/ui/textarea.tsx`: empty interface rule.
- `src/lib/formSubmission.ts`: `any` usage.
- `src/pages/admin/Blog.tsx`: `any` usage.
- `tailwind.config.ts`: forbidden `require()`.

Warnings include React Fast Refresh export warnings and missing hook dependencies.

## 12. Missing Features

### High Priority

- Admin create/edit pages for courses, teachers, and blog posts.
- Admin pages for announcements, payments, messages/form submissions, and settings.
- Student pages for enrollments, materials, payments, announcements, support, and course lesson detail.
- Sitemap generation.
- JSON-LD schema.
- Fix lint errors.
- Add route-level lazy loading/code splitting.
- Add CAPTCHA or rate limiting for anonymous forms.

### Medium Priority

- Admin management for lessons, assignments, lesson progress, and assignment submissions.
- Payment provider integration and webhook handling.
- Supabase Storage buckets and policies for course assets, avatars, PDFs, and submissions.
- React Query integration for Supabase reads/mutations.
- Better loading/error states on all Supabase queries.
- Admin table pagination and filtering.
- Dynamic public course/blog pages backed by Supabase.

### Future Features

- Live class scheduling.
- Zoom/Google Meet integration.
- Teacher availability calendar.
- AI-enhanced chatbot with handoff to WhatsApp.
- Student certificates.
- Parent dashboard.
- Multi-language support.
- Email/SMS/WhatsApp automation.
- Analytics dashboard.

## 13. Bugs and Technical Debt

- `/courses/tafseer` renders `NooraniQaida` instead of a Tafseer page.
- Admin and student sidebars link to many unregistered routes, causing 404s.
- Admin quick actions link to create routes that do not exist.
- Lint fails with TypeScript/ESLint errors.
- Large single JS bundle triggers Vite chunk warning.
- `React Query` is configured but not used.
- Phone numbers are inconsistent: some links use `+1 (234) 567-890`, others use Pakistan WhatsApp number.
- Footer social links are placeholders.
- `contact_messages` exists but current forms use `form_submissions`, creating overlap.
- `components/integrations/supabase/*` duplicates `src/integrations/supabase/*`.
- `.env` is present locally and should not be committed with real environment values.
- `vite-dev.log` and `vite-dev.err.log` should not be committed.
- No tests are present.

## 14. Production Readiness

### Can This Project Be Deployed Today?

**Yes, as a public SPA/MVP**, because the production build passes.

**No, not as a fully complete academy platform**, because core admin and student workflows remain incomplete.

### Must Fix Before Production

- Fix all ESLint errors.
- Remove or implement broken sidebar/quick-action routes.
- Add sitemap and schema markup.
- Add anti-spam protection to public forms.
- Normalize contact details.
- Verify Supabase RLS policies in the deployed project.
- Move sensitive or environment-specific values into deployment env vars.
- Add SPA fallback configuration for the chosen host.
- Add route-level code splitting.

## 15. Overall Rating

- Architecture: **8/10**
- UI: **8/10**
- UX: **7/10**
- SEO: **6.8/10**
- Security: **7.8/10**
- Scalability: **7/10**
- Code Quality: **7/10**
- Database Design: **8/10**
- Maintainability: **7/10**
- Overall Project Score: **74/100**

## Development Roadmap

### Version 2.0

1. Complete all missing admin routes and forms.
2. Complete student course detail, lessons, materials, payments, announcements, and support pages.
3. Fix lint errors and add CI checks for build/lint.
4. Add route-level lazy loading and reduce initial bundle size.
5. Add sitemap, robots sitemap reference, schema markup, and brand-owned OpenGraph images.
6. Add admin lead management for `form_submissions`.
7. Add CAPTCHA/rate limiting for anonymous forms.
8. Normalize phone/email/contact data in a shared config file.
9. Remove duplicate Supabase integration files and development logs.
10. Add basic tests for auth guards, form submission, and route rendering.

### Version 3.0

1. Build full LMS workflows: lessons, progress, assignments, submissions, grades, certificates.
2. Add payment gateway integration with secure webhook processing.
3. Add teacher scheduling and live class booking.
4. Add Supabase Storage for avatars, course images, PDFs, assignment uploads, and protected media.
5. Add dynamic public course and blog detail pages backed by Supabase.
6. Add analytics for enrollments, conversions, lesson completion, and lead sources.
7. Add automated email/WhatsApp notifications.
8. Add multilingual support for English, Urdu, Arabic, and other target markets.
9. Add SSR/prerendering for high-value SEO pages.
10. Add an AI-assisted support chatbot with safe fallback to human WhatsApp support.
