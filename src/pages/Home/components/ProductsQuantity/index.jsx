import { useCallback, useState } from "react";
import styles from "./products-quantity.module.scss";

function ProductsQuantity() {
	const [products,] = useState([
		{
			_id: "23fc3d23wds23",
			title: "Computers & Laptop",
			count: 54,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/02_110x110.jpg?v=1654929897"
		},
		{
			_id: "cwecwecwec3223c",
			title: "Cameras & Videos",
			count: 435,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/03_110x110.jpg?v=1654929931"
		},
		{
			_id: "23ecwcxd3we2c2e4c",
			title: "Smart Television",
			count: 456,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/04_110x110.jpg?v=1654929951"
		},
		{
			_id: "vc345rv343vc4e",
			title: "Smartwatches",
			count: 23,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/05_110x110.jpg?v=1654930000"
		},
		{
			_id: "v4435rfv3wc4ec",
			title: "Music & Gaming",
			count: 634,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/06_110x110.jpg?v=1654930029"
		},
		{
			_id: "3v3er4c4ec34ec",
			title: "Mobiles & tablets",
			count: 65,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/01_110x110.jpg?v=1654929878"
		},
		{
			_id: "g34g34ef32e4df",
			title: "Headphones",
			count: 76,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/07_110x110.jpg?v=1654930055"
		},
		{
			_id: "g34gv3wefc324ef",
			title: "Accessories",
			count: 73,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/08_110x110.jpg?v=1654930082"
		},
		{
			_id: "f34f3wecdf3ec32e4",
			title: "Portable Speakers",
			count: 75,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/09_110x110.jpg?v=1654930102"
		},
		{
			_id: "f34e3w2e4f23",
			title: "Home Appliances",
			count: 53,
			image: "https://cdn.shopify.com/s/files/1/0620/5082/8457/files/10_110x110.jpg?v=1654930129"
		},
])

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