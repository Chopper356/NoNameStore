import classNames from "classnames";
import Banners from "./components/Banners";

import styles from "./home.module.scss";

function Home() {
	return (
		<div className={classNames(styles.home)}>
			<Banners />
		</div>
	);
}

export default Home;	