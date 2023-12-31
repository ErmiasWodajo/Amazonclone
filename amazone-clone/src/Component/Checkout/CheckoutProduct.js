import React from 'react'
import './CheckoutProduct.css'


import { useStateValue } from '../StateProvider';

// import GradeIcon from "@mui/icons-material/Grade";



function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
	const [{ basket }, dispatch] = useStateValue();
    // function to dispatch on click 
	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutProduct">
			<img className="checkoutProduct__image" src={image} />

			<div className="checkoutProduct__info">
				<p className="checkoutProduct__title">{title}</p>
				<p className="checkoutProduct__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutProduct__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							// <GradeIcon className="yellow" />
							<p>🌟</p>
						))}
				</div>
                {!hideButton && (
				<button onClick={removeFromBasket}>Remove from Basket</button>
                )}
			</div>
		</div>
	);
}

export default CheckoutProduct