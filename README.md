# ☕ Cafe Cursor

> A modern, secure credit distribution system for Cursor IDE community events.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-5-2D3748?style=flat-square&logo=prisma)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **🔐 Secure Registration** - Only pre-approved attendees can claim credits
- **📧 Email Notifications** - Automatic email with credit details via Resend
- **🌍 Multi-language** - English and Brazilian Portuguese support
- **📱 Responsive Design** - Beautiful dark theme, works on all devices
- **👤 Admin Panel** - Manage credits and users with ease
- **🐦 Social Sharing** - One-click share to X (Twitter)
- **⚡ Fast & Modern** - Built with Next.js 14 App Router

## 🚀 Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/cafe-cursor.git
cd cafe-cursor
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
# Database (for local development)
DATABASE_URL="file:./dev.db"

# Resend API (get free key at resend.com)
RESEND_API_KEY="re_your_api_key"
FROM_EMAIL="Your Event <onboarding@resend.dev>"

# Admin credentials
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your_secure_password"
```

### 4. Set up the database

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma db push

# Seed with sample data (optional)
npx tsx prisma/seed.ts
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📊 Admin Panel

Access the admin panel at `/admin`:

- **Dashboard** - View credit statistics and user registrations
- **User Management** - See who claimed credits
- **Credit Management** - Track available and used credits

Default credentials: `admin` / `cafecursor2024`

## 📦 Data Import

### Import Credits (CSV)

Create a CSV file with your Cursor referral links:

```csv
link
https://cursor.com/referral?code=ABC123
https://cursor.com/referral?code=DEF456
```

### Import Eligible Users (CSV)

Create a CSV file with pre-approved attendees:

```csv
email,name,company,approval_status
john@email.com,John Doe,Acme Inc,approved
jane@email.com,Jane Smith,Tech Corp,approved
```

Place both files in the project root and update `prisma/seed.ts` with your file paths.

## 🌐 Deploy to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/cafe-cursor.git
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and import your repository
2. Add environment variables in Vercel dashboard:
   - `DATABASE_URL` - Your PostgreSQL connection string
   - `DIRECT_URL` - Direct database URL (same as DATABASE_URL for most providers)
   - `RESEND_API_KEY` - Your Resend API key
   - `FROM_EMAIL` - Sender email address
   - `ADMIN_USERNAME` - Admin username
   - `ADMIN_PASSWORD` - Admin password

3. Deploy! 🚀

### Recommended Database Providers

- **[Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)** - Seamless integration
- **[Supabase](https://supabase.com)** - Free tier available
- **[Neon](https://neon.tech)** - Serverless Postgres

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 14](https://nextjs.org) | React framework with App Router |
| [TypeScript](https://typescriptlang.org) | Type safety |
| [Prisma](https://prisma.io) | Database ORM |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Resend](https://resend.com) | Email delivery |
| [Zod](https://zod.dev) | Schema validation |

## 📁 Project Structure

```
cafe-cursor/
├── app/
│   ├── admin/           # Admin panel pages
│   ├── api/             # API routes
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Landing page
├── components/          # React components
├── lib/                 # Utilities and helpers
├── prisma/
│   ├── schema.prisma    # Database schema
│   └── seed.ts          # Seed script
└── public/              # Static assets
```

## 🎨 Customization

### Change Event Name

Update the translations in `lib/translations.ts`:

```typescript
"pt-BR": {
  title: "Your Event Name",
  // ...
}
```

### Change Logo

Replace the SVG in `app/page.tsx` or add your logo to `public/`.

### Change Colors

Edit CSS variables in `app/globals.css`:

```css
:root {
  --foreground: #your-color;
  --background: #your-color;
  /* ... */
}
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - feel free to use this for your community events!

## 💚 Credits

Made with ☕ by **Chris & Alex**  
Cursor Ambassadors Brazil

---

<p align="center">
  <a href="https://cursor.com">
    <img src="https://cursor.com/favicon.ico" width="32" height="32" alt="Cursor" />
  </a>
  <br />
  Powered by <a href="https://cursor.com">Cursor</a>
</p>
