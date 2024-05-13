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

const formStyle = {
  backgroundColor: 'rgba(37,36,34,0.9)',
  color: '#FFFFFF',
  selection: '#EB5E28',
  padding: '8px',
  border: '1px solid #252422',
  borderRadius: '10px',

}


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
      <div className='flex flex-col ms-8'>
        <div className='flex flex-col'>
        <h1>Таблица команд</h1>
            <Dropdown/>
        </div>
        <div className='flex-nowrap mt-24'>
        <form style={formStyle} className='flex flex-col max-w-64 h-48 bg-black self-center' onSubmit={handleSubmit}>
          <p>Формирование команд</p>
          <input placeholder='Введите название команды' id="teamname" className="border border-black text-black py-1 my-4 rounded-md"></input>
          <button style={{backgroundColor: "#eb5e28"}} className="text-gray-200 bg-gray-800 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md" type="submit">Создать команду</button>
        </form>
        </div>
      </div>

            
    );
  }
  export default TeamsPage;