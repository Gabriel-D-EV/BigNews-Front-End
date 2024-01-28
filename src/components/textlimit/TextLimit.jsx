export function TextLimit({ text, limit }) {
    const TextLimited = text?.length > limit ? `${text.substr(0, limit)} ...Ler mais`
        : text;
    return <p>{TextLimited}</p>;
}