import React from 'react';
import theme from '../theme';
import {DataView, DataViewLayoutOptions} from 'primereact/dataview';
import Moment from 'react-moment';

function calcRating(report) {
    return Math.round((report.passed / report.tests) * 100);
}

function getColor(score) {
    if (score < 80) {
        return theme.colors.failure.primary;
    } else if (score < 90) {
        return theme.colors.warning.primary;
    } else {
        return theme.colors.success.primary;
    }
}

function renderListItem(report) {
    const rating = calcRating(report);
    const color = getColor(rating);

    return (
        <div className="report-list--item" style={{padding: '2em', borderBottom: '1px solid #d9d9d9'}}>
            <div className="report-list--icon p-col-12 p-md-3">
                <i className="pi pi-file"></i>
            </div>
            <div className=" p-md-8 report-list--details">
                <div className="p-grid">
                    <div className="p-col-2 p-sm-6"><span>Created:</span><Moment date={report.createDate} format="MM/DD/YYYY"/></div>

                    <div className="p-col-2 p-sm-6"><span>Total tests: </span> <span style={{color: "#2c7ffd"}}>{report.tests}</span></div>

                    <div className="p-col-2 p-sm-6"><span>Passed: </span> <span style={{color: "#66BB6A"}}>{report.passed}</span></div>

                    <div className="p-col-2 p-sm-6"><span>Failed: </span> <span style={{color: "#fa4d4d"}}>{report.failed}</span></div>
                </div>
            </div>

            <div className="report-list--item-rating" style={{backgroundColor: color}}>
                <p>Rating</p>
                <h3>{calcRating(report)}</h3>
            </div>
        </div>
    )
}

export default function ReportList(props) {
    const [layout, setLayout] = React.useState('list');
    const [first, setFirst] = React.useState(0);

    const header = (
        <div className="report-list--header">
            <h5>{layout[0].toUpperCase() + layout.slice(1)}</h5>
            <div className="p-col-12 p-md-4">
                <DataViewLayoutOptions layout={layout} onChange={(e) => {
                    setLayout(e.value)}} />
            </div>
        </div>
    )

    return (
        <div className="report-list--container">
            <DataView 
                header={header}
                layout={layout} 
                value={props.reports} 
                itemTemplate={renderListItem}
                paginator={true}
                first={first}
                totalRecords={props.reports.length - (props.reports.length % 5)}
                rows={5}
                onPage={(e) => setFirst(e.first)}
                paginatorPosition="both"
            ></DataView>
        </div>
    );
}