import styles from "./Login.module.css"
import {useForm} from 'react-hook-form'

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

    let minLengthErMes = {
        value: 8,
        message: "⚠ Minimum 8 symbols",
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Login" {...register("login", {
                required: true,
                minLength: minLengthErMes,
            })} />
            <div className={styles.error}>
                {errors?.login && <span>{errors?.login?.message || "⚠ This field is required"}</span>}
            </div>

            <input placeholder={"Password"} {...register("password", {
                required: true,
                minLength: minLengthErMes,
            })} />
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