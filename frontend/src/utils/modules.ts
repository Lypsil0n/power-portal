async function getPowerStatsTodayAvg() {
    const response = await fetch(
        "http://localhost:8000/api/get_power_stats_today_avg",
    );

    const data = await response.json();

    return data;
}

async function getPowerStatsTodayMin() {
    const response = await fetch(
        "http://localhost:8000/api/get_power_stats_today_min",
    );

    const data = await response.json();

    return data;
}

export { getPowerStatsTodayAvg, getPowerStatsTodayMin };
