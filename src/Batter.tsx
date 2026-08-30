import { useState } from "react";

export default function Batter() {
    const [newRuns, setnewRuns] = useState(0);

    const handleRuns = () => {
        setnewRuns(newRuns + 1);
    }
    const hanldeAddtow = () => {
        setnewRuns(newRuns + 2)
    }
    const handleAddthree = () => {
        setnewRuns(newRuns + 3);
    }
    return (
        <>
            <h3>RunsTotal:{newRuns}</h3>
            <button onClick={handleRuns}>Add Single Runs</button>
            <button onClick={hanldeAddtow}>add two</button>
            <button onClick={handleAddthree}>add three</button>
            <button>add four</button>
            <button>add six</button>
        </>
    )
}