import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
//import { sql } from '@vercel/postgres';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        name: {type: 'text',},
        email: {type: 'text',},
        password: {type: 'text',},
        isadmin: {type: 'boolean',},
      },
//@ts-ignore
      async authorize(credentials) {
        const response = await prisma.users.findUnique({
          where: {
            email: credentials?.email
          }
        })/* sql`
        SELECT * FROM users WHERE email=${credentials?.email}`; */
        const tabledata = response;
        if (tabledata){
        const passwordCorrect = await compare(
          credentials?.password || '',
          tabledata.password
        );

        console.log({ passwordCorrect, tabledata });

        if (passwordCorrect) {
          return {
            isadmin: tabledata.isadmin,
            id: tabledata.id,
            name: tabledata.name,
            email: tabledata.email,
          };
        }
      }

        return null;
      },
    }),
  ],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
          token.isadmin = user.isadmin;
        }
        return token;
      },
      async session({ session, token }) {
        if (token && token.user) {
          session.user.isadmin = token.isadmin;
        }
        return session;
      },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;