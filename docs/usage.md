# Acacia Camp User Guide

Welcome to the Acacia Camp user guide. This document provides detailed instructions on how to use the Acacia Camp hotel management system.

## Table of Contents

- [Getting Started](#getting-started)
  - [Logging In](#logging-in)
  - [Interface Overview](#interface-overview)
- [User Roles](#user-roles)
- [Guest User Functions](#guest-user-functions)
  - [Browsing Rooms](#browsing-rooms)
  - [Making Reservations](#making-reservations)
  - [Managing Bookings](#managing-bookings)
  - [User Profile](#user-profile)
- [Admin Functions](#admin-functions)
  - [User Management](#user-management)
  - [Room Management](#room-management)
  - [Reservation Management](#reservation-management)
  - [Reports](#reports)
- [Developer Functions](#developer-functions)
  - [Theme Management](#theme-management)
  - [SEO Configuration](#seo-configuration)
  - [Website Customization](#website-customization)
  - [System Settings](#system-settings)
- [API Usage](#api-usage)
- [Troubleshooting](#troubleshooting)

## Getting Started

### Logging In

1. Navigate to the Acacia Camp login page at `http://localhost:8080/login`
2. Enter your credentials:
   - Email: Your registered email
   - Password: Your password
3. Click the "Login" button

If you don't have an account, click "Register" to create a new account.

### Interface Overview

The Acacia Camp interface is divided into several sections:

- **Navigation Bar**: Located at the top, provides access to different sections of the site
- **Side Menu**: Appears for admin and developer roles, provides access to management functions
- **Main Content Area**: The central area displaying the current page's content
- **Footer**: Contains links to policies, contact information, and social media

## User Roles

Acacia Camp has three user roles, each with different access levels:

1. **Guest/User**: Can browse rooms, make reservations, manage personal bookings, and update profile
2. **Admin**: All guest functions plus user management, room management, reservation management, and reporting
3. **Developer**: All admin functions plus theme management, SEO configuration, website customization, and system settings

## Guest User Functions

### Browsing Rooms

1. Navigate to the "Rooms" section from the navigation bar
2. Use filters to narrow down room options:
   - **Room Type**: Filter by standard, deluxe, or suite
   - **Capacity**: Filter by number of guests
   - **Price Range**: Set minimum and maximum price
   - **Availability**: Check rooms available for specific dates
3. Click on a room to view detailed information
4. Click "Book Now" to proceed with reservation

### Making Reservations

1. Select check-in and check-out dates
2. Choose the number of guests
3. Review room availability and pricing
4. Click "Continue" to proceed
5. Fill in guest information (if not already logged in)
6. Add any special requests
7. Review reservation details
8. Click "Confirm Booking" to complete the reservation

### Managing Bookings

1. Log in to your account
2. Navigate to "My Bookings" from the user menu or dashboard
3. View a list of all your bookings with status (pending, confirmed, cancelled, completed)
4. Click on a booking to view details
5. To modify a booking:
   - Click "Modify" button
   - Update check-in/check-out dates or special requests
   - Click "Save Changes"
6. To cancel a booking:
   - Click "Cancel" button
   - Confirm cancellation
   - Note: Cancellation policy applies as indicated

### User Profile

1. Click on your name or profile picture in the navigation bar
2. Select "Profile" from the dropdown menu
3. From here you can:
   - Update personal information
   - Change password
   - Set preferences
   - View booking history
   - Manage payment methods

## Admin Functions

### User Management

1. Access the Admin Dashboard by logging in with admin credentials
2. Navigate to "Users" in the admin sidebar
3. View a list of all users with filtering and search options
4. To create a new user:
   - Click "Add User"
   - Fill in user details including role assignment
   - Click "Create User"
5. To edit a user:
   - Click the edit icon next to the user
   - Update user information
   - Click "Save Changes"
6. To deactivate a user:
   - Click the status toggle next to the user
   - Confirm deactivation

### Room Management

1. Navigate to "Rooms" in the admin sidebar
2. View a list of all rooms with filtering and search options
3. To add a new room:
   - Click "Add Room"
   - Fill in room details (name, type, capacity, price, etc.)
   - Upload room images
   - Add amenities
   - Click "Create Room"
4. To edit a room:
   - Click the edit icon next to the room
   - Update room information
   - Click "Save Changes"
5. To change room status:
   - Click the status dropdown 
   - Select "Available," "Occupied," or "Maintenance"

### Reservation Management

1. Navigate to "Reservations" in the admin sidebar
2. View a list of all reservations with filtering and search options
3. To create a new reservation:
   - Click "Add Reservation"
   - Select user (or create new)
   - Select room
   - Set check-in and check-out dates
   - Add special requests
   - Set status
   - Click "Create Reservation"
4. To edit a reservation:
   - Click the edit icon next to the reservation
   - Update reservation details
   - Click "Save Changes"
5. To change reservation status:
   - Click the status dropdown
   - Select "Pending," "Confirmed," "Cancelled," or "Completed"

### Reports

1. Navigate to "Reports" in the admin sidebar
2. Select the report type:
   - **Occupancy Report**: Room occupancy rates over time
   - **Revenue Report**: Financial performance by date range
   - **User Report**: User registration and activity
   - **Room Performance**: Most booked room types
3. Set parameters (date range, room types, etc.)
4. Click "Generate Report"
5. Export options:
   - CSV
   - PDF
   - Excel

## Developer Functions

### Theme Management

1. Navigate to "Themes" in the developer sidebar
2. View existing themes
3. To create a new theme:
   - Click "Add Theme"
   - Set theme name
   - Configure colors:
     - Primary color
     - Secondary color
     - Background color
   - Configure typography:
     - Heading font
     - Body font
     - Base font size
   - Preview changes in real-time
   - Click "Save Theme"
4. To activate a theme:
   - Find the theme in the list
   - Click "Activate"
   - Confirm activation

### SEO Configuration

1. Navigate to "SEO" in the developer sidebar
2. Configure global SEO settings:
   - Site title
   - Meta description
   - Keywords
   - Favicon
3. Configure page-specific SEO:
   - Select page from dropdown
   - Set title, description, and keywords
   - Preview search result appearance
4. Click "Save Changes"

### Website Customization

1. Navigate to "Customization" in the developer sidebar
2. Select section to customize:
   - **Home Page**: Banner images, featured rooms, testimonials
   - **About Page**: Content, team members, history
   - **Contact Page**: Contact information, form fields, map
   - **Footer**: Links, social media, copyright text
3. Make desired changes using the visual editor
4. Preview changes
5. Click "Save Changes"

### System Settings

1. Navigate to "Settings" in the developer sidebar
2. Configure system parameters:
   - **General**: Site name, timezone, date format
   - **Booking**: Minimum/maximum stay, lead time, cancellation policy
   - **Email**: SMTP settings, email templates
   - **Integration**: API keys, third-party services
   - **Backup**: Database backup schedule and location
3. Click "Save Changes"

## API Usage

Acacia Camp provides a RESTful API for integration with other systems. For detailed API documentation, please refer to the [API Documentation](./api.md).

Basic authentication flow:

1. Obtain JWT token through `/api/auth/login`
2. Include token in Authorization header: `Authorization: Bearer <token>`
3. Make API requests to endpoints as documented

## Troubleshooting

### Common Issues

1. **Can't log in**: 
   - Verify email and password
   - Check if account is active
   - Reset password if necessary

2. **Booking errors**:
   - Ensure dates are valid and within allowed range
   - Check room availability for selected dates
   - Verify all required fields are completed

3. **Admin panel access issues**:
   - Verify your account has admin privileges
   - Contact the developer if you need role elevation

4. **Display or styling issues**:
   - Clear browser cache
   - Try a different browser
   - Check if the browser is supported

### Getting Help

If you encounter issues not covered in this guide:

1. Check the [FAQ documentation](./faq.md)
2. Contact support at support@acaciacamp.com
3. If you're a developer, check the [technical documentation](./technical.md) 