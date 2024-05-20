import React from 'react';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import UserMenu from './UserMenu';
import {authOptions} from '../util/auth/authOptions'


export default async function Navbar() {
        const session:any = await getServerSession(authOptions);
        const username:string = session?.user.name;
        const userId:string = session?.user.id;
return(
    <div className='max-w-auto shadow-lg'>
        <nav className='max-w-auto' style={{backgroundColor: '#403D39'}}>
          <div className="max-w-7xl mx-auto px-auto">
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink">
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
                  {!session && <Link className=" py-3 px-3" href="/login">Login</Link>}
                </nav>
                <nav className="flex justify-between items-center">
                  {!!session && <UserMenu username={username} userId ={userId} />}
               </nav>
              </div>
            </div>
          </div>
        </nav>
    </div>
)
}