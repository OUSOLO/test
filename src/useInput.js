import { useState } from "react";
//커스텀 훅
export function useInput(initialValue, submitAction) {

    const [inputValue, setInputValue] = useState(initialValue);
    //inputValue = input 값을 담아둘 state

    const handleChange = (e) =>{    //input값이 변할때마다 반환될 함수
        setInputValue(e.target.value);
    };

    const handleSubmit = () => {
        setInputValue('');
        submitAction(inputValue);
    }

    return [inputValue, handleChange, handleSubmit];
}