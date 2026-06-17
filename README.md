# Vautika Physiotherapy & Rehabilitation Centre

> **Rehab • Revive • Restore**

A premium, production-ready website for Vautika Physiotherapy & Rehabilitation Centre, Bhubaneswar, built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

---

## 🏥 Clinic Information

| | |
|---|---|
| **Clinic** | Vautika Physiotherapy & Rehabilitation Centre |
| **Doctor** | Dr. Satya Mohanty (PT) — MPT (MSK), FIFA Sports Medicine |
| **Phone** | 7381455744 |
| **Email** | vautika.info@gmail.com |
| **Address** | Plot N2/19, Simpleekare, IRC Village, Nayapalli, Bhubaneswar, Odisha |
| **Mon–Sat** | 9:00 AM – 9:00 PM |
| **Sunday** | 8:00 AM – 1:00 PM |

---

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter + Poppins (Google Fonts)
- **Deployment:** Static Export (GitHub Pages / Netlify / Vercel / Cloudflare)

---

## 📁 Project Structure

```
vautika/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   ├── manifest.json
│   └── images/          # Add AI-generated images here
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout with SEO metadata
│   │   ├── page.tsx     # Home page
│   │   ├── about/
│   │   ├── services/
│   │   ├── therapies/
│   │   ├── appointment/
│   │   ├── contact/
│   │   ├── blog/
│   │   └── privacy/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesSection.tsx
│   │   │   ├── WhyChooseUsSection.tsx
│   │   │   ├── DoctorSection.tsx
│   │   │   ├── ConditionsSection.tsx
│   │   │   ├── BeforeAfterSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── TimingsSection.tsx
│   │   │   └── FAQSection.tsx
│   │   └── ui/
│   │       ├── Logo.tsx
│   │       ├── FloatingButtons.tsx
│   │       ├── BackToTop.tsx
│   │       └── StructuredData.tsx
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone or download the project
cd vautika

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build static export
npm run build

# The output will be in the 'out' folder
```

---

## 🌐 Deployment Guide

### Option 1: Vercel (Recommended — Easiest)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select your repo → Deploy
4. Add custom domain in Vercel settings

### Option 2: Netlify
1. Build: `npm run build`
2. Drag & drop the `out/` folder to [netlify.com/drop](https://netlify.com/drop)
3. Or connect GitHub repo → set build command to `npm run build`, publish dir to `out`

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Push `out/` contents to `gh-pages` branch
3. Enable GitHub Pages in repo settings

### Option 4: Cloudflare Pages
1. Connect GitHub repo to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`

---

## 🎨 Branding

| | |
|---|---|
| **Primary Color** | `#4F2D7F` (Deep Purple) |
| **Secondary Color** | `#0F766E` (Teal) |
| **Accent Color** | `#F59E0B` (Amber) |
| **Font (Body)** | Inter |
| **Font (Headings)** | Poppins |

---

## 📸 AI Image Prompts

Use these prompts with Midjourney, DALL-E 3, or Adobe Firefly to generate premium images:

### Hero Banner
```
Professional physiotherapist in white coat gently treating patient's shoulder, 
modern clinic interior, soft purple and teal lighting, healthcare photography style, 
ultra-realistic, 8K, wide angle, premium medical aesthetic
```

### Doctor Portrait
```
Professional Indian male physiotherapist in white coat, confident friendly smile, 
modern clinic background, professional headshot, soft studio lighting, ultra-realistic, 4K
```

### Sports Rehabilitation
```
Athletic young man doing resistance band exercises with physiotherapist guidance, 
modern rehabilitation gym, vibrant and energetic, sports medicine setting, 8K photography
```

### Pediatric Therapy
```
Child-friendly physiotherapy session, gentle female therapist helping toddler with balance exercises, 
colorful rehabilitation room, warm lighting, caring and professional, 4K
```

### Modern Clinic Interior
```
Premium modern physiotherapy clinic interior, clean white and purple accents, 
advanced rehabilitation equipment, professional healthcare environment, architectural photography, 8K
```

### Happy Recovery Patient
```
Happy Indian woman smiling pain-free after physiotherapy treatment, modern clinic background, 
lifestyle healthcare photography, natural lighting, authentic emotions, 4K
```

---

## 🔍 SEO Features

- ✅ Complete Meta Tags (Title, Description, Keywords)
- ✅ Open Graph Tags (Facebook/LinkedIn sharing)
- ✅ Twitter Cards
- ✅ JSON-LD Structured Data (LocalBusiness, MedicalBusiness, Physician, FAQPage, WebSite)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Geo Meta Tags (location targeting)
- ✅ Static Generation (fastest possible load times)
- ✅ Semantic HTML structure
- ✅ Alt text on images
- ✅ Schema.org markup

---

## 📱 Features

- ✅ Fully Responsive (Mobile-First)
- ✅ Dark Mode (system preference + toggle)
- ✅ Sticky Header with scroll effects
- ✅ Floating WhatsApp Button
- ✅ Floating Call Button
- ✅ Back to Top Button
- ✅ Online Appointment Form
- ✅ Google Maps Embed
- ✅ Before & After Recovery Timeline
- ✅ FAQ with accordion
- ✅ Patient Testimonials
- ✅ Clinic Timings with live "Today" indicator
- ✅ Conditions We Treat section
- ✅ Blog system (ready for CMS integration)

---

## 🛠 Maintenance Guide

### Updating Content
- **Clinic info:** Edit `src/app/layout.tsx` (metadata) and `src/components/layout/Footer.tsx`
- **Services:** Edit `src/components/sections/ServicesSection.tsx`
- **Testimonials:** Edit `src/components/sections/TestimonialsSection.tsx`
- **Doctor info:** Edit `src/components/sections/DoctorSection.tsx` and `src/app/about/page.tsx`
- **FAQs:** Edit `src/components/sections/FAQSection.tsx`

### Adding Blog Posts
Add post objects to the `posts` array in `src/app/blog/page.tsx`.

### Updating SEO
- Edit metadata in each `page.tsx` file
- Update `public/sitemap.xml` when adding new pages
- Update `public/robots.txt` if needed

---

## 🔮 Future Scalability

- **CMS Integration:** Connect to Sanity, Contentful, or Strapi for blog management
- **Online Booking:** Integrate Calendly or custom booking API
- **Payment Gateway:** Add Razorpay for paid consultations
- **Patient Portal:** Add login/dashboard for patients
- **Video Consultation:** Integrate Zoom/Google Meet booking
- **Multi-language:** Add Odia language support
- **Analytics:** Connect Google Analytics 4

---

## 📞 Support

For technical support, contact the development team or raise an issue in the repository.

---

*Built with ❤️ for Vautika Physiotherapy & Rehabilitation Centre, Bhubaneswar*
