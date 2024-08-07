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

const Book = (props) => {
  const { img, title, author } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author} </h4>
    </article>
  )
}

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         console.log(book)
//         const { img, title, author, id } = book
//         return <Book img={img} title={title} author={author} />
//       })}
//     </section>
//   )
// }

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        console.log(book)
        const { img, title, author, id } = book
        return <Book img={img} title={title} author={author} key={id} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
