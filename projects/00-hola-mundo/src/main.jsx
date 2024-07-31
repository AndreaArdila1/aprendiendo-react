import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'))

//Estructura de un componente. El nombre siempre en PascalCase para diferenciarlo de un elemento HTML
// const Button = ({text}) => {
//   return (
//     <button>
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
//       className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 
//       1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 
//       1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
//       </svg>
//       {text}
//     </button>
//   )
// }

//En la renderización solo se puede pasar un elemento
root.render(
  <App />
)

  /*
   Ejemplo para renderizar varios botones
   react.Fragment permite encapsular varios elementos sin utilizar un div
    <React.Fragment> 
      <Button text="Button 1" />
      <Button text="Button 2" />
      <Button text="Button 3" />
    </React.Fragment>
  */

  

