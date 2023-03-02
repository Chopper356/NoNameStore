import classNames from "classnames";
import styles from "./products.module.scss";

function Products() {
	return (
		<div className={styles.products}>
			<div className={styles.section_title}>Products Collections</div>

			<div className={styles.wrapper}>
				<div className={styles.leftbar}>
					<div className={classNames(styles.sector, styles.categories)}>
						<div className={styles.block_title}>Category</div>
						<div className={styles.category}>
							<span>Laptops & Computers</span>
							<span>16</span>
						</div>
						<div className={styles.category}>
							<span>Mobiles & Tablets</span>
							<span>78</span>
						</div>
						<div className={styles.category}>
							<span>Headphones</span>
							<span>312</span>
						</div>
						<div className={styles.category}>
							<span>Smart Television</span>
							<span>64</span>
						</div>
						<div className={styles.category}>
							<span>Music & Gaming</span>
							<span>875</span>
						</div>
						<div className={styles.category}>
							<span>Smartwatchers</span>
							<span>54</span>
						</div>
						<div className={styles.category}>
							<span>Home Appliances</span>
							<span>34</span>
						</div>
						<div className={styles.category}>
							<span>Accessories</span>
							<span>86</span>
						</div>
						<div className={styles.category}>
							<span>Cameras & Videos</span>
							<span>765</span>
						</div>
					</div>

					<div className={classNames(styles.sector, styles.filters)}>
						<div className={styles.block_title}>Filters</div>

						<div className={styles.filter}>
							<div className={styles.title}>Sort By:</div>

							<select>
								<option selected disabled>Select sorting</option>
								<option value="qwe">Price ascending</option>
								<option value="qwe">By decreasing price</option>
								<option value="qwe">By popularity</option>
							</select>
						</div>
					</div>
				</div>

				<div className={styles.content}>
					<div className={styles.product}>
						<i className={classNames("far fa-heart", styles.feature_icon)}></i>
						
						<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/14_00_652x.jpg?v=1655096590" alt="product" />
						<img className={styles.second} src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/14_652x.jpg?v=1655096578" alt="product" />
						
						<div className={styles.info}>
							<div className={styles.company}>Bajaj</div>
							<div className={styles.name}>HD Resolution Indoor Wi-Fi Security Camera, White</div>
							<div className={styles.stars}>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
								<i className="fas fa-star"></i>
							</div>
							<div className={styles.price}>$378.43</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Products;