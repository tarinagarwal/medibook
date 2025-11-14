@echo off
echo Starting MediBook Multi-Hospital System...
echo.

echo [1/4] Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm run dev"
timeout /t 3 /nobreak >nul

echo [2/4] Starting User Frontend...
start "User Frontend" cmd /k "cd user-frontend && npm run dev"
timeout /t 2 /nobreak >nul

echo [3/4] Starting Admin Frontend...
start "Admin Frontend" cmd /k "cd admin-frontend && npm run dev"
timeout /t 2 /nobreak >nul

echo [4/4] Starting Hospital Frontend...
start "Hospital Frontend" cmd /k "cd hospital-frontend && npm run dev"

echo.
echo All services are starting up!
echo Close individual windows to stop each service.
pause