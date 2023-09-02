import React from "react";
import "./Home.css";
import Product from "../Products/Product";
// import { getSwitchBaseUtilityClass } from "@mui/material/internal/switchBaseClasses";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt="banner"
				/>
				<div className="home__row">
					<Product
						id="12321341"
						title="The Lean Startup: How Constant innovation Creates Radically successful Businesses Paperback"
						price={11.96}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
						alt=""
					/>
					<Product
						id="49538094"
						title="Kenwood kMix stand Mixer for Baking, Stylish kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
						price={239.0}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="PRETTYGARDEN Women's Sexy Mini Bodycon Dresses Long Sleeve Square Neck Thigh Slit Tight Fitted Dress"
						price={34.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/71YgnvZP7XL._AC_UY500_.jpg"
						alt=""
					/>
					<Product
						id="23445930"
						title="Montana West Quilted Purses for Women Chunky Chain Shoulder Bags"
						price={32.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81QK9uyGQsL._AC_UY500_.jpg"
						alt=""
					/>
					<Product
						id="3254354345"
						title="The Drop Women's Pattie Block-Heeled Mule Sandal"
						price={49.90}
						rating={4}
						image="https://m.media-amazon.com/images/I/713flKWUXTL._AC_UX500_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="Samsung LC49RG90ssUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
						alt=""
					/>
					<Product
						id="23445930"
						title="Amazon Echo (3rd generation) | smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={3}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
						alt=""
					/>
					<Product
						id="3254354345"
						title="New Apple iPad pro (12.9-inch, wi-Fi, 128GB) - Silver (4th Generation)"
						price={598.99}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
						alt=""
					/>
				</div>

				<div className="home__row">
					<Product
						id="1658965"
						title="Ailun Glass Screen Protector Compatible for iPhone 11/iPhone XR, 6.1 Inch 3 Pack Tempered Glass"
						price={12.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81MZ5D1wHpL._AC_UL480_QL65_.jpg"
					/>
					<Product
						id="98465165"
						title="Roku Streaming Stick 4K 2021 | Streaming Device 4K/HDR/Dolby Vision with Roku Voice Remote and TV Controls"
						price={62.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/71wrIZujPIL._AC_UL480_QL65_.jpg"
					/>
					<Product
						id="1984610"
						title="Nintendo Switch – OLED Model w/ White Joy-Con"
						price={158.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/51YLbkYOhlL._AC_UL480_QL65_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved  LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 X 1440"
						price={1094.98}
						rating={4}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;



// <span class="a-price-whole">
// 	49<span class="a-price-decimal">.</span>
// </span>;
// <span class="a-price-decimal">.</span>;
// <span class="a-price-fraction">90</span>;