import classNames from "classnames";
import { Carousel } from '@trendyol-js/react-carousel';
import Banners from "./components/Banners";

import styles from "./home.module.scss";

function Home() {
	return (
		<div className={classNames(styles.home)}>
			<Banners />

			<div className={classNames(styles.content)}>

				<div className={classNames(styles.features)}>
					<Carousel show={5} slide={1} swiping={true} hideArrows="true">
						<div className={classNames(styles.feature)}>
							<i class="far fa-truck-container"></i>

							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Free Shipping</div>
								<div className={classNames(styles.subtittle)}>From all orders over $100</div>
							</div>
						</div>

						<div className={classNames(styles.feature)}>
							<i class="far fa-gift"></i>

							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Free Shipping</div>
								<div className={classNames(styles.subtittle)}>From all orders over $100</div>
							</div>
						</div>

						<div className={classNames(styles.feature)}>
							<i class="far fa-headset"></i>

							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Free Shipping</div>
								<div className={classNames(styles.subtittle)}>From all orders over $100</div>
							</div>
						</div>

						<div className={classNames(styles.feature)}>
							<i class="far fa-badge-percent"></i>

							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Free Shipping</div>
								<div className={classNames(styles.subtittle)}>From all orders over $100</div>
							</div>
						</div>

						<div className={classNames(styles.feature)}>
							<i class="far fa-credit-card"></i>

							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Free Shipping</div>
								<div className={classNames(styles.subtittle)}>From all orders over $100</div>
							</div>
						</div>
					</Carousel>
				</div>
			</div>
		</div>
	);
}

export default Home;	