# Jawad Tareen - Personal Portfolio

A responsive, dynamic personal portfolio website showcasing my projects, skills, and background as a Full-Stack Developer and ML Engineer. The content is fully manageable via a headless CMS, and it includes a working contact form and bilingual support.

## 🚀 Live Demo
**[[Check Live ↗](https://jtareen.netlify.app/)]**

---

## ✨ Features
* **Dynamic Content Management:** Projects, skills, and about sections are fetched dynamically from Sanity CMS.
* **Fully Responsive:** Adapts seamlessly to all screen sizes (mobile, tablet, and desktop) using Tailwind CSS.
* **Working Contact Form:** Sends direct emails using EmailJS without needing a backend server.
* **Modern UI/UX:** Clean, developer-focused aesthetic using the Fira Code font, custom SVG icons, and abstract geometric styling.

---

## 🛠️ Built With

### Frontend
* **[React](https://reactjs.org/)** - UI Library
* **[Vite](https://vitejs.dev/)** - Next Generation Frontend Tooling (Bundler)
* **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework for styling
* **[React Router](https://reactrouter.com/)** - Client-side routing

### Backend / CMS
* **[Sanity.io](https://www.sanity.io/)** - Headless CMS for managing portfolio content

### Utilities & Integrations
* **[EmailJS](https://www.emailjs.com/)** - Client-side email handling for the contact form

### Deployment
* **[Netlify](https://www.netlify.com/)** - Frontend hosting and automated CI/CD
* **Sanity Hosting** - Studio dashboard hosting

---

## 📂 Project Structure
This repository contains two main directories:
1. `/` (Root): The React frontend application.
2. `/studio`: The Sanity Studio backend configuration and schemas.

---

## 💻 Local Development Setup

Follow the steps below to run the project locally on your machine.

---

### ✅ Prerequisites

Make sure you have the following installed or set up:

* **Node.js** (LTS recommended)
* A **Sanity** account
* An **EmailJS** account

---

### 1. Clone the Repository

```bash
git clone https://github.com/jtareen/portfolio
cd portfolio
```

---

### 2. Frontend Setup

Install project dependencies:

```bash
npm install
```

---

### 3. Environment Variables

Create a `.env` file in the project root and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

### 4. Run the Development Server

Start the Vite development server:

```bash
npm run dev
```

Once running, the app will be available at:

```
http://localhost:5173
```


### 5. Sanity Studio Setup
Open a new terminal window, navigate to the studio folder, and install its dependencies:
```bash
cd studio
npm install
```

Start the Sanity Studio locally:
```bash
npm run dev
```
*(The studio will typically run on `http://localhost:3333`)*

---

## 📫 Contact

**Jawad Tareen**
* Email: jtareen440@gmail.com
* Phone: +92 332 4474400
* LinkedIn: [[LinkedIn](https://www.linkedin.com/in/jawad-tareen-22349a145/)]
* GitHub: [[GitHub](https://github.com/jtareen)]