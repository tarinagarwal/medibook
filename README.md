# Multi-Hospital Patient Appointment Booking System

A comprehensive patient appointment booking system supporting multiple hospitals with separate portals for patients, administrators, and hospitals.

## Project Structure

```
medibook/
├── backend/                    # Express + TypeScript API (Port 3001)
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Custom middleware
│   │   ├── routes/            # API routes
│   │   ├── services/          # Business logic
│   │   ├── types/             # TypeScript types
│   │   ├── utils/             # Utility functions
│   │   └── server.ts          # Entry point
│   ├── .env                   # Environment variables
│   └── package.json
│
├── user-frontend/             # Patient Portal (Port 4000)
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   ├── features/          # Feature-based modules
│   │   ├── lib/               # API client & utilities
│   │   ├── hooks/             # Custom React hooks
│   │   ├── stores/            # State management
│   │   └── types/             # TypeScript types
│   ├── .env                   # Environment variables
│   └── package.json
│
├── admin-frontend/            # Admin Dashboard (Port 4001)
│   ├── src/
│   │   ├── components/
│   │   ├── features/
│   │   ├── lib/
│   │   ├── hooks/
│   │   ├── stores/
│   │   └── types/
│   ├── .env
│   └── package.json
│
└── hospital-frontend/         # Hospital Portal (Port 4002)
    ├── src/
    │   ├── components/
    │   ├── features/
    │   ├── lib/
    │   ├── hooks/
    │   ├── stores/
    │   └── types/
    ├── .env
    └── package.json
```

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **Frontend**: React, Vite, TypeScript
- **HTTP Client**: Axios
- **CORS**: Configured for all three frontends

## Getting Started

### Prerequisites

- Node.js (v20.12.2 or higher)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd medibook
```

2. Install backend dependencies

```bash
cd backend
npm install
```

3. Install user-frontend dependencies

```bash
cd ../user-frontend
npm install
```

4. Install admin-frontend dependencies

```bash
cd ../admin-frontend
npm install
```

5. Install hospital-frontend dependencies

```bash
cd ../hospital-frontend
npm install
```

### Environment Setup

Each application has its own `.env` file. Copy the `.env.example` files and configure:

**Backend** (`backend/.env`):

```env
PORT=3001
NODE_ENV=development

# CORS Origins
USER_FRONTEND_URL=http://localhost:4000
ADMIN_FRONTEND_URL=http://localhost:4001
HOSPITAL_FRONTEND_URL=http://localhost:4002

# Database
DATABASE_URL=mongodb+srv://username:password@cluster.mongodb.net/medibook-db

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Admin Credentials
ADMIN_USERNAME=admin
ADMIN_PASSWORD=admin123
ADMIN_EMAIL=admin@medibook.com

# UploadThing (Get from uploadthing.com)
UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id

# SMTP (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
SMTP_FROM=noreply@medibook.com
```

**User Frontend** (`user-frontend/.env`):

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Patient Portal
VITE_PORT=4000
```

**Admin Frontend** (`admin-frontend/.env`):

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Admin Dashboard
VITE_PORT=4001
```

**Hospital Frontend** (`hospital-frontend/.env`):

```env
VITE_API_URL=http://localhost:3001/api
VITE_APP_NAME=Hospital Portal
VITE_PORT=4002
```

### Running the Application

Open 4 separate terminals:

**Terminal 1 - Backend**:

```bash
cd backend
npm run dev
```

Backend will run on http://localhost:3001

**Terminal 2 - User Frontend**:

```bash
cd user-frontend
npm run dev
```

Patient Portal will run on http://localhost:4000

**Terminal 3 - Admin Frontend**:

```bash
cd admin-frontend
npm run dev
```

Admin Dashboard will run on http://localhost:4001

**Terminal 4 - Hospital Frontend**:

```bash
cd hospital-frontend
npm run dev
```

Hospital Portal will run on http://localhost:4002

## API Endpoints

Base URL: `http://localhost:3001/api`

### General

- `GET /health` - Health check endpoint

### Admin Routes

- `POST /admin/login` - Admin login
- `GET /admin/hospitals` - Get all hospitals (with filters)
- `GET /admin/hospitals/:id` - Get hospital details
- `PATCH /admin/hospitals/:id/approve` - Approve hospital
- `PATCH /admin/hospitals/:id/reject` - Reject hospital
- `GET /admin/stats` - Get dashboard statistics

### Hospital Routes

- `POST /hospital/register/step1` - Initial registration
- `POST /hospital/register/step2/:hospitalId` - Facility details
- `POST /hospital/register/step3/:hospitalId` - Document upload
- `POST /hospital/login` - Hospital login
- `GET /hospital/profile` - Get hospital profile (protected)
- `PATCH /hospital/profile` - Update profile (protected)
- `GET /hospital/verification-status` - Check verification status (protected)

## Features

### Patient Portal (Port 4000)

- User registration and login (Coming Soon)
- Browse hospitals and doctors (Coming Soon)
- Book appointments (Coming Soon)
- View appointment history (Coming Soon)
- Manage profile (Coming Soon)

### Admin Dashboard (Port 4001) ✅

- ✅ Admin authentication with JWT
- ✅ Hospital verification management
- ✅ View all registered hospitals
- ✅ Approve/Reject hospital registrations
- ✅ Real-time dashboard statistics
- ✅ Filter hospitals by status
- ✅ Search hospitals by name, email, or registration number
- ✅ View detailed hospital information and documents

### Hospital Portal (Port 4002) ✅

- ✅ Multi-step hospital registration
  - Step 1: Basic information (facility name, type, contact details)
  - Step 2: Facility details (description, specializations, operating hours)
  - Step 3: Document upload (license, certifications, photos)
- ✅ Hospital authentication with JWT
- ✅ Verification status tracking
- ✅ Email notifications (registration, approval, rejection)
- ✅ Secure document storage with UploadThing
- Manage doctors and departments (Coming Soon)
- View and manage appointments (Coming Soon)
- Patient records (Coming Soon)

## Development

### Backend Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build
- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema to database

### Frontend Scripts (All three frontends)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Quick Start Guide

### 1. Setup Backend

```bash
cd backend
npm install
npx prisma generate
npm run dev
```

### 2. Setup Admin Frontend

```bash
cd admin-frontend
npm install
npm run dev
```

Login with:

- Username: `admin`
- Password: `admin123` (or whatever you set in .env)

### 3. Setup Hospital Frontend

```bash
cd hospital-frontend
npm install
npm run dev
```

Visit http://localhost:4002 and click "Register Hospital" to start the registration process.

## Hospital Registration Flow

1. **Step 1 - Initial Registration**

   - Select account type (Hospital/Clinic/Diagnostic Center)
   - Enter facility name and registration number
   - Provide contact details
   - Create password

2. **Step 2 - Facility Details**

   - Add facility description
   - List specializations
   - Set operating hours for each day
   - Add location coordinates (optional)

3. **Step 3 - Document Upload**

   - Upload license document (required)
   - Upload certifications (optional)
   - Upload facility photos (optional)
   - Submit for verification

4. **Verification**
   - Admin reviews the application
   - Email notification sent on approval/rejection
   - Hospital can login after approval

## Admin Verification Process

1. Login to admin dashboard (http://localhost:4001)
2. View pending hospitals in verification queue
3. Click on a hospital to view full details
4. Review documents, photos, and facility information
5. Approve or reject with reason
6. Hospital receives email notification

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit with descriptive messages
4. Push and create a pull request

## License

ISC
