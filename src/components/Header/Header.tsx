import React from "react";

import styles from "./Header.module.css";

const Header = () => {
	return (
		<div>
			<header className={styles.header}>
				<div className={styles.headerTop}>
					<div className={styles.headTopItem}>
						<div>
							<img src="/Images/MaldexLogo.svg" alt="" />
						</div>
						<div className={styles.hInnerItem}>
							<img src="/Images/phoneM.svg" alt="" />
							<a href="tel:88003336784" className={styles.hInnerInfo}>
								8-800-333-6784
							</a>
						</div>
						<div className={styles.hInnerItem}>
							<img src="/Images/mail.svg" alt="" />
							<a href="mailto:info@maldex.ru" className={styles.hInnerInfo}>
								info@maldex.ru
							</a>
						</div>
						<div className={styles.hInnerItem}>
							<img src="/Images/location.svg" alt="" />
							<a
								href="https://www.google.com/maps?q=Москва"
								className={styles.hInnerInfo}
								target="_blank"
								rel="noopener noreferrer"
							>
								Москва
							</a>
						</div>
					</div>
					<div className={styles.headTopItem}>
						<p className={styles.headTopInfo}>
							Минимальная сумма заказа от 30 тыс рублей
						</p>
					</div>
					<div className={styles.headTopItem}>
						<p className={styles.hInnerInfo}>Доставка</p>
						<p className={styles.hInnerInfo}>Оплата</p>
						<p className={styles.hInnerInfo}>Контакты</p>
						<div>
							<img src="/Images/heart.svg" alt="" className={styles.heartImg} />
						</div>
						<div className={styles.headPriceWrap}>
							<div className={styles.numberThree}>3</div>
							<p className={styles.headprice}>14 619,00 ₽ </p>
						</div>
					</div>
				</div>

				<div className={styles.borderBottom}></div>
			</header>
		</div>
	);
};

export default Header;
