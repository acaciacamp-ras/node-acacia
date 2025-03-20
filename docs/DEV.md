# Acacia Camp Developer Documentation

## Table of Contents
1. [Development Setup](#development-setup)
2. [Project Structure](#project-structure)
3. [Database](#database)
4. [Authentication](#authentication)
5. [Components](#components)
6. [State Management](#state-management)
7. [Styling](#styling)
8. [Deployment](#deployment)
9. [Debugging](#debugging)
10. [Contributing Guidelines](#contributing-guidelines)

## Development Setup

### Prerequisites
- Node.js v16 or higher
- MySQL v8 or higher
- Git
- npm or yarn

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/acacia-camp.git
   cd acacia-camp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration:
   ```
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=acacia_camp
   DB_PORT=3306
   DB_CONNECTION_LIMIT=10
   DB_SSL=false
   ```

4. Initialize database:
   ```bash
   mysql -u your_username -p < src/db/schema.sql
   ```

5. Start development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
acacia-camp/
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/        # Base UI components (shadcn/ui)
│   │   └── layout/    # Layout components
│   ├── pages/         # Page components
│   ├── contexts/      # React contexts
│   ├── hooks/         # Custom hooks
│   ├── models/        # Database models
│   ├── config/        # Configuration files
│   ├── db/           # Database schemas
│   └── styles/       # Global styles
├── public/           # Static assets
└── package.json
```

## Database

### Schema Overview
The database consists of five main tables:

1. **users**
   - Stores user information and authentication
   - Fields: id, name, email, password, role, status, timestamps

2. **rooms**
   - Manages room inventory
   - Fields: id, name, description, type, capacity, price, status, timestamps

3. **bookings**
   - Handles room reservations
   - Fields: id, user_id, room_id, dates, status, amount, timestamps

4. **themes**
   - Stores website theme configurations
   - Fields: id, name, colors, fonts, status, timestamps

5. **audit_logs**
   - Tracks system changes
   - Fields: id, user_id, action, entity_type, entity_id, details, timestamp

### Database Operations
```typescript
// Example query
const result = await db.query('SELECT * FROM users WHERE email = ?', [email]);

// Example insert
const result = await db.query(
  'INSERT INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, ?)',
  [id, name, email, hashedPassword, role]
);
```

## Authentication

### User Roles
- **admin**: Full system access
- **developer**: Development and customization access
- **user**: Basic booking access

### Authentication Flow
1. User submits login/register form
2. Server validates credentials
3. JWT token generated and stored
4. User redirected based on role

### Default Users
- Admin: admin@acaciacamp.com / admin123
- Developer: developer@acaciacamp.com / dev123

## Components

### UI Components
Built with shadcn/ui and Tailwind CSS:

```tsx
// Example component
import { Button } from '@/components/ui/button';

export function MyComponent() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}
```

### Layout Components
- `Navbar`: Main navigation
- `Footer`: Site footer
- `Sidebar`: Dashboard navigation
- `Container`: Page container

## State Management

### Contexts
- `AuthContext`: User authentication
- `ThemeContext`: Website theming
- `BookingContext`: Booking management

### Custom Hooks
```typescript
// Example hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
```

## Styling

### Theme System
- Uses Tailwind CSS
- Custom theme variables in `tailwind.config.js`
- Dark mode support
- Responsive design

### Custom Classes
```css
/* Example custom class */
.glass-card {
  @apply bg-white/80 backdrop-blur-lg rounded-lg border border-border shadow-lg;
}
```

## Deployment

### Production Build
```bash
npm run build
```

### Environment Variables
Required for production:
- `DB_HOST`
- `DB_USER`
- `DB_PASSWORD`
- `DB_NAME`
- `DB_PORT`
- `DB_SSL`
- `JWT_SECRET`

### Deployment Checklist
1. Run tests
2. Build application
3. Set up environment variables
4. Configure database
5. Deploy to hosting service
6. Set up SSL certificate
7. Configure domain

## Debugging

### Common Issues
1. Database Connection
   - Check environment variables
   - Verify MySQL service is running
   - Check database credentials

2. Authentication
   - Verify JWT token
   - Check user role permissions
   - Validate session storage

3. Component Rendering
   - Check console for errors
   - Verify props and state
   - Test responsive breakpoints

### Development Tools
- React Developer Tools
- MySQL Workbench
- Postman for API testing

## Contributing Guidelines

### Code Style
- Use TypeScript
- Follow ESLint rules
- Use Prettier for formatting
- Write meaningful commit messages

### Pull Request Process
1. Create feature branch
2. Make changes
3. Run tests
4. Submit PR
5. Address review comments
6. Merge when approved

### Testing
- Write unit tests for components
- Test database operations
- Verify authentication flows
- Check responsive design

## Support

For developer support:
- Create an issue in GitHub
- Contact the development team
- Check the documentation
- Review existing PRs and issues 