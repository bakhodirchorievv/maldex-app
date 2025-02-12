import Head from "next/head";
import React from "react";
// import "./Header.css";

const Header = () => {
	return (
		<div>
			<Head>
				<link rel="stylesheet" href="/styles/Header.css" />
			</Head>
			<header className="header">
				<div className="headerTop">
					<div className="headTopItem">
						<div>
							<img src="/Images/MaldexLogo.svg" alt="" />
						</div>
						<div className="hInnerItem">
							<img src="/Images/phoneM.svg" alt="" />
							<a href="tel:88003336784" className="hInnerInfo">
								8-800-333-6784
							</a>
						</div>
						<div className="hInnerItem">
							<img src="/Images/mail.svg" alt="" />
							<a href="mailto:info@maldex.ru" className="hInnerInfo">
								info@maldex.ru
							</a>
						</div>
						<div className="hInnerItem">
							<img src="/Images/location.svg" alt="" />
							<a
								href="https://www.google.com/maps?q=Москва"
								className="hInnerInfo"
								target="_blank"
								rel="noopener noreferrer"
							>
								Москва
							</a>
						</div>
					</div>
					<div className="headTopItem">
						<p className="headTopInfo">
							Минимальная сумма заказа от 30 тыс рублей
						</p>
					</div>
					<div className="headTopItem">
						<p className="hInnerInfo">Доставка</p>
						<p className="hInnerInfo">Оплата</p>
						<p className="hInnerInfo">Контакты</p>
						<div>
							<img src="/Images/heart.svg" alt="" className="heartImg" />
						</div>
						<div className="headPriceWrap">
							<div className="numberThree">3</div>
							<p className="headprice">14 619,00 ₽ </p>
						</div>
					</div>
				</div>

				<div className="borderBottom"></div>
			</header>
		</div>
	);
};

export default Header;
