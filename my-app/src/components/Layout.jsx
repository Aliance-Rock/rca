import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink'

const Layout = () => {
    return (
        <>
        <header>
            <CustomLink to="/">Главная</CustomLink>
            <CustomLink to="/posts">Блог</CustomLink>
            <CustomLink to="/about">О нас</CustomLink>
        </header>

        <main className="container">
            <Outlet />
        </main>

        <footer className="container">&copy; ReactRouter</footer>
        </>
    )
}

export {Layout}
