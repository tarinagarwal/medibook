# Frontend + Backend Structure

Standard structure for projects with React/Vite frontend and Node.js/Express backend.

---

## With Prisma

```
project/
├── frontend/                          # React + Vite
│   ├── public/
│   │   └── assets/
│   │
│   ├── src/
│   │   ├── features/
│   │   │   ├── feature-a/
│   │   │   │   ├── components/
│   │   │   │   ├── hooks/
│   │   │   │   ├── api.ts
│   │   │   │   └── types.ts
│   │   │   ├── feature-b/
│   │   │   └── feature-c/
│   │   │
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   └── layout/
│   │   │
│   │   ├── lib/
│   │   │   ├── api-client.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── hooks/
│   │   ├── stores/
│   │   ├── types/
│   │   ├── styles/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   ├── vite.config.ts
│   └── tsconfig.json
│
└── backend/                           # Node.js + Express
    ├── prisma/
    │   ├── schema.prisma
    │   ├── migrations/
    │   └── seed.ts
    │
    ├── src/
    │   ├── routes/
    │   │   ├── index.ts
    │   │   ├── feature-a.routes.ts
    │   │   ├── feature-b.routes.ts
    │   │   └── feature-c.routes.ts
    │   │
    │   ├── controllers/
    │   │   ├── feature-a.controller.ts
    │   │   ├── feature-b.controller.ts
    │   │   └── feature-c.controller.ts
    │   │
    │   ├── services/
    │   │   ├── feature-a.service.ts
    │   │   ├── feature-b.service.ts
    │   │   └── feature-c.service.ts
    │   │
    │   ├── models/
    │   │   └── index.ts
    │   │
    │   ├── middleware/
    │   │   ├── auth.middleware.ts
    │   │   ├── validation.middleware.ts
    │   │   └── error.middleware.ts
    │   │
    │   ├── utils/
    │   ├── types/
    │   ├── config/
    │   │   └── index.ts
    │   │
    │   └── server.ts
    │
    ├── package.json
    └── tsconfig.json
```

---
