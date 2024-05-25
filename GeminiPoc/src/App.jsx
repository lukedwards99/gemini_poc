import './App.css'
import UserInput from './UserInput'
import ConversationPane from './ConversationPane'
import { useState } from 'react'

function App() {
  const [userInputArray, setUserInputArray] = useState([])


  const addUserResponse = (text) => {
    setUserInputArray([...userInputArray, text])
  }

  return (
    <>
      <h1>Gemini POC</h1>
      <ConversationPane userInputArray={userInputArray}/>
      <UserInput addUserResponse={addUserResponse}/>
    </>
  )
}

export default App
