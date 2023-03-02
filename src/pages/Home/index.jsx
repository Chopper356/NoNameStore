import classNames from "classnames";
import Carousel from 'better-react-carousel'

import styles from "./home.module.scss";

function Home() {
	return (
		<div className={classNames(styles.home)}>
			<div className={classNames(styles.slider_banner)}>
				<Carousel cols={1} rows={1} gap={10} loop showDots="true" hideArrow="true" autoplay={5000} containerStyle={{height: "fit-content"}}>
					<Carousel.Item>
						<div className={classNames(styles.slider_item)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-1_830x550.jpg?v=1655701492;" alt="banner_image" />
						
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>SUPERCHARGED FOR PROS.</div>
								<div className={classNames(styles.subtitle)}>iPad S13+ Pro.</div>
								<div className={classNames(styles.desc)}>From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*</div>
								<button>Buy now</button>
							</div>
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={classNames(styles.slider_item)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-2_830x550.jpg?v=1655455867;" alt="banner_image" />
						
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Best sale</div>
								<div className={classNames(styles.subtitle)}>Laptops max</div>
								<div className={classNames(styles.desc)}>From $1699.00 or $64.62/mo.</div>
								<button>Buy now</button>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>

				<div className={classNames(styles.items)}>
					<span className={classNames(styles.item)}>
						<div className={classNames(styles.wrapper)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-01.jpg?v=1655701506" alt="banner_image" />
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Best sale</div>
								<div className={classNames(styles.subtitle)}>Laptops max</div>
								<div className={classNames(styles.desc)}>From $1699.00 or $64.62/mo.</div>
							</div>
						</div>
					</span>

					<span className={classNames(styles.item)}>
						<div className={classNames(styles.wrapper)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-03.jpg?v=1654859212" alt="banner_image" />
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Best sale</div>
								<div className={classNames(styles.subtitle)}>Laptops max</div>
								<div className={classNames(styles.desc)}>From $1699.00 or $64.62/mo.</div>
							</div>
						</div>
					</span>

					<span className={classNames(styles.item)}>
						<div className={classNames(styles.wrapper)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-02.jpg?v=1654859195" alt="banner_image" />
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Best sale</div>
								<div className={classNames(styles.subtitle)}>Laptops max</div>
								<div className={classNames(styles.desc)}>From $1699.00 or $64.62/mo.</div>
							</div>
						</div>
					</span>

					<span className={classNames(styles.item)}>
						<div className={classNames(styles.wrapper)}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-04.jpg?v=1654859228" alt="banner_image" />
							<div className={classNames(styles.info)}>
								<div className={classNames(styles.title)}>Best sale</div>
								<div className={classNames(styles.subtitle)}>Laptops max</div>
								<div className={classNames(styles.desc)}>From $1699.00 or $64.62/mo.</div>
							</div>
						</div>
					</span>
				</div>
			</div>
		</div>
	);
}

export default Home;	