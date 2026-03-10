import { useState, useEffect } from "react";
import "./App.css";
import { getPowerStatsTodayAvg } from "./utils/modules";

function App() {
    const [stats, setStats] = useState(null);

    useEffect(() => {
        async function fetchStats() {
            const data = await getPowerStatsTodayAvg();
            setStats(data);
        }
        fetchStats();
    }, []);

    return (
        <>
            <h1>Power Portal</h1>
            <p>Dagens datum: {stats?.date}</p>
            <p>Dagspris: {stats?.avg_price} SEK/kWh</p>
        </>
    );
}

export default App;
