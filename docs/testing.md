# Acacia Camp Testing Documentation

This document provides comprehensive guidelines for testing the Acacia Camp website, including unit tests, integration tests, end-to-end tests, and manual testing procedures.

## Table of Contents

- [Testing Strategy](#testing-strategy)
- [Testing Environment Setup](#testing-environment-setup)
- [Unit Testing](#unit-testing)
- [Integration Testing](#integration-testing)
- [End-to-End Testing](#end-to-end-testing)
- [API Testing](#api-testing)
- [Performance Testing](#performance-testing)
- [Accessibility Testing](#accessibility-testing)
- [Security Testing](#security-testing)
- [Test Coverage](#test-coverage)
- [Continuous Integration](#continuous-integration)
- [Manual Testing Procedures](#manual-testing-procedures)
- [Reporting Bugs](#reporting-bugs)

## Testing Strategy

The Acacia Camp testing strategy follows a pyramid approach:

1. **Unit Tests**: The foundation - fast, numerous, testing small units of code in isolation
2. **Integration Tests**: Testing how components work together
3. **End-to-End Tests**: Testing complete user flows and scenarios
4. **Manual Testing**: Final verification and exploratory testing

## Testing Environment Setup

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Chrome browser (for E2E tests)

### Installation

Install testing dependencies:

```bash
npm install --save-dev 
  jest 
  @testing-library/react 
  @testing-library/jest-dom 
  cypress 
  axe-core
```

### Configuration

The project includes the following configuration files:

- `jest.config.js`: Configuration for Jest unit tests
- `cypress.json`: Configuration for Cypress E2E tests

## Unit Testing

Unit tests validate individual components and functions in isolation. We use Jest and React Testing Library for unit tests.

### Running Unit Tests

```bash
# Run all unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Writing Unit Tests

```jsx
// Example component test: Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('supports different variants', () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByText('Delete')).toHaveClass('destructive');
  });
});
```

### Testing Hooks

```jsx
// Example hook test: useAuth.test.tsx
import { renderHook, act } from '@testing-library/react-hooks';
import { useAuth } from '@/contexts/AuthContext';
import { AuthProvider } from '@/contexts/AuthContext';

describe('useAuth Hook', () => {
  it('provides authentication context', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    expect(result.current.user).toBe(null);
    expect(typeof result.current.login).toBe('function');
    expect(typeof result.current.logout).toBe('function');
  });

  it('updates user when logged in', async () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    
    await act(async () => {
      await result.current.login('user@example.com', 'password');
    });
    
    expect(result.current.user).not.toBe(null);
    expect(result.current.user.email).toBe('user@example.com');
  });
});
```

## Integration Testing

Integration tests validate that components work together as expected. We focus on testing page components that integrate multiple smaller components.

### Writing Integration Tests

```jsx
// Example integration test: RoomsList.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import { RoomsList } from '@/components/RoomsList';
import { mockRooms } from '@/mocks/rooms';

// Mock API call
jest.mock('@/services/api', () => ({
  getRooms: jest.fn().mockResolvedValue(mockRooms)
}));

describe('RoomsList Integration', () => {
  it('loads and displays rooms', async () => {
    render(<RoomsList />);
    
    // Check loading state
    expect(screen.getByText('Loading rooms...')).toBeInTheDocument();
    
    // Wait for rooms to load
    await waitFor(() => {
      expect(screen.queryByText('Loading rooms...')).not.toBeInTheDocument();
    });
    
    // Check that rooms are displayed
    mockRooms.forEach(room => {
      expect(screen.getByText(room.name)).toBeInTheDocument();
      expect(screen.getByText(`$${room.price}`)).toBeInTheDocument();
    });
  });
});
```

## End-to-End Testing

End-to-End (E2E) tests validate complete user flows. We use Cypress for E2E testing.

### Running E2E Tests

```bash
# Open Cypress test runner
npm run cypress:open

# Run Cypress tests headlessly
npm run cypress:run
```

### Writing E2E Tests

```javascript
// Example E2E test: login.spec.js
describe('Login Flow', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-testid=email-input]').type('user@example.com');
    cy.get('[data-testid=password-input]').type('password123');
    cy.get('[data-testid=login-button]').click();
    
    // Verify redirect to dashboard
    cy.url().should('include', '/dashboard');
    cy.get('[data-testid=user-greeting]').should('contain', 'Welcome');
  });

  it('should show error with invalid credentials', () => {
    cy.get('[data-testid=email-input]').type('invalid@example.com');
    cy.get('[data-testid=password-input]').type('wrongpassword');
    cy.get('[data-testid=login-button]').click();
    
    // Verify error message
    cy.get('[data-testid=error-message]')
      .should('be.visible')
      .and('contain', 'Invalid email or password');
  });
});
```

### Critical User Flows to Test

1. **User Authentication**
   - Registration
   - Login
   - Password reset
   - Logout

2. **Room Booking**
   - Browse rooms
   - View room details
   - Book a room
   - Modify/cancel booking

3. **Admin Functions**
   - User management
   - Room management
   - Booking management

4. **Developer Dashboard**
   - Theme management
   - Component customization

## API Testing

API tests validate the backend API endpoints using Jest and Supertest.

### Writing API Tests

```javascript
// Example API test: auth.test.js
const request = require('supertest');
const app = require('../app');
const db = require('../db');

describe('Authentication API', () => {
  beforeAll(async () => {
    await db.connect();
  });

  afterAll(async () => {
    await db.disconnect();
  });

  it('should register a new user', async () => {
    const response = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.user.email).toBe('test@example.com');
  });

  it('should login an existing user', async () => {
    const response = await request(app)
      .post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: 'password123'
      });
    
    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.token).toBeDefined();
  });
});
```

## Performance Testing

Performance tests evaluate the application's responsiveness and stability under load.

### Tools

- Lighthouse: For performance audits
- k6: For load testing

### Running Performance Tests

```bash
# Lighthouse CLI
npx lighthouse https://your-staging-url.com --output-path=./performance-report.html

