//importation
const mongoose=require("mongoose")

//create schema
const schema = mongoose.Schema;

const productSchema = new schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        
    },
    posterUrl: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    min: {
        type: Function,
        required:true
    },
    plus: {
        type: Function,
        required:true
    },
    addCart: {
        type: Function,
        required:true
    },
    availableProduct: {
        type: Function,
        required:true
    },
    cart: {
        type: Function,
        required:true
    }
});

//export
module.exports = mongoose.model("product", productSchema);
