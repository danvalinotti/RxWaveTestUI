import React from 'react';
import theme from '../theme';

function getColor(score) {
    if (score < 80) {
        return theme.colors.failure.primary;
    } else if (score < 90) {
        return theme.colors.warning.primary;
    } else {
        return theme.colors.success.primary;
    }
}

export default function ReportScore(props) {
    return (
        <div className="home--rating-box" style={{backgroundColor: getColor(props.score)}}>
            <p>Score</p>
            <h3>{props.score}</h3>
        </div>
    )
}