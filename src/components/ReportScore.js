import React from 'react';

function getColor(score) {
    if (score < 80) {
        return ('#f03e3e');
    } else if (score < 90) {
        return ('#f2c922');
    } else {
        return ('#66BB6A');
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