import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <span>
            <img src='https://st2.depositphotos.com/4230085/6185/v/950/depositphotos_61859919-stock-illustration-basketball-ball.jpg' />
            </span>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                    : <NavLink to={"/login"}>Login</NavLink> }
            </div>
            </header>)

};

export default Header;