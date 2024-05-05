import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  try {
    const data = await prisma.users.findMany({
      where: {
        isadmin: false,
        teamid: null,
      }
    }) /*sql`
      SELECT * FROM users WHERE isadmin='false' AND teamid IS NULL 
    `;*/
    return NextResponse.json(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.')
  }
}