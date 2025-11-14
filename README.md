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
USER_FRONTEND_URL=http://localhost:4000
ADMIN_FRONTEND_URL=http://localhost:4001
HOSPITAL_FRONTEND_URL=http://localhost:4002
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
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

- `GET /health` - Health check endpoint

## Features (To Be Implemented)

### Patient Portal (Port 4000)

- User registration and login
- Browse hospitals and doctors
- Book appointments
- View appointment history
- Manage profile

### Admin Dashboard (Port 4001)

- Manage hospitals
- Manage users
- View all appointments
- System analytics
- User management

### Hospital Portal (Port 4002)

- Hospital staff login
- Manage doctors and departments
- View and manage appointments
- Patient records
- Hospital analytics

## Development

### Backend Scripts

- `npm run dev` - Start development server with nodemon
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Run production build

### Frontend Scripts (All three frontends)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Contributing

1. Create a feature branch
2. Make your changes
3. Commit with descriptive messages
4. Push and create a pull request

## License

ISC
