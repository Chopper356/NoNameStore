import classNames from "classnames";

import styles from "./header.module.scss";

function Header() {
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div className={styles.logo}>
					<span>NoName</span>
					Store
					<span>.</span>
				</div>

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

					<div className={styles.action}>
						<i className="fal fa-user"></i>

						<span>
							Log in
							<br />
							My account
						</span>
					</div>

					<div className={classNames(styles.action, styles.basket)}>
						<i className="fal fa-shopping-basket"></i>

						<span>
							<div className={styles.count}>12</div>
							<div className={styles.total_price}>₴12.3400</div>
						</span>
					</div>
				</div>	
			</div>
		</div>
	);
}

export default Header;