#!/usr/bin/env node

/**
 * Acacia Camp Installation Wizard
 * This script guides users through the installation process including:
 * - MySQL installation check and assistance
 * - Database configuration
 * - Initial admin user creation
 * - Environment setup
 */

const inquirer = require('inquirer');
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const chalk = require('chalk');
const mysql = require('mysql2/promise');
const ora = require('ora');

// Banner and welcome message
const displayBanner = () => {
  console.log(chalk.green(`
  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │               ACACIA CAMP SETUP                 │
  │                                                 │
  │           Installation & Configuration          │
  │                                                 │
  └─────────────────────────────────────────────────┘
  `));
  
  console.log(chalk.cyan('Welcome to the Acacia Camp installation wizard!\n'));
  console.log('This wizard will guide you through the installation process.\n');
};

// Check if MySQL is installed
const checkMySQLInstalled = async () => {
  try {
    const spinner = ora('Checking if MySQL is installed...').start();
    
    let mysqlVersion;
    try {
      if (process.platform === 'win32') {
        mysqlVersion = execSync('mysql --version', { shell: 'cmd.exe' }).toString();
      } else {
        mysqlVersion = execSync('mysql --version').toString();
      }
      spinner.succeed(`MySQL is installed: ${mysqlVersion.trim()}`);
      return true;
    } catch (error) {
      spinner.warn('MySQL does not appear to be installed or is not in PATH');
      return false;
    }
  } catch (error) {
    console.error('Error checking MySQL:', error);
    return false;
  }
};

// Install MySQL based on OS
const installMySQL = async () => {
  const { shouldInstall } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'shouldInstall',
      message: 'Would you like to install MySQL now?',
      default: true,
    }
  ]);

  if (!shouldInstall) {
    console.log(chalk.yellow('\nYou chose not to install MySQL.'));
    console.log('Please install MySQL manually and run this wizard again.');
    process.exit(0);
  }

  console.log(chalk.cyan('\nInstalling MySQL...'));
  
  const platform = process.platform;
  
  if (platform === 'darwin') {
    // macOS
    try {
      console.log('Installing MySQL on macOS using Homebrew...');
      console.log(chalk.yellow('This requires Homebrew. If not installed, please visit https://brew.sh\n'));
      
      // Check if Homebrew is installed
      try {
        execSync('brew --version');
      } catch (error) {
        console.log(chalk.red('Homebrew is not installed. Please install it first:'));
        console.log(chalk.yellow('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"'));
        process.exit(1);
      }
      
      execSync('brew install mysql', { stdio: 'inherit' });
      execSync('brew services start mysql', { stdio: 'inherit' });
      
      console.log(chalk.green('\nMySQL installed successfully on macOS!'));
      console.log(chalk.yellow('Note: The default root password is empty. You may want to secure your MySQL installation.'));
      
      return true;
    } catch (error) {
      console.error('Error installing MySQL on macOS:', error);
      return false;
    }
  } else if (platform === 'linux') {
    // Linux - detect distribution
    try {
      let distro = '';
      
      if (fs.existsSync('/etc/os-release')) {
        const osRelease = fs.readFileSync('/etc/os-release', 'utf8');
        const idLine = osRelease.split('\n').find(line => line.startsWith('ID='));
        if (idLine) {
          distro = idLine.split('=')[1].replace(/"/g, '');
        }
      }
      
      if (['ubuntu', 'debian', 'linuxmint'].includes(distro)) {
        console.log('Installing MySQL on Ubuntu/Debian...');
        execSync('sudo apt update', { stdio: 'inherit' });
        execSync('sudo apt install -y mysql-server', { stdio: 'inherit' });
        execSync('sudo systemctl start mysql', { stdio: 'inherit' });
        execSync('sudo systemctl enable mysql', { stdio: 'inherit' });
      } else if (['fedora', 'rhel', 'centos', 'rocky'].includes(distro)) {
        console.log('Installing MySQL on Fedora/RHEL/CentOS...');
        execSync('sudo dnf install -y mysql-server', { stdio: 'inherit' });
        execSync('sudo systemctl start mysqld', { stdio: 'inherit' });
        execSync('sudo systemctl enable mysqld', { stdio: 'inherit' });
      } else {
        console.log(chalk.yellow(`Unsupported Linux distribution: ${distro || 'unknown'}`));
        console.log('Please install MySQL manually and run this wizard again.');
        process.exit(1);
      }
      
      console.log(chalk.green('\nMySQL installed successfully on Linux!'));
      console.log(chalk.yellow('For security reasons, you should run: sudo mysql_secure_installation'));
      
      return true;
    } catch (error) {
      console.error('Error installing MySQL on Linux:', error);
      return false;
    }
  } else if (platform === 'win32') {
    // Windows
    console.log(chalk.yellow('For Windows, we recommend downloading the MySQL installer:'));
    console.log(chalk.cyan('https://dev.mysql.com/downloads/installer/'));
    console.log('\nPlease install MySQL using the installer and then run this wizard again.');
    
    const { openBrowser } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'openBrowser',
        message: 'Would you like to open the MySQL download page in your browser?',
        default: true,
      }
    ]);
    
    if (openBrowser) {
      const url = 'https://dev.mysql.com/downloads/installer/';
      const open = (process.platform === 'win32') ? 'start' : (process.platform === 'darwin') ? 'open' : 'xdg-open';
      execSync(`${open} ${url}`);
    }
    
    process.exit(0);
  } else {
    console.log(chalk.red(`Unsupported platform: ${platform}`));
    console.log('Please install MySQL manually and run this wizard again.');
    process.exit(1);
  }
};

