import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showBascet } from "../../store/basketData";

import styles from "./header.module.scss";

function Header() {
	const dispatch = useDispatch();
	const {totalPrice, totalCount} = useSelector((state) => state.basket);
	
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

					<div className={classNames(styles.action, styles.basket)} onClick={() => dispatch(showBascet())}>
						<i className="fal fa-shopping-basket"></i>

						<span>
							<div className={styles.count}>{totalCount}</div>
							<div className={styles.total_price}>₴{totalPrice}</div>
						</span>
					</div>
				</div>	
			</div>
		</header>
	);
}

export default Header;