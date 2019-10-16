import React from 'react';
import ProgressSpinner from '../components/ProgressSpinner';
import ReportScore from '../components/ReportScore';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import '../App.css';

function calcRating(result) {
    return Math.round((result.results.passed / result.results.total) * 100);
}

export default function TestView() {
    const [loading, setLoading] = React.useState(false);
    const [result, setResult] = React.useState(null);
    const [env, setEnv] = React.useState('dev');
    const options = [
        {label: 'Development', value: 'dev'},
        {label: 'QA', value: 'qa'},
        {label: 'Production', value: 'prod'}
    ];

    async function handleTest() {
        setLoading(true);
        const response = await fetch('http://localhost:3000/run', {
            method: 'post',
            body: JSON.stringify({
                env: env
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        setResult(json);
        setLoading(false);
    }

    return (
        <div className="page-container">
            <Card className="home--card">
                {result && (
                    <div className="spinner-container">
                        <h4>Success!</h4>
                        <ReportScore score={calcRating(result)} />
                    </div>
                )}
                {loading && (
                    <div className="spinner-container">
                        <h4>Running tests...</h4>
                        <ProgressSpinner />
                    </div>
                )}
                {!loading && !result && (
                    <div className="spinner-container">
                        <Dropdown value={env} options={options} onChange={(e) => {setEnv(e.value)}} style={{marginBottom: 15}} />
                        <Button label="Run Test" className="p-button-rounded" onClick={() => handleTest()}/>
                    </div>
                )}
            </Card>
        </div>
    )
}