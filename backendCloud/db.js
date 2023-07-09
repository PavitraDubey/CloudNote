const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://paviyt663:pavitra@cluster0.udlxabu.mongodb.net/?retryWrites=true&w=majority"

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}
mongoose.connection.on("disconnected",()=>{
    console.log("database disconnected");
});
module.exports = connectToMongo;