import { NextResponse, NextRequest } from 'next/server';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


  export async function GET(request: NextRequest) {
    const searchParams  = request.nextUrl.searchParams
    try {
        const teamId = Number(searchParams.get("teamid")); 
        const teamMembers = await prisma.users.findMany({
            where: {teamid: teamId},
            include: {roles: true},
        });
        return NextResponse.json(teamMembers);
      } catch (error) {
        console.error('Error fetching team members:', error);
        throw new Error('Failed to fetch team members');
      }
}