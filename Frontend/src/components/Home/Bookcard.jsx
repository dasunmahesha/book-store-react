import React from "react";
import Booksinglecard from "./Booksinglecard";

const Bookcard=({books})=> {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((item) => (
        <Booksinglecard key={item._id} book={item}/>
      ))}
    </div>
  );
}

export default Bookcard;
