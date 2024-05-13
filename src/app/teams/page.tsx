import Form from './form';
import {getServerSession} from 'next-auth'
import AccessDenied from '../components/AccessDenied'

export default async function teamsPage() {
    const session = await getServerSession();
    if (!!session){
    return <Form/>;
    }
    else{
        return(
            <AccessDenied/>
        )
    }
}