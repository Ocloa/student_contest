import React from 'react';

type UserData = {
    id: number;
    name: string;
    surname: string;
    group: string;
  };


export default async function Form(){
    const headerStyle = {
        backgroundColor: '#EB5E28',
        fontWeight: 'bold',
        padding: '8px',
        border: '1px solid #252422',
      };
      
      const dataStyle = {
        backgroundColor: '#403D39',
        padding: '8px',
        border: '1px solid #252422',
      };
      //for local deployment
   //const response = await fetch('http://localhost:3000/api/users', {method: "GET"});
    // for vercel deployment
    const response = await fetch('https://student-contest.vercel.app/api/users', {method: "GET"});

    const rows : UserData[] = await response.json();
    console.log(rows)
    //@ts-ignore
    const data: UserData[] = rows.map((row: QueryResultRow) =>({
            id: row.id,
            name: row.name,
            surname: row.surname,
            group: row.studentgroup,
    }));
    // @ts-ignore
    return (
        <main className="min-h-screen">
        <div>
          <h1>Users</h1>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
                <tr>
                <th style={headerStyle}>ID</th>
                <th style={headerStyle}>Имя</th>
                <th style={headerStyle}>Фамилия</th>
                <th style={headerStyle}>Группа</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                <tr key={item.id}>
                    <td style={dataStyle}>{item.id}</td>
                    <td style={dataStyle}>{item.name}</td>
                    <td style={dataStyle}>{item.surname}</td>
                    <td style={dataStyle}>{item.group}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </main>
      );
    };