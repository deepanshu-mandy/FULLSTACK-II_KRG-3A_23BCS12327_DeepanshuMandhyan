<<<<<<< HEAD
# Experiment 9 - Secure and Scalable Full Stack System (LivePoll)

This project implements a secure and scalable full-stack system using Spring Boot and React, with:
- Spring Security filter chain and JWT authentication
- Google OAuth 2.0 login integration
- Role-Based Access Control (RBAC) for endpoint protection
- JPA-based database performance optimization
- Secure frontend-backend integration using CORS

## Objectives Coverage

1. Implement backend security using Spring Security and filter chains
   - `SecurityConfig` defines route authorization and security filters.
   - `JwtAuthenticationFilter` validates bearer tokens per request.
2. Enable authentication using OAuth (Google Login)
   - `/oauth2/authorization/google` starts OAuth login.
   - OAuth success handler issues JWT and redirects to frontend.
3. Apply RBAC for endpoint protection
   - URL-level restrictions for `/api/admin/**`.
   - Method-level checks with `@PreAuthorize`.
4. Optimize database interactions using JPA and performance techniques
   - Fetch-optimized poll queries with `@EntityGraph`.
   - Indexed high-traffic columns in poll, option, and vote tables.
   - Atomic vote-count updates to reduce write race issues.
   - Hibernate batching and fetch-size tuning in application properties.
5. Integrate secure backend with React frontend using CORS
   - Explicit CORS allow-list configured in backend.
   - Frontend sends JWT as `Authorization: Bearer <token>`.

## Project Structure

- `backend`: Spring Boot API with security, auth, and poll management
- `frontend`: React (Vite) app with auth flow and role-aware routes

## Backend Stack

- Spring Boot 3.3.2
- Spring Security
- Spring OAuth2 Client
- Spring Data JPA
- H2 database (in-memory)
- JWT (jjwt)

## Security and Access Rules

- Public:
  - `POST /api/auth/register`
  - `POST /api/auth/login`
  - `GET /oauth2/authorization/google`
- Authenticated:
  - `GET /api/auth/me`
  - `GET /api/polls`
  - `GET /api/polls/{id}`
- USER role:
  - `POST /api/polls/{id}/vote`
- ADMIN role:
  - `POST /api/admin/polls`
  - `POST /api/admin/polls/{id}/close`
  - `DELETE /api/admin/polls/{id}`

## Performance Optimizations Added

- JPA fetch optimization:
  - Poll list/detail queries load options efficiently using `@EntityGraph`.
- Database indexing:
  - Poll creation time/status and vote relation columns are indexed.
- Write path optimization:
  - Voting uses an atomic SQL update to increment option counts safely.
- Hibernate tuning:
  - `hibernate.jdbc.batch_size`, ordered insert/update, and batch fetch size.
- API transaction boundaries:
  - Read methods use `@Transactional(readOnly = true)`.

## Default Demo Users

- Admin: `admin@livepoll.com` / `Admin@123`
- User: `user@livepoll.com` / `User@123`

## Google OAuth Setup

=======
# Experiment 8 - App Security and Full-Stack Integration (LivePoll System)

This implementation provides a complete full-stack security flow:
- Spring Boot backend with Spring Security
- JWT authentication for local login/register
- Google OAuth 2.0 login integration
- Role-based access control (RBAC) with USER and ADMIN roles
- React frontend integrated with secured backend APIs
- CORS configuration for frontend-backend communication

## Project Structure

- `backend`: Spring Boot API with security + poll management
- `frontend`: React (Vite) client with authentication and role-aware pages

## Security Concepts Implemented

### 1) Authentication vs Authorization
- Authentication verifies identity:
  - Local login using email/password
  - Google OAuth login using external provider
- Authorization controls access:
  - `ROLE_USER`: can vote in polls
  - `ROLE_ADMIN`: can create, close, and delete polls

### 2) Security Filter Chain
- Custom JWT filter (`JwtAuthenticationFilter`) extracts and validates bearer token
- Filter sets authenticated user in security context
- Spring Security then applies route rules and method-level checks

### 3) OAuth 2.0 (Google Login)
- Backend endpoint: `/oauth2/authorization/google`
- On success, backend creates/loads user and redirects to frontend with JWT
- Frontend stores token and uses it in authenticated API calls

### 4) RBAC
- URL-based role checks in `SecurityConfig`
- Method-level checks using `@PreAuthorize`

## Backend Details

### Tech
- Spring Boot 3.3.2
- Spring Security
- Spring Data JPA
- H2 in-memory database
- JWT (jjwt)
- OAuth2 Client (Google)

### Default Demo Users (auto-seeded)
- Admin:
  - email: `admin@livepoll.com`
  - password: `Admin@123`
- User:
  - email: `user@livepoll.com`
  - password: `User@123`

### Important Backend Endpoints

#### Public
- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /oauth2/authorization/google`

#### Authenticated
- `GET /api/auth/me`
- `GET /api/polls`
- `GET /api/polls/{id}`

#### USER only
- `POST /api/polls/{id}/vote`

#### ADMIN only
- `POST /api/admin/polls`
- `POST /api/admin/polls/{id}/close`
- `DELETE /api/admin/polls/{id}`

### Google OAuth Setup
>>>>>>> 94d6c1103cc8c97acaec5adb3a316a5ffb4f5fc5
Update in `backend/src/main/resources/application.properties`:
- `spring.security.oauth2.client.registration.google.client-id`
- `spring.security.oauth2.client.registration.google.client-secret`

<<<<<<< HEAD
Google console redirect URI:
- `http://localhost:8080/login/oauth2/code/google`

## Frontend Setup

Create `.env` in `frontend`:
=======
Google Console authorized redirect URI:
- `http://localhost:8080/login/oauth2/code/google`

## Frontend Details

### Features
- Login/Register with JWT
- Google OAuth login button
- Dashboard for authenticated users
- Voting UI for USER role
- Admin page for creating/managing polls (ADMIN role)
- Protected routes based on auth + role

### Environment
Create `.env` from `.env.example` in frontend:
>>>>>>> 94d6c1103cc8c97acaec5adb3a316a5ffb4f5fc5
- `VITE_API_BASE_URL=http://localhost:8080`

## Run Instructions

<<<<<<< HEAD
### 1) Backend

1. `cd backend`
2. `mvn spring-boot:run`

Runs on `http://localhost:8080`

### 2) Frontend

=======
## 1) Backend
Prerequisites:
- Java 17+
- Maven installed on system

Commands:
1. `cd backend`
2. `mvn spring-boot:run`

Backend runs at:
- `http://localhost:8080`

## 2) Frontend
Prerequisites:
- Node.js + npm

Commands:
>>>>>>> 94d6c1103cc8c97acaec5adb3a316a5ffb4f5fc5
1. `cd frontend`
2. `npm install`
3. `npm run dev`

<<<<<<< HEAD
Runs on `http://localhost:5173`
=======
Frontend runs at:
- `http://localhost:5173`

## Complete Security Flow Implemented
1. User logs in (local JWT or Google OAuth)
2. Backend creates/validates authentication
3. Frontend stores JWT and sends bearer token on secured requests
4. Backend JWT filter validates token for each request
5. Access is granted/denied by role rules and method annotations

## Learning Outcomes Mapping
This implementation demonstrates:
- Real backend API security with Spring Security
- Authentication and authorization separation
- OAuth 2.0 integration with Google
- RBAC with roles and `@PreAuthorize`
- Secure frontend-backend integration with CORS and bearer tokens
>>>>>>> 94d6c1103cc8c97acaec5adb3a316a5ffb4f5fc5
