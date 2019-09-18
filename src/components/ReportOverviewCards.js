import React from 'react';
import ReportOverviewCard from './ReportOverviewCard';
import {Card} from 'primereact/card';


export default function ReportOverviewCards(props) {
    return (
        <div className="roc--container">
            {/* <Card className="roc--card-container"> */}
                <h4 className="roc--title">Missing Prices</h4>
                <div className="roc--section">
                    <ReportOverviewCard title="InsideRx" missing={props.report.programStats[0]} />
                    <ReportOverviewCard title="WellRx" missing={props.report.programStats[2]} />
                    <ReportOverviewCard title="MedImpact" missing={props.report.programStats[3]} />
                </div>
                <div className="roc--section">
                    <ReportOverviewCard title="SingleCare" missing={props.report.programStats[4]} />
                    <ReportOverviewCard title="Blink" missing={props.report.programStats[5]} />
                    <ReportOverviewCard title="GoodRx" missing={props.report.programStats[6]} />
                </div>
            {/* </Card> */}
        </div>
    )
}