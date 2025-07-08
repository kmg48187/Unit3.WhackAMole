import { useGame } from "./GameContext";

export default function Field(){
    const { field } = useGame();
    return (
        <ul className="field">
            {field.map((hasMole, i) => (
                <Mole key={i} hasMole={hasMole} />
            ))}
        </ul>
    );
}

function Mole({ hasMole }) {
    const { whack } = useGame();
    if (hasMole) return <li onClick={whack} className="hole mole"></li>;
    return <li className="hole"></li>;
}