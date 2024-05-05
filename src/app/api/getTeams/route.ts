import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
    try {
        const teams = await prisma.teams.findMany();
        return NextResponse.json(teams);
      } catch (error) {
        console.error('Error fetching teams:', error);
        throw new Error('Failed to fetch teams');
      }
}