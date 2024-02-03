import { useParams } from "react-router-dom";

export function Search() {
    const { title } = useParams();
    return <h1 className="mt-10">{title}</h1>;
}