# Kyle Dam — Personal Developer Portfolio

> Modern, responsive developer portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**, styled following the **Ventriloc Design System** (Refero Styles).

---

## 🎨 Design System: Ventriloc (Refero Styles)

- **Aesthetic**: Editorial data observatory on warm paper canvas.
- **Color Palette**:
  - `Graphite` (`#202020`): Primary text, display headings, dark sharp buttons.
  - `Canvas White` (`#ffffff`): Clean elevated card surfaces.
  - `Ash` (`#efefef`): Nav pill container and subtle card backgrounds.
  - `Fog` (`#f5f5f5`): Nested container surfaces.
  - `Ivory` (`#ebe6dd`): Warm accent wash for academic badges.
  - `Ember Orange` (`#ff682c`): Accent highlight for active indicators, dots, tags, and link hovers.
  - `Brass` (`#816729`): Secondary warm muted accent.
- **Typography**:
  - **Headings & Display**: Space Grotesk / PolySans substitute at weight 400 with `-0.02em` tracking for quiet editorial authority.
  - **Body & UI**: Inter (400, 500, 600).
  - **Data & Tags**: JetBrains Mono for monospaced metrics, dates, and technology badges.
- **Component Geometry**:
  - Sharp `0px` corners for primary and ghost action buttons.
  - Smooth `pill` shapes for floating navigation bar and category filters.
  - Crisp `12px` cards with hairline `#e8e8e8` borders and subtle elevation.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the portfolio.

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📂 Project Structure

```text
portfolio/
├── public/
│   └── Kyle_Dam_Resume.pdf
├── src/
│   ├── app/
│   │   ├── globals.css        # Ventriloc theme variables and utility classes
│   │   ├── layout.tsx         # Next.js font loading and SEO metadata
│   │   └── page.tsx           # Assembled single-page portfolio layout
│   ├── components/
│   │   ├── Navbar.tsx         # Floating pill navigation bar with resume trigger
│   │   ├── Hero.tsx           # Editorial hero with availability badge and CTAs
│   │   ├── About.tsx          # 2-column narrative & key stats cards
│   │   ├── Projects.tsx       # Filterable showcase cards with GitHub links
│   │   ├── Skills.tsx         # Categorized skills matrix with icons
│   │   ├── Education.tsx      # UTS & Suffolk academic credentials & coursework
│   │   ├── Contact.tsx        # Direct contact cards and message form
│   │   └── Footer.tsx         # Minimalist footer with social links
│   └── data/
│       └── portfolioData.ts   # Centralized data model and content
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```