# k6 load test
k6 run load-tests/booking-flow.js
```

### Example k6 Test

```javascript
// load-tests/booking-flow.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
};

export default function() {
  // Login request
  const loginRes = http.post('https://your-api.com/auth/login', {
    email: 'test@example.com',
    password: 'password123'
  });
  
  check(loginRes, {
    'login successful': (r) => r.status === 200 && r.json('token') !== '',
  });
  
  const token = loginRes.json('token');
  
  // Get rooms request
  const roomsRes = http.get('https://your-api.com/rooms', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  
  check(roomsRes, {
    'rooms retrieved': (r) => r.status === 200,
  });
  
  sleep(1);
}
```

## Accessibility Testing

Accessibility tests ensure the application is usable by people with disabilities.

### Tools

- axe-core: For automated accessibility testing
- WAVE: For visual accessibility audits

### Integrating with Jest

```jsx
// Example accessibility test
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Button } from '@/components/ui/button';

expect.extend(toHaveNoViolations);

describe('Button Accessibility', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(<Button>Click me</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
```

### Integrating with Cypress

```javascript
// cypress/support/commands.js
import 'cypress-axe';

// cypress/integration/accessibility.spec.js
describe('Accessibility Tests', () => {
  it('Home page should be accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
  
  it('Login page should be accessible', () => {
    cy.visit('/login');
    cy.injectAxe();
    cy.checkA11y();
  });
});
```

## Security Testing

Security tests identify vulnerabilities in the application.

### Tools

- OWASP ZAP: For automated security scanning
- npm audit: For dependency vulnerabilities

### Running Security Tests

```bash
# Check dependencies for vulnerabilities
npm audit

# OWASP ZAP CLI scan
zap-cli quick-scan --self-contained --start-options '-config api.disablekey=true' https://your-staging-url.com
```

### Key Security Areas to Test

1. **Authentication**
   - Password strength
   - Account lockout
   - Session management

2. **Authorization**
   - Role-based access control
   - API endpoint permissions

3. **Data Validation**
   - Input sanitization
   - XSS prevention
   - CSRF protection

## Test Coverage

We aim for at least 80% code coverage for unit and integration tests.

### Running Coverage Reports

```bash
npm run test:coverage
```

The coverage report will be generated in the `coverage` directory.

## Continuous Integration

Tests are automatically run in our CI pipeline on GitHub Actions.

### CI Workflow

```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '16'
      - run: npm ci
      - run: npm run test:coverage
      - run: npm run cypress:run
      - name: Upload coverage
        uses: codecov/codecov-action@v2
```

## Manual Testing Procedures

While automated tests cover most functionality, manual testing is still important for verification.

### Pre-release Checklist

1. **Cross-browser Testing**
   - Chrome
   - Firefox
   - Safari
   - Edge

2. **Responsive Design**
   - Desktop
   - Tablet
   - Mobile

3. **User Flow Testing**
   - Complete all critical user journeys
   - Test edge cases and error handling

### Testing Matrix Template

| Test Case | Chrome | Firefox | Safari | Edge | Mobile |
|-----------|--------|---------|--------|------|--------|
| Login     |        |         |        |      |        |
| Register  |        |         |        |      |        |
| Book Room |        |         |        |      |        |
| ...       |        |         |        |      |        |

## Reporting Bugs

When reporting bugs, include:

1. **Environment**
   - Browser and version
   - Operating system
   - Device type

2. **Steps to Reproduce**
   - Detailed steps to reproduce the issue
   - Expected behavior
   - Actual behavior

3. **Evidence**
   - Screenshots
   - Console logs
   - Network requests 