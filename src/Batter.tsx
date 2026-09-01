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
            <button onClick={hanldeAddtow}>Add two</button>
            <button onClick={handleAddthree}>Add three</button>
            <button onClick={handleAddFour}>Add four</button>
            <button onClick={handleAddSix}>Add six</button>
        </>
    )
}