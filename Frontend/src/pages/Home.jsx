import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import Bookcard from "../components/Home/Bookcard";
import Booktable from "../components/Home/Booktable";
import { API_BASE } from "./Api";

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState(
    localStorage.getItem("showType") || "table"
  );

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_BASE}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  const handleViewChange = (viewType) => {  
    setShowType(viewType);
    localStorage.setItem("showType", viewType);
  };

  return (
    <div className="p-4">
      <div className="flex justify-center items-center">
        <button
          className={`bg-sky-300 hover:bg-sky-600 mx-2 px-4 py-1 rounded-lg ${
            showType === "table" ? "bg-sky-600" : ""
          }`}
          onClick={() => handleViewChange("table")}
        >
          Table
        </button>
        <button
          className={`bg-sky-300 hover:bg-sky-600 mx-2 px-4 py-1 rounded-lg ${
            showType === "card" ? "bg-sky-600" : ""
          }`}
          onClick={() => handleViewChange("card")}
        >
          Card
        </button>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl"></MdOutlineAddBox>
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <Booktable books={books} />
      ) : (
        <Bookcard books={books} />
      )}
    </div>
  );
}

export default Home;
