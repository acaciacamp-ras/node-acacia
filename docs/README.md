# Acacia Camp Documentation

Welcome to the Acacia Camp documentation. This directory contains comprehensive guides for using, developing, and deploying the Acacia Camp website.

## Available Documentation

- [**Installation Guide**](installation.md): Complete guide to install and configure the application with interactive MySQL setup
- [**API Documentation**](api.md): Details of all available API endpoints and how to use them
- [**Database Schema**](database.md): Database structure, tables, relationships, and best practices
- [**Component Library**](components.md): Reusable UI components and usage examples
- [**Architecture Documentation**](architecture.md): System architecture, component structure, and data flow
- [**Testing Documentation**](testing.md): Guidelines for unit, integration, and E2E testing
- [**Deployment Guide**](deployment.md): Instructions for deploying to various environments

## Quick Start

For a quick installation with interactive database setup:

```bash
# Clone the repository
git clone https://github.com/your-username/acacia-camp.git
cd acacia-camp

# Install dependencies
npm install

# Run the installation wizard
npm run install:wizard
```

The installation wizard will guide you through:
1. MySQL installation (if needed)
2. Database creation and setup
3. Initial admin user creation
4. Environment configuration

After completing the setup, start the development server:

```bash
npm run dev
```

## Key Features

- **User Management**: Register, login, and manage user profiles
- **Room Management**: Browse and manage available rooms
- **Booking System**: Make reservations with date selection
- **Admin Dashboard**: Comprehensive management interface
- **Developer Dashboard**: Theme and component customization
- **Responsive Design**: Optimized for all devices

## Documentation Structure

Each documentation file focuses on a specific aspect of the application:

- Installation guides explain how to set up the system
- API docs detail the available endpoints and authentication
- Component docs show how to use the UI components
- Architecture docs explain the system design
- Testing and deployment docs provide operational guidance

For more detailed information, refer to the specific documentation files listed above. 