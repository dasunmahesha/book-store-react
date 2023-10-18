import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { API_BASE } from "./Api";

function Showboook() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [id]);
  return (
    <div className=" w-full items-center p-4">
      <BackButton />
      <div className="text-3xl my-4">Show Book</div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center items-center flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Id</span>
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Title</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Author</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">publish Year</span>
            <span>{book.publishdyear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Deailts</span>
            <span>{book.deatails}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Id</span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-xl me-4 text-gray-500">Id</span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Showboook;
