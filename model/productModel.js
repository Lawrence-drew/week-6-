const mongoose = require ("mongoose")

const productSchema = new mongoose.Schema({
    name: {type: String, require},

    quantity: {type: String, require},

    price: {type: String, require}
})

const Products = new mongoose.model("Product", productSchema)

module.exports = Products