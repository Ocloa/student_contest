export default async function Form({params}: {
    params: {userId: string}
}){
    const response = await fetch(`/api/getTeamMembers?teamid=${params.userId}`);
    const userData = await response.json();
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
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
    </div>
    );
}