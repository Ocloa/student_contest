import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';

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
        name: {},
        email: {},
        password: {},
        isadmin: {},
      },
      async authorize(credentials) {
        const response = await sql`
        SELECT * FROM users WHERE email=${credentials?.email}`;
        const tabledata = response.rows[0];

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