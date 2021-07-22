import React, {useState, useRef} from 'react'
import Modal from './utils/Modal';

const CustomFibonacci = () => {

    const firstNumber = useRef(null);
    const secondNumber = useRef(null);
    const refAmount = useRef(null);
    const [customFibonacci, setCustomFibonacci] = useState([]);
		const [showModal, setShowModal] = useState(false);
		const [valueNumber, setValueNumber] = useState();
		const [fibIndex, setFibIndex] = useState();

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

		const toggleShowModal = (e, index) => {
			setShowModal(!showModal);
			setValueNumber(e.target.innerHTML);
			setFibIndex(index);
		};

    return (
        <div>
            <div className="fib-inputs">
                <input ref={firstNumber} type="number" placeholder="first number" onChange={handleChange}/>
                <input ref={secondNumber} type="number" placeholder="second number" onChange={handleChange}/>
                <input ref={refAmount} type="number" placeholder="how many" onChange={handleChange}/>
            </div>
            <div className="custom-fibonacci-result">
							<ul>
                {customFibonacci.map((number,index)=>{
                    return (
											
												<li key={index}>
                          <h6 onClick={(e) => toggleShowModal(e, index)}>{number}</h6>
                        </li>
                    )
                })}
							</ul>
            </div>
						{showModal && (
							<Modal toggleShowModal={toggleShowModal} valueNumber={valueNumber}
							firstNumber={firstNumber} secondNumber={secondNumber} fibIndex={fibIndex}/>
						)}

        </div>
    )
}

export default CustomFibonacci;
