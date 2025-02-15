import React from "react";

import styles from "../styles/Portfolio.module.css";

const index = () => {
	return (
		<>
			<div className={styles.portfolioWrapper}>
				<div>
					<div className={styles.headerBottom}>
						<div className={styles.hBottomLeft}>
							<div className={styles.headMenu}>
								<img
									src="/Images/menu.svg"
									alt=""
									className={styles.headBurger}
								/>
								Каталог
							</div>
							<img
								src="/Images/frame.svg"
								alt=""
								className={styles.headFrame}
							/>
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

					{/* first part */}
					<div className={styles.firstPart}>
						<div className={styles.firstPartLeft}>
							<div className={styles.leftLeftPart}>
								<img
									src="/Images/firstBodyImg.svg"
									alt=""
									className={styles.leftLeftImg}
								/>
							</div>
							<div className={styles.leftRightPart}>
								<div
									className={`${styles.leftRightItem} ${styles.leftRightRelative}`}
								>
									<img
										src="/Images/waterBottle1.svg"
										alt=""
										className={styles.leftRightImg}
									/>
									<img
										src="/Images/arrowBottom.svg"
										alt=""
										className={styles.arrowBottom}
									/>
									<p className={styles.enterToCatalog}>Перейти в каталог</p>
								</div>
								<div className={styles.leftRightItem}>
									<img
										src="/Images/book.png"
										alt=""
										className={styles.leftRightImg}
									/>
								</div>
							</div>
						</div>

						<div className={styles.firstPartRight}>
							<div className={styles.rightLeftPart}>
								<h2 className={styles.rightPartTitle}>скачать презентацию</h2>
								<div className={styles.rightBtns}>
									<button className={styles.rightBtn}>ЗАКАЗАТЬ</button>
									<button className={styles.rightBtn}>СКАЧАТЬ</button>
								</div>
							</div>
							<div className={styles.rightRightPart}>
								<img
									src="/Images/magazine.svg"
									alt=""
									className={styles.rightRightImg}
								/>
							</div>
						</div>
					</div>

					{/* second part */}
					<div className={`${styles.firstPart} ${styles.firstPartSec}`}>
						<div
							className={`${styles.firstPartRight} ${styles.firstPartRightSec}`}
						>
							<div
								className={`${styles.rightLeftPart} ${styles.rightLeftPartSec}`}
							>
								<h2 className={styles.rightPartTitle}>
									давайте займемся подарками!
								</h2>
								<div className={styles.rightBtns}>
									<button className={styles.rightBtn}>ПОДРОБНЕЕ</button>
									<button className={styles.rightBtn}>СКАЧАТЬ</button>
								</div>
							</div>
							<div className={styles.rightRightPart}>
								<img
									src="/Images/waterBottle2.png"
									alt=""
									className={styles.rightRightImg}
								/>
							</div>

							<div className={styles.lines}>
								<div className={`${styles.line} ${styles.darkWhite}`}></div>
								<div className={styles.line}></div>
								<div className={styles.line}></div>
								<div className={styles.line}></div>
							</div>
						</div>

						<div
							className={`${styles.firstPartLeft} ${styles.firstPartLeftSec}`}
						>
							<div className={styles.leftLeftPart}>
								<img
									src="/Images/waterBottle3.svg"
									alt=""
									className={styles.leftLeftImg}
								/>
							</div>
							<div
								className={`${styles.leftRightPart} ${styles.leftRightPartSec}`}
							>
								<div
									className={`${styles.leftRightItem} ${styles.leftRightItemSec} ${styles.leftRightRelative}`}
								>
									<img
										src="/Images/camera.png"
										alt=""
										className={styles.leftRightImg}
									/>
								</div>
								<div
									className={`${styles.leftRightItem} ${styles.leftRightItemSec}`}
								>
									<img
										src="/Images/cap.png"
										alt=""
										className={styles.leftRightImg}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* third part */}
					<div className={styles.thirdPart}>
						<h2 className={styles.thirdPartTitle}>Кто мы?</h2>
						<h3 className={styles.thirdPartSubTitle}>
							Позвольте нам представить себя:
						</h3>

						<ul className={styles.thirdPartUl}>
							<li className={styles.thirdPartLi}>
								Maldex – это комплексный сервис по производству сувенирной
								продукции.
								<span className={styles.blockSpan1}>
									С нашей помощью компании смогут расширить клиентскую базу,
									повысить лояльность аудитории.
								</span>
							</li>
							<li className={styles.thirdPartLi}>
								Наша команда берет на себя весь спектр задач по ведению сделки.
								<span className={styles.blockSpan1}>
									Мы изготовим, забрендируем и доставим ваш бизнес-сувенир.
								</span>
							</li>
							<li className={styles.thirdPartLi}>
								У Вас есть идеи собственных сувениров? – Прекрасно!
								<span className={styles.blockSpan1}>
									С нашей помощью вы можете изготовить любой сувенир по
									индивидуальному дизайну.
								</span>
							</li>
							<li className={styles.thirdPartLi}>
								{"Бизнес-сувениры"} из России, Европы, Америки и Китая. Более{" "}
								<span className={styles.bolder}>1 000 000</span> подарков со
								всего мира.
							</li>
							<li className={styles.thirdPartLi}>
								Maldex – производи правильное впечатление!
							</li>
						</ul>
					</div>
				</div>

				{/* Fourth part */}
				<div className={styles.fourthPart}>
					<h2 className={styles.fourthPartTitle}>
						Почему мы?{" "}
						<span className={styles.blueColor}>Всё под 1 крышей!</span>
					</h2>

					<div className={styles.fourthBody}>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthFirst.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.firstBlue}`}>
									Брендинг
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Тампопечать
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Вышивка
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Шелкография
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Гравировка
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Деколь
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Термотрансфер
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Уф печать
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Сублимация
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Цифровая печать
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Прямая печать на ткани DTG
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthSecond.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.purple}`}>
									Складирование
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.Markerpurple}`}
									>
										Управление запасами
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.Markerpurple}`}
									>
										Сокращение складских затрат для наших клиентов
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.Markerpurple}`}
									>
										Управление складской инвентаризацией (ушло/пришло)
									</li>
								</ul>
							</div>

							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthFifth.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3
									className={`${styles.fourthSubTitle} ${styles.lightGreen} ${styles.noMarginTop}`}
								>
									Логистика
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerlightGreen}`}
									>
										Фирменная упаковка
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerlightGreen}`}
									>
										Бесплатная доставка
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthThird.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.yellow}`}>
									Сувениры со всего мира
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.Markeryellow}`}
									>
										Более 1 000 000 наименований
									</li>
								</ul>

								<div className={styles.countriesFlag}>
									<div className={styles.country}>
										<img
											src="/Images/russia.svg"
											alt=""
											className={styles.countryFlag}
										/>
										<h4 className={styles.countryName}>Россия</h4>
									</div>
									<div className={styles.country}>
										<img
											src="/Images/china.svg"
											alt=""
											className={styles.countryFlag}
										/>
										<h4 className={styles.countryName}>Китай</h4>
									</div>
									<div className={styles.country}>
										<img
											src="/Images/usa.svg"
											alt=""
											className={styles.countryFlag}
										/>
										<h4 className={styles.countryName}>Америка</h4>
									</div>
									<div className={styles.country}>
										<img
											src="/Images/europa.svg"
											alt=""
											className={styles.countryFlag}
										/>
										<h4 className={styles.countryName}>Европа</h4>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthFourth.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.red}`}>
									Дизайн макеты бесплатно
								</h3>
							</div>

							<div className={`${styles.innerWrapper} ${styles.flex}`}>
								<img
									src="/Images/fourthSixth.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<span
									className={`${styles.fourthSubTitle} ${styles.secondBlue}`}
								>
									лет на рынке
								</span>
							</div>
						</div>
					</div>

					<h2 className={styles.fourthPartTitle}>
						<span className={styles.blueColor}>С заботой о клиентах</span>
					</h2>

					<div className={styles.fourthBody}>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthSeventh.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.lightGreen}`}>
									Сборные заказы (gifts case)
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerlightGreen}`}
									>
										Разработка для вас индивидуальных кейсов/подарочных наборов
									</li>
								</ul>
							</div>

							<div className={`${styles.innerWrapper} ${styles.mt40}`}>
								<img
									src="/Images/fourthEleven.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.purple}`}>
									При заказе от 50 000 рублей
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.Markerpurple}`}
									>
										10% от стоимости заказа в подарок!
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.Markerpurple}`}
									>
										Подарок из каталога на сумму 5000 рублей
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthEighth.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.yellow}`}>
									Персональный менеджер
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.Markeryellow}`}
									>
										Фирменная упаковка
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.Markeryellow}`}
									>
										Бесплатная доставка
									</li>
								</ul>
							</div>
							<div className={`${styles.innerWrapper} ${styles.mt40}`}>
								<img
									src="/Images/fourthTwelve.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.firstBlue}`}>
									Персональный менеджер
								</h3>
								<ul className={styles.fourthPartUl}>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Фирменная упаковка
									</li>
									<li
										className={`${styles.fourthPartLi} ${styles.MarkerfirstBlue}`}
									>
										Бесплатная доставка
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.fourthBodyItem}>
							<div className={styles.innerWrapper}>
								<img
									src="/Images/fourthNineth.svg"
									alt=""
									className={styles.fourthImg}
								/>
								<h3 className={`${styles.fourthSubTitle} ${styles.red}`}>
									Индивидуальные заказы в Китае
								</h3>
								<ul className={styles.fourthPartUl}>
									<li className={`${styles.fourthPartLi} ${styles.Markerred}`}>
										Поможем воплотить любую идею
									</li>
									<li className={`${styles.fourthPartLi} ${styles.Markerred}`}>
										Разработка макета
									</li>
									<li className={`${styles.fourthPartLi} ${styles.Markerred}`}>
										Быстро найдем фабрику
									</li>
									<li className={`${styles.fourthPartLi} ${styles.Markerred}`}>
										Согласуем образец
									</li>
									<li className={`${styles.fourthPartLi} ${styles.Markerred}`}>
										Доставим удобным вам способом
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* Fifth part */}
				<div className={styles.fifthPart}>
					<h2 className={styles.fifthPartTitle}>
						Вы будете в <span className={styles.bolder}>БОЛЬШОЙ</span> компании
						друзей
					</h2>
					<div className={styles.fifthBody}>
						<img
							src="/Images/fullImg.svg"
							alt=""
							className={styles.fifthPartImg}
						/>
					</div>
				</div>
				{/* Sixth part */}
				<div className={styles.sixthPart}>
					<h2 className={styles.sixthPartTitle}>
						С <span className={styles.bolder}>Maldex</span> просто как{" "}
						<span className={styles.red}>раз</span>{" "}
						<span className={styles.yellow}>два</span>{" "}
						<span className={styles.lightGreen}>три</span>
					</h2>

					<div className={styles.bottomHead}>
						<div className={styles.bottomHeadItem}>
							<div className={styles.bottomHItemLeft}>
								<img
									src="/Images/bottomHead1.png"
									alt=""
									className={styles.bottomHeadImg}
								/>
							</div>
							<div className={styles.bottomHItemRight}>
								<p className={`${styles.bottomHeadInfo} ${styles.red}`}>
									Оставьте заявку по телефону
								</p>
								<a href="tel:88007775919" className={styles.phoneNumber}>
									8 (800) 777-59-19
								</a>
								<p className={styles.anotherOption}>
									либо оформите заказ на сайте
								</p>
							</div>

							<img
								src="/Images/arrowLineTop.svg"
								alt=""
								className={styles.arrowLineTop}
							/>
						</div>
						<div className={styles.bottomHeadItem}>
							<div className={styles.bottomHItemLeft}>
								<img
									src="/Images/bottomHead2.png"
									alt=""
									className={styles.bottomHeadImg}
								/>
							</div>
							<div className={styles.bottomHItemRight}>
								<p className={`${styles.bottomHeadInfo} ${styles.yellow}`}>
									Подтвердите заказ у менеджера
								</p>
							</div>

							<img
								src="/Images/arrowLineBottom.svg"
								alt=""
								className={styles.arrowLineBottom}
							/>
						</div>
						<div className={styles.bottomHeadItem}>
							<div className={styles.bottomHItemLeft}>
								<img
									src="/Images/bottomHead3.png"
									alt=""
									className={styles.bottomHeadImg}
								/>
							</div>
							<div className={styles.bottomHItemRight}>
								<p className={`${styles.bottomHeadInfo} ${styles.lightGreen}`}>
									Получите товар курьерской доставкой
								</p>
								<p className={styles.anotherOption}>
									или в нашем офисе: Варшавское шоссе 35
								</p>
							</div>
						</div>
					</div>

					<div className={styles.sixthBody}>
						<div className={styles.sixthBodyHead}>
							<div className={`${styles.sixthBodyHeadItem} ${styles.width60}`}>
								<h3 className={styles.sixthBodyTitle}>Сувенирная продукция</h3>
								<p className={styles.sixthBodyDesc}>
									Каталог «от ручки до ракеты» «от промо до VIP»
								</p>
								<p className={styles.sixthBodyDesc}>
									Более <span className={styles.bolder}>1 000 000</span> бизнес
									сувениров со всего мира
								</p>

								<img
									src="/Images/bottom1.svg"
									alt=""
									className={`${styles.sixthFirstImg} ${styles.bottomRealImg}`}
								/>
							</div>
							<div className={`${styles.sixthBodyHeadItem} ${styles.width40}`}>
								<img
									src="/Images/bottom2.svg"
									alt=""
									className={`${styles.sixthSecondImg} ${styles.bottomRealImg}`}
								/>
								<div className={styles.thirdAndFourth}>
									<img
										src="/Images/bottom3.svg"
										alt=""
										className={`${styles.tShirtImg} ${styles.bottomRealImg}`}
									/>
									<img
										src="/Images/bottom4real.svg"
										alt=""
										className={`${styles.tShirtImg} ${styles.bottomRealImg}`}
									/>
								</div>
							</div>
							<div className={`${styles.sixthBodyHeadItem} ${styles.width40}`}>
								<img
									src="/Images/bottom4.svg"
									alt=""
									className={`${styles.sixthFifthImg} ${styles.bottomRealImg}`}
								/>
							</div>
						</div>

						<div className={styles.sixthBodyCenter}>
							<div
								className={`${styles.sixthCenterItem} ${styles.smallImgWrap}`}
							>
								<img
									src="Images/realSmallImg.png"
									alt=""
									className={`${styles.sixthCenterImg} ${styles.smallImg}`}
								/>
							</div>
							<div className={styles.sixthCenterItem}>
								<img
									src="Images/bottom6.svg"
									alt=""
									className={styles.sixthCenterImg}
								/>
							</div>
							<div className={styles.sixthCenterItem}>
								<img
									src="Images/bottom7.svg"
									alt=""
									className={styles.sixthCenterImg}
								/>
							</div>
						</div>

						<div className={styles.sixthFoot}>
							<div className={styles.sixthFootItem}>
								<img
									src="/Images/bottom8.svg"
									alt=""
									className={`${styles.sixthFootImg} ${styles.height100}`}
								/>
							</div>
							<div className={`${styles.sixthFootItem} ${styles.displayFlex}`}>
								<img
									src="/Images/bottom9.svg"
									alt=""
									className={styles.sixthFootImg}
								/>
								<img
									src="/Images/bottom10.svg"
									alt=""
									className={styles.sixthFootImg}
								/>
							</div>
							<div className={styles.sixthFootItem}>
								<img
									src="/Images/bottom11.svg"
									alt=""
									className={`${styles.sixthFootImg} ${styles.height100}`}
								/>
							</div>
							<div className={`${styles.sixthFootItem} ${styles.displayFlex}`}>
								<img
									src="/Images/bottom12.svg"
									alt=""
									className={styles.sixthFootImg}
								/>
								<img
									src="/Images/bottom13.svg"
									alt=""
									className={styles.sixthFootImg}
								/>
							</div>
						</div>
					</div>
				</div>
				{/* Bottom title */}
				<a href="#" className={styles.pageBottomTitle}>
					ХОЧУ ЗАДАТЬ ВОПРОС
				</a>
			</div>
		</>
	);
};

export default index;
