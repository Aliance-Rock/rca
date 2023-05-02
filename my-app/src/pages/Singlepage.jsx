import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Singlepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    const goBack = () => navigate(-1);
    const goHome = () => navigate('/', {replace: true});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    return (
        <div>
            <button onClick={goBack}>Назад</button>
            {/* Bad approach */}
            <button onClick={goHome}>На главную</button>
            {post && (
                <>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                    <Link to={`/posts/${id}/edit`}>Изменить этот пост</Link>
                </>
            )}
        </div>
    )
}

export {Singlepage}
