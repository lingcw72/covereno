# Cove Reno

Official website repository for **Cove Reno**, a Singapore-based **HDB Registered Renovation Contractor** specialising in interior renovation and custom carpentry works.

This repository contains a **pure static website** built with **HTML, CSS, and vanilla JavaScript** — no frameworks, no build tools, and no backend dependencies.

---

## 🌐 Live Website

👉 [https://www.covereno.com.sg](https://www.covereno.com.sg)

---

## 📌 Project Overview

- **Type:** Static marketing website
- **Stack:** HTML / CSS / JavaScript (no build step)
- **Deployment:** GitHub Pages or Cloudflare Pages
- **Target Audience:** Homeowners in Singapore (HDB & private homes)
- **SEO:** Optimised with structured data, Open Graph, and sitemap

---

## 📂 Project Structure

```
covereno/
├─ index.html          # Home
├─ services.html       # Services
├─ showcase.html       # Project portfolio
├─ about.html          # Company profile
├─ faq.html            # FAQ (with FAQ schema)
├─ contact.html        # Contact details
├─ robots.txt
├─ sitemap.xml
│
├─ css/
│  └─ base.css         # Global styles
│
├─ js/
│  ├─ include.js       # Header/footer loader
│  ├─ nav.js           # Mobile navigation logic
│  └─ showcase.js      # Showcase modal & carousel
│
├─ partials/
│  ├─ header.html      # Shared header
│  └─ footer.html      # Shared footer
│
└─ assets/
   └─ images/           # Logos, icons, project photos
```

---

## ✨ Key Features

- Responsive layout (desktop / tablet / mobile)
- Mobile hamburger navigation with accessibility support
- Reusable header & footer via JS partial loading
- SEO-ready:
  - Canonical URLs
  - Open Graph & Twitter Cards
  - Structured data (FAQPage, LocalBusiness, CollectionPage)
- Accessible showcase modal:
  - Keyboard navigation
  - Focus management
  - ARIA attributes
- Lightweight and fast (no framework overhead)

---

## 🚀 Deployment

### GitHub Pages

1. Push to `main` branch
2. Go to **Settings → Pages**
3. Source: `Deploy from a branch`
4. Branch: `main` / Root `/`
5. No build command required

### Cloudflare Pages (Recommended)

- Framework preset: **None**
- Build command: *(leave empty)*
- Output directory: `/`

---

## 🛠 Development Notes

- This is a **static site** — no Node.js, no npm, no bundlers
- All paths are root-relative (`/css/base.css`) for portability
- Header and footer are injected dynamically using `include.js`
- JavaScript is written defensively to avoid race conditions

---

## 📄 License

This project is proprietary and maintained for Cove Reno. All rights reserved unless stated otherwise.

---

## 📞 Contact

**Cove Reno**\
Singapore\
📱 +65 9220 7788\
📧 [joetan@covereno.com.sg](mailto\:joetan@covereno.com.sg)

Facebook: [https://www.facebook.com/profile.php?id=100054213051925](https://www.facebook.com/profile.php?id=100054213051925)

---

Built with a focus on **clarity, performance, and long-term maintainability**.

