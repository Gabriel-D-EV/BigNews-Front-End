import { useState } from "react";
import { InputAreaSpace, InputSpace } from "./InputStyled";


export function Input({ type, placeholder, register, name, value: initialValue, }) {
    const [value, setValue] = useState(initialValue)
    let inputProps = {
        type,
        placeholder,
        ...register(name),
        onChange: (e) => setValue(e.target.value),
    };
    if (value) inputProps.value = value;
    return (
        <InputSpace {...inputProps} />
        // 
    );
}

export function InputArea({ type, placeholder, register, name, rows, value: initialValue }) {
    const [value, setValue] = useState(initialValue)
    let inputTextAreaProps = {
        type,
        placeholder,
        rows,
        ...register(name),
        onChange: (e) => setValue(e.target.value),
    };
    if (value) inputTextAreaProps.value = value;
    return (
        <InputAreaSpace {...inputTextAreaProps} />
        // 
    );
}


