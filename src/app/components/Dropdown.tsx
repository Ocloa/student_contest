import React, { useEffect, useState } from 'react';

interface Team {
    id: number;
    teamname: string;
  }
  const headerStyle = {
    backgroundColor: '#EB5E28',
    fontWeight: 'bold',
    padding: '8px',
    border: '1px solid #252422',
  };
  
  const dataStyle = {
    backgroundColor: '#403D39',
    color: '#FFFFFF',
    padding: '8px',
    border: '1px solid #252422',
  };
  const selectStyle = {
    backgroundColor: '#403D39',
    color: '#FFFFFF',
    selection: '#EB5E28',
    padding: '8px',
    border: '1px solid #252422',
    borderRadius: '5px',

  }
  const Dropdown: React.FC = () => {
    const [teams, setTeams] = useState<Team[]>([]);
    const [teamMembers, setTeamMembers] = useState('');
    const [selectedTeam, setSelectedTeam] = useState('');
  
    useEffect(() => {
      const fetchTeams = async () => {
        try {
          const response = await fetch(`/api/getTeams`, {
            method: 'GET', });
        const teamsData = await response.json();
          setTeams(teamsData);
          console.log(teamsData)
        } catch (error) {
          console.error('Error fetching teams:', error);
        }
      };
      fetchTeams();
    }, []);
    
    const handleTeamChange = async (event: React.ChangeEvent<HTMLSelectElement>) => {
      const selectedTeam = event.target.value;
      setSelectedTeam(selectedTeam);
      const response = await fetch(`/api/getTeamMembers?teamid=${selectedTeam}`);
      const newTeamMembers = await response.json();
      setTeamMembers(newTeamMembers);

      console.log(teamMembers)
    };
    return (
      <div>
        <select style={selectStyle} value={selectedTeam} onChange={handleTeamChange}>
        <option value="">Выберите команду</option>
          {teams.map((team) => (
            <option  key={team.id} value={team.id}>
              {team.teamname}
            </option>
          ))}
        </select>
        {teamMembers && (
        <div>
          <h2>Участники команды:</h2>
          <table>
            <thead>
              <tr>
                <th style={headerStyle}>Имя</th>
                <th style={headerStyle}>Фамилия</th>
                <th style={headerStyle}>Группа</th>
                <th style={headerStyle}>Роль</th>
              </tr>
            </thead>
            <tbody>
              {/*@ts-ignore*/}
              {teamMembers.map((member:any) => (
                <tr key={member.id}>
                  <td style={dataStyle}>{member.name}</td>
                  <td style={dataStyle}>{member.surname}</td>
                  <td style={dataStyle}>{member.studentgroup}</td>
                  <td style={dataStyle}>{member.roles.rolename}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      </div>
    );
  };
  
  export default Dropdown;