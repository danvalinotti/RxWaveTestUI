import React from 'react';
import {Card} from 'primereact/card';

export default function ReportOverviewCard(props) {
    let bg = "";

    if (props.missing === 0) {
        bg = "#4dfa70";
    } else if (props.missing < 10) {
        bg = "#fada4d";
    } else {
        bg = "#fa4d4d";
    }

    return (
        <Card 
            className="roc--card" 
            title={props.title} 
            subtitle="Missing prices"
            style={{backgroundColor: bg}}
        >
                <p className="roc--card-val">{`${props.missing}`}</p>
        </Card>
    )
}