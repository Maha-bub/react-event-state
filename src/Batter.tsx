import { useState } from "react";

export default function Batter() {
    const [newRuns, setnewRuns] = useState(0);

    const handleRuns = () => {
        setnewRuns(newRuns + 1);
    }
    return (
        <>
            <h3>RunsTotal:{newRuns}</h3>
            <button onClick={handleRuns}>Add Single Runs</button>
        </>
    )
}