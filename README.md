
# Cove Reno Website

This repository contains the source code for the **Cove Reno** website — a Singapore-based **HDB registered renovation and carpentry contractor**.

The site is built using **pure HTML, CSS, and JavaScript**, with an emphasis on:
- Mobile-first design
- Performance and simplicity
- SEO best practices
- Easy maintenance and deployment

---

## 🌐 Live Site

**Production:** https://covereno.com.sg  
*(Hosted on Cloudflare Pages)*

---

## 📁 Project Structure
```
/
├─ index.html
├─ services.html
├─ about.html
├─ showcase.html
├─ faq.html
├─ contact.html
├─ styles.css
├─ script.js
├─ sitemap.xml
├─ robots.txt
└─ images/
```
---

## 🚀 Deployment

This website is designed to be deployed as a **static site** using **Cloudflare Pages**.

### Recommended setup
- **Source control:** GitHub (private repository)
- **Hosting:** Cloudflare Pages
- **Framework preset:** None
- **Build command:** Not required
- **Build output directory:** `/`

Cloudflare Pages automatically handles:
- HTTPS / SSL
- Global CDN
- Custom domain (`cove.ling.casa`)

---

## 🧪 Development & Testing

During testing or staging, search engine indexing can be disabled by adding the following meta tag to all pages:

```html
<meta name="robots" content="noindex, nofollow">
````

⚠️ Remember to remove this tag before production launch.

---

## **🔍 SEO & Structured Data**

  

The site includes:

- Page-specific meta titles and descriptions
- Canonical URLs
- Open Graph tags
- sitemap.xml and robots.txt
- Structured data (JSON-LD):
    - LocalBusiness schema (with UEN and HDB registration wording)
    - FAQPage schema
    - Review schema (testimonials)
    - ContactPoint schema

---

## **📱 Mobile Support**

- Responsive layout
- Mobile hamburger navigation
- Touch-friendly spacing
- WhatsApp floating call-to-action

  

The site is designed to be **light-mode only**, optimised for clarity and trust.

---

## **🛠️ Tech Stack**

- HTML5
- CSS3
- Vanilla JavaScript
- No frameworks
- No build tools

---

## **🔐 Repository & License**

This repository is **private** and intended for the exclusive use of **Cove Reno**.

All content and source code are proprietary.

```
© 2025 Cove Reno. All rights reserved.
```

---

## **📌 Notes**

- CSS and JavaScript files are intentionally kept at the root for simplicity.
- Folder structure can be expanded later if the site grows.
- Images should be optimised (WebP recommended) before production use.

---

## **✅ Status**

- ✔ Mobile-friendly
- ✔ SEO-ready
- ✔ Cloudflare Pages compatible
- ✔ Production-ready static site
# covereno
Official static website for Cove Reno, a Singapore HDB registered renovation contractor. Mobile-friendly, SEO-ready, and optimised for Cloudflare Pages.
