import { Carousel } from '@trendyol-js/react-carousel';
import Banners from "./components/Banners";
import Products from './components/Products';
import ProductsQuantity from "./components/ProductsQuantity";

import styles from "./home.module.scss";

function Home() {
	return (
		<div className={styles.home}>
			<Banners />

			<div className={styles.content}>
				<div className={styles.features}>
					<Carousel show={5} slide={1} swiping={true} hideArrows="true">
						<div className={styles.feature}>
							<i class="far fa-truck-container"></i>

							<div className={styles.info}>
								<div className={styles.title}>Free Shipping</div>
								<div className={styles.subtittle}>From all orders over $100</div>
							</div>
						</div>

						<div className={styles.feature}>
							<i class="far fa-gift"></i>

							<div className={styles.info}>
								<div className={styles.title}>Daily Surprise Offers</div>
								<div className={styles.subtittle}>Save up to 25% off</div>
							</div>
						</div>

						<div className={styles.feature}>
							<i class="far fa-headset"></i>

							<div className={styles.info}>
								<div className={styles.title}>Support 24/7</div>
								<div className={styles.subtittle}>Shop with an expert</div>
							</div>
						</div>

						<div className={styles.feature}>
							<i class="far fa-badge-percent"></i>

							<div className={styles.info}>
								<div className={styles.title}>Affordable Prices</div>
								<div className={styles.subtittle}>Get Factory direct price</div>
							</div>
						</div>

						<div className={styles.feature}>
							<i class="far fa-credit-card"></i>

							<div className={styles.info}>
								<div className={styles.title}>Secure Payments</div>
								<div className={styles.subtittle}>100% Protected Payments</div>
							</div>
						</div>
					</Carousel>
				</div>

				<ProductsQuantity />
				<Products />
			</div>
		</div>
	);
}

export default Home;	