import classNames from "classnames";

import styles from "./header.module.scss";

function Header() {
	return (
		<div className={classNames(styles.header)}>
			<div className={classNames(styles.content)}>
				<div className={classNames(styles.logo)}>
					<span>NoName</span>
					Store
					<span>.</span>
				</div>

				<div className={classNames(styles.search)}>
					<input type="text" placeholder="Search..."/>
					<div>
						<i className="fal fa-search"></i>
					</div>
				</div>

				<div className={classNames(styles.actions)}>
					<div className={classNames(styles.action)}>
						<i className="fal fa-heart"></i>

						<span>
							Favourite
							<br />
							Wishlist
						</span>
					</div>

					<div className={classNames(styles.action)}>
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
							<div className={classNames(styles.count)}>12</div>
							<div className={classNames(styles.total_price)}>₴12.3400</div>
						</span>
					</div>
				</div>	
			</div>
		</div>
	);
}

export default Header;