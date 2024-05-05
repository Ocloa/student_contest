import { NextResponse } from 'next/server';
import { hash } from 'bcrypt';
import { sql } from '@vercel/postgres';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { email, name, surname, studentgroup, password } = await request.json();
    // validate email and password
    console.log({ email, name, surname, studentgroup, password });

    const hashedPassword = await hash(password, 10);

    const response = await prisma.users.create({
      data:{
        email: `${email}`,
        name: `${name}`,
        surname: `${surname}`,
        studentgroup: `${studentgroup}`,
        password: `${hashedPassword}`,
        isadmin: false
      }

    }) /* sql`
      INSERT INTO users (email, name, surname, studentgroup, password, isadmin)
      VALUES (${email}, ${name}, ${surname}, ${studentgroup}, ${hashedPassword}, FALSE)
    `; */
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: 'success' });
}