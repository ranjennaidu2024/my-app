import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//always start with capital letter for function
// function Greeting() {
//   return <h2>My First Component</h2>
// }

//only can return one element , if multiple put in one div or use React.Fragment
// function Greeting() {
//   return (
//     <React.Fragment>
//       <div>
//         <h2>My First Component</h2>
//       </div>
//       <div>
//         <p>Testing</p>
//       </div>
//     </React.Fragment>
//   )
// }

//using jsx easier for future , what element gonna create , empty object and what to pass
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h2', {}, 'hello world')
//   )
// }

//Nest components
// function Greeting() {
//   return (
//     <div>
//       <Person />
//       <Message />
//     </div>
//   )
// }

// const Person = () => <h2>john doe</h2>
// const Message = () => {
//   return <p>this is my message</p>
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<Greeting />)
// OR also can pass like this:
//root.render(<Greeting></Greeting>);

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
)
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => <h4>Jordan Moore </h4>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
