import PropTypes from 'prop-types'
export default function SingleExchange({userText}){
    return(
        <div style={{color: "white"}}>
            {userText}
        </div>
    )
}

SingleExchange.propTypes = {
    userText: PropTypes.string.isRequired
}