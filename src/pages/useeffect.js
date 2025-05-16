import { useState } from "react";

export default function Useeffect() {
    const [numero, setNumero] = useState(0);
    return <>
        <div className="text-center">
            <h1> useEffect</h1>
            <h2>{numero === 0 ? "imagem" : numero}</h2>
        </div>
    </>
}