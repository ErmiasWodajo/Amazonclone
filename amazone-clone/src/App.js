import "./App.css";
import Checkout from "./Component/Checkout/Checkout";
import Header from "./Component/Header/Header";
import Home from "./Component/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Component/LoginPage/Login";
import { useStateValue } from "./Component/StateProvider";
import React, { useEffect } from "react";
import { auth } from "./Firebase";
import Payment from "./Component/Payment/Payment";

// for backend 1
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Component/Orders/Orders";

const promise = loadStripe (
  'pk_test_51NceZHKp3VM1lqZ9F2LXFlmv6ZOCVr2RA0NEsKDHBZk45QGYqad4gEXr865mIWrbt7zUmFiWQ39cePqKD7V5F1DI00Er8GN7As'
)

function App() {
	// using useState to let acess to datalayer for the Gust

	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser, // to put the user in if exist that declered in reducer.js
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>

					{/* <Header />
					<Home /> */}
					<Route path="/login" element={<Login />} />

					<Route
						path="/payment"
						element={
							<>
								<header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						}
					/>

					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
