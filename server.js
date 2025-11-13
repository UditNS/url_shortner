// https://instagram.com/search? -> http://abcd.com/id
// Problem statement -> url shortner

const express = require("express")
const shortid = require('shortid');
const dbConnect = require('./database')
const Url = require("./models/url")
require('dotenv').config()

const app = express();
app.use(express.json());

dbConnect();

app.post('/shorten', async (req, res) => {
    try{const {originalUrl} = req.body;
        const uid = shortid.generate();
        await Url.create({
            shortId : uid,
            originalUrl: originalUrl
        })
        res.json({
            shortUrl: `http://localhost:3000/${uid}`
        })
    
    }
    catch(error){
        res.status(500).send("something went wrong" + error)
    }
})

app.get('/:shortId', async (req, res) => {
    try{const entry = await Url.findOne({
        shortId : req.params.shortId
    })
    if(entry) {
        return res.redirect(entry.originalUrl)
    }
    res.status(404).send("Url not found")
    }
    catch(error){
        res.status(500).send("something went wrong " + error)
    }
})

app.listen(3000, () => {
    console.log("app is connected")
})