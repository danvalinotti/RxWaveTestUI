import React from 'react';
import {Chart} from 'primereact/chart';

export default function ReportPieChart(props) {
    const latestReport = props.data[0];
    console.log(latestReport);
    const data = {
        labels: ['Passed', 'Failed'],
        datasets: [
            {
                data: [latestReport.passed, latestReport.failed],
                backgroundColor: [
                    "#66BB6A",
                    "#fa4d4d"
                ],
                hoverBackgroundColor: [
                    "#82ff9b",
                    "#ff8282"
                ]
            }]    
        };

    return (
        <div className="report-pieChart">
            <Chart type="pie" data={data} height={200}/>
        </div>
    )
}