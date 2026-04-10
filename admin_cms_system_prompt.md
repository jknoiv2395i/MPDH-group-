# System Prompt: Add Dynamic Admin CMS to Any Website

> Copy-paste this entire prompt to any AI coding assistant to add a full admin CMS panel to your website. Replace the placeholders in `[BRACKETS]` with your actual project details before using.

---

## Prompt

You are a senior full-stack developer. I need you to add a **Dynamic Content Management System (CMS)** to my existing website so the admin can edit any text content on the site from an admin dashboard — without touching code.

### My Project Details

- **Framework**: [React / Next.js / Vue / etc.]
- **Backend**: [Express / FastAPI / None (static site) / etc.]
- **Styling**: [TailwindCSS / Vanilla CSS / etc.]
- **Current folder structure**:
```
[Paste your folder structure here, e.g.:]
client/
├── pages/
├── components/
├── App.tsx
server/
├── index.ts
├── routes/
shared/
```

### What I Want Editable

The admin should be able to edit the following content sections from the dashboard:

1. **Homepage**
   - Hero title & subtitle
   - Services section title
   - [Add your own sections]

2. **Contact Info** (used across multiple pages)
   - Phone number
   - Email address
   - Office address
   - Social media URLs (Facebook, Instagram, Twitter)

3. **About Page**
   - Page title
   - Mission statement
   - Vision statement

4. **Footer**
   - Description text
   - Contact info (shared with above)

5. **[Add any other sections you want editable]**

---

### Implementation Requirements

Follow this exact architecture:

#### 1. Shared Content Schema

Create a shared TypeScript interface defining all editable fields:

```typescript
// shared/schema.ts (or equivalent)
export interface SiteContent {
  home: {
    heroTitle: string;
    heroSubtitle: string;
    servicesTitle: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
  about: {
    title: string;
    mission: string;
    vision: string;
  };
  // Add more sections as needed
}

export const defaultContent: SiteContent = {
  home: {
    heroTitle: "[Your default hero title]",
    heroSubtitle: "[Your default hero subtitle]",
    servicesTitle: "Our Services",
  },
  contact: {
    phone: "[Your phone]",
    email: "[Your email]",
    address: "[Your address]",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
  about: {
    title: "About Us",
    mission: "[Your mission text]",
    vision: "[Your vision text]",
  },
};
```

#### 2. Backend — Content Persistence & API

Create a file-based storage system (or database if available):

- **Storage file**: `server/content.ts`
  - `readContent()` → reads from `data/content.json`, returns `SiteContent`
  - `writeContent(content: SiteContent)` → writes to `data/content.json`
  - Auto-creates `data/` directory and seeds with `defaultContent` if file doesn't exist

- **API routes**: `server/routes/content.ts`
  - `GET /api/content` → **Public** endpoint, returns current site content
  - `PUT /api/content` → **Protected** endpoint (requires admin auth), updates content

- Register routes in main server file

#### 3. Frontend — Content State Management

Create a React Context provider:

- **File**: `client/hooks/useContent.tsx`
- Creates `ContentContext` with:
  - `content: SiteContent` — current content state
  - `loading: boolean` — loading indicator
  - `updateContent(newContent: SiteContent): Promise<boolean>` — save function for admin
- Fetches `/api/content` once on app mount
- Falls back to `defaultContent` before API responds (no blank screens)
- Wrap entire app with `<ContentProvider>` in the root component

```typescript
// Usage in any component:
const { content } = useContent();
// Then use: content.home.heroTitle, content.contact.phone, etc.
```

#### 4. Admin Dashboard — Content Editor

Create a `ContentEditor` component with:

- **Grouped form sections** with clear labels (Contact Info, Home Page, About Page, etc.)
- **Input fields** for short text, **textarea** for longer text
- **Sticky "Save Changes" button** at the top
- **Toast notifications** on save success/failure
- Sends `PUT /api/content` with the admin JWT token in `Authorization: Bearer <token>` header

Integrate into the existing admin panel:
- Add a **tab-based navigation** system ("Properties" | "Site Content" or similar)
- Content editor renders when "Site Content" tab is active
- Include both **desktop nav tabs** (in header) and **mobile tabs** (below header)

#### 5. Dynamic UI Binding

For every component that displays text content:

1. Import `useContent` hook
2. Destructure `const { content } = useContent()`
3. Replace every hardcoded string with `content.section.field`
4. Use optional chaining with fallback: `content?.contact.phone || "+1 234 567 890"`

**Components to update** (adapt to your project):
- Hero section → `content.home.heroTitle`, `content.home.heroSubtitle`
- About page → `content.about.title`, `content.about.mission`, `content.about.vision`
- Contact page → `content.contact.phone`, `content.contact.email`, `content.contact.address`
- Footer → `content.contact.phone`, `content.contact.email`, social URLs
- Any other component with hardcoded text

#### 6. Authentication

If the project doesn't already have admin auth, implement:

- **Login page** at `/admin/login` with password-only auth
- **JWT-based session** stored in `localStorage`
- **Middleware** (`verifyAdmin`) that checks `Authorization: Bearer <token>` header
- Environment variables: `ADMIN_PASSWORD`, `JWT_SECRET`

---

### Admin Dashboard Design Guidelines

The admin panel should look professional and modern:

- **Clean white background** with subtle gray borders
- **Grouped form sections** with icons and section headers
- **Sticky save button** with loading state ("Saving..." → "Save Changes")
- **Toast notifications** for feedback
- **Responsive** — works on mobile with collapsible tabs
- **Smooth animations** on tab switches and form appearance

---

### Critical Rules

1. **Never break the public-facing site.** Always use `defaultContent` as fallback.
2. **TypeScript throughout.** The `SiteContent` interface must be shared between client and server.
3. **Don't create a separate admin app.** Integrate into the existing project.
4. **Content updates must be instant.** After saving, the public site reflects changes immediately without page refresh.
5. **Persist content to disk.** Use `data/content.json` so content survives server restarts.
6. **Keep the admin route protected.** Only authenticated admins can write content.
7. **Don't modify the visual design of the public site.** Only swap hardcoded strings for dynamic variables.

---

### Verification Checklist

After implementation, verify:

- [ ] `pnpm typecheck` (or equivalent) passes with 0 errors
- [ ] `pnpm build` completes successfully
- [ ] Admin can log in and see the "Site Content" tab
- [ ] Editing a field and saving updates the live site instantly
- [ ] Refreshing the page shows the saved content (persistence works)
- [ ] The public site loads correctly even if `data/content.json` doesn't exist yet (fallback works)
- [ ] All previously hardcoded text is now dynamic

---

### File Checklist

New files to create:
- [ ] `shared/schema.ts` — `SiteContent` interface + `defaultContent`
- [ ] `server/content.ts` — `readContent()` / `writeContent()`
- [ ] `server/routes/content.ts` — GET + PUT endpoints
- [ ] `client/hooks/useContent.tsx` — React Context provider
- [ ] `client/components/admin/ContentEditor.tsx` — CMS editor form

Files to modify:
- [ ] `server/index.ts` — register content routes
- [ ] `client/App.tsx` — wrap with `<ContentProvider>`
- [ ] `client/pages/Admin.tsx` — add tab navigation + ContentEditor
- [ ] Every component with hardcoded text — bind to `useContent()`
