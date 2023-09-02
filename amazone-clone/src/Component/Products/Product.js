import React from "react";
import "./Product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider";

function Product({ id, title, image, price, rating }) {
	//usestate for datalayer and function for add to basket on click

	const [{ basket }, dispatch] = useStateValue();

	// console.log('this is the basket', basket);

	const addToBasket = () => {
		// dispatch the item into the data layer
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>
								<StarIcon />
								{/* 🌟 */}
							</p>
						))}
				</div>
			</div>
			<img
				// src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7Unl._SX325_BO1,204,203,200_.jpg"
				// alt=""

				src={image}
				alt=""
			/>
			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
