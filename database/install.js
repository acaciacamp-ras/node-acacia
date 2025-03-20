/**
 * Database Installation Script
 * 
 * This script handles database installation for the Acacia Camp application.
 * It creates the database and required tables if they don't exist.
 */

const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const inquirer = require('inquirer');
const chalk = require('chalk');
const ora = require('ora');
const { execSync } = require('child_process');
const os = require('os');

// Default configuration
let config = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'acaciacamp'
};

// Check if MySQL is installed
async function checkMySQLInstalled() {
  try {
    switch(os.platform()) {
      case 'win32':
        execSync('mysql --version', { stdio: 'ignore' });
        break;
      case 'darwin':
        execSync('mysql --version', { stdio: 'ignore' });
        break;
      default: // Linux and other Unix-like
        execSync('mysql --version', { stdio: 'ignore' });
        break;
    }
    return true;
  } catch (error) {
    return false;
  }
}

// Install MySQL based on platform
async function installMySQL() {
  console.log(chalk.yellow('\nMySQL is not installed. Let\'s install it...'));
  
  const { confirm } = await inquirer.prompt([{
    type: 'confirm',
    name: 'confirm',
    message: 'Do you want to install MySQL?',
    default: true
  }]);
  
  if (!confirm) {
    console.log(chalk.red('MySQL installation cancelled. Please install MySQL manually before continuing.'));
    process.exit(1);
  }
  
  const spinner = ora('Installing MySQL...').start();
  
  try {
    switch(os.platform()) {
      case 'win32':
        console.log(chalk.yellow('\nPlease download and install MySQL from https://dev.mysql.com/downloads/installer/'));
        spinner.stop();
        const { completed } = await inquirer.prompt([{
          type: 'confirm',
          name: 'completed',
          message: 'Have you completed the MySQL installation?',
          default: false
        }]);
        if (!completed) {
          console.log(chalk.red('Please install MySQL and run this script again.'));
          process.exit(1);
        }
        break;
      case 'darwin':
        spinner.text = 'Installing MySQL with Homebrew...';
        // Check if Homebrew is installed
        try {
          execSync('brew --version', { stdio: 'ignore' });
        } catch (error) {
          spinner.stop();
          console.log(chalk.yellow('\nHomebrew is not installed. Installing Homebrew first...'));
          execSync('/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"', { stdio: 'inherit' });
        }
        execSync('brew install mysql', { stdio: 'inherit' });
        execSync('brew services start mysql', { stdio: 'inherit' });
        break;
      default: // Linux and other Unix-like
        spinner.text = 'Installing MySQL...';
        if (fs.existsSync('/etc/debian_version')) {
          // Debian/Ubuntu
          execSync('sudo apt-get update', { stdio: 'inherit' });
          execSync('sudo apt-get install -y mysql-server', { stdio: 'inherit' });
          execSync('sudo systemctl start mysql', { stdio: 'inherit' });
        } else if (fs.existsSync('/etc/redhat-release')) {
          // RHEL/CentOS/Fedora
          execSync('sudo dnf install -y mysql-server', { stdio: 'inherit' });
          execSync('sudo systemctl start mysqld', { stdio: 'inherit' });
        } else {
          spinner.stop();
          console.log(chalk.red('Unsupported Linux distribution. Please install MySQL manually.'));
          process.exit(1);
        }
        break;
    }
    spinner.succeed('MySQL installed successfully!');
    return true;
  } catch (error) {
    spinner.fail('Failed to install MySQL');
    console.error(chalk.red(`Error: ${error.message}`));
    console.log(chalk.yellow('Please install MySQL manually and run this script again.'));
    process.exit(1);
  }
}

// Get database credentials from user
async function getDatabaseCredentials() {
  console.log(chalk.blue('\nDatabase Configuration'));
  console.log(chalk.gray('Please provide your MySQL database credentials:'));
  
  const questions = [
    {
      type: 'input',
      name: 'host',
      message: 'Database host:',
      default: config.host
    },
    {
      type: 'input',
      name: 'port',
      message: 'Database port:',
      default: config.port.toString(),
      validate: (value) => {
        const port = parseInt(value);
        return !isNaN(port) && port > 0 && port < 65536 ? true : 'Please enter a valid port number';
      },
      filter: (value) => parseInt(value)
    },
    {
      type: 'input',
      name: 'user',
      message: 'Database username:',
      default: config.user
    },
    {
      type: 'password',
      name: 'password',
      message: 'Database password:',
      default: config.password
    },
    {
      type: 'input',
      name: 'database',
      message: 'Database name:',
      default: config.database
    }
  ];
  
  const answers = await inquirer.prompt(questions);
  config = { ...config, ...answers };
  
  return config;
}

