const express = require('express');
const router = express.Router();
const Book = require("../models/book")

/********************************* Find all books ***************************/

router.get("/findAllBooks",async(req,res)=>{
    try {
       const userId = req.body._id;
       const books = await Book.find().lean();
       const requestedBooks = books.map(book => ({
        ...book,
        isRequestedByUser: book.requestedBy && book.requestedBy.toString() === userId
    }));
    res.json(requestedBooks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching books', error });
    }
})

/********************************* Get all books of user ***************************/

router.get("/books/user/:userId",async(req,res)=>{
    try {
      const {type} = req.body;
      const userId = req.params.userId;
      let books;
      if(type=="all"){
        books = await Book.find({ owner: userId });
      }else{
        books = await Book.find({ requestedBy : userId});
      }
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching books', error });
  }
})

/********************************* Add the books ***************************/

router.post("/addBook",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

/********************************* Delete the book ***************************/

router.delete("/deleteBook",async(req,res)=>{
   try {
    
   } catch (error) {
    
   }
})

/********************************* Request Book ***************************/

router.post("/requestBook",async(req,res)=>{
   try {
    
   } catch (error) {
    
   }
})

/********************************* Give permission to request ***************************/

router.post("/grantRequest",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

module.exports = router;