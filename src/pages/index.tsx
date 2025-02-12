import Head from "next/head";
import React from "react";

const index = () => {
	return (
		<>
			<Head>
				<link rel="stylesheet" href="/styles/Portfolio/Portfolio.css" />
			</Head>
			<div className="portfolioWrapper">
				<div className="headerBottom">
					<div className="hBottomLeft">
						<div className="headMenu">
							<img src="/Images/menu.svg" alt="" className="headBurger" />
							Каталог
						</div>
						<img src="/Images/frame.svg" alt="" className="headFrame" />
						<div className="inputWrapper">
							<p className="poisk">Поиск</p>
							<input
								type="text"
								className="headinput"
								placeholder="(Например: термокружка)"
							/>
							<img className="searchIcon" src="/Images/search.svg" alt="" />
						</div>
					</div>

					<div className="hBottomRight">
						<div className="relativeNum redNum">
							new
							<p className="absoluteNum">243</p>
						</div>
						<div className="relativeNum greenNum">
							hits
							<p className="absoluteNum">237</p>
						</div>
					</div>
				</div>

				<div className="borderBottom"></div>

				{/* real body start here */}
				<div className="bodyHead">
					<div className="bodyHeadItem">
						<img src="/Images/arrow-left.svg" alt="" className="arrowLeft" />
					</div>
					<div className="bodyHeadItem">
						<p className="bodyHeadInfo">
							<span className="redPercent">30%</span> Cкидка при первом заказе!
							🎉
						</p>
						<button className="bodyHeadBtn">ПОДРОБНЕЕ</button>
					</div>
					<div className="bodyHeadItem">
						<img src="/Images/arrow-right.svg" alt="" className="arrowLeft" />
					</div>
				</div>

				<p className="justP">
					Промо одежда / Портативные колонки / Беспроводная колонка Chubby /{" "}
					<span className="lightRed">Артикул 7557.30</span>
				</p>

				{/* first part */}
				<div className="firstPart">
					<div className="firstPartLeft">
						<div className="leftLeftPart">
							<img
								src="/Images/firstBodyImg.svg"
								alt=""
								className="leftLeftImg"
							/>
						</div>
						<div className="leftRightPart">
							<div className="leftRightItem leftRightRelative">
								<img
									src="/Images/waterBottle1.svg"
									alt=""
									className="leftRightImg"
								/>
								<img
									src="/Images/arrowBottom.svg"
									alt=""
									className="arrowBottom"
								/>
								<p className="enterToCatalog">Перейти в каталог</p>
							</div>
							<div className="leftRightItem">
								<img src="/Images/book.png" alt="" className="leftRightImg" />
							</div>
						</div>
					</div>

					<div className="firstPartRight">
						<div className="rightLeftPart">
							<h2 className="rightPartTitle">скачать презентацию</h2>
							<div className="rightBtns">
								<button className="rightBtn">ЗАКАЗАТЬ</button>
								<button className="rightBtn">СКАЧАТЬ</button>
							</div>
						</div>
						<div className="rightRightPart">
							<img
								src="/Images/magazine.svg"
								alt=""
								className="rightRightImg"
							/>
						</div>
					</div>
				</div>

				{/* second part */}
				<div className="firstPart firstPartSec">
					<div className="firstPartRight firstPartRightSec">
						<div className="rightLeftPart rightLeftPartSec">
							<h2 className="rightPartTitle">давайте займемся подарками!</h2>
							<div className="rightBtns">
								<button className="rightBtn">ПОДРОБНЕЕ</button>
								<button className="rightBtn">СКАЧАТЬ</button>
							</div>
						</div>
						<div className="rightRightPart">
							<img
								src="/Images/waterBottle2.png"
								alt=""
								className="rightRightImg"
							/>
						</div>

						<div className="lines">
							<div className="line darkWhite"></div>
							<div className="line"></div>
							<div className="line"></div>
							<div className="line"></div>
						</div>
					</div>

					<div className="firstPartLeft firstPartLeftSec">
						<div className="leftLeftPart">
							<img
								src="/Images/waterBottle3.svg"
								alt=""
								className="leftLeftImg"
							/>
						</div>
						<div className="leftRightPart leftRightPartSec">
							<div className="leftRightItem leftRightItemSec leftRightRelative">
								<img src="/Images/camera.png" alt="" className="leftRightImg" />
							</div>
							<div className="leftRightItem leftRightItemSec">
								<img src="/Images/cap.png" alt="" className="leftRightImg" />
							</div>
						</div>
					</div>
				</div>

				{/* third part */}
				<div className="thirdPart">
					<h2 className="thirdPartTitle">Кто мы?</h2>
					<h3 className="thirdPartSubTitle">Позвольте нам представить себя:</h3>

					<ul className="thirdPartUl">
						<li className="thirdPartLi">
							Maldex – это комплексный сервис по производству сувенирной
							продукции для российских и международных компаний.{" "}
							<span className="blockSpan1">
								С нашей помощью компании смогут расширить клиентскую базу,
								повысить лояльность аудитории, укрепить позиции на рынке.
							</span>
						</li>
						<li className="thirdPartLi">
							Наша команда берет на себя весь спектр задач по ведению сделки,
							Вам нужно предоставить лишь логотип для нанесения.{" "}
							<span className="blockSpan1">
								Мы изготовим, забрендируем и доставим ваш бизнес сувенир.
							</span>
						</li>
						<li className="thirdPartLi">
							У Вас есть идеи собственных сувениров? – Прекрасно!{" "}
							<span className="blockSpan1">
								С нашей помощью вы можете изготовить любой сувенир по
								индивидуальному дизайну.
							</span>
						</li>
						<li className="thirdPartLi">
							{"Бизнес-сувениры"} из России, Европы, Америки и Китая. Более{" "}
							<span className="bolder">1 000 000</span> подарков со всего мира.
							<span className="blockSpan1">
								Нам есть что вам предложить! / Нам есть чем вас удивить?
							</span>
						</li>
						<li className="thirdPartLi">
							Maldex – производи правильное впечатление!
						</li>
					</ul>
				</div>

				{/* fourth part */}
				<div className="fourthPart">
					<h2 className="fourthPartTitle">
						Почему мы? <span className="blueColor">Всё под 1 крышей!</span>
					</h2>

					<div className="fourthBody">
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthFirst.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle firstBlue">Брендинг</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi MarkerfirstBlue">Тампопечать</li>
									<li className="fourthPartLi MarkerfirstBlue">Вышивка</li>
									<li className="fourthPartLi MarkerfirstBlue">Шелкография</li>
									<li className="fourthPartLi MarkerfirstBlue">Гравировка</li>
									<li className="fourthPartLi MarkerfirstBlue">Деколь</li>
									<li className="fourthPartLi MarkerfirstBlue">
										Термотрансфер
									</li>
									<li className="fourthPartLi MarkerfirstBlue">Уф печать</li>
									<li className="fourthPartLi MarkerfirstBlue">Сублимация</li>
									<li className="fourthPartLi MarkerfirstBlue">
										Цифровая печать
									</li>
									<li className="fourthPartLi MarkerfirstBlue">
										Прямая печать на ткани DTG
									</li>
								</ul>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthSecond.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle purple">Складирование</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi Markerpurple">
										Управление запасами
									</li>
									<li className="fourthPartLi Markerpurple">
										Сокращение складских затрат для наших клиентов
									</li>
									<li className="fourthPartLi Markerpurple">
										Управление складской инвентаризацией (ушло/пришло)
									</li>
								</ul>
							</div>

							<div className="innerWrapper">
								<img
									src="/Images/fourthFifth.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle lightGreen noMarginTop">
									Логистика
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi MarkerlightGreen">
										Фирменная упаковка
									</li>
									<li className="fourthPartLi MarkerlightGreen">
										Бесплатная доставка
									</li>
								</ul>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthThird.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle yellow">
									Сувениры со всего мира
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi Markeryellow">
										Более 1 000 000 наименований
									</li>
								</ul>

								<div className="countriesFlag">
									<div className="country">
										<img
											src="/Images/russia.svg"
											alt=""
											className="countryFlag"
										/>
										<h4 className="countryName">Россия</h4>
									</div>
									<div className="country">
										<img
											src="/Images/china.svg"
											alt=""
											className="countryFlag"
										/>
										<h4 className="countryName">Китай</h4>
									</div>
									<div className="country">
										<img src="/Images/usa.svg" alt="" className="countryFlag" />
										<h4 className="countryName">Америка</h4>
									</div>
									<div className="country">
										<img
											src="/Images/europa.svg"
											alt=""
											className="countryFlag"
										/>
										<h4 className="countryName">Европа</h4>
									</div>
								</div>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthFourth.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle red">Дизайн макеты бесплатно</h3>
							</div>

							<div className="innerWrapper flex">
								<img
									src="/Images/fourthSixth.svg"
									alt=""
									className="fourthImg"
								/>
								<span className="fourthSubTitle secondBlue">лет на рынке</span>
							</div>
						</div>
					</div>

					<h2 className="fourthPartTitle">
						<span className="blueColor">С заботой о клиентах</span>
					</h2>

					<div className="fourthBody">
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthSeventh.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle lightGreen">
									Сборные заказы (gifts case)
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi MarkerlightGreen">
										Разработка для вас индивидуальных кейсов/подарочных наборов
									</li>
								</ul>
							</div>

							<div className="innerWrapper mt-40">
								<img
									src="/Images/fourthEleven.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle purple">
									При заказе от 50 000 рублей
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi Markerpurple">
										10% от стоимости заказа в подарок!
									</li>
									<li className="fourthPartLi Markerpurple">
										Подарок из каталога на сумму 5000 рублей
									</li>
								</ul>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthEighth.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle yellow">Персональный менеджер</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi Markeryellow">
										Фирменная упаковка
									</li>
									<li className="fourthPartLi Markeryellow">
										Бесплатная доставка
									</li>
								</ul>
							</div>
							<div className="innerWrapper mt-40">
								<img
									src="/Images/fourthTwelve.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle firstBlue">
									Персональный менеджер
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi MarkerfirstBlue">
										Фирменная упаковка
									</li>
									<li className="fourthPartLi MarkerfirstBlue">
										Бесплатная доставка
									</li>
								</ul>
							</div>
						</div>
						<div className="fourthBodyItem">
							<div className="innerWrapper">
								<img
									src="/Images/fourthNineth.svg"
									alt=""
									className="fourthImg"
								/>
								<h3 className="fourthSubTitle red">
									Индивидуальные заказы в Китае
								</h3>
								<ul className="fourthPartUl">
									<li className="fourthPartLi Markerred">
										Поможем воплотить любую идею
									</li>
									<li className="fourthPartLi Markerred">Разработка макета</li>
									<li className="fourthPartLi Markerred">
										Быстро найдем фабрику
									</li>
									<li className="fourthPartLi Markerred">Согласуем образец</li>
									<li className="fourthPartLi Markerred">
										Доставим удобным вам способом
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* fifth part */}
				<div className="fifthPart">
					<h2 className="fifthPartTitle">
						Вы будете в <span className="bolder">БОЛЬШОЙ</span> компании друзей
					</h2>
					<div className="fifthBody">
						<img src="/Images/fullImg.svg" alt="" className="fifthPartImg" />
					</div>
				</div>

				{/* sixth part */}
				<div className="sixthPart">
					<h2 className="sixthPartTitle fifthPartTitle">
						С <span className="bolder">Maldex</span> просто как{" "}
						<span className="red">раз</span> <span className="yellow">два</span>{" "}
						<span className="lightGreen">три</span>
					</h2>

					<div className="bottomHead">
						<div className="bottomHeadItem">
							<div className="bottomHItemLeft">
								<img
									src="/Images/bottomHead1.png"
									alt=""
									className="bottomHeadImg"
								/>
							</div>
							<div className="bottomHItemRight">
								<p className="bottomHeadInfo red">
									Оставьте заявку по телефону
								</p>
								<a href="tel:88007775919" className="phoneNumber">
									8 (800) 777-59-19
								</a>
								<p className="anotherOption">либо оформите заказ на сайте</p>
							</div>

							<img
								src="/Images/arrowLineTop.svg"
								alt=""
								className="arrowLineTop"
							/>
						</div>
						<div className="bottomHeadItem">
							<div className="bottomHItemLeft">
								<img
									src="/Images/bottomHead2.png"
									alt=""
									className="bottomHeadImg"
								/>
							</div>
							<div className="bottomHItemRight">
								<p className="bottomHeadInfo yellow">
									Подтвердите заказ у менеджера
								</p>
							</div>

							<img
								src="/Images/arrowLineBottom.svg"
								alt=""
								className="arrowLineBottom"
							/>
						</div>
						<div className="bottomHeadItem">
							<div className="bottomHItemLeft">
								<img
									src="/Images/bottomHead3.png"
									alt=""
									className="bottomHeadImg"
								/>
							</div>
							<div className="bottomHItemRight">
								<p className="bottomHeadInfo lightGreen">
									Получите товар курьерской доставкой
								</p>
								<p className="anotherOption">
									или в нашем офисе: Варшавское шоссе 35
								</p>
							</div>
						</div>
					</div>

					<div className="sixthBody">
						<div className="sixthBodyHead">
							<div className="sixthBodyHeadItem width60">
								<h3 className="sixthBodyTitle fifthPartTitle">
									Сувенирная продукция
								</h3>
								<p className="sixthBodyDesc">
									Каталог «от ручки до ракеты» «от промо до VIP»
								</p>
								<p className="sixthBodyDesc">
									Более <span className="bolder">1 000 000</span> бизнес
									сувениров со всего мира
								</p>

								<img
									src="/Images/bottom1.svg"
									alt=""
									className="sixthFirstImg bottomRealImg"
								/>
							</div>
							<div className="sixthBodyHeadItem width40">
								<img
									src="/Images/bottom2.svg"
									alt=""
									className="sixthSecondImg bottomRealImg"
								/>
								<div className="thirdAndFourth">
									<img
										src="/Images/bottom3.svg"
										alt=""
										className="tShirtImg bottomRealImg"
									/>
									<img
										src="/Images/bottom4real.svg"
										alt=""
										className="tShirtImg bottomRealImg"
									/>
								</div>
							</div>
							<div className="sixthBodyHeadItem width40">
								<img
									src="/Images/bottom4.svg"
									alt=""
									className="sixthFifthImg bottomRealImg"
								/>
							</div>
						</div>

						<div className="sixthBodyCenter">
							<div className="sixthCenterItem smallImgWrap">
								<img
									src="Images/realSmallImg.png"
									alt=""
									className="sixthCenterImg smallImg"
								/>
							</div>
							<div className="sixthCenterItem">
								<img
									src="Images/bottom6.svg"
									alt=""
									className="sixthCenterImg"
								/>
							</div>
							<div className="sixthCenterItem">
								<img
									src="Images/bottom7.svg"
									alt=""
									className="sixthCenterImg"
								/>
							</div>
						</div>

						<div className="sixthFoot">
							<div className="sixthFootItem">
								<img
									src="/Images/bottom8.svg"
									alt=""
									className="sixthFootImg height100"
								/>
							</div>
							<div className="sixthFootItem displayFlex">
								<img
									src="/Images/bottom9.svg"
									alt=""
									className="sixthFootImg"
								/>
								<img
									src="/Images/bottom10.svg"
									alt=""
									className="sixthFootImg"
								/>
							</div>
							<div className="sixthFootItem">
								<img
									src="/Images/bottom11.svg"
									alt=""
									className="sixthFootImg height100"
								/>
							</div>
							<div className="sixthFootItem displayFlex">
								<img
									src="/Images/bottom12.svg"
									alt=""
									className="sixthFootImg"
								/>
								<img
									src="/Images/bottom13.svg"
									alt=""
									className="sixthFootImg"
								/>
							</div>
						</div>
					</div>
				</div>

				{/* bottom title */}
				<a href="#" className="pageBottomTitle">
					ХОЧУ ЗАДАТЬ ВОПРОС
				</a>
			</div>
		</>
	);
};

export default index;
