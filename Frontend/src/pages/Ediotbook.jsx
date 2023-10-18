import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE } from "./Api";

function Ediotbook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishdyear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios
      .get(`${API_BASE}/books/${id}`)
      .then((response) => {
        setAuthor(response.data.author);
         setPublishYear(response.data.publishdyear);
        setTitle(response.data.title);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An Error Occured!");
        console.log(error);
      });
  },[id])

  const handleediotbook = () => {
    const data = {
      title,
      author,
      publishdyear,
    };
    setLoading(true);
    axios
      .put(`${API_BASE}/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An Error Occured!");
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Ediot Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <div className="text-xl mr-4 text-gray-500"> Titke</div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <div className="text-xl mr-4 text-gray-500"> Author</div>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray px-4 py-2 w-full"
          />
          <div className="my-4">
            <div className="text-xl mr-4 text-gray-500"> Publish Year</div>
            <input
              type="number"
              value={publishdyear}
              onChange={(e) => setpublishdyear(e.target.value)}
              className="border-2 border-gray px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handleediotbook}>
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Ediotbook;
