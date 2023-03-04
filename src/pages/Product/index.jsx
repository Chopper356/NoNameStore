import Carousel from 'better-react-carousel'
import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addProduct } from '../../store/basketData';
import { setCurrentProductById } from '../../store/productsData';
import styles from "./product.module.scss";

function Product() {
	const dispatch = useDispatch();
	const product = useSelector((state) => state.products.current);
	const search = useLocation()

	useEffect(() => {
		if (product.title) return;

		dispatch(setCurrentProductById(search.pathname.split('/')[2]))
	}, [dispatch, product.title, search.pathname]);

	return (
		product.title && 
		<>
			<div className={styles.product}>
				<Carousel cols={1} rows={1} gap={10} loop showDots="true" autoplay={5000} hideArrow containerStyle={{height: "fit-content", maxWidth: "50vw"}}>
					{product?.images.map((image) => (
						<Carousel.Item key={image}>
							<img src={image} alt="banner_image" />
						</Carousel.Item>
					))}
				</Carousel>

				<div className={styles.info}>
					<div className={styles.title}>{product.title}</div>
					<div className={styles.price}>₴{product.price}</div>
					<div className={styles.stars}>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
						<i className="fas fa-star"></i>
					</div>

					<div className={styles.item}>
						<b>Type : </b>
						<span>Tablet Computers</span>
					</div>
					<div className={styles.item}>
						<b>Brand : </b>
						<span>Havells</span>
					</div>
					<div className={styles.item}>
						<b>Categories : </b>
						<span>laptops</span>
					</div>
					<div className={styles.item}>
						<b>SKU : </b>
						<span>SKU033</span>
					</div>
					<div className={styles.item}>
						<b>Availability : </b>
						<span>100 In Stock</span>
					</div>

					<div className={classNames(styles.item, styles.payment)}>
						<b>Quantity</b>
						
						<div className={styles.count}>
							<input type="number" defaultValue={0}/>
							<div className={styles.actions}>
								<span>+</span>
								<span>-</span>
							</div>
						</div>

						<button onClick={() => dispatch(addProduct(product))}>Add to cart</button>
						<button>Buy It Now</button>

					</div>

					<div className={classNames(styles.item, styles.description)}>
						<b>Description</b>

						<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus eius asperiores consectetur tempore consequatur accusamus esse iusto fugiat corporis non velit earum, aut ex odit voluptatem illo maiores nostrum autem ea? Praesentium distinctio corporis, perferendis impedit aperiam ratione quam quasi enim earum voluptatem deleniti animi magnam veniam eos iure!</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Product;