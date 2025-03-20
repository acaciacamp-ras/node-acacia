/// <reference types="node" />

// @ts-ignore
import mysql from 'mysql2/promise';
// @ts-ignore
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const {
  DB_HOST = 'localhost',
  DB_USER = 'root',
  DB_PASSWORD = '',
  DB_NAME = 'acacia_camp',
  DB_PORT = '3306',
  DB_CONNECTION_LIMIT = '10',
  DB_SSL = 'false'
} = process.env;

// Database connection configuration
const dbConfig = {
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: parseInt(DB_PORT),
  connectionLimit: parseInt(DB_CONNECTION_LIMIT),
  ssl: DB_SSL === 'true' ? {
    rejectUnauthorized: false // Use only in development, not recommended for production
  } : undefined
};

// Create connection pool
const pool = mysql.createPool(dbConfig);

// Test database connection
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Successfully connected to MySQL database');
    connection.release();
    return true;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    return false;
  }
};

// Helper function for executing queries
const query = async (sql: string, params?: any[]) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};

testConnection();

export default {
  pool,
  query
}; 