import Carousel from 'better-react-carousel'

import styles from "./banners.module.scss";

function Banners() {
	return (
		<div className={styles.slider_banner}>
			<div className={styles.content}>
				<Carousel cols={1} rows={1} gap={10} loop showDots="true" hideArrow autoplay={5000} containerStyle={{height: "fit-content"}}>
					<Carousel.Item>
						<div className={styles.slider_item}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-1_830x550.jpg?v=1655701492;" alt="banner_image" />
						
							<div className={styles.info}>
								<div className={styles.title}>SUPERCHARGED FOR PROS.</div>
								<div className={styles.subtitle}>iPad S13+ Pro.</div>
								<div className={styles.desc}>From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*</div>
								<button>Buy now</button>
							</div>
						</div>
					</Carousel.Item>

					<Carousel.Item>
						<div className={styles.slider_item}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/main-banner-2_830x550.jpg?v=1655455867;" alt="banner_image" />
						
							<div className={styles.info}>
								<div className={styles.title}>Best sale</div>
								<div className={styles.subtitle}>Laptops max</div>
								<div className={styles.desc}>From $1699.00 or <br /> $64.62/mo.</div>
								<button>Buy now</button>
							</div>
						</div>
					</Carousel.Item>
				</Carousel>

				<div className={styles.items}>
					<span className={styles.item}>
						<div className={styles.wrapper}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-01.jpg?v=1655701506" alt="banner_image" />
							<div className={styles.info}>
								<div className={styles.title}>Best sale</div>
								<div className={styles.subtitle}>Laptops max</div>
								<div className={styles.desc}>From $1699.00 or <br /> $64.62/mo.</div>
							</div>
						</div>
					</span>

					<span className={styles.item}>
						<div className={styles.wrapper}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-03.jpg?v=1654859212" alt="banner_image" />
							<div className={styles.info}>
								<div className={styles.title}>New arrival</div>
								<div className={styles.subtitle}>Buy iPad air</div>
								<div className={styles.desc}>From $599 or <br /> $49.91/mo. for 12 mo.</div>
							</div>
						</div>
					</span>

					<span className={styles.item}>
						<div className={styles.wrapper}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-02.jpg?v=1654859195" alt="banner_image" />
							<div className={styles.info}>
								<div className={styles.title}>15% off</div>
								<div className={styles.subtitle}>Smartwatch 7</div>
								<div className={styles.desc}>Shop the latest <br /> band styles and colors.</div>
							</div>
						</div>
					</span>

					<span className={styles.item}>
						<div className={styles.wrapper}>
							<img src="https://cdn.shopify.com/s/files/1/0620/5082/8457/files/catbanner-04.jpg?v=1654859228" alt="banner_image" />
							<div className={styles.info}>
								<div className={styles.title}>Free engraving</div>
								<div className={styles.subtitle}>AirPods max</div>
								<div className={styles.desc}>High-fidelity playback & <br /> ultra-low distortion</div>
							</div>
						</div>
					</span>
				</div>
			</div>
		</div>
	);	
}

export default Banners;	