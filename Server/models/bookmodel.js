import mongoose from "mongoose";


const bookshcheama = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    publishdyear: {
      type: Number,
      required: true,
    },
    deatails: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model(`book`, bookshcheama);