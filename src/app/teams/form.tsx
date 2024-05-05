'use client'
import React from 'react';
import TeamsPage from './Teams';

/*const TeamTable = ({ teams }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Команда</th>
            <th>Участники</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{`Команда ${index + 1}`}</td>
              <td>{team.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }; 
  
  export async function getServerSideProps() {
    //Тут должен быть запрос к бд
    const users = [
      'Пользователь 1',
      'Пользователь 2',
      'Пользователь 3',
    ];
  
    // Формирование команд
    const shuffledUsers = users.sort(() => Math.random() - 0.5);
    const teams = [];
    for (let i = 0; i < shuffledUsers.length; i += 5) {
      teams.push(shuffledUsers.slice(i, i + 5));
    }
  
    return {
      props: {
        teams,
      },
    };
  }
  
  // Компонент страницы
  const Form = ({ teams }) => {
    return (
      <div>
        <h1>Список команд</h1>
        <TeamTable teams={teams} />
      </div>
    );
  };
*/
const Form = () => {
    return(
        <div className="min-h-screen text-black">
         <TeamsPage></TeamsPage>
        </div>
    )
}

export default Form