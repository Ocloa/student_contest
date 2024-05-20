import {checkEnvironment} from '../../util/checkEnvironment';
import {notFound} from 'next/navigation';
import RolePriorityForm from '@/app/components/RolePriorityForm';
import Form from './form';
export default async function userProfile({params}: {
    params: {userId: string}
}){
        const response = await fetch(checkEnvironment().concat(`/api/getUser?userid=${params.userId}`));
        const userData = await response.json();
    if (!!userData){
        return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-black">Profile of {userData.name}</h1>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-semibold mb-4">Профиль пользователя</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Имя:</label>
                    <p className="text-gray-900">{userData.name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Фамилия:</label>
                    <p className="text-gray-900">{userData.surname}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Академическая группа:</label>
                    <p className="text-gray-900">{userData.studentgroup}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium">Email:</label>
                    <p className="text-gray-900">{userData.email}</p>
                </div>
            </div>
            <div>
            <h1 className="text-black">Выберите приоритеты ролей в команде</h1>
            <RolePriorityForm />
            </div>
            </div>
        );
    }
    else{return notFound()}
}
