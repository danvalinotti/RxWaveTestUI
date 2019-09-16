import React from 'react';
import {DataView} from 'primereact/dataview';

export default function ReportList(props) {
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
        <>
            <DataView layout={layout} value={[1,2,3]} itemTemplate={itemTemplate}></DataView>
        </>
    );
}