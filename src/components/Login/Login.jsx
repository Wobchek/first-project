import styles from "./Login.module.css"
import {useForm} from "react-hook-form"
import eye from "../../assets/images/icon-eye.png"
import crossedEye from "../../assets/images/crossed-icon-eye.png"
import {useState} from "react";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    const {
        register, handleSubmit,
        formState: {errors, isValid},
        setError, clearErrors, reset,
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = (data) => {
        // alert(JSON.stringify(data))
        props.login(data.email, data.password, data.rememberMe, setError)
        reset({
            email: "",
            password: "",
            rememberMe: false
        }, { keepErrors: true });
    };
    //Состояние отображения символов пароля
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    //Минимальная длинна для пароля и логина
    let minLengthErMes = {
        value: 8,
        message: "⚠ Minimum 8 symbols",
    };
    //Редирект на профиль
    // let profile = `/profile/${props.userId}`;
    if (props.isAuth) {
        return <Navigate to="/profile" />
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.h1}>authorizationPage</h1>
            <div className={styles.h2}>
                <h2>Sign in</h2>
                <h2>Register</h2>
            </div>
            <input placeholder="Email" {...register("email", {
                required: true,
                minLength: minLengthErMes,
            })} onFocus={() => clearErrors(["email", "server"])}/>
            <div className={styles.error}>
                {errors?.email && <span>{errors?.email?.message || "⚠ This field is required"}</span>}
            </div>
            <div className={styles.passWrapper}>
                <input placeholder={"Password"}
                       type={passwordShown ? "text" : "password"} {...register("password", {
                    required: true,
                    minLength: minLengthErMes,
                })} onFocus={() => clearErrors(["password", "server"])}/>
                <img src={passwordShown ? eye : crossedEye} onClick={togglePasswordVisiblity}/>
            </div>
            <div className={styles.error}>
                {errors?.password && <span>{errors?.password?.message || "⚠ This field is required"}</span>}
            </div>

            <div className={styles.checkbox}>
                <label>Remember me</label>
                <input type={"checkbox"} {...register("rememberMe")}/>
            </div>

            <div className={styles.error}>
                {errors.server && <span>⚠ {errors.server.message}</span>}
            </div>
            <input className={styles.submit} value={"Email"} type="submit" disabled={!isValid}/>
        </form>
    );
}
const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth,
        userId: state.auth.userId,
})

export default connect(mapStateToProps, { login } )(LoginForm);