import classNames from "classnames";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideBascet, deleteProduct } from "../../store/basketData";
import styles from "./basket.module.scss";

function Basket() {
	const dispatch = useDispatch();
	const basket = useSelector((state) => state.basket);

	const renderProducts = useCallback((item) => (
		<div className={styles.product} key={item._id}>
			<img src={item.images[0]} alt="product" />

			<div className={styles.info}>
				<div className={styles.title}>{item.title}</div>
				<div className={styles.price}>${item.price}</div>
			</div>

			<div className={styles.actions}>
				<i className="fal fa-trash-alt" onClick={() => dispatch(deleteProduct(item._id))}></i>
			</div>
		</div>
	), [dispatch]);

	return (
		<div className={classNames(styles.basket, {[styles.show]: basket.show})}>
			<div className={styles.hide_arrow} onClick={() => dispatch(hideBascet())}>
				<i className="far fa-arrow-right"></i>
			</div>

			{
				basket.products.length ?
				<>
					<div className={styles.products}>
						{basket.products.map(renderProducts)}
					</div>

					<div className={classNames(styles.darked, styles.total_info)}>
						<div className={styles.total_products}>
							<div className={styles.subtitle}>Total Items</div>
							<div className={styles.count}>{basket.totalCount}</div>
						</div>

						<div className={classNames(styles.darked, styles.total_price)}>
							<div className={styles.subtitle}>Subtotal</div>
							<div className={styles.full_price}>${basket.totalPrice}</div>
						</div>
					</div>

					<div className={styles.bottom}>
						<button>Order</button>
					</div>
				</>
				:
				<div className={styles.empty}>Your cart is currently empty.</div>
			}
		</div>
	);
}

export default Basket;