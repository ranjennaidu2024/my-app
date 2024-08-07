import React from 'react'
import ReactDOM from 'react-dom/client'

//always start with capital letter for function
function Greeting() {
  return <h2>My First Component</h2>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
//also can pass like this:
//root.render(<Greeting></Greeting>);
