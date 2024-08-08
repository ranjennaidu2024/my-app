import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//just to show you can use two approach , just add expor before const above , where need to follow same name
//if use export default then when import can put whatever name you wanted by specifying the path , for this we can use Banana for Book class
import { books } from './books'
import Book from './Book'

const BookList = () => {
  return (
    <>
      <h1>Ranjen Best Sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
