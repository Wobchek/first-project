import styles from "./Login.module.css"
import {useForm} from 'react-hook-form'

const LoginForm = () => {
    const {
        register, handleSubmit,
        formState: {errors}
    } = useForm(
        {mode: "onBlur"}
    );
    const onSubmit = data => console.log(data);

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Login" {...register("login", {required: true})} />
            {errors.exampleRequired && <span>This field is required</span>}

            <input placeholder={"Password"} {...register("password", {required: true})} />
            {errors.exampleRequired && <span>This field is required</span>}

            <div className={styles.checkbox}>
                <label>Remember me</label>
                <input type={"checkbox"}/>
            </div>

            <input className={styles.submit} value={"Login"} type="submit"/>
        </form>
    );
}

export default LoginForm;