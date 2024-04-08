'use client';

import { FormEvent } from 'react';

export default function Form() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
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
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <input
        name="email"
        placeholder="Email"
        className="border border-black text-black"
        type="email"
      />
       <input
        name="name"
        placeholder="Имя"
        className="border border-black text-black"
        type="text"
      />
       <input
        name="surname"
        placeholder="Фамилия"
        className="border border-black text-black"
        type="text"
      />
    <label>
      Выберите группу из списка:
    <input list="groups" name="studentgroup" placeholder="Группа" className="border border-black text-black"/>  
    </label>
      <datalist id="groups" >
          <option value="МОАИС-20" />
          <option value="ПМИ-20" />
          <option value="МОАИС-21" />
          <option value="ПМИ-21" /> 
      </datalist>

      <input
        name="password"
        placeholder="Пароль"
        className="border border-black  text-black"
        type="password"
      />
      <button type="submit">Register</button>
    </form>
  );
}