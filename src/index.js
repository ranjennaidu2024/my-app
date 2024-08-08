import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//just to show you can use two approach , just add expor before const above , where need to follow same name
//if use export default then when import can put whatever name you wanted by specifying the path , for this we use Banana for Book class
import { books } from './books'
import Banana from './Book'

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Banana {...book} key={book.id} />
      })}
    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
