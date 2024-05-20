'use client';

import { useState, useEffect, useRef } from 'react';
import { signOut } from 'next-auth/react';
import {navigate} from '../util/actions'

interface UserMenuProps {
  username: string;
  userId: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ username, userId },) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleProfile = () => {
    // Логика перехода на страницу профиля
    console.log(userId);
    navigate(userId);
  };

  const handleLogout = () => {
    // Логика выхода из аккаунта
    signOut();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={toggleMenu}
        className="text-light py-2 px-4 rounded-md focus:outline-none"
      >
        {username}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-light border border-gray-200 rounded-md shadow-lg z-50">
          <button
            onClick={handleProfile}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-light-gray"
          >
            Профиль
          </button>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-light-gray"
          >
            Выход
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;