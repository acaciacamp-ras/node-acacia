# Acacia Camp Database Schema

This document outlines the database schema for the Acacia Camp website, including table structures, relationships, and data types.

## Table of Contents

- [Overview](#overview)
- [Entity Relationship Diagram](#entity-relationship-diagram)
- [Tables](#tables)
  - [users](#users)
  - [rooms](#rooms)
  - [bookings](#bookings)
  - [themes](#themes)
  - [audit_logs](#audit_logs)
- [Relationships](#relationships)
- [Indexes](#indexes)
- [Best Practices](#best-practices)

## Overview

The Acacia Camp database uses MySQL to store and manage data for the camp's booking system, user management, theme customization, and audit logging. The schema is designed to be efficient, maintainable, and scalable.

## Entity Relationship Diagram

```
+------------+       +------------+       +------------+
|   users    |       |   rooms    |       |   themes   |
+------------+       +------------+       +------------+
| id         |       | id         |       | id         |
| name       |       | name       |       | name       |
| email      |       | description|       | colors     |
| password   |       | type       |       | fonts      |
| role       |       | capacity   |       | is_active  |
| status     |       | price      |       | timestamps |
| timestamps |       | status     |       +------------+
+------------+       | timestamps |
      |              +------------+
      |                    |
      |                    |
      v                    v
+----------------------------+       +------------+
|        bookings           |       | audit_logs |
+----------------------------+       +------------+
| id                        |       | id         |
| user_id (FK to users)     |<------| user_id    |
| room_id (FK to rooms)     |       | action     |
| check_in_date             |       | entity_type|
| check_out_date            |       | entity_id  |
| status                    |       | details    |
| total_amount              |       | timestamp  |
| timestamps                |       +------------+
+----------------------------+
```

## Tables

### users

Stores user information and authentication data.

| Column     | Type         | Constraints       | Description                           |
|------------|--------------|-------------------|---------------------------------------|
| id         | VARCHAR(36)  | PK               | Unique identifier (UUID)              |
| name       | VARCHAR(255) | NOT NULL         | User's full name                      |
| email      | VARCHAR(255) | NOT NULL, UNIQUE | User's email address                  |
| password   | VARCHAR(255) | NOT NULL         | Hashed password                       |
| role       | ENUM         | NOT NULL         | Role: 'admin', 'developer', 'user'    |
| status     | ENUM         | NOT NULL         | Status: 'active', 'inactive'          |
| created_at | TIMESTAMP    | DEFAULT CURRENT  | Creation timestamp                    |
| updated_at | TIMESTAMP    | ON UPDATE        | Last update timestamp                 |

Example:
```sql
CREATE TABLE users (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin', 'developer', 'user') NOT NULL,
    status ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### rooms

Stores information about available rooms.

| Column      | Type         | Constraints       | Description                           |
|-------------|--------------|-------------------|---------------------------------------|
| id          | VARCHAR(36)  | PK               | Unique identifier (UUID)              |
| name        | VARCHAR(255) | NOT NULL         | Room name                             |
| description | TEXT         |                  | Room description                      |
| type        | VARCHAR(50)  | NOT NULL         | Room type (suite, standard, etc.)     |
| capacity    | INT          | NOT NULL         | Maximum number of occupants           |
| price       | DECIMAL(10,2)| NOT NULL         | Price per night                       |
| status      | ENUM         | NOT NULL         | Status: available, occupied, etc.     |
| created_at  | TIMESTAMP    | DEFAULT CURRENT  | Creation timestamp                    |
| updated_at  | TIMESTAMP    | ON UPDATE        | Last update timestamp                 |

Example:
```sql
CREATE TABLE rooms (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    type VARCHAR(50) NOT NULL,
    capacity INT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    status ENUM('available', 'occupied', 'maintenance') NOT NULL DEFAULT 'available',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### bookings

Stores room reservations and booking information.

| Column         | Type         | Constraints       | Description                           |
|----------------|--------------|-------------------|---------------------------------------|
| id             | VARCHAR(36)  | PK               | Unique identifier (UUID)              |
| user_id        | VARCHAR(36)  | NOT NULL, FK     | Reference to users.id                 |
| room_id        | VARCHAR(36)  | NOT NULL, FK     | Reference to rooms.id                 |
| check_in_date  | DATE         | NOT NULL         | Check-in date                         |
| check_out_date | DATE         | NOT NULL         | Check-out date                        |
| status         | ENUM         | NOT NULL         | Status: pending, confirmed, etc.      |
| total_amount   | DECIMAL(10,2)| NOT NULL         | Total booking amount                  |
| created_at     | TIMESTAMP    | DEFAULT CURRENT  | Creation timestamp                    |
| updated_at     | TIMESTAMP    | ON UPDATE        | Last update timestamp                 |

Example:
```sql
CREATE TABLE bookings (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36) NOT NULL,
    room_id VARCHAR(36) NOT NULL,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    status ENUM('pending', 'confirmed', 'cancelled', 'completed') NOT NULL DEFAULT 'pending',
    total_amount DECIMAL(10,2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (room_id) REFERENCES rooms(id)
);
```

### themes

Stores website theme configurations.

| Column           | Type         | Constraints       | Description                           |
|------------------|--------------|-------------------|---------------------------------------|
| id               | VARCHAR(36)  | PK               | Unique identifier (UUID)              |
| name             | VARCHAR(255) | NOT NULL         | Theme name                            |
| primary_color    | VARCHAR(7)   | NOT NULL         | Primary color (hex)                   |
| secondary_color  | VARCHAR(7)   | NOT NULL         | Secondary color (hex)                 |
| background_color | VARCHAR(7)   | NOT NULL         | Background color (hex)                |
| heading_font     | VARCHAR(255) | NOT NULL         | Heading font family                   |
| body_font        | VARCHAR(255) | NOT NULL         | Body font family                      |
| base_font_size   | VARCHAR(10)  | NOT NULL         | Base font size                        |
| is_active        | BOOLEAN      | DEFAULT FALSE    | Whether theme is active               |
| created_at       | TIMESTAMP    | DEFAULT CURRENT  | Creation timestamp                    |
| updated_at       | TIMESTAMP    | ON UPDATE        | Last update timestamp                 |

Example:
```sql
CREATE TABLE themes (
    id VARCHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    primary_color VARCHAR(7) NOT NULL,
    secondary_color VARCHAR(7) NOT NULL,
    background_color VARCHAR(7) NOT NULL,
    heading_font VARCHAR(255) NOT NULL,
    body_font VARCHAR(255) NOT NULL,
    base_font_size VARCHAR(10) NOT NULL,
    is_active BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### audit_logs

Tracks system changes for auditing purposes.

| Column      | Type         | Constraints       | Description                           |
|-------------|--------------|-------------------|---------------------------------------|
| id          | VARCHAR(36)  | PK               | Unique identifier (UUID)              |
| user_id     | VARCHAR(36)  | FK               | Reference to users.id (can be NULL)   |
| action      | VARCHAR(255) | NOT NULL         | Action performed                      |
| entity_type | VARCHAR(50)  | NOT NULL         | Type of entity affected               |
| entity_id   | VARCHAR(36)  | NOT NULL         | ID of entity affected                 |
| details     | JSON         |                  | Additional details                    |
| created_at  | TIMESTAMP    | DEFAULT CURRENT  | Creation timestamp                    |

Example:
```sql
CREATE TABLE audit_logs (
    id VARCHAR(36) PRIMARY KEY,
    user_id VARCHAR(36),
    action VARCHAR(255) NOT NULL,
    entity_type VARCHAR(50) NOT NULL,
    entity_id VARCHAR(36) NOT NULL,
    details JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
```

## Relationships

1. **One-to-Many: User to Bookings**
   - One user can have many bookings
   - Foreign key: `bookings.user_id` references `users.id`

2. **One-to-Many: Room to Bookings**
   - One room can have many bookings (at different times)
   - Foreign key: `bookings.room_id` references `rooms.id`

3. **One-to-Many: User to Audit Logs**
   - One user can have many audit log entries
   - Foreign key: `audit_logs.user_id` references `users.id`

## Indexes

Indexes are used to improve query performance:

```sql
-- User email lookup (login)
CREATE INDEX idx_users_email ON users(email);

-- Booking lookups by user or room
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_room_id ON bookings(room_id);

-- Audit log lookups
CREATE INDEX idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX idx_audit_logs_created_at ON audit_logs(created_at);
```

## Best Practices

1. **UUID Generation**
   - Use UUID v4 for primary keys
   - Example: `UUID()` in MySQL

2. **Password Handling**
   - Always store passwords hashed (using bcrypt)
   - Never store plain-text passwords

3. **Date Handling**
   - Use `DATE` type for calendar dates (no time component)
   - Use `TIMESTAMP` for timestamps with automatic updates

4. **Transaction Safety**
   - Use transactions for operations that affect multiple tables
   - Example:
     ```sql
     START TRANSACTION;
     -- Operations here
     COMMIT;
     ```

5. **Audit Logging**
   - Log all significant changes to the database
   - Include the user responsible, affected entity, and timestamp
   - Store detailed changes in JSON format for flexible querying 