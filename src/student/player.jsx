import React from "react";


const Player = (props) => {
    return <h1>{props.player} tashladi: {Math.floor(Math.random() * 6) + 1}</h1>
}



export default Player