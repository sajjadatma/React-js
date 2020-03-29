import React from 'react'
import './Modal.css'
const Modal = (props) => {
    return (
        <div  className="modal">
        <div className="modal-content">
                <p>{props.winOrDraw === 'Draw' ? 'Its Draw' :
                    props.winOrDraw === 'X' ? 'Player X Is Winner' :
                    props.winOrDraw === 'O' ? 'Player O Is Winner':null}</p>
                <button className="button" onClick={props.startAgain} >Start Again</button>
        </div>
      
      </div>
    )
}

export default Modal