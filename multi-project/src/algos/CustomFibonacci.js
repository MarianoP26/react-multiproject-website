import React, {useState, useRef} from 'react'

const CustomFibonacci = () => {

    const firstNumber = useRef(null);
    const secondNumber = useRef(null);
    const refAmount = useRef(null);
    const [customFibonacci, setCustomFibonacci] = useState([]);

    const handleChange = () => {
        let first = Number(firstNumber.current.value) || undefined;
        let second = Number(secondNumber.current.value) || undefined;
        let amount = Number(refAmount.current.value) || 10;

        if(first !== undefined && second !== undefined) {
            let arr = [first, second];
            for(let i = 1; i < amount; i++) {
                arr.push(arr[i] + arr[i - 1])
            }
            setCustomFibonacci(arr);
        }
    }

    return (
        <div>
            <div>
                <input ref={firstNumber} type="number" placeholder="first number" onChange={handleChange}/>
                <input ref={secondNumber} type="number" placeholder="second number" onChange={handleChange}/>
                <input ref={refAmount} type="number" placeholder="Hoy many numbers" onChange={handleChange}/>
            </div>
            <div className="custom-fibonacci-result">
                {customFibonacci.map((number,index)=>{
                    return (
                        <li key={index}>
                            &nbsp;{number}&nbsp;
                        </li>
                    )
                })}
            </div>

        </div>
    )
}

export default CustomFibonacci;
