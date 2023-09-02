const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51NceZHKp3VM1lqZ9WLDtFQQSIb4nXuTsEhyZGeefK1geWmnTzPkBWcGuRqFKrOsP4XbQlCNuat4FvXPZeql4hCY500vu6vORaM"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved for an amount of>>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});

    // ok created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

exports.api = functions.https.onRequest(app);

// "sk_test_51NceZHKp3VM1lqZ9WLDtFQQSIb4nXuTsEhyZGeefK1geWmnTzPkBWcGuRqFKrOsP4XbQlCNuat4FvXPZeql4hCY500vu6vORaM";
