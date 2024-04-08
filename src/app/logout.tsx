'use client';

import { signOut } from 'next-auth/react';

export default function Logout() {
  return (
    <button className="px-2 mx-2"
      onClick={() => {
        signOut();
      }}
    >
      Logout
    </button>
  );
}