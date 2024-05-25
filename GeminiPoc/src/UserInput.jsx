import { useState } from "react"
import PT from 'prop-types'
export default function UserInput({addUserResponse}) {
    const [input, setInput] = useState("")

    const onChangeHandler = (e) => {
        setInput(e.target.value)
    }

    return (
        <>
            <div id="user-input" className="flex-row">
                <textarea value={input} onChange={onChangeHandler}></textarea>
            </div>
            <div className="flex-row">
                <button onClick={()=> addUserResponse(input)}>Submit</button>
            </div>
        </>
    )
}

UserInput.propTypes = {
    addUserResponse: PT.func.isRequired
}