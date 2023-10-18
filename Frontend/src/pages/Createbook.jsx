import React, { useState } from "react";
import axios, { Axios } from "axios";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { API_BASE } from './Api'
import { useSnackbar } from "notistack";

function Createbook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishdyear, setpublishdyear] = useState("");
  const [deatails, setdeatails] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const{enqueueSnackbar}= useSnackbar();

  const handlesavebook = () => {
    const data = {
      title,
      author,
      publishdyear,
      deatails,
    };
    setLoading(true);
    axios
      .post(`${API_BASE}/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Book Created Sussesfully',{variant:'success'});
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error During Adding Book", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4"> Create Book</h1>
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
          <div className="my-4">
            <div className="text-xl mr-4 text-gray-500"> Deatils</div>
            <input
              type="text"
              value={deatails}
              onChange={(e) => setdeatails(e.target.value)}
              className="border-2 border-gray px-4 py-2 w-full"
            />
          </div>
          <button className="p-2 bg-sky-300 m-8" onClick={handlesavebook}>
            Save Book
          </button>
        </div>
      </div>
    </div>
  );
}

export default Createbook;
