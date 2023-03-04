import classNames from "classnames";
import { useCallback, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentProduct } from "../../../../store/productsData";
import styles from "./products.module.scss";

function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.all);
	const [categories,] = useState([
		{
			title: "Laptops & Computers",
			count: 123,
			_id: "23fc3d23wds23"
		},
		{
			title: "Mobiles & Tablets",
			count: 523,
			_id: "3v3er4c4ec34ec"
		},
		{
			title: "Headphones",
			count: 252,
			_id: "g34g34ef32e4df"
		},
		{
			title: "Smart Television",
			count: 2253,
			_id: "23ecwcxd3we2c2e4c"
		},
		{
			title: "Music & Gaming",
			count: 235,
			_id: "v4435rfv3wc4ec"
		},
		{
			title: "Smartwatchers",
			count: 2352,
			_id: "vc345rv343vc4e"
		},
		{
			title: "Portable Speakers",
			count: 512,
			_id: "f34f3wecdf3ec32e4"
		},
		{
			title: "Accessories",
			count: 653,
			_id: "g34gv3wefc324ef"
		},
		{
			title: "Cameras & Videos",
			count: 124,
			_id: "cwecwecwec3223c"
		},
		{
			title: "Home Appliances",
			count: 124,
			_id: "f34e3w2e4f23"
		}
	]);
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