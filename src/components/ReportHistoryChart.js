import React from 'react';
import {Chart} from 'primereact/chart';

function calcRate(report) {
    return (report.passed / report.tests) * 100;
}

export default function ReportHistoryChart(props) {
    const data = {
        labels: ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
        datasets: [
            {
                label: 'Pass rate',
                data: [
                    calcRate(props.data[9]),
                    calcRate(props.data[8]),
                    calcRate(props.data[7]),
                    calcRate(props.data[6]),
                    calcRate(props.data[5]),
                    calcRate(props.data[4]),
                    calcRate(props.data[3]),
                    calcRate(props.data[2]),
                    calcRate(props.data[1]),
                    calcRate(props.data[0]),
                ],
                fill: false,
                backgroundColor: '#66BB6A',
                borderColor: '#66BB6A'
            }
        ]
    };

    const options = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMin: 0,
                    suggestedMax: 100
                }
            }]
        }
    };

    return (
        <div className="report-history--container">
            <h4 className="report-history--title">% Tests Passed</h4>
            <h6 className="report-history--subtitle">Last 10 Reports</h6>
            <Chart type="line" data={data} options={options}/>
        </div>
    )
}