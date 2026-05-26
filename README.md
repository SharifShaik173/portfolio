
---

```markdown
# Shaik Sharif — Personal Portfolio Website

A modern, responsive personal portfolio website built with pure HTML, CSS, and JavaScript.
Designed with a dark aesthetic, smooth animations, and a clean layout to showcase skills, experience, projects, and certifications.

---

## 🌐 Live Preview

> Deploy via GitHub Pages or any static hosting service. Open `index.html` in your browser to view locally.

---

## 📋 Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **Hero** | Intro with animated typing role, profile photo, and availability status |
| 02 | **About** | Personal bio, quick-info cards (degree, location, languages), and skill bars |
| 03 | **Skills** | Tech stack chips, proficiency bars, and currently learning stack |
| 04 | **Experience** | Timeline of internships and training programs |
| 05 | **Projects** | Featured B.Tech final year project — Homomorphic Encryption based video storage |
| 06 | **Education** | Academic background cards |
| 07 | **Certificates** | Professional certifications from Cisco, NPTEL, LinkedIn Learning, Mozilla, etc. |
| 08 | **Contact** | Contact form (EmailJS) with phone, email, LinkedIn, GitHub, and location |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties (CSS variables), Flexbox, Grid, animations, responsive media queries
- **Vanilla JavaScript** — Scroll progress bar, Intersection Observer animations, typing effect, mobile hamburger menu
- **EmailJS** — Contact form email delivery (no backend required)
- **Font Awesome 6.5** — Icons
- **Google Fonts** — Syne (headings) + DM Sans (body)

---

## ✨ Features

- Scroll progress bar at the top of the page
- Animated skill bars triggered on scroll
- Dynamic typing role switcher (Python Fullstack / Django / Flask / Web / Python Developer)
- Scroll-reveal animations for all sections
- Fully responsive — mobile hamburger menu included
- Ambient background glow effects
- Working contact form via EmailJS

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/sharifshaik173/portfolio.git
cd portfolio
```

### 2. Open locally

Simply open `index.html` in any modern browser — no build tools or dependencies required.

### 3. Deploy on GitHub Pages

1. Go to your repository **Settings → Pages**
2. Set source to `main` branch, root folder
3. Save — your site will be live at `https://sharifshaik173.github.io/<repo-name>/`

---

## ✉️ EmailJS Setup

The contact form uses [EmailJS](https://www.emailjs.com/) to send messages without a backend.

To use your own EmailJS account:

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Create a **Service** and **Email Template**
3. Replace the following values in `index.html`:

```js
emailjs.init("YOUR_PUBLIC_KEY");

emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", { ... });
```

---

## 📁 Project Structure

```
portfolio/
└── index.html       # Single-file portfolio (HTML + CSS + JS)
```

> All styles and scripts are embedded in `index.html` for simplicity and easy deployment.

---

## 📦 Featured Project

### 🔐 Homomorphic Encryption Based Video in Multi-View Stores in a Cloud
**B.Tech Final Year Project**

A cloud-based system for secure video storage leveraging Homomorphic Encryption — enabling computations on encrypted video data without decryption. Videos are split into multiple views and distributed across cloud nodes for privacy, integrity, and efficient retrieval.

**Tech:** Python · Homomorphic Encryption · Cloud Computing · Cryptography · Multi-View Storage

---

## 📬 Contact

| Channel | Detail |
|---------|--------|
| 📧 Email | sharifshaik2030@gmail.com |
| 📞 Phone | +91 8555936869 |
| 💼 LinkedIn | [sharif-shaik-76a753341](https://www.linkedin.com/in/sharif-shaik-76a753341) |
| 🐙 GitHub | [sharifshaik173](https://github.com/sharifshaik173) |
| 📍 Location | Indra Nagar, Hanuman Junction, 521105, India |

---

## 📄 License

This project is open source and free to use as a personal portfolio template. Please credit the original author if reusing the design.

---

© 2026 Shaik Sharif. Crafted with dedication.
```
