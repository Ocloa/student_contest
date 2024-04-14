import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logout from './logout';
import {authOptions} from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Student Contest App',
  description: 'Student Contest Project',
};

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const session:any = await getServerSession(authOptions);
  console.log(session);
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        <nav style={{backgroundColor: '#403D39'}}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <span className="text-white font-bold text-xl"> <Link href='/'>Student Contest App</Link> </span>
              </div>
              <div className="flex">
                <nav className="py-2 rounded-md text-sm font-medium mx-2">
                <Link href="/">
                  Main Page
                </Link>
                </nav>
                <nav className="py-2 rounded-md text-sm font-medium">
                  {!!session && session?.user.isadmin && <Link className=" py-3 px-2 mx-1" href="/teams">Teams</Link>}
                </nav>
                <nav className="py-2 rounded-md text-sm font-medium">
                  {!!session && <Link className=" py-3 px-3 mx-1" href="/users">Users</Link>}
                </nav>
                <nav className="py-2 rounded-md text-sm font-medium">
                  {!!session && <Logout />}
                  {!session && <Link className=" py-3 px-3" href="/login">Login</Link>}
                </nav>
              </div>
            </div>
          </div>
        </nav>
      <div className="py-8">
        <main>{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
