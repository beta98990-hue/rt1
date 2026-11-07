import React from "react";


const Calc = (props) =>{
    const {a,b} = props
    return <h1>{Number(a) + Number(b)}</h1>
}


export default Calc