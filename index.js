const express = require ('express')
const dotenv = require ("dotenv").config()
const functions = require ("./functions")
const mongoose = require ("mongoose")

const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

mongoose.connect( process.env.MONGODB_URL).then(()=> console.log("MongoDB connected...."))

app.get("/get-product", functions.handleGetProduct)
app.post("/add-product", functions.handleAddProduct)
app.put("/edit-product/:id", functions.handleEditProduct)
app.delete("/delete-product/:id", functions.deleteProduct)


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

