const express = require('express');
const router = express.Router();
const Book = require("../models/book")

/********************************* Find all books ***************************/

router.get("/findBooks",async(req,res)=>{
    const {tag,keyword} = req.body;
    try {
        // const book = await Boo;
    } catch (error) {
        
    }
})

/********************************* Find all books ***************************/
/********************************* Find all books ***************************/
/********************************* Find all books ***************************/
/********************************* Find all books ***************************/
/********************************* Find all books ***************************/

module.exports = router;