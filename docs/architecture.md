# Acacia Camp Architecture Documentation

This document provides an overview of the architectural design of the Acacia Camp website, including its component structure, data flow, and technical decisions.

## Table of Contents

- [System Overview](#system-overview)
- [Architecture Diagram](#architecture-diagram)
- [Frontend Architecture](#frontend-architecture)
  - [Component Structure](#component-structure)
  - [State Management](#state-management)
  - [Routing](#routing)
  - [Theme System](#theme-system)
- [Backend Architecture](#backend-architecture)
  - [API Structure](#api-structure)
  - [Authentication](#authentication)
  - [Database Interactions](#database-interactions)
- [Data Flow](#data-flow)
- [External Integrations](#external-integrations)
- [Security Architecture](#security-architecture)
- [Scalability Considerations](#scalability-considerations)
- [Development Workflow](#development-workflow)
- [Technical Decisions](#technical-decisions)

## System Overview

Acacia Camp is a hotel booking and management system built with React, TypeScript, and Tailwind CSS on the frontend, and a Node.js/Express API with MySQL database on the backend. The system provides different dashboards for users, administrators, and developers.

The architecture follows a client-server model with a RESTful API, enabling separation of concerns between the frontend and backend components. This separation allows for independent scaling and maintenance of each part of the system.

## Architecture Diagram

```
┌─────────────────────────────────────────────────┐
│                  Client Layer                    │
│                                                  │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐     │
│  │   User   │   │  Admin   │   │Developer │     │
│  │Dashboard │   │Dashboard │   │Dashboard │     │
│  └────┬─────┘   └────┬─────┘   └────┬─────┘     │
│       │              │              │           │
│       └──────────────┼──────────────┘           │
│                      │                          │
└──────────────────────┼──────────────────────────┘
                       │
┌──────────────────────┼──────────────────────────┐
│                      │                          │
│           ┌──────────▼──────────┐               │
│           │                     │               │
│           │    React Router     │               │
│           │                     │               │
│           └──────────┬──────────┘               │
│                      │                          │
│           ┌──────────▼──────────┐               │
│           │                     │               │
│           │  Auth Context/API   │               │
│           │                     │               │
│           └──────────┬──────────┘               │
│                      │                          │
│                      │                          │
└──────────────────────┼──────────────────────────┘
                       │
┌──────────────────────┼──────────────────────────┐
│                      │                          │
│           ┌──────────▼──────────┐               │
│           │                     │               │
│           │    REST API         │               │
│           │                     │               │
│           └──────────┬──────────┘               │
│                      │                          │
│  ┌──────────┐  ┌─────▼────┐  ┌──────────┐       │
│  │  Users   │  │   Rooms  │  │ Bookings │       │
│  │ Service  │  │ Service  │  │ Service  │       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│       │             │              │            │
│       └─────────────┼──────────────┘            │
│                     │                           │
└─────────────────────┼───────────────────────────┘
                      │
┌─────────────────────┼───────────────────────────┐
│                     │                           │
│           ┌─────────▼─────────┐                 │
│           │                   │                 │
│           │   MySQL Database  │                 │
│           │                   │                 │
│           └───────────────────┘                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

## Frontend Architecture

The frontend is built using React with TypeScript, leveraging modern patterns and practices for maintainable and scalable code.

### Component Structure

The component structure follows an atomic design methodology, organized as:

1. **Atoms (UI Components)**
   - Basic building blocks (buttons, inputs, cards)
   - Located in `src/components/ui/`
   - Generic and reusable across the application

2. **Molecules (Composite Components)**
   - Combinations of atoms forming functional units
   - Examples: SearchBar, RoomCard, BookingForm
   - Located in `src/components/`

3. **Organisms (Section Components)**
   - Complex UI sections combining multiple molecules
   - Examples: RoomsList, BookingTable, UserProfile
   - Located in `src/components/sections/`

4. **Templates (Page Layouts)**
   - Page-level components with layout structure
   - Examples: DashboardLayout, AuthLayout
   - Located in `src/layouts/`

5. **Pages (Screens)**
   - Full application screens for specific routes
   - Examples: Home, Login, Dashboard, AdminPanel
   - Located in `src/pages/`

### State Management

State management follows a hierarchical approach:

1. **Local Component State**
   - Managed using React's `useState` hook
   - Used for UI state that doesn't need to be shared

2. **Context API**
   - Used for sharing state across multiple components
   - Key contexts:
     - `AuthContext`: User authentication state
     - `ThemeContext`: Theme customization state
     - `NotificationContext`: Toast notifications

3. **Custom Hooks**
   - Encapsulate complex logic and state
   - Examples:
     - `useAuth`: Authentication related functions
     - `useBooking`: Booking-related functions
     - `useRooms`: Room fetching and filtering

### Routing

Routing is implemented using React Router v6:

- `src/App.tsx`: Main routing configuration
- Route-based code splitting for performance optimization
- Protected routes for authenticated sections
- Role-based access control for admin and developer areas

```jsx
// Route structure example
<Routes>
  <Route path="/" element={<Index />} />
  <Route path="/login" element={<Login />} />
  <Route path="/rooms" element={<Rooms />} />
  
  {/* Protected routes */}
  <Route element={<ProtectedRoute role="user" />}>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/bookings" element={<UserBookings />} />
  </Route>
  
  {/* Admin routes */}
  <Route element={<ProtectedRoute role="admin" />}>
    <Route path="/admin" element={<AdminPanel />} />
    <Route path="/admin/users" element={<UserManagement />} />
  </Route>
  
  {/* Developer routes */}
  <Route element={<ProtectedRoute role="developer" />}>
    <Route path="/developer" element={<DeveloperDashboard />} />
    <Route path="/developer/themes" element={<ThemeEditor />} />
  </Route>
  
  <Route path="*" element={<NotFound />} />
</Routes>
```

### Theme System

The theming system supports customization via the developer dashboard:

1. **Theme Structure**
   - Color variables (primary, secondary, background)
   - Typography (font families, sizes, weights)
   - Component-specific styling

2. **Implementation**
   - CSS variables for dynamic theming
   - Tailwind CSS for utility-based styling
   - Theme switching with context API

## Backend Architecture

The backend follows a service-oriented architecture with clear separation of concerns.

### API Structure

The API structure follows RESTful principles and is organized by resource domains:

```
/api
  /auth
    - login
    - register
    - logout
  /users
    - CRUD operations
  /rooms
    - CRUD operations
  /bookings
    - CRUD operations
  /themes
    - CRUD operations
```

### Authentication

Authentication is implemented using JWT (JSON Web Tokens):

1. **Login Process**
   - User provides credentials
   - Server validates credentials
   - Server generates JWT with user info and role
   - Token is returned to client and stored

2. **Authorization**
   - JWT is sent with each API request
   - Server validates token and extracts user info
   - Server checks user permissions for requested resource
   - Request is processed or rejected based on permissions

3. **Token Management**
   - Short expiration time (1 hour)
   - Refresh token mechanism for seamless experience
   - Token revocation on logout

### Database Interactions

Database interactions are managed through a data access layer:

1. **Connection Pool**
   - Manages database connections efficiently
   - Handles connection reuse and limits

2. **Query Building**
   - Parameterized queries to prevent SQL injection
   - Transaction support for atomic operations

3. **Data Models**
   - Object representations of database entities
   - Validation logic for data integrity

## Data Flow

### User Authentication Flow

```
1. User enters credentials in login form
2. Frontend sends credentials to /api/auth/login
3. Backend validates credentials against database
4. Backend generates JWT with user info and permissions
5. JWT is returned to frontend
6. Frontend stores JWT in localStorage/sessionStorage
7. Frontend updates AuthContext with user state
8. UI updates to reflect authenticated state
9. Subsequent API requests include JWT in Authorization header
```

### Booking Flow

```
1. User selects room and dates on booking form
2. Frontend validates input and calculates price
3. User confirms booking
4. Frontend sends booking data to /api/bookings
5. Backend validates availability and user permissions
6. Backend creates booking record in database
7. Backend returns booking confirmation
8. Frontend displays success message and redirects to bookings list
```

## External Integrations

The system integrates with external services:

1. **Email Service**
   - Confirmation emails for bookings
   - Password reset functionality
   - Marketing communications

2. **Payment Gateway**
   - Secure payment processing
   - Refund handling

3. **Analytics**
   - User behavior tracking
   - Conversion metrics

## Security Architecture

Security is implemented at multiple levels:

1. **Frontend Security**
   - Input validation before submission
   - CSRF protection with tokens
   - Content Security Policy (CSP)

2. **API Security**
   - JWT authentication
   - Rate limiting to prevent brute force
   - Input sanitization to prevent injection

3. **Database Security**
   - Parameterized queries
   - Encrypted sensitive data
   - Least privilege database user

4. **Infrastructure Security**
   - HTTPS with TLS 1.3
   - HTTP-only cookies
   - Security headers

## Scalability Considerations

The architecture is designed for scalability:

1. **Horizontal Scaling**
   - Stateless API for load balancing
   - Separate services that can scale independently

2. **Performance Optimization**
   - Code splitting for smaller bundle sizes
   - Server-side caching for frequent queries
   - Database indexing for query performance

3. **Future Growth**
   - Microservices potential for larger scale
   - API versioning strategy
   - Database sharding preparation

## Development Workflow

The development workflow is structured to maintain code quality:

1. **Version Control**
   - Git with GitHub
   - Feature branch workflow
   - Pull request reviews

2. **CI/CD Pipeline**
   - Automated testing (unit, integration, E2E)
   - Linting and type checking
   - Deployment to staging and production

3. **Environment Management**
   - Development, staging, and production environments
   - Environment-specific configuration

## Technical Decisions

Key technical decisions and their rationales:

1. **React + TypeScript**
   - Type safety for robust code
   - Better developer experience with IDE tooling
   - Enhanced maintainability for large codebase

2. **Tailwind CSS**
   - Rapid UI development
   - Consistent design system
   - Reduced CSS bundle size with purging

3. **JWT Authentication**
   - Stateless authentication for scalability
   - Reduced database queries for auth checking
   - Support for cross-domain authentication

4. **MySQL Database**
   - Robust relational database for structured data
   - Strong data integrity with ACID compliance
   - Widely supported ORM libraries 