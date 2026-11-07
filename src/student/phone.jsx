import React from "react";


const Phone = (props) => {
    const {model,price,memory} =  props
    return <p>{model} {price} {memory}</p>
}


export default Phone