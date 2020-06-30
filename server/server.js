const express = require("express")
const cors = require("cors")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })
const bodyParser = require('body-parser');
const fs = require("fs")
const app = express()
const port = 216

app.post("/upload", upload.single("uploadedFile"), cors(), (req, res, next) => {
    fs.rename(req.file["path"], req.file["destination"] + req.file["originalname"], (err) => {if (err) {console.error("ERROR: " + err)}})
    var loopback = req.body.loopbackURL;
    console.log(loopback)
    res.status(200).redirect(loopback)
})

app.listen(port, () => {
    console.log("Server Online on port " + port)
})