import React from 'react';
import theme from '../theme';
import {Card} from 'primereact/card';

export default function ReportOverviewCard(props) {
    let bg = "";

    if (props.missing === 0) {
        bg = theme.colors.success.primary;
    } else if (props.missing < 10) {
        bg = theme.colors.warning.primary;
    } else {
        bg = theme.colors.failure.primary;
    }

    return (
        <Card 
            className="roc--card" 
            title={props.title} 
            subtitle="Missing prices"
        >
            <div className="roc--card-content" style={{backgroundColor: bg}}>
                <p className="roc--card-val">{`${props.missing}`}</p>
            </div>
        </Card>
    )
}