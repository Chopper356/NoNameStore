import classNames from "classnames";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.content}>
				<Link to="/">
					<div className={styles.logo}>
						<span>NoName</span>
						Store
						<span>.</span>
					</div>
				</Link>

				<div className={styles.search}>
					<input type="text" placeholder="Search..."/>
					<div>
						<i className="fal fa-search"></i>
					</div>
				</div>

				<div className={styles.actions}>
					<div className={styles.action}>
						<i className="fal fa-heart"></i>

						<span>
							Favourite
							<br />
							Wishlist
						</span>
					</div>

					<Link to="/login" className={styles.action}>
						<i className="fal fa-user"></i>

						<span>
							Log in
							<br />
							My account
						</span>
					</Link>

					<div className={classNames(styles.action, styles.basket)}>
						<i className="fal fa-shopping-basket"></i>

						<span>
							<div className={styles.count}>12</div>
							<div className={styles.total_price}>₴12.3400</div>
						</span>
					</div>
				</div>	
			</div>
		</header>
	);
}

export default Header;