// Get MySQL connection details
const getMySQLConnectionDetails = async () => {
  console.log(chalk.cyan('\nDatabase Configuration\n'));
  
  const connectionDetails = await inquirer.prompt([
    {
      type: 'input',
      name: 'host',
      message: 'MySQL Host:',
      default: 'localhost',
    },
    {
      type: 'input',
      name: 'port',
      message: 'MySQL Port:',
      default: '3306',
      validate: (value) => {
        const valid = !isNaN(parseInt(value));
        return valid || 'Please enter a valid port number';
      },
    },
    {
      type: 'input',
      name: 'user',
      message: 'MySQL Root Username:',
      default: 'root',
    },
    {
      type: 'password',
      name: 'password',
      message: 'MySQL Root Password:',
      mask: '*',
    },
  ]);
  
  return connectionDetails;
};

// Test MySQL connection
const testMySQLConnection = async (config) => {
  const spinner = ora('Testing MySQL connection...').start();
  
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
    });
    
    await connection.end();
    spinner.succeed('Successfully connected to MySQL server');
    return true;
  } catch (error) {
    spinner.fail(`Failed to connect to MySQL: ${error.message}`);
    return false;
  }
};

// Configure the database
const configureDatabases = async (config) => {
  console.log(chalk.cyan('\nDatabase Configuration\n'));
  
  const dbConfig = await inquirer.prompt([
    {
      type: 'input',
      name: 'database',
      message: 'Database Name:',
      default: 'acaciacamp',
    },
    {
      type: 'input',
      name: 'dbUser',
      message: 'Database Username:',
      default: 'acaciauser',
    },
    {
      type: 'password',
      name: 'dbPassword',
      message: 'Database User Password:',
      mask: '*',
      validate: (value) => {
        if (value.length < 8) {
          return 'Password must be at least 8 characters long';
        }
        return true;
      },
    },
  ]);
  
  // Create database and user
  const spinner = ora('Setting up database...').start();
  
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.user,
      password: config.password,
    });
    
    // Create database if it doesn't exist
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    
    // Create user if it doesn't exist
    try {
      // For MySQL 8.0+, different syntax for creating users and granting privileges
      await connection.query(`CREATE USER IF NOT EXISTS '${dbConfig.dbUser}'@'%' IDENTIFIED BY '${dbConfig.dbPassword}'`);
      await connection.query(`GRANT ALL PRIVILEGES ON \`${dbConfig.database}\`.* TO '${dbConfig.dbUser}'@'%'`);
      await connection.query(`FLUSH PRIVILEGES`);
    } catch (error) {
      // For MySQL 5.7 and below
      await connection.query(`GRANT ALL PRIVILEGES ON \`${dbConfig.database}\`.* TO '${dbConfig.dbUser}'@'%' IDENTIFIED BY '${dbConfig.dbPassword}'`);
      await connection.query(`FLUSH PRIVILEGES`);
    }
    
    await connection.end();
    
    spinner.succeed(`Database '${dbConfig.database}' and user '${dbConfig.dbUser}' created successfully`);
    
    return {
      ...config,
      ...dbConfig,
    };
  } catch (error) {
    spinner.fail(`Failed to set up database: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

// Initialize database schema
const initializeSchema = async (config) => {
  const spinner = ora('Initializing database schema...').start();
  
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.database,
    });
    
    // Users table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        role ENUM('user', 'admin', 'developer') NOT NULL DEFAULT 'user',
        status ENUM('active', 'inactive', 'pending') NOT NULL DEFAULT 'active',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    // Rooms table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS rooms (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        type VARCHAR(50) NOT NULL,
        capacity INT NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        status ENUM('available', 'occupied', 'maintenance') NOT NULL DEFAULT 'available',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    // Bookings table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36) NOT NULL,
        room_id VARCHAR(36) NOT NULL,
        check_in_date DATE NOT NULL,
        check_out_date DATE NOT NULL,
        status ENUM('pending', 'confirmed', 'cancelled', 'completed') NOT NULL DEFAULT 'pending',
        total_amount DECIMAL(10, 2) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
        FOREIGN KEY (room_id) REFERENCES rooms(id) ON DELETE CASCADE
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    // Themes table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS themes (
        id VARCHAR(36) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        primary_color VARCHAR(50) NOT NULL,
        secondary_color VARCHAR(50) NOT NULL,
        background_color VARCHAR(50) NOT NULL,
        heading_font VARCHAR(100) NOT NULL,
        body_font VARCHAR(100) NOT NULL,
        base_font_size VARCHAR(20) NOT NULL,
        is_active BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    // Audit logs table
    await connection.query(`
      CREATE TABLE IF NOT EXISTS audit_logs (
        id VARCHAR(36) PRIMARY KEY,
        user_id VARCHAR(36),
        action VARCHAR(255) NOT NULL,
        entity_type VARCHAR(50) NOT NULL,
        entity_id VARCHAR(36),
        details TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci
    `);
    
    await connection.end();
    
    spinner.succeed('Database schema initialized successfully');
    
    return true;
  } catch (error) {
    spinner.fail(`Failed to initialize database schema: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

// Create admin user
const createAdminUser = async (config) => {
  console.log(chalk.cyan('\nAdmin User Configuration\n'));
  
  const adminUser = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Admin Name:',
      default: 'Admin User',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Admin Email:',
      default: 'admin@example.com',
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value) || 'Please enter a valid email address';
      },
    },
    {
      type: 'password',
      name: 'password',
      message: 'Admin Password:',
      mask: '*',
      validate: (value) => {
        if (value.length < 8) {
          return 'Password must be at least 8 characters long';
        }
        return true;
      },
    },
  ]);
  
  const spinner = ora('Creating admin user...').start();
  
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.dbUser,
      password: config.dbPassword,
      database: config.database,
    });
    
    // Simple password hashing - in a real app, use bcrypt
    const passwordHash = crypto.createHash('sha256').update(adminUser.password).digest('hex');
    const userId = crypto.randomUUID();
    
    // Check if user exists
    const [users] = await connection.query(
      'SELECT * FROM users WHERE email = ?',
      [adminUser.email]
    );
    
    if (users.length > 0) {
      // Update existing user
      await connection.query(
        'UPDATE users SET name = ?, password = ?, role = "admin" WHERE email = ?',
        [adminUser.name, passwordHash, adminUser.email]
      );
    } else {
      // Create new user
      await connection.query(
        'INSERT INTO users (id, name, email, password, role) VALUES (?, ?, ?, ?, "admin")',
        [userId, adminUser.name, adminUser.email, passwordHash]
      );
    }
    
    // Add default theme if it doesn't exist
    const [themes] = await connection.query('SELECT * FROM themes');
    if (themes.length === 0) {
      const themeId = crypto.randomUUID();
      await connection.query(
        `INSERT INTO themes 
          (id, name, primary_color, secondary_color, background_color, heading_font, body_font, base_font_size, is_active) 
         VALUES 
          (?, 'Default Theme', '#4F46E5', '#10B981', '#FFFFFF', 'Inter', 'Inter', '16px', true)`,
        [themeId]
      );
    }
    
    await connection.end();
    
    spinner.succeed('Admin user created successfully');
    
    return {
      ...config,
      adminUser,
    };
  } catch (error) {
    spinner.fail(`Failed to create admin user: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

// Generate environment file
const generateEnvFile = (config) => {
  const spinner = ora('Generating environment configuration...').start();
  
  try {
    const jwtSecret = crypto.randomBytes(32).toString('hex');
    
    const envContent = `# App settings
NODE_ENV=development
PORT=8080

# Database settings
DB_HOST=${config.host}
DB_PORT=${config.port}
DB_NAME=${config.database}
DB_USER=${config.dbUser}
DB_PASSWORD=${config.dbPassword}

# Authentication
JWT_SECRET=${jwtSecret}
JWT_EXPIRES_IN=1d
`;
    
    fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);
    
    spinner.succeed('Environment configuration generated successfully');
    
    return true;
  } catch (error) {
    spinner.fail(`Failed to generate environment configuration: ${error.message}`);
    console.error(error);
    process.exit(1);
  }
};

// Check if scripts directory exists, create it if not
const makeScriptsDirectory = () => {
  const scriptsDir = path.join(process.cwd(), 'scripts');
  if (!fs.existsSync(scriptsDir)) {
    fs.mkdirSync(scriptsDir, { recursive: true });
  }
  return scriptsDir;
};

// Main installation process
const runInstallation = async () => {
  displayBanner();
  
  // Check if MySQL is installed
  const mysqlInstalled = await checkMySQLInstalled();
  
  if (!mysqlInstalled) {
    await installMySQL();
    // Check again after installation
    const mysqlInstalledNow = await checkMySQLInstalled();
    if (!mysqlInstalledNow) {
      console.log(chalk.red('MySQL installation failed or was not completed.'));
      console.log('Please install MySQL manually and run this wizard again.');
      process.exit(1);
    }
  }
  
  // Get MySQL connection details
  let config = await getMySQLConnectionDetails();
  
  // Test MySQL connection
  let connectionSuccess = await testMySQLConnection(config);
  
  // Retry if connection fails
  if (!connectionSuccess) {
    console.log(chalk.yellow('\nConnection failed. Please check your credentials and try again.'));
    config = await getMySQLConnectionDetails();
    connectionSuccess = await testMySQLConnection(config);
    
    if (!connectionSuccess) {
      console.log(chalk.red('\nConnection failed again. Please check your MySQL installation and credentials.'));
      process.exit(1);
    }
  }
  
  // Configure databases
  config = await configureDatabases(config);
  
  // Initialize schema
  await initializeSchema(config);
  
  // Create admin user
  config = await createAdminUser(config);
  
  // Generate environment file
  await generateEnvFile(config);
  
  console.log(chalk.green('\n✅ Installation completed successfully!\n'));
  console.log('You can now start the application with:');
  console.log(chalk.cyan('  npm run dev'));
  console.log('\nAdmin login credentials:');
  console.log(chalk.cyan(`  Email: ${config.adminUser.email}`));
  console.log(chalk.cyan(`  Password: ${'*'.repeat(config.adminUser.password.length)}`));
};

// Run the installation
runInstallation().catch((error) => {
  console.error('Installation failed:', error);
  process.exit(1);
}); 