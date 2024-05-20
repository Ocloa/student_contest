import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
const searchParams  = request.nextUrl.searchParams;
  try {
    const userId = Number(searchParams.get("userid"))
    const data = await prisma.users.findUnique({
      where: {
        id: userId,
      }
    })
    return NextResponse.json(data);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.')
  }
}