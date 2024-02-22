
const secretKey="sk_test_51OmLmPDEw5jujyaH89jwTHhaT9FqoTrUfXaCCApecUGrvllgDUclzn9QFdcCFf61tmvv2I8YUVprZKoPCHCJBfyY00FiQiydXh"
const stripe = require("stripe")(secretKey);

const PaymentController={
    payment:async (req, res) => {
        const { products } = req.body;
        const lineItems = products.map((product) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: product.product.title,
            },
            unit_amount: Math.round(product.product.price * 100),
          },
          quantity: product.count,
        }));
      
      
      
        try {
          const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `http://localhost:5173/success`,
          });
      
          res.status(200).json({ id: session.id });
        } catch (error) {
          console.log(error);
          res.status(500).json({ error: "Server error." });
        }
      }
}
module.exports = PaymentController;