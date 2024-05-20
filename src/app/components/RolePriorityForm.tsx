'use client';

import { useState, ChangeEvent, FormEvent } from 'react';

const roles = [
  'Проект-менеджер',
  'Разработчик',
  'Тестировщик',
  'Технический писатель',
  'Аналитик'
];

const priorities = [1, 2, 3, 4, 5];

type Priorities = {
  [key: string]: string;
};

const RolePriorityForm = () => {
  const [selectedPriorities, setSelectedPriorities] = useState<Priorities>({
    'Проект-менеджер': '',
    'Разработчик': '',
    'Тестировщик': '',
    'Технический писатель': '',
    'Аналитик': ''
  });

  const handleSelectChange = (role: string, value: string) => {
    setSelectedPriorities((prev) => ({
      ...prev,
      [role]: value
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const values = Object.values(selectedPriorities);
    const uniqueValues = new Set(values);

    if (uniqueValues.size !== values.length) {
      alert('Приоритеты должны быть уникальными для каждой роли.');
    } else {
      console.log('Submitted priorities:', selectedPriorities);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-dark text-white p-4 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Выберите приоритеты ролей в команде</h2>
      {roles.map((role) => (
        <div key={role} className="mb-4">
          <label className="block mb-1">{role}</label>
          <select
            value={selectedPriorities[role]}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => handleSelectChange(role, e.target.value)}
            required
            className="block w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-orange text-black"
          >
            <option value="">Выберите приоритет</option>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button type="submit" className="bg-orange text-white py-2 px-4 rounded-md hover:bg-orange-dark focus:outline-none focus:bg-orange-dark">
        Отправить
      </button>
    </form>
  );
}

export default RolePriorityForm;