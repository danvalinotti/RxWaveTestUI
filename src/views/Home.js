import React from 'react';
// import {DataView} from 'primereact/dataview';
import ReportPieChart from '../components/ReportPieChart';
import ReportOverviewCards from '../components/ReportOverviewCards';
import ReportHistoryChart from '../components/ReportHistoryChart';
import ReportScore from '../components/ReportScore';
import {ReportContext} from '../context/ReportContextProvider';
import Moment from 'react-moment';
import {Card} from 'primereact/card';
import '../App.css';

function calcRating(report) {
    return Math.round((report.passed / report.tests) * 100);
}

export default function Home() {
    const [loading, setLoading] = React.useState(true);
    const {reports} = React.useContext(ReportContext);

    React.useEffect(() => {
        if (reports.length > 0) {
            setLoading(false);   
        } else {
            setLoading(true);
        }
    }, [reports])

    return (
        <div className="page-container">
            <Card className="home--card">
                {loading ? <div>Loading...</div> : (
                    <div className="page-container--home-outer">
                        <ReportScore score={calcRating(reports[0])} />
                        <div className="home--latest-header">
                            <h3 className="home--latest-title">Latest Report</h3>
                            <p className="home--latest-date">Last run:
                                <Moment date={reports[0].createDate} format="MM/DD/YYYY" style={{paddingLeft: 5}}/>
                            </p>
                        </div>
                        <div className="page-container--home">
                            <ReportPieChart data={reports} />
                            <ReportOverviewCards report={reports[0]}/>
                        </div>
                        <ReportHistoryChart data={reports.slice(0,10)} />
                    </div>
                )}
            </Card>
        </div>
    )
}