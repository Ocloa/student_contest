import { getServerSession } from "next-auth";
import Message from './Message';



export default async function Home() {
  const session:any = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-dark">
      <Message isLogged={!!session} name={session?.user.name}></Message>
        <section id="about" className="my-8">
          <h2 className="text-2xl border-b pb-2 border-dark-gray">О конкурсе</h2>
          <p>Добро пожаловать на конкурс студенческих проектов! Здесь студенты могут продемонстрировать свои навыки и инновационные идеи, работая в командах.</p>
        </section>
        <section id="teams" className="my-8">
          <h2 className="text-2xl border-b pb-2 border-dark-gray">Сформированные команды</h2>
          <ul id="team-list">
            {/* Список команд будет загружен автоматически */}
          </ul>
        </section>
        <section id="schedule" className="my-8">
          <h2 className="text-2xl border-b pb-2 border-dark-gray">Сроки проведения</h2>
          <p>Начало регистрации: 1 июня 2024</p>
          <p>Окончание регистрации: 30 июня 2024</p>
          <p>Начало конкурса: 1 июля 2024</p>
          <p>Окончание конкурса: 31 августа 2024</p>
        </section>
        <section id="register" className="my-8">
          <h2 className="text-2xl border-b pb-2 border-dark-gray">Регистрация</h2>
        </section>
        <footer className="bg-dark text-light p-4 text-center w-full h-full flex-shrink-0">
            <p>&copy; 2024 Конкурс студенческих проектов</p>
        </footer>
    </main>
  );
}
