import styles from "./Login.module.css"
import {Form, Field} from 'react-final-form'

const onSubmit = () => {};
const validate = () => {};

const LoginForm = () => (
    <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit}) => (
            <form onSubmit={handleSubmit} className={styles.form}>
                <h2>Login Form</h2>
                <div>
                    <label>Login</label>
                    <Field name="login" component="input" placeholder="Login"/>
                </div>
                <div>
                    <label>Password</label>
                    <Field name="password" component="input" placeholder="Password"/>
                </div>
                <div className={styles.formLast}>
                    <label>Remember me</label>
                    <Field name="rememberMe" component="input" type="checkbox"/>
                </div>

                <button type="submit">Login</button>
            </form>
        )}
    />
);

export default LoginForm;