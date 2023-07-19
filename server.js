require("dotenv").config();
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    // origin: "https://curious-crumble-3f54ff.netlify.app/",
  })
);

const YOUR_DOMAIN = "http://localhost:3000";
// const YOUR_DOMAIN = "https://curious-crumble-3f54ff.netlify.app/";

const storeItems = new Map([
  [
    1,
    {
      priceInPaise: 20000,
      name: "Men's Black Boxers",
      image:
        "https://images.bewakoof.com/t1080/men-s-black-boxers-460052-1658499524-3.jpg",
    },
  ],
  [
    2,
    {
      priceInPaise: 40000,
      name: "Men's Blue Boxers",
      image:
        "https://images.bewakoof.com/t1080/men-s-green-boxers-460064-1656147941-1.jpg",
    },
  ],
  [
    3,
    {
      priceInPaise: 60000,
      name: "Men's Olive Grey Boxers",
      image:
        "https://images.bewakoof.com/t1080/chive-solid-boxer-460040-1659444278-1.jpg",
    },
  ],
  [
    4,
    {
      priceInPaise: 80000,
      name: "Men's Grey Joggers",
      image:
        "https://images.bewakoof.com/t1080/moss-green-casual-jogger-pant-293068-1656193408-1.jpg",
    },
  ],
  [
    5,
    {
      priceInPaise: 100000,
      name: "Men's Red Joggers",
      image:
        "https://images.bewakoof.com/t1080/dark-maroon-jogger-pants-321138-1656175114-1.jpg",
    },
  ],
  [
    6,
    {
      priceInPaise: 80000,
      name: "Men's Darkgrey Joggers",
      image:
        "https://images.bewakoof.com/t1080/dark-grey-casual-jogger-pant-293066-1660652872-1.jpg",
    },
  ],
  [
    13,
    {
      priceInPaise: 100000,
      name: "Men's Lilac Tshirt",
      image:
        "https://images.bewakoof.com/t1080/men-blue-purple-oversize-fit-combo-t-shirt-580832-1676888918-3.jpg",
    },
  ],
  [
    14,
    {
      priceInPaise: 80000,
      name: "Men's Yellow Tshirt",
      image:
        "https://images.bewakoof.com/t1080/vax-yellow-half-sleeve-t-shirt-315186-1656000804-3.jpg",
    },
  ],
  [
    15,
    {
      priceInPaise: 100000,
      name: "Men's Black Tshirt",
      image:
        "https://images.bewakoof.com/t1080/dark-sapphire-half-sleeve-t-shirt-475469-1663254572-4.jpg",
    },
  ],
  [
    22,
    {
      priceInPaise: 100000,
      name: "Women's Black Shorts",
      image:
        "https://images.bewakoof.com/t1080/black-cargo-pocket-with-bottom-roll-up-fold-shorts-459385-1656043778-1.jpg",
    },
  ],
  [
    23,
    {
      priceInPaise: 80000,
      name: "Women's Green Shorts",
      image:
        "https://images.bewakoof.com/t1080/women-s-green-roll-up-shorts-459386-1656144740-1.jpg",
    },
  ],
  [
    24,
    {
      priceInPaise: 90000,
      name: "Women's Peach Shorts",
      image:
        "https://images.bewakoof.com/t1080/women-s-pink-shorts-459390-1656152698-3.jpg?tr=q-100",
    },
  ],
]);

app.post("/create-checkout-session", async (req, res) => {
  // console.log("Ye hai body: ", req.body);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: storeItem.name,
              images: [storeItem.image],
            },
            unit_amount: storeItem.priceInPaise,
          },
          quantity: item.quantity,
        };
      }),
      mode: "payment",
      success_url: `${YOUR_DOMAIN}`,
      cancel_url: `${YOUR_DOMAIN}`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(4242, () => console.log("Running on port 4242"));
