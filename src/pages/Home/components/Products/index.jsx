import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../../../store/productsData";
import styles from "./products.module.scss";

function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.all);
	const [categories,] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [selectedSort, setSelectedSort] = useState("");
	const sortedProducts = useMemo(() => {
		let filtered = [...products];

		if (selectedCategory) {
			filtered  = products.filter((el) => el.categoryId === selectedCategory);
		}

		if (selectedSort) {
			filtered.sort((a, b) => {
				if (selectedSort === "asc") {
					return a.price - b.price;
				} else if (selectedSort === "desc") {
					return b.price - a.price;
				} else if (selectedSort === "popularity") {
					return a.sales - b.sales;
				} else {
					return 0;
				}
			});
		}

		return filtered;
	}, [products, selectedCategory, selectedSort]);

	const renderProducts = useCallback((item) => (
		<Link className={styles.product} to={"/product/" + item._id} key={item._id} onClick={() => dispatch(setCurrentProduct(item))}>
			<i className={classNames("far fa-heart", styles.feature_icon)}></i>
			
			<img src={item.images[0]} alt="product" />
			<img className={styles.second} src={item.images[1]} alt="product" />
			
			<div className={styles.info}>
				<div className={styles.company}>{item.company}</div>
				<div className={styles.name}>{item.title}</div>
				<div className={styles.stars}>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
					<i className="fas fa-star"></i>
				</div>
				<div className={styles.price}>${item.price}</div>
			</div>
		</Link>
	), [dispatch]);

	return (
		<div className={styles.products}>
			<div className={styles.section_title}>Products Collections</div>

			<div className={styles.wrapper}>
				<div className={styles.leftbar}>
					<div className={classNames(styles.sector, styles.categories)}>
						<div className={styles.block_title}>Category</div>
						
						{categories.map(({title, count, _id}) => (
							<div className={styles.category} onClick={() => setSelectedCategory(_id)} key={_id}>
								<span>{title}</span>
								<span>{count}</span>
							</div>
						))}
					</div>

					<div className={classNames(styles.sector, styles.filters)}>
						<div className={styles.block_title}>Sorting</div>

						<div className={styles.filter}>
							<div className={styles.title}>Sort By:</div>

							<select defaultValue={"none"} onChange={(el) => setSelectedSort(el.target.value)}>
								<option value={"none"} disabled>Select sorting</option>
								<option value={"asc"}>Price ascending</option>
								<option value={"desc"}>Price descending</option>
								<option value={"popularity"}>By popularity</option>
							</select>
						</div>
					</div>
				</div>

				<div className={styles.content}>
					{sortedProducts.map(renderProducts)}
				</div>
			</div>
		</div>
	);
}

export default Products;