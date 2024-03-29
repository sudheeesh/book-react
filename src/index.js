import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import books from "./books";
import Book from "./Book";



function Booklist() {


    return(
        <section className="booklist"> 
        {books.map((book) =>{
          return <Book {...book} key={book.id}></Book>
        })} 
        </section>
    )


};




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render (<Booklist/>);