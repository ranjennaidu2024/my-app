import React from 'react'
import ReactDOM from 'react-dom/client'

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
function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  )
}

const Person = () => <h2>john doe</h2>
const Message = () => {
  return <p>this is my message</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
//also can pass like this:
//root.render(<Greeting></Greeting>);
