import React from 'react';
import {Card} from 'primereact/card';
import {ReportContext} from '../context/ReportContextProvider';
import ReportList from '../components/ReportList';

export default function Reports() {
    const {reports} = React.useContext(ReportContext);
    const [loading, setLoading] = React.useState(false);
    
    React.useEffect(() => {
        if (reports === undefined) {
            setLoading(true);
        } else if (reports.length > 0) {
            setLoading(false);   
        } else {
            setLoading(true);
        }
    }, [reports]);

    return (
        <div className="page-container">
            <Card className="home--card">
                <h3 className="reports--title">All Reports</h3>
                {loading ? <div>Loading...</div> : (
                    <ReportList reports={reports} />
                )}
            </Card>
        </div>
    )
}