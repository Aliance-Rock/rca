import { useParams } from 'react-router-dom'

const Editpost = () => {
    const {id} = useParams();

    return (
        <div>
            <h1>Редактировать пост {id}</h1>
        </div>
    )
}

export {Editpost}
