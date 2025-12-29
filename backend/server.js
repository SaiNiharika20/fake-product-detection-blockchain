const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Sample product data (later replaced by blockchain)
const products = {
  "123456": {
    name: "Samsung Galaxy S24",
    manufacturer: "Samsung",
    status: "Genuine",
  },
};

app.get("/verify/:barcode", (req, res) => {
  const barcode = req.params.barcode;

  if (products[barcode]) {
    res.json(products[barcode]);
  } else {
    res.json({ status: "Fake" });
  }
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
