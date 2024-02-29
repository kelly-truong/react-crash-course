import './App.css';
import Todo from './components/Todo.jsx'
import Title from './components/Title.jsx'
import Modal from './components/Modal.jsx'
import React, { useState } from 'react'
import Counter from './components/Counter.jsx'

function App() {
  const [showModal, setShowModal] = useState(false)

  function onTodoDelete() {
    setShowModal(true)
  }

  function cancelModal() {
    setShowModal(false)
  }

  function confirmModal() {
    setShowModal(false)
  }

  return (
    <div>
      <Title />
      <div>
        <input type="text" onChange={(event) => {
          console.log(event.target.value)
        }} />
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish interview section" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Land 100k job" />
      </div>
      {showModal && <Modal
        cancelModal={cancelModal}
        confirmModal={confirmModal}
        title="Confirm delete?" />}
    </div>
  );
}

console.log('chicken')

export default App;
