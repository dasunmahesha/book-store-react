import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import {  MdOutlineDelete } from "react-icons/md";
import { BsEye } from "react-icons/bs";

import Bookmodal from "./Bookmodal";

const Booktable=({books})=> {
  
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border bg-sky-300 border-slate-600 rounded-md">
              No
            </th>
            <th className="border bg-sky-300 border-slate-600 rounded-md">
              Title
            </th>
            <th className="border bg-sky-300 border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border bg-sky-300 border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border bg-sky-300 border-slate-600 rounded-md">
              Operations
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border  border-slate-700 hover:font-bold rounded-md text-center">
                {index + 1}
              </td>
              <td className="border  border-slate-700 hover:font-bold rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 italic hover:not-italic hover:font-bold rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700  rounded-md hover:font-bold text-center max-md:hidden">
                {book.publishdyear}
              </td>
              <td className="border border-slate-700  rounded-md text-center">
                <div className="flex justify-center gap-x-4">
                  <BsEye
                    className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                    onClick={() => setShowModal(true)}
                  />
                  <Link to={`books/details/${book._id}`}>
                    <BsInfoCircle className="text-2xl text-green-800" />
                  </Link>
                  <Link to={`books/ediot/${book._id}`}>
                    <AiOutlineEdit className="text-2xl text-yellow-600" />
                  </Link>
                  <Link to={`books/delete/${book._id}`}>
                    <MdOutlineDelete className="text-2xl text-red-600" />
                  </Link>
                  {showModal && (
                    <Bookmodal
                      book={book}
                      onClose={() => setShowModal(false)}
                    />
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Booktable
