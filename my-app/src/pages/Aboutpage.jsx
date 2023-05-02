import { Outlet, Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h1>О нас</h1>
            <p>React-router</p>
            <ul>
                <li><Link to="contacts">Контакты</Link></li>
                <li><Link to="team">Наша команда</Link></li>
            </ul>
            <Outlet />
        </div>
    )
}

export {About}
