const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
    },
    image:{
        type:String,
        default: "https://unsplash.com/photos/aerial-view-of-a-forest-clearing-with-a-swampy-area-MEjgD0XqZ2", 
        set: (v) =>
          v === ""
            ? "https://unsplash.com/photos/aerial-view-of-a-forest-clearing-with-a-swampy-area-MEjgD0XqZ2"
            : v,
    },
    price:{
        type:Number,
    },
    location: {
        type:String,
    },
    country: {
        type:String,
    },
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;
