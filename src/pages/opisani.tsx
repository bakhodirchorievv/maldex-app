import React from "react";
import styles from "../styles/Opisani.module.css";

const opisani = () => {
	const handleLiClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
		const opisaniLeftItems = document.querySelectorAll(
			`.${styles.opisaniLeftItem}`
		) as NodeListOf<HTMLLIElement>;

		opisaniLeftItems.forEach((item) => item.classList.remove(styles.focusOnLi));

		e.currentTarget.classList.add(styles.focusOnLi);
	};

	const handleLiArrow = () => {
		const innerUl = document.querySelector(
			`.${styles.innerUl}`
		) as HTMLUListElement;
		const liArrow = document.querySelector(
			`.${styles.innerUlArrow}`
		) as HTMLImageElement;

		if (innerUl.classList.contains(styles.getNone)) {
			innerUl.classList.remove(styles.getNone);
			liArrow.classList.add(styles.rotate180);
		} else {
			innerUl.classList.add(styles.getNone);
			liArrow.classList.remove(styles.rotate180);
		}
	};

	return (
		<div>
			<div className={styles.headerBottom}>
				<div className={styles.hBottomLeft}>
					<div className={styles.headMenu}>
						<img src="/Images/menu.svg" alt="" className={styles.headBurger} />
						Каталог
					</div>
					<img src="/Images/frame.svg" alt="" className={styles.headFrame} />
					<div className={styles.inputWrapper}>
						<p className={styles.poisk}>Поиск</p>
						<input
							type="text"
							className={styles.headinput}
							placeholder="(Например: термокружка)"
						/>
						<img
							className={styles.searchIcon}
							src="/Images/search.svg"
							alt=""
						/>
					</div>
				</div>

				<div className={styles.hBottomRight}>
					<div className={`${styles.relativeNum} ${styles.redNum}`}>
						new
						<p className={styles.absoluteNum}>243</p>
					</div>
					<div className={`${styles.relativeNum} ${styles.greenNum}`}>
						hits
						<p className={styles.absoluteNum}>237</p>
					</div>
				</div>
			</div>

			<div className={styles.borderBottom}></div>

			<div className={styles.bodyHead}>
				<div className={styles.bodyHeadItem}>
					<img
						src="/Images/arrow-left.svg"
						alt=""
						className={styles.arrowLeft}
					/>
				</div>
				<div className={styles.bodyHeadItem}>
					<p className={styles.bodyHeadInfo}>
						<span className={styles.redPercent}>30%</span> Cкидка при первом
						заказе! 🎉
					</p>
					<button className={styles.bodyHeadBtn}>ПОДРОБНЕЕ</button>
				</div>
				<div className={styles.bodyHeadItem}>
					<img
						src="/Images/arrow-right.svg"
						alt=""
						className={styles.arrowLeft}
					/>
				</div>
			</div>

			<p className={styles.justP}>
				Промо одежда / Портативные колонки / Беспроводная колонка Chubby /
				<span className={styles.lightRed}> Артикул 7557.30</span>
			</p>

			{/* body start */}
			<div className={styles.opisaniBody}>
				<div className={styles.opisaniLeft}>
					<h2 className={styles.opisaniTitle}>Категории</h2>

					<ul className={styles.opisaniLeftUl}>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Уф печать
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Гравировка
						</li>
						<li onClick={handleLiArrow} className={styles.opisaniLeftItem}>
							Печать по ткани
							<img
								onClick={handleLiArrow}
								src="/Images/opisaniArrow.svg"
								alt=""
								className={`${styles.rotate180} ${styles.innerUlArrow}`}
							/>
						</li>
						<ul className={styles.innerUl}>
							<li className={styles.innerUlItem}>Термотрансфер</li>
							<li className={styles.innerUlItem}>Шелкография</li>
							<li className={styles.innerUlItem}>ДТФ печать</li>
						</ul>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Тиснение
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Тиснение фольгой
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Деколь сублимация
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={`${styles.opisaniLeftItem} ${styles.focusOnLi}`}
						>
							Тампопечать
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Вышивка
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Шильды
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Шуберы попсокеты
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Дэйджи ленты
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Шелкография
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Наборы
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Упаковка
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Пакеты сумки
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Оформление
						</li>
						<li
							onClick={(e) => handleLiClick(e)}
							className={styles.opisaniLeftItem}
						>
							Наружная реклама
						</li>
					</ul>
				</div>
				<div className={styles.opisaniRight}>
					<h2 className={`${styles.opisaniTitle} ${styles.opisaniTitleRight}`}>
						Тампопечать
					</h2>

					<div className={styles.opisaniRightHead}>
						<h3
							className={`${styles.opisaniRightTitle} ${styles.focusOnTitle}`}
						>
							ОПИСАНИЕ
						</h3>
						<h3 className={styles.opisaniRightTitle}>ТЕХНИЧЕСКИЕ ТРЕБОВАНИЯ</h3>
						<div className={styles.underlineBorder}></div>
					</div>

					<div className={styles.opisaniImgWrap}>
						<img
							className={styles.opisaniMainImg}
							src="/Images/opisaniFirstImg.svg"
							alt=""
						/>
						<img
							className={`${styles.opisaniMainArrow} ${styles.opisaniLeftArrow}`}
							src="/Images/opisaniSecImg.svg"
							alt=""
						/>
						<img
							className={`${styles.opisaniMainArrow} ${styles.opisaniRightArrow}`}
							src="/Images/opisaniThirdImg.svg"
							alt=""
						/>
					</div>

					<div className={styles.opisaniRightBottom}>
						<p className={styles.descAfterImg}>
							Тампопечать — одна из самых популярных технологий нанесения
							изображения на промопродукцию и бизнес-подарки. Это вид глубокой
							печати, в процессе которой краска переносится с печатной формы на
							изделие с помощью специального тампона. Чаще всего метод
							используют для брендирования самых востребованных и массовых
							промоподарков с плоской или выпуклой поверхностью, но применяют и
							для печати на дорогих сувенирах из пластика, силикона и т.п.
						</p>

						<div className={styles.subPartsOfRight}>
							<h3 className={styles.rightSubtitles}>
								Преимущества тампопечати
							</h3>
							<p className={styles.firstSubPartDesc}>
								Тампопечать применяют для печати логотипа на сувенирную
								продукцию из пластика, дерева, металла, кожи, стекла и других
								материалов (лучше всего краска ложится на пластиковые и
								лакированные поверхности).
							</p>
							<p
								className={`${styles.firstSubPartDesc} ${styles.firstSubPartDescC}`}
							>
								Этот вид нанесения отлично подходит для тиражирования
								промо-продукции, т.к. сочетает в себе скорость, низкую
								себестоимость, отличное качество изображения и четкость линий, а
								самое главное - попадание в пантон.
							</p>
							<ul className={styles.rightSideUls}>
								<li className={styles.rightSideUlItem}>
									Стойкое нанесение (от 1 до 3-х лет)
								</li>
								<li className={styles.rightSideUlItem}>
									Точное воспроизведение мелких элементов изображения
								</li>
								<li className={styles.rightSideUlItem}>
									Возможность печати по криволинейным поверхностям
								</li>
								<li className={styles.rightSideUlItem}>
									Возможность печати по Pantone
								</li>
								<li className={styles.rightSideUlItem}>
									Низкая стоимость печати
								</li>
							</ul>
						</div>
						<div className={styles.subPartsOfRight}>
							<h3 className={styles.rightSubtitles}>Недостатки тампопечати</h3>
							<ul className={styles.rightSideUls}>
								<li className={styles.rightSideUlItem}>
									Сложность передачи градиента
								</li>
								<li className={styles.rightSideUlItem}>
									Относительно небольшой максимальный размер нанесения
								</li>
								<li className={styles.rightSideUlItem}>
									Тампопечать не подходит для печати изображения CMYK. Печать
									возможна только отдельными цветами.
								</li>
							</ul>
						</div>
						<div className={styles.subPartsOfRight}>
							<h3 className={styles.rightSubtitles}>
								Продукция, КОТОРАЯ ЛЕГКО БРЕНДИРУЮТСЯ С ПОМОЩЬЮ ТАМПОПЕЧАТИ
							</h3>
							<ul className={styles.rightSideUls}>
								<li className={styles.rightSideUlItem}>флешки</li>
								<li className={styles.rightSideUlItem}>кружки</li>
								<li className={styles.rightSideUlItem}>канцелярия</li>
								<li className={styles.rightSideUlItem}>карандаши и ручки</li>
								<li className={styles.rightSideUlItem}>
									брелоки, значки и магниты(пластиковые)
								</li>
								<li className={styles.rightSideUlItem}>зажигалки</li>
								<li className={styles.rightSideUlItem}>упаковки</li>
							</ul>
						</div>
						<div className={styles.subPartsOfRight}>
							<h3 className={styles.rightSubtitles}>Загрузка производства</h3>
							<div className={styles.lastRightPartWrap}>
								<div className={styles.lastRightPartItem}>
									<h3 className={styles.lastPartSubTitle}> 2-3 дня</h3>
									<p className={styles.lastPartDesc}>
										изготовление клише – если логотип имеет более 2-х цветов, то
										изготавливается 2 клише;
									</p>
								</div>
								<div className={styles.lastRightPartItem}>
									<h3 className={styles.lastPartSubTitle}>
										<span className={styles.innerPlus}>+</span> 2-5 дня
									</h3>
									<p className={styles.lastPartDesc}>
										перенос рисунка на изделие
									</p>
								</div>
								<div className={styles.lastRightPartItem}>
									<h3 className={styles.lastPartSubTitle}>
										<span className={styles.innerPlus}>+</span> 2-3 дня
									</h3>
									<p className={styles.lastPartDesc}>просушкаизделия</p>
								</div>
								<div className={styles.lastRightPartItem}>
									<h3 className={styles.lastPartSubTitle}>
										{" "}
										<span className={styles.innerEquality}>=</span> от 5-10 дней
									</h3>
									<p className={styles.lastPartDesc}>итого</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Bottom title */}
			<a href="#" className={styles.pageBottomTitle}>
				ХОЧУ ЗАДАТЬ ВОПРОС
			</a>
		</div>
	);
};

export default opisani;
