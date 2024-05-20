const Products = require ("./model/productModel")



const handleGetProduct = async (req,res)=>{
    const products = await Products.find()
    
    return res.status(200).json({
        message: "Success",
        counts: products.length,
        products
    })
}

const handleAddProduct = async (req,res)=>{

    const {name, quantity, price} = req.body
    console.log({name, quantity, price})

    const newProduct = new Products({name, quantity, price})

    await newProduct.save()
    
    return res.status(200).json({
        message: "New product added Successfully",
        product: newProduct
    })
}

const handleEditProduct = async(req,res)=>{
    const { id } = req.params

    const { name, quantity, price } = req.body
    const editedProduct = await Products.findByIdAndUpdate(
        id,
        { name, quantity, price },
        { new: true}
    )
    
    return res.status(200).json({
        message: "Edit successful",
        product: editedProduct
    })
}

const deleteProduct = async (req,res)=>{
    const { id } = req.params
    const deletedProduct = await Products.findByIdAndDelete(id)

    return res.status(200).json({
        message: "Product Deleted Successfully"
    })
}

module.exports = {
    handleGetProduct,
    handleAddProduct,
    handleEditProduct,
    deleteProduct
}