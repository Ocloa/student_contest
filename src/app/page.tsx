import { getServerSession } from "next-auth";
import Message from './Message';



export default async function Home() {
  const session:any = await getServerSession();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Message isLogged={!!session} name={session?.user.name}></Message>
    </main>
  );
}
