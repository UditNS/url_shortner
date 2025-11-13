const mongoose = require("mongoose");

const dbConnect = async () => {
    try{await mongoose.connect(process.env.DB_URL);
    console.log("db is connected")
}
    catch(error){
        console.log("Error occured: " + error)
    }
}

module.exports = dbConnect;