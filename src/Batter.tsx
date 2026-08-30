import { useState } from "react";

export default function Batter() {
    const [newRuns, setnewRuns] = useState(0);

    const handleRuns = () => {
        setnewRuns(newRuns + 1);
    }
    const hanldeAddtow = () => {
        setnewRuns(newRuns + 2);
    }
    const handleAddthree = () => {
        setnewRuns(newRuns + 3);
    }
    const handleAddFour = () => {
        setnewRuns(newRuns + 4);
    }
    const handleAddSix = () => {
        setnewRuns(newRuns + 6);
    }
    return (
        <>
            <h3>RunsTotal:{newRuns}</h3>
            <button onClick={handleRuns}>Add Single Runs</button>
            <button onClick={hanldeAddtow}>add two</button>
            <button onClick={handleAddthree}>add three</button>
            <button onClick={handleAddFour}>add four</button>
            <button onClick={handleAddSix}>add six</button>
        </>
    )
}