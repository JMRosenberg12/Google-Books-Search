import React, { useState } from "react";
import axios from "axios";
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';


const SavedBooks = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState({ items: [] });
  const [toggle, setToggle] = useState(false);
  const onInputChange = e => {
    setSearchTerm(e.target.value);
  };

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async () => {
    const result = await axios.get(`${API_URL}?q=${searchTerm}`);
    setBooks(result.data);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    fetchBooks();
  };

  const bookAuthors = authors => {
    if (authors.length <= 2) {
      authors = authors.join(" and ");
    } else if (authors.length > 2) {
      let lastAuthor = " and " + authors.slice(-1);
      authors.pop();
      authors = authors.join(", ");
      authors += lastAuthor;
    }
    return authors;
  };

  return (
    <>
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        
      
    >
    <section>
      <form onSubmit={onSubmitHandler}>
        <label
        
        >
       
        <Typography variant="h1" component="h2">
          <span>Saved Books</span>
          </Typography>
          
          <input
            type="search"
            placeholder="enter a book here"
            value={searchTerm}
            onChange={onInputChange}
            className={toggle ? 'black' : 'green'} 
          />
        <Button 
        onClick={() => setToggle(!toggle)} 
        type="submit" 


        >Search</Button>
   
        </label>
      </form>
      
      <ul
      >
        {books.items.map((book, index) => {
          return (
         
            <li key={index}>
              <div
              
              >
                <img
                  alt={`${book.volumeInfo.title} book`}
                  src={`http://books.google.com/books/content?id=${
                    book.id
                  }&printsec=frontcover&img=1&zoom=1&source=gbs_api`}
                />
                <div>
                  <h3>{book.volumeInfo.title}</h3>
                  <p>{bookAuthors(book.volumeInfo.authors)}</p>
                  <p>{book.volumeInfo.publishedDate}</p>
                  <p>{book.volumeInfo.description}</p>
                </div>
                <Button  
                href="/saved"
                color="primary"
                border="soli"
                >SAVE</Button>
         
              </div>
              <hr />
              <Button />
            </li>
          );
        })}
      </ul>
    </section>
    </Grid>  
        <style jsx>{`
        .green {
          color: black;
          background-color: white;
        }
        .black {
          color: black;
          background-color: green;
        }
      .black {
        
      
      color: white;
      width: 100%;
      height: 50px;
    `}</style>
    
    </>
  );
};
export default SavedBooks;

