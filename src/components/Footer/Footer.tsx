import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<div>
			{/* Scroll Container */}
			<div className={styles.scrollContainer}>
				<div className={styles.scrollContent}>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ТОЛЬКО НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
					ЭКСКЛЮЗИВ НА MALDEX ➔{" "}
					<img
						src="/Images/animationImg.svg"
						alt=""
						className={styles.animationImg}
					/>
				</div>
			</div>

			{/* Footer */}
			<footer className={styles.footer}>
				<div className={styles.footerHead}>
					<div className={styles.footHeadItem}>По всем вопросам</div>
					<div className={styles.footHeadItem}></div>
					<div className={styles.footHeadItem}>
						Бесплатный звонок{" "}
						<span className={styles.blockSpan}>из любой точки России</span>
					</div>
					<div className={styles.footHeadItem}></div>
					<div className={styles.footHeadItem}></div>
				</div>
				<div className={`${styles.footerHead} ${styles.footerHeadSec}`}>
					<a href="mailto:info@maldex.com" className={styles.footHeadInfo}>
						<span className={styles.underline}>maldex @info.com</span>
					</a>
					<div className={styles.footHeadInfo}></div>
					<a href="tel:88003336784" className={styles.footHeadInfo}>
						<span className={styles.underline}>
							8-800{" "}
							<span className={`${styles.blockSpan} ${styles.underline}`}>
								333-67-84
							</span>
						</span>
					</a>
					<div className={styles.footHeadInfo}></div>
					<div className={styles.footHeadInfo}></div>
				</div>

				{/* Footer Center */}
				<div className={styles.footCenter}>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.mainLi}`}>
							ОСНОВНЫЕ КАТЕГОРИИ
						</li>
						<li className={styles.footCenterLi}>Коллекции</li>
						<li className={styles.footCenterLi}>Автомобильные аксессуары</li>
						<li className={styles.footCenterLi}>Деловые подарки</li>
						<li className={styles.footCenterLi}>Для дома</li>
						<li className={styles.footCenterLi}>Для отдыха</li>
						<li className={styles.footCenterLi}>Для путешествий</li>
						<li className={styles.footCenterLi}>Для спорта</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.noLi}`}>.</li>
						<li className={styles.footCenterLi}>Пишушие инструменты</li>
						<li className={styles.footCenterLi}>Сумки</li>
						<li className={styles.footCenterLi}>Вкусные подарки</li>
						<li className={styles.footCenterLi}>Товары для детей</li>
						<li className={styles.footCenterLi}>Упаковка</li>
						<li className={styles.footCenterLi}>Электроника</li>
						<li className={styles.footCenterLi}>Подарочные наборы</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.mainLi}`}>
							РАЗДЕЛЫ
						</li>
						<li className={styles.footCenterLi}>Главная</li>
						<li className={styles.footCenterLi}>О компании</li>
						<li className={styles.footCenterLi}>Каталог</li>
						<li className={styles.footCenterLi}>Доставка и оплата</li>
						<li className={styles.footCenterLi}>Новости и статьи</li>
						<li className={styles.footCenterLi}>Команда</li>
						<li className={styles.footCenterLi}>Наши дилеры</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.mainLi}`}>АДРЕС</li>
						<li className={styles.footCenterLi}>Мы в Москве:</li>
						<li className={styles.footCenterLi}>
							Огородный проезд, д. 5, стр. 2
						</li>
						<li className={styles.footCenterLi}>Телефон: </li>
						<li className={styles.footCenterLi}>+7 (499) 704-33-62</li>
						<li className={`${styles.footCenterLi} ${styles.noLi}`}>.</li>
						<li className={styles.footCenterLi}>Мы в Санкт-Петербурге</li>
						<li className={styles.footCenterLi}>Московский пр., 10-12</li>
						<li className={styles.footCenterLi}>Телефон: </li>
						<li className={styles.footCenterLi}>+7 (812) 389-44-14</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.mainLi}`}>
							МЫ В СЕТИ
						</li>
						<li className={styles.footCenterLi}>Одежда</li>
						<li className={styles.footCenterLi}>Ручки</li>
						<li className={styles.footCenterLi}>Ежедневники и блокноты</li>
						<li className={styles.footCenterLi}>Посуда</li>
					</ul>
				</div>

				{/* Footer Center Second Section */}
				<div className={`${styles.footCenter} ${styles.footCenterSec}`}>
					<ul className={styles.footCenterUl}>
						<li className={styles.footCenterLi}>Женские аксессуары</li>
						<li className={styles.footCenterLi}>Зонты</li>
						<li className={styles.footCenterLi}>Кухня и посуда</li>
						<li className={styles.footCenterLi}>Личные</li>
						<li className={styles.footCenterLi}>Мужские аксессуары</li>
						<li className={styles.footCenterLi}>Одежда</li>
						<li className={styles.footCenterLi}>Для офиса</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.noLi}`}>.</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={styles.footCenterLi}>Стать дилером</li>
						<li className={styles.footCenterLi}>Контакты</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.noLi}`}>.</li>
					</ul>
					<ul className={styles.footCenterUl}>
						<li className={`${styles.footCenterLi} ${styles.noLi}`}>.</li>
					</ul>
				</div>

				{/* Footer Bottom */}
				<div className={styles.footBottom}>
					<p className={styles.footBottomItem}>
						© 2023 Maldex. Все права защищены.
					</p>
					<div className={styles.footBottomItem}>
						<button className={styles.footButtonBtn}>
							ПРАВИЛА ИСПОЛЬЗОВАНИЯ МАТЕРИАЛОВ
						</button>
						<button className={styles.footButtonBtn}>
							ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ
						</button>
						<button className={styles.footButtonBtn}>НАПИСАТЬ СООБЩЕНИЕ</button>
					</div>
				</div>

				{/* Maldex Logo */}
				<img
					src="/Images/maldexMainLogo.svg"
					alt=""
					className={styles.maldexMainLogo}
				/>
			</footer>
		</div>
	);
};

export default Footer;
