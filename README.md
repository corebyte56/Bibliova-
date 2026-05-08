# 📚 Bibliova

A modern library management web application where users can browse books, manage their profile, and authenticate securely with email or Google.

🌐 **Live Site:** [bibliova.vercel.app](https://bibliova.vercel.app)

---

## ✨ Features

- 🔐 Email & Password Authentication
- 🔑 Google OAuth Login
- 👤 User Profile with Edit functionality
- 📚 Browse 100+ books with category filter & search
- 📱 Fully Responsive (Mobile + Desktop)
- 🔒 Protected routes (Profile page requires login)
- 🚪 Conditional Navbar (Login/Logout based on session)

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Auth | Better Auth |
| Database | MongoDB Atlas |
| UI Library | HeroUI |
| Styling | Tailwind CSS |
| Icons | Lucide React, Iconify |
| Forms | React Hook Form |
| API | JSON Server (Render) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
bibliova/
├── app/
│   ├── api/
│   │   └── auth/
│   │       └── [...all]/
│   │           └── route.js        # Better Auth handler
│   ├── Books/
│   │   └── page.jsx                # All books with filter & search
│   ├── Profile/
│   │   └── page.jsx                # Protected profile page
│   ├── login/
│   │   └── page.jsx                # Login page
│   ├── register/
│   │   └── page.jsx                # Register page
│   └── UI/
│       └── BookCards.jsx           # Book card component
├── components/
│   ├── Navbar.jsx                  # Auth-aware navbar
│   └── NavLink.jsx
├── lib/
│   ├── auth.js                     # Better Auth server config
│   └── auth-client.js              # Better Auth client config
└── public/
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- MongoDB Atlas account
- Google Cloud Console project

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/bibliova.git
cd bibliova

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
MONGODB_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
BETTER_AUTH_SECRET=your_random_secret_string
BETTER_AUTH_URL=http://localhost:3000
```

### Run Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🔐 Authentication

Bibliova uses [Better Auth](https://better-auth.com) for authentication.

- **Email/Password** — Register and login with email
- **Google OAuth** — One-click Google sign in
- **Session management** — Navbar updates based on login state
- **Protected routes** — Profile page redirects to login if not authenticated

### Google OAuth Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project
3. Enable OAuth consent screen
4. Create OAuth 2.0 credentials
5. Add redirect URI: `http://localhost:3000/api/auth/callback/google`
6. Copy Client ID and Secret to `.env.local`

---

## 📦 Deployment

### Vercel (Frontend)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add all environment variables in **Settings → Environment Variables**
4. Update `BETTER_AUTH_URL` to your Vercel URL
5. Deploy

### Render (JSON Server API)

1. Create a separate repo with `db.json` and `package.json`
2. Set start command: `json-server --watch db.json --port 5001 --host 0.0.0.0`
3. Deploy on [Render](https://render.com)
4. Update `NEXT_PUBLIC_API_URL` in Vercel env variables

---

## 📄 License

MIT License © 2026 Bibliova