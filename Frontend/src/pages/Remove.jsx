import React, { useState } from "react";
import axios, { Axios } from "axios";
import BackButton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE } from "./Api";
import { useSnackbar } from "notistack";

function Remove() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const handleDeletebook = () => {
    setLoading(true);
    axios
      .delete(`${API_BASE}/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/");
        enqueueSnackbar("Book Deleted", { variant: "warning" });
      })
      .catch((error) => {
        setLoading(false);
        enqueueSnackbar("Error Occourd Delete Book", { variant: "error" });
        console.log(error);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        \<h3 className="text-2xl">Do You Really want to delete this Book</h3>
        <button
          className="p-4 bg-red-600 text-white m-8 w-full"
          onClick={handleDeletebook}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Remove;
