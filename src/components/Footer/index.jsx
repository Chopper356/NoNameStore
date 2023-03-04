import styles from "./footer.module.scss";

function Footer() {
	return (
		<div className={styles.footer}>
			<div className={styles.content}>
				<div className={styles.copyright}>© 2023, NoNameStore. by Chopper</div>

				<div className={styles.cards}>
					<img src="/images/cards/visa.svg" alt="visa" />
					<img src="/images/cards/mastercard.svg" alt="mastercard" />
					<img src="/images/cards/paypal.svg" alt="paypal" />
					<img src="/images/cards/amex.svg" alt="amex" />
				</div>
			</div>
		</div>
	);
}

export default Footer;