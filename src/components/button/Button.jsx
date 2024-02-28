import { ButtonSpace } from "./ButtonStyled"; 


export function Button({ type, text }) {
    return (
        <ButtonSpace type={type}><h3>{text}</h3></ButtonSpace>
    );
}