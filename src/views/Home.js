import React from 'react';
import {DataView} from 'primereact/dataview';
import {ReportListContainer} from '../components/containers/ReportListContainer';
import '../App.css';

export default function Home() {
    const [layout, setLayout] = React.useState('list');
    
    function itemTemplate(data, layout) {
        if (layout === 'list') {
            return (
                <div className="p-grid">
                    <div>Test</div>
                </div>
            );
        } else {
            return (
                <div className="p-grid">
                    <div>Grid</div>
                </div>
            );
        }
    }
    return (
        <div className="page-container">
            <h1>RxWave Test UI</h1>
            <p>Homepage</p>
            <ReportListContainer />
            <DataView layout={layout} value={[1,2,3]} itemTemplate={itemTemplate}></DataView>
        </div>
    )
}