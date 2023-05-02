import { useAuth } from '../hook/useAuth';
import { useNavigate } from 'react-router-dom'

const Createpost = () => {
    const {signout} = useAuth();
    const navigate = useNavigate();

    return (
        <div>
            <h1>Создать пост</h1>
            <button onClick={() => signout(() => navigate('/', {replace: true}))}>Выйти</button>
        </div>
    )
}

export {Createpost}
