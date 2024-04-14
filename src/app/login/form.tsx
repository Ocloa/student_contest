'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

export default function Form() {
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push('/');
      router.refresh();
    }
    else{
      alert('Неправильные логин и/или пароль');
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
    <form
      onSubmit={handleSubmit}
      style={{backgroundColor: "#252422"}}
      className="flex flex-col gap-1 mx-auto max-w-md mt-8 px-8 py-12 rounded-md"
    >
      <p>Email</p>
      <input
        name="email"
        className="border border-black text-black py-1 rounded-md"
        type="email"
      />
      <p>Password</p>
      <input
        name="password"
        id="password"
        className="border border-black  text-black py-1 rounded-md "
        type="password"
      />
      <button style={{backgroundColor: "#eb5e28"}} className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md mt-8" type="submit">
        Login
      </button>
      <button style={{backgroundColor: "#eb5e28"}} className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md mt-6"
       type="button" onClick={()=> router.push('register')} >
         Signup
      </button>
    </form>
    </main>
  );
}