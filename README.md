# ⚡ Next.js Premium Base Template (Auth + Admin + Ambient UI)

A modern, production-ready full-stack **Next.js template** featuring integrated database authentication, route guards, and a dark ambient user experience. Built specifically for developers who want a beautiful, solid foundation to clone and immediately shape into their own SaaS, landing page, or dashboard ideas.

---

## ✨ Features

- **🎨 Ambient Dark UI:** Built with Tailwind CSS and Framer Motion, inspired by premium dark-mode aesthetics (Supabase, 21st.dev). Includes responsive mouse-hover glow effects and fluid page transitions.
- **🔐 Secure Authentication:** Configured out of the box using **Auth.js (NextAuth v5)** with full `CredentialsProvider` support.
- **🗄️ MongoDB Database Layer:** Pre-integrated with an official `@auth/mongodb-adapter` pipeline utilizing connection pooling for serverless environments.
- **🛡️ Route Protection Middleware:** Dynamic router guards that securely separate public landing pages, auth structures, and protected `/dashboard/*` application parameters.
- **🧱 Modular Animation Wrappers:** Simple, reusable layout tags (`<FadeUp />`, `<GlowingCard />`, `<StaggerContainer />`) built to clean up codebase animations.

---

## 🛠️ Tech Stack & Dependencies

| Layer | Technology |
| :--- | :--- |
| **Framework** | Next.js 15+ (App Router) |
| **Styling Base** | Tailwind CSS + CSS Ambient Variables |
| **Animation Engine** | Framer Motion |
| **Database ORM** | Native MongoDB Client Pipeline |
| **Authentication** | Auth.js (NextAuth.js v5 Beta) |
| **Icons** | Lucide React |

---

## 📁 Repository Architecture

```text
my-base-template/
├── scripts/
│   └── seed.js               # Database seeding injection script
├── src/
│   ├── app/                  # Next.js App Router Structure
│   │   ├── (auth)/           # Route Group: Login & Registration layout frames
│   │   ├── (dashboard)/      # Route Group: Protected Admin Interface Console
│   │   ├── api/auth/         # NextAuth backend catch-all routes
│   │   ├── globals.css       # Core Tailwind configuration & ambient layer classes
│   │   └── page.tsx          # Animated Landing Page Entry Point
│   ├── components/           
│   │   └── ui/               # Global UI components
│   │       └── animations/   # Reusable Framer Motion Wrapper layout frames
│   ├── lib/                  
│   │   ├── auth.ts           # Core Auth.js configuration handlers
│   │   ├── db.ts             # Cached MongoDB client connection instances
│   │   └── utils.ts          # Tailwind CSS style merging logic
│   └── middleware.ts         # Secure Route Guard Route protection layer
```

---

## 🚀 Getting Started

Follow these steps to clone, configure, and boot up your local instance of this template.

### 1. Clone the Repository
```bash
git clone https://github.com
cd your-repo-name
```

### 2. Install Project Modules
```bash
npm install
```

### 3. Establish Environmental Parameters
Duplicate the provided environment template file and create a `.env` instance:
```bash
cp .env.example .env
```

Open your new `.env` file and insert your dedicated MongoDB connection string and a secure auth cryptographic secret:
```env
MONGODB_URI="mongodb+srv://<username>:<password>@cluster0.mongodb.net/myDatabase"
AUTH_SECRET="run-npx-auth-secret-in-your-terminal-to-generate-a-secure-key"
```
> **Tip:** You can generate an `AUTH_SECRET` immediately by running `npx auth secret` in your terminal.

### 4. Seed the Local Testing User (Optional)
Run the built-in database seeding script to quickly create a mock developer profile within your MongoDB cluster:
```bash
node scripts/seed.js
```
* **Default Login Profile:** `admin@template.com`
* **Default Secure Password:** `password123`

### 5. Launch the Development Pipeline
```bash
npm run dev
```

Navigate to [http://localhost:3000](http://localhost:3000) inside your web browser to interact with your live local architecture environment!

---

## 🎨 Modifying & Tailoring to Your Idea

### Adding New Dashboard Sub-Pages
To extend the backend workspace console, simply add a standard folder schema inside `src/app/(dashboard)/dashboard/`:
```text
src/app/(dashboard)/dashboard/analytics/page.tsx -> Resolves onto /dashboard/analytics
```
Because this lives inside the `(dashboard)` routing context group, it is automatically protected by the global auth `middleware.ts` system.

### Wrapping Elements with Animations
To make elements fade smoothly or display hovering ambient glows, import the design ecosystem helper into your component:
```tsx
import { FadeUp, GlowingCard } from "@/components/ui/animations/MotionWrappers";

export default function MySection() {
  return (
    <FadeUp delay={0.2}>
      <GlowingCard>
        <p>This card floats up cleanly and has neon ambient mouse borders!</p>
      </GlowingCard>
    </FadeUp>
  );
}
```

---

## 📝 License
Distributed under the **MIT License**. Check out `LICENSE` for supplementary data parameters.
