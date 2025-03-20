# Acacia Camp Installation Guide

This guide will walk you through the installation process for the Acacia Camp Hotel Management System. Follow these steps to get your system up and running quickly.

## Prerequisites

Before installing Acacia Camp, make sure you have the following prerequisites installed on your system:

- Node.js (v16 or higher)
- npm (v7 or higher)
- Git

The installation wizard can help you install MySQL if it's not already installed on your system.

## Quick Installation

The easiest way to install Acacia Camp is using our installation wizard, which guides you through the setup process step by step.

### Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/acacia-camp.git
cd acacia-camp
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Installation Wizard

```bash
npm run install-db
```

The installation wizard will:

1. Check if MySQL is installed on your system
2. Install MySQL if it's not already installed (with your permission)
3. Guide you through database configuration
4. Create the required database and tables
5. Set up environment variables

### Step 4: Start the Application

```bash
npm run dev
```

The application will be available at http://localhost:8080

## Manual Installation

If you prefer to set up the system manually, follow these steps:

### Step 1: Clone and Install Dependencies

```bash
git clone https://github.com/your-username/acacia-camp.git
cd acacia-camp
npm install
```

### Step 2: Database Setup

1. Create a MySQL database:

```sql
CREATE DATABASE acaciacamp CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Import the database schema:

```bash
mysql -u username -p acaciacamp < database/schema.sql
```

### Step 3: Environment Configuration

Create a `.env` file in the root directory of your project with the following variables:

```
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME=acaciacamp

# Server Configuration
PORT=8080
NODE_ENV=development

# JWT Secret
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h

# File Upload Configuration
UPLOAD_DIR=uploads
MAX_FILE_SIZE=5242880
```

### Step 4: Start the Application

```bash
npm run dev
```

## Platform-Specific Instructions

### Windows

On Windows, you may need to install MySQL manually. Download and install MySQL from the [official website](https://dev.mysql.com/downloads/installer/), and follow the installation wizard.

### macOS

On macOS, you can install MySQL using Homebrew:

```bash
brew install mysql
brew services start mysql
```

### Linux (Ubuntu/Debian)

On Ubuntu or Debian-based distributions, you can install MySQL using apt:

```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
```

### Linux (RHEL/CentOS/Fedora)

On RHEL, CentOS, or Fedora, you can install MySQL using dnf:

```bash
sudo dnf install mysql-server
sudo systemctl start mysqld
```

## Troubleshooting

### Connection Issues

If you're having trouble connecting to the database:

1. Verify MySQL is running: 
   ```bash
   sudo systemctl status mysql
   ```
2. Check your MySQL credentials
3. Ensure the database exists:
   ```bash
   mysql -u username -p -e "SHOW DATABASES;"
   ```

### Port Conflicts

If port 8080 is already in use, change the `PORT` value in your `.env` file.

### Installation Wizard Errors

If the installation wizard fails:

1. Try running it with administrator/sudo privileges
2. Check your system meets the prerequisites
3. Try the manual installation steps

## Next Steps

After installation:

1. Access the application at http://localhost:8080
2. Log in with default credentials:
   - Email: admin@acaciacamp.com
   - Password: adminpassword123
3. Change the default admin password immediately
4. Configure site settings in the developer dashboard

## Support

If you encounter any issues during installation, please:

1. Check the [documentation](./README.md)
2. Search for existing issues on GitHub
3. Open a new issue if your problem hasn't been reported yet

---

Now that you have Acacia Camp installed, check out our [User Guide](./usage.md) to learn how to use the system. 