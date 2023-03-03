import { useCallback, useState } from "react";
import styles from "./products-quantity.module.scss";

function ProductsQuantity() {
	const [products,] = useState([])

	const renderItems = useCallback(({title, count, image, _id}) => (
		<div className={styles.item} key={ _id }>
			<div className={styles.info}>
				<div className={styles.title}>{ title }</div>
				<div className={styles.count}>{ count } Items</div>
			</div>

			<img src={image} alt="product" />
		</div>
	), []);

	return (
		<div className={styles.products}>
			{products.map(renderItems)}
		</div>
	);
}

export default ProductsQuantity;