
import { useState } from 'react';
import Dropdown from '../components/Dropdown';


// Тип данных для участника команды
type TeamMember = {
  firstName: string;
  lastName: string;
  group: string;
};

// Тип данных для команд
type TeamsData = {
  [teamName: string]: TeamMember[];
};





// Компонент страницы
const TeamsPage: React.FC<{ teamsData: TeamsData }> = () => {
    const handleSubmit = async (event: any) => {
      event.preventDefault();
      const teamname = event.target.elements.teamname.value;
      const request = await fetch(`/api/teamGeneration`, {
        method: 'POST',
        body: JSON.stringify({
          teamname: teamname,
        }),
    });
    console.log(request);
    }
    return (
      <div>
        <h1>Таблица команд</h1>
        <div>
            <Dropdown/>
        </div>
        <h2></h2>
        <table>
      <thead>
      </thead>
      <tbody>
          <tr>
          </tr>
      </tbody>
    </table>
    <form onSubmit={handleSubmit}>
      <p>Формирование команд</p>
      <input placeholder='Введите название команды' id="teamname" className="border border-black text-black py-1 rounded-md mt-6"></input>
      <button style={{backgroundColor: "#eb5e28"}} className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md mt-6" type="submit">Создать команду</button>
    </form>
      </div>

            
    );
  }
  export default TeamsPage;