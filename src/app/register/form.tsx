'use client';

import { signIn } from 'next-auth/react';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Form() {
  const router = useRouter();
  const [value, setValue] = React.useState("b");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    if (formData.get('email') && formData.get('name') && formData.get('surname') && formData.get('studentgroup') && formData.get('password')){
    const response = await fetch(`/api/auth/register`, {
      method: 'POST',
      body: JSON.stringify({
        email: formData.get('email'),
        name: formData.get('name'),
        surname: formData.get('surname'),
        studentgroup: formData.get('studentgroup'),
        password: formData.get('password'),
      }),
    });
    console.log({ response });
    alert('Пользователь зарегистрирован')
    const loginResponse = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });

    console.log({ loginResponse });
    if (!loginResponse?.error) {
      router.push('/');
      router.refresh();
    }
  }
  else{
    alert('Заполните все поля')
  }

  
};

  return (
    <main className="min-h-screen items-center justify-between ">
    <form
      onSubmit={handleSubmit}
      style={{backgroundColor: "#252422"}}
      className="flex flex-col gap-1 mx-auto max-w-md mt-8 px-8 py-20 rounded-md"
    >
      <input
        name="email"
        placeholder="Email"
        className="border border-black text-black py-1 rounded-md"
        type="email"
      />
       <input
        name="name"
        placeholder="Имя"
        className="border border-black text-black py-1 rounded-md mt-6"
        type="text"
      />
       <input
        name="surname"
        placeholder="Фамилия"
        className="border border-black text-black py-1 rounded-md mt-6"
        type="text"
      />
      <label className="flex flex-col  mt-3 mx-0 max-w-md">
        Выберите группу из списка:
      </label>
      <select
        name="studentgroup"
        className='border border-black text-black py-1 rounded-md mt-6'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="МОАИС-20">МОАИС-20</option>
        <option value="ПМИ-20">ПМИ-20</option>
        <option value="МОАИС-21">МОАИС-21</option>
        <option value="ПМИ-21">ПМИ-21</option>
      </select>

      <input
        name="password"
        placeholder="Пароль"
        className="border border-black text-black py-1 rounded-md mt-6"
        type="password"
      />
      <button style={{backgroundColor: "#eb5e28"}} className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md mt-6" type="submit">Зарегистрироваться</button>
    </form>
    </main>
  );
}