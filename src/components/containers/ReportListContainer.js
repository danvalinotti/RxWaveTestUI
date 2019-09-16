import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {useDispatch, useSelector} from 'react-redux';
import {getAllReports} from '../../redux/actions/reportActions';

export const ReportListContainer = (props) => {
    const [reports, setReports] = React.useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/reports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: 'cors'
        })
            .then((result) => {
                console.log(result);
                return result.json();
            })
            .then((json) => setReports(json))
            .catch((error) => console.log(error));
    }, [setReports])

    console.log(reports);

    return (
        <>
            <div>Reports</div>
        </>
    )
}

export default ReportListContainer;