// Test database connection
async function testConnection(connectionConfig) {
  const spinner = ora('Testing database connection...').start();
  
  try {
    // Attempt to connect without specifying a database
    const connection = await mysql.createConnection({
      host: connectionConfig.host,
      user: connectionConfig.user,
      password: connectionConfig.password,
      port: connectionConfig.port
    });
    
    await connection.end();
    spinner.succeed('Database connection successful!');
    return true;
  } catch (error) {
    spinner.fail('Database connection failed');
    console.error(chalk.red(`Error: ${error.message}`));
    
    const { retry } = await inquirer.prompt([{
      type: 'confirm',
      name: 'retry',
      message: 'Would you like to try different credentials?',
      default: true
    }]);
    
    if (retry) {
      return false;
    } else {
      console.log(chalk.red('Installation cancelled.'));
      process.exit(1);
    }
  }
}

// Create database if it doesn't exist
async function createDatabase() {
  const spinner = ora(`Creating database ${config.database}...`).start();
  
  try {
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port
    });
    
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${config.database} CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci`);
    await connection.end();
    
    spinner.succeed(`Database ${config.database} created successfully!`);
    return true;
  } catch (error) {
    spinner.fail(`Failed to create database ${config.database}`);
    console.error(chalk.red(`Error: ${error.message}`));
    return false;
  }
}

// Create tables from schema
async function createTables() {
  const spinner = ora('Creating database tables...').start();
  
  try {
    // Read the schema file
    const schemaPath = path.join(__dirname, 'schema.sql');
    let schemaSQL = fs.readFileSync(schemaPath, 'utf8');
    
    // Replace database name in the schema if it's different
    schemaSQL = schemaSQL.replace(/CREATE DATABASE IF NOT EXISTS (\w+)/, `CREATE DATABASE IF NOT EXISTS ${config.database}`);
    schemaSQL = schemaSQL.replace(/USE (\w+)/, `USE ${config.database}`);
    
    // Connect to the database
    const connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      port: config.port,
      multipleStatements: true
    });
    
    // Execute the schema SQL
    await connection.query(schemaSQL);
    await connection.end();
    
    spinner.succeed('Database tables created successfully!');
    return true;
  } catch (error) {
    spinner.fail('Failed to create database tables');
    console.error(chalk.red(`Error: ${error.message}`));
    return false;
  }
}

// Create .env file with database configuration
async function createEnvFile() {
  const spinner = ora('Creating environment configuration...').start();
  
  try {
    const envContent = `# Database Configuration
DB_HOST=${config.host}
DB_PORT=${config.port}
DB_USER=${config.user}
DB_PASSWORD=${config.password}
DB_NAME=${config.database}

# Server Configuration
PORT=8080
NODE_ENV=development

# JWT Secret
JWT_SECRET=${Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)}
JWT_EXPIRES_IN=24h

# File Upload Configuration
UPLOAD_DIR=uploads
MAX_FILE_SIZE=5242880 # 5MB
`;
    
    fs.writeFileSync(path.join(process.cwd(), '.env'), envContent);
    spinner.succeed('Environment configuration created successfully!');
    return true;
  } catch (error) {
    spinner.fail('Failed to create environment configuration');
    console.error(chalk.red(`Error: ${error.message}`));
    return false;
  }
}

// Main installation function
async function install() {
  console.log(chalk.green('=== Acacia Camp Database Installation ===\n'));
  
  // Check if MySQL is installed
  const mysqlInstalled = await checkMySQLInstalled();
  if (!mysqlInstalled) {
    await installMySQL();
  }
  
  // Get and validate database credentials
  let connectionValid = false;
  while (!connectionValid) {
    config = await getDatabaseCredentials();
    connectionValid = await testConnection(config);
  }
  
  // Create database
  await createDatabase();
  
  // Create tables
  await createTables();
  
  // Create .env file
  await createEnvFile();
  
  console.log(chalk.green('\n=== Installation Complete! ==='));
  console.log(chalk.blue('You can now start the application with:'));
  console.log(chalk.yellow('npm run dev'));
}

// Run the installation process
install().catch(error => {
  console.error(chalk.red(`Installation failed: ${error.message}`));
  process.exit(1);
}); 