# Acacia Camp API Documentation

This document outlines the API endpoints available for the Acacia Camp website. These endpoints allow you to interact with the application's data and functionality programmatically.

## Table of Contents

- [Authentication](#authentication)
- [Users](#users)
- [Rooms](#rooms)
- [Bookings](#bookings)
- [Themes](#themes)
- [Error Handling](#error-handling)

## Base URL

All API endpoints are relative to the base URL:

```
http://localhost:8080/api
```

For production:

```
https://your-domain.com/api
```

## Authentication

### Login

```
POST /auth/login
```

Authenticates a user and returns a JWT token.

**Request Body:**

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### Register

```
POST /auth/register
```

Registers a new user.

**Request Body:**

```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**

```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user"
  }
}
```

### Logout

```
POST /auth/logout
```

Logs out the current user by invalidating their token.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## Users

### Get All Users

```
GET /users
```

Retrieves a list of all users (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Query Parameters:**

- `limit` (optional): Number of users to return (default: 10)
- `offset` (optional): Number of users to skip (default: 0)
- `role` (optional): Filter by role ('admin', 'developer', 'user')

**Response:**

```json
{
  "success": true,
  "count": 2,
  "users": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "user@example.com",
      "role": "user",
      "status": "active",
      "created_at": "2023-01-01T00:00:00Z"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Jane Smith",
      "email": "admin@example.com",
      "role": "admin",
      "status": "active",
      "created_at": "2023-01-02T00:00:00Z"
    }
  ]
}
```

### Get User by ID

```
GET /users/:id
```

Retrieves a specific user by ID.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "user",
    "status": "active",
    "created_at": "2023-01-01T00:00:00Z"
  }
}
```

### Update User

```
PUT /users/:id
```

Updates a user's information.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "name": "John Updated",
  "email": "updated@example.com",
  "role": "admin"  // Admin only
}
```

**Response:**

```json
{
  "success": true,
  "message": "User updated successfully",
  "user": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "John Updated",
    "email": "updated@example.com",
    "role": "admin",
    "status": "active",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-02-01T00:00:00Z"
  }
}
```

### Delete User

```
DELETE /users/:id
```

Deletes a user (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "User deleted successfully"
}
```

## Rooms

### Get All Rooms

```
GET /rooms
```

Retrieves a list of all rooms.

**Query Parameters:**

- `limit` (optional): Number of rooms to return (default: 10)
- `offset` (optional): Number of rooms to skip (default: 0)
- `type` (optional): Filter by room type
- `capacity` (optional): Filter by minimum capacity
- `status` (optional): Filter by status ('available', 'occupied', 'maintenance')

**Response:**

```json
{
  "success": true,
  "count": 2,
  "rooms": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Deluxe Suite",
      "description": "Spacious suite with mountain view",
      "type": "suite",
      "capacity": 4,
      "price": 299.99,
      "status": "available",
      "created_at": "2023-01-01T00:00:00Z"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Standard Room",
      "description": "Comfortable room with garden view",
      "type": "standard",
      "capacity": 2,
      "price": 149.99,
      "status": "available",
      "created_at": "2023-01-02T00:00:00Z"
    }
  ]
}
```

### Get Room by ID

```
GET /rooms/:id
```

Retrieves a specific room by ID.

**Response:**

```json
{
  "success": true,
  "room": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Deluxe Suite",
    "description": "Spacious suite with mountain view",
    "type": "suite",
    "capacity": 4,
    "price": 299.99,
    "status": "available",
    "created_at": "2023-01-01T00:00:00Z"
  }
}
```

### Create Room

```
POST /rooms
```

Creates a new room (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "name": "Premium Suite",
  "description": "Luxury suite with panoramic view",
  "type": "premium",
  "capacity": 6,
  "price": 499.99,
  "status": "available"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Room created successfully",
  "room": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Premium Suite",
    "description": "Luxury suite with panoramic view",
    "type": "premium",
    "capacity": 6,
    "price": 499.99,
    "status": "available",
    "created_at": "2023-03-01T00:00:00Z"
  }
}
```

### Update Room

```
PUT /rooms/:id
```

Updates a room (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "name": "Updated Suite",
  "description": "Updated description",
  "price": 399.99,
  "status": "maintenance"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Room updated successfully",
  "room": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Updated Suite",
    "description": "Updated description",
    "type": "suite",
    "capacity": 4,
    "price": 399.99,
    "status": "maintenance",
    "created_at": "2023-01-01T00:00:00Z",
    "updated_at": "2023-03-01T00:00:00Z"
  }
}
```

