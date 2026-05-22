# Tentwenty Frontend Technical Assessment

A modern SaaS-style Timesheet Management application built using Next.js, TypeScript, TailwindCSS, NextAuth, and internal API routes.

---

# Live Demo

Add your deployed URL here: https://tentwenty-timesheet-app.vercel.app

```bash
https://tentwenty-timesheet-app.vercel.app
```

---

# GitHub Repository

Add your repository URL here:

```bash
https://github.com/omprakash-patel/tentwenty-timesheet-app
```

---

# Tech Stack

## Frontend
- Next.js 15 (App Router)
- React
- TypeScript
- TailwindCSS

## Authentication
- NextAuth.js
- Credentials Provider

## State Management
- React Hooks
- Local Component State

## APIs
- Next.js Internal API Routes

## Deployment
- Vercel

---

# Features

## Authentication
- Login page with dummy authentication
- Secure session handling using NextAuth
- Session expires automatically after 1 hour
- Protected dashboard routes
- Redirect to login when unauthenticated

---

## Dashboard
- Responsive Timesheet Dashboard
- Table view for all weekly timesheets
- Dynamic status badges
- View weekly details
- Progress tracking UI
- Modern SaaS layout

---

## Weekly Timesheet View
- Dynamic rendering based on selected week
- Daily grouped tasks
- Add new task
- Edit task
- Delete task
- Hours tracking
- Progress calculation
- Responsive mobile/tablet layout

---

## Task Management
- Modal-based task creation
- Modal-based task editing
- Form validation
- Error handling
- Dynamic UI updates

---

## UI/UX
- Responsive design
- Figma-inspired clean layout
- Modern SaaS styling
- Reusable components
- Dropdown action menu
- Loading states
- Error states

---

# Project Structure

```bash
app/
│
├── api/
│   ├── auth/
│   └── timesheets/
│
├── dashboard/
│   ├── page.tsx
│   └── [id]/
│       └── page.tsx
│
├── login/
│
components/
│
├── front/
├── modals/
├── table/
│
data/
│
├── timesheets.ts
│
lib/
│
├── auth.ts
├── validations.ts
|
|
Services
|
├── timesheet.service.ts
|
|
types/
│
├── timesheet.ts
```

---

# Internal APIs

This project uses internal Next.js API routes instead of external APIs or JSON server.

Example:

```bash
/api/timesheets
/api/timesheets/[id]
```

This approach works perfectly with:
- Vercel deployment
- Mock backend structure
- Future database scalability

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/tentwenty-timesheet-app.git
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Create Environment File

Create:

```bash
.env.local
```

Add:

```env
NEXTAUTH_SECRET=your_secret_key
NEXTAUTH_URL=http://localhost:3000
```

Generate secret:

```bash
openssl rand -base64 32
```

---

## 4. Run Development Server

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

# Demo Login Credentials

```bash
Email: admin@example.com
Password: admin123
```

---

# Assumptions

- Dummy authentication is used for assessment purposes.
- Mock timesheet data is stored locally.
- Internal API routes simulate backend APIs.
- No external database is required.
- CRUD operations are handled in frontend state.

---

# Future Improvements

- Redux Toolkit integration
- Persistent database (MongoDB/PostgreSQL)
- Real authentication backend
- Pagination APIs
- Search & filters
- Unit and integration tests
- Role-based authentication
- Dark mode

---

# Time Spent

Approximate development time:

```bash
10-12 hours
```

---

# Deployment

This project is optimized for deployment on Vercel.

## Deploy

```bash
vercel
```

or connect repository directly on:

```bash
https://vercel.com
```

---

# Notes

- Fully responsive design
- Built following reusable component architecture
- Uses scalable folder structure
- API-ready frontend architecture
- Clean and maintainable TypeScript codebase

---

# Author

Omprakash Patel

Frontend Developer
```
