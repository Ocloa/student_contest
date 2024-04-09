import { getServerSession } from 'next-auth';
import Form from './form';
import { redirect } from 'next/navigation';

export default async function UsersPage() {
  const session = await getServerSession();
  if (!session) {
    redirect('/');
  }
  return <Form />;
}