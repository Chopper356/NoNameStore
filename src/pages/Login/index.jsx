import { Link } from "react-router-dom";
import styles from "./login.module.scss";

function Login() {
	return (
		<form className={styles.login}>
			<div className={styles.title}>Login</div>

			<input type="email" placeholder="Email"/>
			<input type="password" placeholder="Password"/>

			<div className={styles.reset_pass}>Forgot your password?</div>

			<button>Login</button>
			<Link to={"/registration"}>
				<button>Create User Account</button>
			</Link>
		</form>
	);
}

export default Login;