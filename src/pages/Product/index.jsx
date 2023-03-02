import Carousel from 'better-react-carousel'
import classNames from 'classnames';
import styles from "./product.module.scss";

function Product() {
	return (
		<div className={styles.product}>
			<Carousel cols={1} rows={1} gap={10} loop showDots="true" autoplay={5000} hideArrow="true" containerStyle={{height: "fit-content", maxWidth: "50vw"}}>
				<Carousel.Item>
						<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_e3ed94b3-4730-40b7-92f8-eeef933a7f4f_884x.jpg?v=1655096645" alt="banner_image" />
				</Carousel.Item>
				<Carousel.Item>
						<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_02_884x.jpg?v=1655096656" alt="banner_image" />
				</Carousel.Item>
				<Carousel.Item>
						<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_00_884x.jpg?v=1655096656" alt="banner_image" />
				</Carousel.Item>
				<Carousel.Item>
						<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/products/15_03_884x.jpg?v=1655096656" alt="banner_image" />
				</Carousel.Item>
			</Carousel>

			<div className={styles.info}>
				<div className={styles.title}>Honor T1 7.0 1 GB RAM 8 GB ROM 7 Inch With Wi-Fi+3G Tablet</div>
				<div className={styles.price}>₴3,779.00</div>
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

					<button>Add to cart</button>
					<button>Buy It Now</button>

				</div>

				<div className={classNames(styles.item, styles.description)}>
					<b>Description</b>

					<div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis delectus eius asperiores consectetur tempore consequatur accusamus esse iusto fugiat corporis non velit earum, aut ex odit voluptatem illo maiores nostrum autem ea? Praesentium distinctio corporis, perferendis impedit aperiam ratione quam quasi enim earum voluptatem deleniti animi magnam veniam eos iure!</div>
				</div>
			</div>
		</div>
	);
}

export default Product;