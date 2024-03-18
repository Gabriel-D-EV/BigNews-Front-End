import { InputAreaSpace, InputSpace } from "./InputStyled";


export function Input({ type, placeholder, register, name }) {
    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)}/>
        // 
    );
}

export function InputArea({ type, placeholder, register, name, rows}) {
    return (
        <InputAreaSpace type={type} placeholder={placeholder} {...register(name)} rows={rows}/>
        // 
    );
}


