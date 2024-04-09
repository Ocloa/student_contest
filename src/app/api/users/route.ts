import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';

export async function GET(request: Request) {
  try {
    const data = await sql`
      SELECT * FROM users
    `;
    return NextResponse.json(data.rows);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.')
  }
}