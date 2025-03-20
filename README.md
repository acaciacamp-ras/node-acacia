# Acacia Camp

Acacia Camp is a comprehensive hotel booking and management system with multi-role access for guests, administrators, and developers.

## Features

- **User Management**: Registration, authentication, and role-based access control
- **Room Management**: Create, update, and manage different room types and availability
- **Booking System**: Seamless reservation process with status tracking
- **Admin Dashboard**: Comprehensive tools for site management and reporting
- **Developer Dashboard**: Theme customization, website configuration, and SEO tools
- **Responsive Design**: Optimized for mobile, tablet, and desktop

## Quick Installation

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

### Installation Steps

1. Clone the repository:

```bash
git clone https://github.com/your-username/acacia-camp.git
cd acacia-camp
```

2. Install dependencies:

```bash
npm install
```

3. Run the installation wizard:

```bash
npm run install-db
```

The installation wizard will:
- Check if MySQL is installed on your system
- Install MySQL if needed (with your permission)
- Guide you through database configuration
- Create the database and necessary tables
- Set up environment variables

4. Start the development server:

```bash
npm run dev
```

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **UI Components**: Shadcn UI
- **Backend**: Node.js, Express
- **Database**: MySQL
- **Authentication**: JWT

## Project Structure

```
acacia-camp/
├── database/           # Database setup and migration files
├── docs/               # Documentation files
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   ├── contexts/       # React contexts including authentication
│   ├── layouts/        # Page layout components
│   ├── pages/          # Page components
│   ├── services/       # API service functions
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Application entry point
├── .env.example        # Example environment variables
├── package.json        # Project dependencies and scripts
└── README.md           # Project documentation
```

## Manual Installation

If you prefer not to use the installation wizard:

1. Create a MySQL database manually
2. Import the schema from `database/schema.sql`
3. Create a `.env` file based on `.env.example`
4. Configure your database connection details in `.env`
5. Start the application with `npm run dev`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint codebase
- `npm run install-db` - Run database installation wizard

## Documentation

- [Installation Guide](./docs/installation.md) - Detailed installation instructions
- [User Guide](./docs/usage.md) - How to use the application
- [API Documentation](./docs/api.md) - API endpoints and usage
- [Database Schema](./docs/database.md) - Database structure and relationships
- [Component Library](./docs/components.md) - UI component documentation
- [Developer Guide](./docs/developer.md) - Guidelines for developers

## License

MIT 