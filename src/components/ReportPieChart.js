import React from 'react';
import theme from '../theme';
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
                    theme.colors.success.primary,
                    theme.colors.failure.primary
                ],
                hoverBackgroundColor: [
                    theme.colors.success.secondary,
                    theme.colors.failure.secondary
                ]
            }]    
        };

    return (
        <div className="report-pieChart">
            <Chart type="pie" data={data} height={'200'}/>
        </div>
    )
}