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

// const Book = (props) => {
//   const { img, title, author } = props

//   return (
//     <article className="book">
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   )
// }

// function BookList() {
//   return (
//     <section className="booklist">
//       {books.map((book) => {
//         console.log(book)
//         const { img, title, author, id } = book
//         return <Book img={img} title={title} author={author} key={id} />
//       })}
//     </section>
//   )
// }

//pass the entire book object instead of passing each of book props
// - utilize spread operator (...) - copy values
// - Spread Operator
function BookList() {
  return (
    <section className="booklist">
      <EventExamples />
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const EventExamples = () => {
  const handleFormInput = (e) => {
    console.log(e)
    // e.target - element
    console.log(`Input Name : ${e.target.name}`)
    console.log(`Input Value : ${e.target.value}`)
    // console.log('handle form input');
  }
  const handleButtonClick = () => {
    alert('handle button click')
  }
  const handleFormSubmission = (e) => {
    //normally it will submit the value of form to other api,
    //e.preventDefault() is to say that we will control the form and so can see the console.log
    e.preventDefault()
    console.log('form submitted')
  }
  return (
    <section>
      {/* add onSubmit Event Handler */}
      <form onSubmit={handleFormSubmission}>
        <h2>Typical Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={{ margin: '1rem 0' }}
        />
        {/* add button with type='submit to submit when press enter key , 
        onClick is to submit form when click on the button' */}
        <button type="submit" onClick={handleFormSubmission}>
          submit form
        </button>
      </form>
      <button onClick={handleButtonClick}>click me</button>
    </section>
  )
}

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

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