### Delete Room

```
DELETE /rooms/:id
```

Deletes a room (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "Room deleted successfully"
}
```

## Bookings

### Get All Bookings

```
GET /bookings
```

Retrieves a list of all bookings (admin) or user's bookings (user).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Query Parameters:**

- `limit` (optional): Number of bookings to return (default: 10)
- `offset` (optional): Number of bookings to skip (default: 0)
- `status` (optional): Filter by status ('pending', 'confirmed', 'cancelled', 'completed')

**Response:**

```json
{
  "success": true,
  "count": 2,
  "bookings": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "user_id": "550e8400-e29b-41d4-a716-446655440000",
      "room_id": "550e8400-e29b-41d4-a716-446655440000",
      "check_in_date": "2023-04-01",
      "check_out_date": "2023-04-05",
      "status": "confirmed",
      "total_amount": 1199.96,
      "created_at": "2023-03-15T00:00:00Z",
      "room": {
        "name": "Deluxe Suite",
        "type": "suite"
      },
      "user": {
        "name": "John Doe",
        "email": "user@example.com"
      }
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "user_id": "550e8400-e29b-41d4-a716-446655440000",
      "room_id": "550e8400-e29b-41d4-a716-446655440001",
      "check_in_date": "2023-05-10",
      "check_out_date": "2023-05-15",
      "status": "pending",
      "total_amount": 749.95,
      "created_at": "2023-03-20T00:00:00Z",
      "room": {
        "name": "Standard Room",
        "type": "standard"
      },
      "user": {
        "name": "John Doe",
        "email": "user@example.com"
      }
    }
  ]
}
```

### Get Booking by ID

```
GET /bookings/:id
```

Retrieves a specific booking by ID.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "booking": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "room_id": "550e8400-e29b-41d4-a716-446655440000",
    "check_in_date": "2023-04-01",
    "check_out_date": "2023-04-05",
    "status": "confirmed",
    "total_amount": 1199.96,
    "created_at": "2023-03-15T00:00:00Z",
    "updated_at": "2023-03-16T00:00:00Z",
    "room": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Deluxe Suite",
      "description": "Spacious suite with mountain view",
      "type": "suite",
      "price": 299.99
    },
    "user": {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "John Doe",
      "email": "user@example.com"
    }
  }
}
```

### Create Booking

```
POST /bookings
```

Creates a new booking.

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "room_id": "550e8400-e29b-41d4-a716-446655440000",
  "check_in_date": "2023-06-01",
  "check_out_date": "2023-06-05"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Booking created successfully",
  "booking": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "user_id": "550e8400-e29b-41d4-a716-446655440000",
    "room_id": "550e8400-e29b-41d4-a716-446655440000",
    "check_in_date": "2023-06-01",
    "check_out_date": "2023-06-05",
    "status": "pending",
    "total_amount": 1199.96,
    "created_at": "2023-03-25T00:00:00Z",
    "room": {
      "name": "Deluxe Suite",
      "type": "suite"
    }
  }
}
```

### Update Booking Status

```
PUT /bookings/:id/status
```

Updates a booking's status (admin or booking owner).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "status": "cancelled"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Booking status updated successfully",
  "booking": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "status": "cancelled",
    "updated_at": "2023-03-26T00:00:00Z"
  }
}
```

### Delete Booking

```
DELETE /bookings/:id
```

