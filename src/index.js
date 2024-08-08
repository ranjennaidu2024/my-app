import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    author: 'Jordan Moore',
    title: 'Interesting Facts For Curious Minds',
    img: './images/book-1.jpg',
    id: 1,
  },
  {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg',
    id: 2,
  },
]

// - create getBook function in booklist
// - accepts id as an argument and finds the book
// - pass the function down to Book Component and invoke on the button click
// - in the Book Component destructure id and function
// - invoke the function when user clicks the button, pass the id
// - the goal : you should see the same book in the console

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

//problem : you cannot directly use getBook(id) for the onClick event:
//<button onClick={getBook(id)}>display title</button>

// - two option to do this:
// - first option - setup wrapper
// const Book = (props) => {
//   const { img, title, author, getBook, id } = props
//   // console.log(props);
//   const getSingleBook = () => {
//     getBook(id)
//   }
//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <button onClick={getSingleBook}>display title</button>
//       <h4>{author}</h4>
//     </article>
//   )
// }

//- second option - wrap in the anonymous arrow function
const Book = (props) => {
  const { img, title, author, getBook, id } = props
  // console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>

      <button onClick={() => getBook(id)}>display title</button>
      <h4>{author}</h4>
    </article>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
