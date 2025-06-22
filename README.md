# Finer-FinMark Platform Prototype

## Overview
This is the initial prototype for the Finer FinMark SaaS platform. This milestone includes:
- Full-stack user login module (React + FastAPI)
- Project structure setup for scalability

## Tech Stack
- **Frontend**: React (Vite or CRA)
- **Backend**: FastAPI (Python)
- **Infra**: Docker, .env configs

## How to Run
1. Navigate to `frontend/` and run: `npm install && npm run dev`
2. Navigate to project root and run: `docker-compose -f infra/docker-compose.yml up`

## Next Steps
- Add JWT handling
- Secure backend with CORS origins
- Add database connection for real users

## Challenges
- Initial CORS and frontend-backend communication
- Local Docker volume syncing

## Improvements
- Move secrets to Vault or AWS Secrets Manager
- Add tests and error handling