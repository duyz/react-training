import React, { useRef, useState } from 'react';

export default function Form1() {

    const [age, setAge] = useState(3);
    const [name, setName] = useState('');

    const refInput = useRef();
    const refInput1 = useRef();

    const handleClick = () => {
        setName(refInput.current.value);
        setAge(refInput1.current.value);
    };

    return (
        <>
            <p>ชื่อ : {name}</p>
            <p>อายุซ {age}</p>
            <label>ชื่อ</label>
            <input ref={refInput}  />
            <label>อายุ</label>
            <input ref={refInput1}  />
            <button onClick={handleClick}>Click</button>
        </>
    );
};