import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li>
                    <NavLink to="/news" className={active => active.isActive ? s.active : s.item}>News</NavLink >
                </li>
                <li>
                    <NavLink to="/profile" className={active => active.isActive ? s.active : s.item}>Profile</NavLink >
                </li>
                <li>
                    <NavLink to="/dialogs" className={active => active.isActive ? s.active : s.item}>Dialogs</NavLink >
                </li>
                <li>
                    <NavLink to="/settings" className={active => active.isActive ? s.active : s.item}>Settings</NavLink >
                </li>
            </ul>
        </nav>
    )
};

export default Navbar;