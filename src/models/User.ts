import pool from '@/config/database';
import bcrypt from 'bcryptjs';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'developer' | 'user';
  status: 'active' | 'inactive';
  created_at: Date;
  updated_at: Date;
}

export class UserModel {
  static async create(name: string, email: string, password: string, role: User['role'] = 'user'): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = `
      INSERT INTO users (name, email, password, role, status, created_at, updated_at)
      VALUES ($1, $2, $3, $4, 'active', NOW(), NOW())
      RETURNING *
    `;
    const values = [name, email, hashedPassword, role];
    const result = await pool.query(query, values);
    return result.rows[0];
  }

  static async findByEmail(email: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    return result.rows[0] || null;
  }

  static async findById(id: string): Promise<User | null> {
    const query = 'SELECT * FROM users WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  }

  static async update(id: string, updates: Partial<User>): Promise<User | null> {
    const allowedUpdates = ['name', 'email', 'password', 'role', 'status'];
    const validUpdates = Object.keys(updates).filter(key => allowedUpdates.includes(key));
    
    if (validUpdates.length === 0) return null;

    const setClause = validUpdates.map((key, index) => `${key} = $${index + 2}`).join(', ');
    const values = [id, ...validUpdates.map(key => updates[key as keyof User])];
    
    const query = `
      UPDATE users 
      SET ${setClause}, updated_at = NOW()
      WHERE id = $1
      RETURNING *
    `;
    
    const result = await pool.query(query, values);
    return result.rows[0] || null;
  }

  static async delete(id: string): Promise<boolean> {
    const query = 'DELETE FROM users WHERE id = $1 RETURNING id';
    const result = await pool.query(query, [id]);
    return result.rowCount > 0;
  }

  static async list(limit: number = 10, offset: number = 0): Promise<User[]> {
    const query = 'SELECT * FROM users ORDER BY created_at DESC LIMIT $1 OFFSET $2';
    const result = await pool.query(query, [limit, offset]);
    return result.rows;
  }
} 