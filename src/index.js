import React from 'react'
import ReactDOM from 'react-dom/client'

//always start with capital letter for function
// function Greeting() {
//   return <h2>My First Component</h2>
// }

//using jsx easier for future , what element gonna create , empty object and what to pass
const Greeting = () => {
  return React.createElement(
    'div',
    {},
    React.createElement('h2', {}, 'hello world')
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
//also can pass like this:
//root.render(<Greeting></Greeting>);
