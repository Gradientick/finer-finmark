Finer-FinMark Platform – Resilient Login Prototype

Overview

A simplified full-stack prototype for the Finer FinMark SaaS platform, designed for Milestone 2 of the Software Development track. This version focuses on resilient user login with proper validation and error handling across the frontend and backend.

Tech Stack
	•	Frontend: React (Vite)
	•	Backend: Node.js (Express)
	•	Infra: Local development only

How to Run

Start Backend

cd backend
node index.js

Start Frontend

cd frontend/finmark-frontend
npm install
npm run dev

	•	Frontend available at: http://localhost:5173
	•	Backend API at: http://localhost:3000/auth/login

Features Implemented
	•	Form-level validation for email and password
	•	Server-side validation and proper error responses
	•	Resilience against incomplete or invalid user input
	•	User-friendly feedback on both frontend and backend

Challenges Addressed
	•	Input validation to prevent crashes
	•	Improved stability when receiving bad user data
	•	Cross-origin setup between frontend and backend (CORS)

Next Steps
	•	Implement authentication tokens (JWT)
	•	Add a real database connection for user records
	•	Add input sanitization and security measures

Future Improvements
	•	Centralize validation logic
	•	Add automated test coverage
	•	Restrict CORS origins in production
	•	Move sensitive configs to a secrets manager (e.g., AWS Secrets Manager)
