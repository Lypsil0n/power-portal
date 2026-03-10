import { useState, useEffect } from "react";
import "./App.css";
import { getPowerStatsTodayAvg, getPowerStatsTodayMin } from "./utils/modules";

function App() {
    const [stats1, setStats1] = useState(null);
    const [stats2, setStats2] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            const data1 = await getPowerStatsTodayAvg();
            const data2 = await getPowerStatsTodayMin();
            setStats1(data1);
            setStats2(data2);
        }
        fetchStats();
    }, []);

    return (
        <>
            <h1>Power Portal</h1>
            <p>Dagens datum: {stats1?.date}</p>
            <p>Dagspris: {stats1?.avg_price} SEK/kWh</p>
            <p>Minsta pris: {stats2?.min_price} SEK/kWh</p>
        </>
    );
}

export default App;
