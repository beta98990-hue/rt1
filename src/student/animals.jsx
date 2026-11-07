import React from "react";


const Animal = (props) => {
    console.log(props);
    const {name,legs} = props
    return <h1>{name}  oyoqlari  {legs}</h1>
    
}


export default Animal