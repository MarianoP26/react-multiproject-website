import React from 'react';
import { useParams } from 'react-router-dom'


const SelectedAlgo = () => {

    const {name} = useParams();
    let info = '';
    if(name === "ArrayRearrange"){
        info = "This algo rearranges a int array"
    }
    if(name === "CharCounter"){
        info = "This algo counts how many characters are in given string"
    }

    return (
        <section className="algo-section">
            <h1>{name}</h1>
            <p>{info}</p>
        </section>
    )
}

export default SelectedAlgo;