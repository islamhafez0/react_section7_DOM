import { useRef, useState } from "react";
import  ReactDOM  from "react-dom";
import Modal from "./modal";

function App() {
  const inputRef = useRef()
  const [names, setName] = useState(['eslam', 'ahmed', 'khaled']);
  const [show, setShow] = useState(false)
  // const [inputValue, setInput] = useState("")
  const addName = () => {
    console.log(inputRef)
    const val = inputRef.current.value
    setName([val, ...names])
    inputRef.current.value = ''
    // setInput('')
    if(!val) {
      return 
    }
    setShow(false)
  }
  const closeModel = () => {
    setShow(false)
  }
  // const handleChange = (e) => {
  //   setInput(e.target.value)
  // }
  const modal = show && ReactDOM.createPortal(
    <Modal adding={ addName } closeing={ closeModel } />, 
    document.getElementById('modal_root')
  )
  return (
    <div>
      <input type="text" placeholder="add name..." ref={inputRef} />
      <button onClick={() => setShow(true)}>
        Add Name
      </button>
      <ul>
        {names.map((ele, index) => (
          <li key={index}> {ele} </li>
        ))}
      </ul>
      { modal }
    </div>
  );
}

export default App;