Deletes a booking (admin only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "Booking deleted successfully"
}
```

## Themes

### Get All Themes

```
GET /themes
```

Retrieves a list of all themes (developer only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "count": 2,
  "themes": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "name": "Default Theme",
      "primary_color": "#4F46E5",
      "secondary_color": "#10B981",
      "background_color": "#FFFFFF",
      "heading_font": "Inter",
      "body_font": "Inter",
      "base_font_size": "16px",
      "is_active": true,
      "created_at": "2023-01-01T00:00:00Z"
    },
    {
      "id": "550e8400-e29b-41d4-a716-446655440001",
      "name": "Dark Theme",
      "primary_color": "#8B5CF6",
      "secondary_color": "#34D399",
      "background_color": "#1F2937",
      "heading_font": "Montserrat",
      "body_font": "Open Sans",
      "base_font_size": "16px",
      "is_active": false,
      "created_at": "2023-02-01T00:00:00Z"
    }
  ]
}
```

### Get Active Theme

```
GET /themes/active
```

Retrieves the currently active theme.

**Response:**

```json
{
  "success": true,
  "theme": {
    "id": "550e8400-e29b-41d4-a716-446655440000",
    "name": "Default Theme",
    "primary_color": "#4F46E5",
    "secondary_color": "#10B981",
    "background_color": "#FFFFFF",
    "heading_font": "Inter",
    "body_font": "Inter",
    "base_font_size": "16px",
    "is_active": true,
    "created_at": "2023-01-01T00:00:00Z"
  }
}
```

### Create Theme

```
POST /themes
```

Creates a new theme (developer only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "name": "Custom Theme",
  "primary_color": "#6366F1",
  "secondary_color": "#F43F5E",
  "background_color": "#F8FAFC",
  "heading_font": "Roboto",
  "body_font": "Roboto",
  "base_font_size": "16px",
  "is_active": false
}
```

**Response:**

```json
{
  "success": true,
  "message": "Theme created successfully",
  "theme": {
    "id": "550e8400-e29b-41d4-a716-446655440002",
    "name": "Custom Theme",
    "primary_color": "#6366F1",
    "secondary_color": "#F43F5E",
    "background_color": "#F8FAFC",
    "heading_font": "Roboto",
    "body_font": "Roboto",
    "base_font_size": "16px",
    "is_active": false,
    "created_at": "2023-03-01T00:00:00Z"
  }
}
```

### Activate Theme

```
PUT /themes/:id/activate
```

Activates a theme (developer only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "Theme activated successfully",
  "theme": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Dark Theme",
    "is_active": true,
    "updated_at": "2023-03-15T00:00:00Z"
  }
}
```

### Update Theme

```
PUT /themes/:id
```

Updates a theme (developer only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Request Body:**

```json
{
  "name": "Updated Theme",
  "primary_color": "#3B82F6",
  "secondary_color": "#EC4899"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Theme updated successfully",
  "theme": {
    "id": "550e8400-e29b-41d4-a716-446655440001",
    "name": "Updated Theme",
    "primary_color": "#3B82F6",
    "secondary_color": "#EC4899",
    "background_color": "#1F2937",
    "heading_font": "Montserrat",
    "body_font": "Open Sans",
    "base_font_size": "16px",
    "is_active": false,
    "created_at": "2023-02-01T00:00:00Z",
    "updated_at": "2023-03-20T00:00:00Z"
  }
}
```

### Delete Theme

```
DELETE /themes/:id
```

Deletes a theme (developer only).

**Headers:**

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**Response:**

```json
{
  "success": true,
  "message": "Theme deleted successfully"
}
```

## Error Handling

All endpoints return a consistent error format:

```json
{
  "success": false,
  "error": {
    "code": "RESOURCE_NOT_FOUND",
    "message": "The requested resource was not found",
    "details": "Room with id 550e8400-e29b-41d4-a716-446655440099 does not exist"
  }
}
```

### Common Error Codes

- `UNAUTHORIZED`: Authentication required or insufficient permissions
- `BAD_REQUEST`: Invalid request parameters
- `RESOURCE_NOT_FOUND`: Requested resource does not exist
- `VALIDATION_ERROR`: Input validation failed
- `CONFLICT`: Resource conflict (e.g., duplicate email)
- `SERVER_ERROR`: Internal server error

### HTTP Status Codes

- `200 OK`: Successful request
- `201 Created`: Resource created successfully
- `400 Bad Request`: Invalid request
- `401 Unauthorized`: Authentication required
- `403 Forbidden`: Insufficient permissions
- `404 Not Found`: Resource not found
- `409 Conflict`: Resource conflict
- `500 Internal Server Error`: Server error 