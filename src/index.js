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

// const Book = () => {
//   return (
//     <article className="book">
//       <Image />
//       <Title />
//       <Author />
//     </article>
//   )
// }

// const Image = () => (
//   <img src="./images/book-1.jpg" alt="Interesting Facts For Curious Minds" />
// )
// const Title = () => {
//   return <h2>Interesting Facts For Curious Minds</h2>
// }

//refactor to single book component (personal preference)
const author = 'Jordan Moore'
const Book = () => {
  const title = 'Interesting Facts For Curious Mindssssss'
  return (
    <article className="book">
      <img
        src="./images/book-1.jpg"
        alt="Interesting Facts For Curious Minds"
      />
      <h2>{title}</h2>

      <h4>{author.toUpperCase()} </h4>
      {/* <p>{let x = 6}</p> */}
      <p>{6 + 6}</p>
    </article>
  )
}

//for jsx we pass javascript object into the curly braces for css style
// const Author = () => (
//   <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.5rem' }}>
//     Jordan Moore
//   </h4>
// )

//if other lib use inline css , can override like this , another way
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '0.75rem',
    marginTop: '0.5rem',
  }
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
