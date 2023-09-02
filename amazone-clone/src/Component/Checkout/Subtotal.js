import React from "react";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
// import CurrencyFormat
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function Subtotal() {
	const [{ basket }, dispatch] = useStateValue(); // to connect again with datalayer as product.js and 0 changed to basket.length

	// function to calculate the price of total items in the basket
	const getBasketTotal = (basket) =>
		basket?.reduce((amount, item) => item.price + amount, 0);

        const history = useNavigate();

	return (
		<div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)} // {/* to run the function */}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button onClick={(e) =>history('/payment')}>Proceed to Checkout</button>
		</div>
	);
}

export default Subtotal;


// first trial to display 
{
	/* <div className="subtotal">
			<CurrencyFormat
				renderText={(value) => (
					<div>
						<p>
							Subtotal ({basket.length} items): <strong>{value}</strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</div>
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			<button>Proceed to Checkout</button>
		</div> */
}
