import React from 'react';
import {checkEnvironment} from '../util/checkEnvironment';

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

    const response = await fetch(checkEnvironment().concat("/api/users"), {method: "GET", cache: 'no-store'});
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
          <table style={{ width: '85%', marginLeft: 'auto', marginRight:'auto', borderCollapse: 'collapse' }}>
            <thead className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                <tr>
                <th style={headerStyle}>ID</th>
                <th style={headerStyle}>Имя</th>
                <th style={headerStyle}>Фамилия</th>
                <th style={headerStyle}>Группа</th>
                </tr>
            </thead>
            <tbody>
                {data.map(item => (
                <tr className='m-0 border-t p-0 even:bg-muted' key={item.id}>
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