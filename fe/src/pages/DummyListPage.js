import React from 'react';
import DailyReportAxios from '../hooks/DailyReportAxios';
import axios from '../apis/API';

const DummyListPage = () => {
    const [dailyReports, error, loading] = DailyReportAxios({
        axiosInstance: axios,
        method: 'GET',
        url:'dailyReports/',
        requestConfig: {}
    })
    console.log(dailyReports);
    console.log(error);
    return (
        
        <div>
            {loading && <h1>Loading...</h1>}
            {!loading && error && <h1>{error}</h1>}
            {!loading && !error && dailyReports.map((rep) => <div key={rep["progress"]}><h1>{rep["user_id"] + ". " + rep["progress"]}</h1></div>)}
            {!loading && !error && !dailyReports && <h1>No Daily Reports Yet</h1>}
        </div>
    );
}

export default DummyListPage;