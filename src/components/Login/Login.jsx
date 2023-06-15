import styles from "./Login.module.css"
import {useForm} from "react-hook-form"
import eye from "../../assets/images/icon-eye.png"
import crossedEye from "../../assets/images/crossed-icon-eye.png"
import {useState} from "react";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";

const LoginForm = (props) => {
    const {
        register, handleSubmit,
        formState: {errors, isValid},
        reset,
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        props.login(data.email, data.password, data.rememberMe)
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
                <h2>Sign in</h2>
                <h2>Register</h2>
            </div>
            <input placeholder="Email" {...register("email", {
                required: true,
                minLength: minLengthErMes,
            })} />
            <div className={styles.error}>
                {errors?.email && <span>{errors?.email?.message || "⚠ This field is required"}</span>}
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
                <input type={"checkbox"} {...register("rememberMe")}/>
            </div>

            <input className={styles.submit} value={"Email"} type="submit" disabled={!isValid}/>
        </form>
    );
}

export default connect(null, { login } )(LoginForm);