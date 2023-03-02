import styles from "./registration.module.scss";

function Registration() {
	return (
		<form className={styles.registration}>
			<div className={styles.title}>Registration</div>

			<input type="text" placeholder="Name"/>
			<input type="text" placeholder="Surname"/>
			<input type="email" placeholder="Email"/>
			<input type="password" placeholder="Password"/>

			<button>Create</button>
		</form>
	);
}

export default Registration;