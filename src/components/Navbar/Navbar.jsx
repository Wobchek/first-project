import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';
import Friends from "../Friends/Friends";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.sideBar}>
                <li>
                    <NavLink to="/news" className={active => active.isActive ? s.active : s.item}>News</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" className={active => active.isActive ? s.active : s.item}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/dialogs" className={active => active.isActive ? s.active : s.item}>Dialogs</NavLink>
                </li>
                <li>
                    <NavLink to="/users" className={active => active.isActive ? s.active : s.item}>Users</NavLink>
                </li>
                <li>
                    <NavLink to="/settings" className={active => active.isActive ? s.active : s.item}>Settings</NavLink>
                </li>
            </ul>
            <ol className={s.friendsBar}>
                <NavLink to="/friends" className={fActive => fActive.isActive ? s.fActive : s.item + ' ' + s.friends}>Friends</NavLink>
            </ol>
            <Friends/>
        </nav>
    )
};

export default Navbar;