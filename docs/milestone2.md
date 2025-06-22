# Milestone 2 – Refined Project Prototype

## What Was Set Up
- Created foundational repo structure
- Initialized React frontend using Vite
- Built backend API using FastAPI with `/auth/login` route
- Dockerized backend for future deployment
- Connected frontend login form to backend endpoint

## Working Core Feature
**Login Module (Mocked):**
- User can enter credentials in frontend
- POST request hits FastAPI endpoint
- Basic validation returns mock JWT

## Tools Used
- React (Vite), FastAPI, Docker, Axios, .env config

## Challenges Encountered
- CORS issues between frontend and backend
- Docker volume mapping during backend build
- Handling route structure and component communication

## What Worked Well
- FastAPI simplicity for routing
- Vite setup made frontend fast and responsive
- Docker setup isolates the backend for testing

## Areas to Refine
- Implement real JWT auth
- Store users in PostgreSQL
- Add API error handling and validation messages