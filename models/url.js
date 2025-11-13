const mongoose = require("mongoose")

const urlSchema = new mongoose.Schema({
    shortId: String,
    originalUrl: String,
})

module.exports = mongoose.model("Url", urlSchema)