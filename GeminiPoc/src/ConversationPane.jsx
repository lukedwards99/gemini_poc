import { useState } from "react"
import PropTypes from 'prop-types'
import SingleExchange from "./SingleExchange"
export default function ConversationPane({userInputArray}) {
    const [conversationObjects, setConversationObjects] = useState([])
    if(userInputArray.length !== conversationObjects.length){
        //need to create new ai entry
        console.log(userInputArray)
        setConversationObjects([...conversationObjects, <SingleExchange userText={userInputArray[userInputArray.length - 1]} key={conversationObjects.length}/>])
    }

    return (
        <div>
            {conversationObjects.map((conversationObject) => {
                return conversationObject
            })}
        </div>
    )
}

ConversationPane.propTypes = {
    userInputArray: PropTypes.array.isRequired
}