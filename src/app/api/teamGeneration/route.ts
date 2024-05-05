import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server';

const prisma = new PrismaClient()

export async function POST(request: Request){
    try{
        const {teamname} = await request.json();
        // Получить всех пользователей без команды
        const usersWithoutTeam = await prisma.users.findMany({
        where: { teamid: null },
        });
    
        // Перемешать массив пользователей
        const shuffledUsers = usersWithoutTeam.sort(() => Math.random() - 0.5);
    
        // Выбрать первые 5 пользователей
        const randomUsers = shuffledUsers.slice(0, 5);

        const newTeam = await prisma.teams.create({
            data: { teamname: teamname }
          });
          const availableRoles = await prisma.roles.findMany({
            where: {
              NOT: {
                users: { some: { teamid: newTeam.id } }
              }
            }
          });
          
          const randomRoles = availableRoles.sort(() => Math.random() - 0.5).slice(0, usersWithoutTeam.length);

          const newUsers = await Promise.all(randomUsers.map((user,index) =>
            prisma.users.update({
                where: {
                    id: user.id,
                },
                data: {
                    teamid: newTeam.id,
                    roleid: randomRoles[index].id // Назначаем уникальную случайную роль для каждого пользователя
                }
            })
          ));
    }
    catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch revenue data.')
      }
      return NextResponse.json({ message: 'success' });
}