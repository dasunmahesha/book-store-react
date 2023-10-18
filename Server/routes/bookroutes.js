import express from "express";
const router = express.Router();
import { Book } from "../models/bookmodel.js";



//save a  book
router.post("/", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishdyear||
      !request.body.deatails
    ) {
      return response.status(400).send({
        message: "send all requestuierd fields: title, author, publishdyear",
      });
    }
    const newbook = {
      title: request.body.title,
      author: request.body.author,
      publishdyear: request.body.publishdyear,
      deatails: request.body.deatails,
    };
    const book = await Book.create(newbook);
    return response.status(201).send(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//get all books
router.get("/", async (request, response) => {
  try {
    const books = await Book.find({});
    return response.status(201).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//get single book by id
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const book = await Book.findById(id);
    return response.status(201).json(book);
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//update a book
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.author ||
      !request.body.publishdyear ||
      !request.body.deatails
    ) {
      return response.status(400).send({
        message: "send all requestuierd fields: title, author, publishdyear",
      });
    }
    const { id } = request.params;
    const reasult = await Book.findByIdAndUpdate(id, request.body);
    if (!reasult) {
      return response.status(404).send({
        message: "Book Not Found",
      });
    }
    return response.status(200).send({ message: "book succesfully updated" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

//delete a book
router.delete("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const reasult = await Book.findByIdAndDelete(id);
    if (!reasult) {
      return response.status(404).send({
        message: "Book Not Found",
      });
    }
    return response.status(200).send({ message: "book succesfully deleted" });
  } catch (error) {
    console.log(error);
    response.status(500).send({ message: error.message });
  }
});

export default router;
