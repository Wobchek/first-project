import styles from "./Login.module.css"
import {useForm} from "react-hook-form"
import eye from "../../assets/images/icon-eye.png"
import crossedEye from "../../assets/images/crossed-icon-eye.png"
import {useState} from "react";

const LoginForm = () => {
    const {
        register, handleSubmit,
        formState: {errors, isValid},
        reset,
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset();
    };

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };

    let minLengthErMes = {
        value: 8,
        message: "⚠ Minimum 8 symbols",
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1 className={styles.h1}>authorizationPage</h1>
            <div className={styles.h2}>
                <h2>Login</h2>
                <h2>Register</h2>
            </div>
            <input placeholder="Login" {...register("login", {
                required: true,
                minLength: minLengthErMes,
            })} />
            <div className={styles.error}>
                {errors?.login && <span>{errors?.login?.message || "⚠ This field is required"}</span>}
            </div>
            <div className={styles.passWrapper}>
                <input placeholder={"Password"}
                       type={passwordShown ? "text" : "password"} {...register("password", {
                    required: true,
                    minLength: minLengthErMes,
                })} />
                <img src={passwordShown ? eye : crossedEye} onClick={togglePasswordVisiblity}/>
            </div>
                <div className={styles.error}>
                    {errors?.password && <span>{errors?.password?.message || "⚠ This field is required"}</span>}
                </div>

            <div className={styles.checkbox}>
                <label>Remember me</label>
                <input type={"checkbox"}/>
            </div>

            <input className={styles.submit} value={"Login"} type="submit" disabled={!isValid}/>
        </form>
    );
}

export default LoginForm;