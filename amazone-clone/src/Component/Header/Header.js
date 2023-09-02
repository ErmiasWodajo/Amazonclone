import React from "react";
import "./Header.css";

import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../../Firebase";

function Header() {
	// hookstate or function to obtain data from datalayer
	const [{ basket, user }, dispatch] = useStateValue();
	// function for signout on click
	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};

	return (
		<div className="header">
			{/* to make the image clickable  */}
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
					alt="Amazon_logo"
				/>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" />
				<SearchIcon className="header__searchIcon" />
			</div>
			<div className="header__nav">
				{/* to make signin clikabele and navigate to signin page 				 */}
				<Link to={!user && "/login"} className="header__clearlink">
					<div onClick={handleAuthenticaton} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Gust" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders" className="header__clearlink">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>
				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				{/* to make the basket clickable  */}
				<Link to="/checkout" className="header__clearlink">
					<div className="header__optionBasket">
						{/* <ShoppingBasketIcon /> */}
						<ShoppingCartIcon />
						{/* <span className="header__optionLineTwo header__basketCount">0</span> */}
						{/* we access the basket, then we know how much  is inside in the basket via basket.length instead of 0 */}
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header;
