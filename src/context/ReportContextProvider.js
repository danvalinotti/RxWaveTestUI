import React from 'react';

export const ReportContext = React.createContext();

export class ReportContextProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reports: [],
            loading: true
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/reports', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            mode: 'cors'
        })
            .then((result) => {
                return result.json();
            })
            .then((json) => this.setState({
                reports: json,
                loading: false
            })).then(() => console.log(this.state))
            .catch((error) => console.log(error));
    }

    render() {
        const { children } = this.props;

        return (
            <ReportContext.Provider
                value={{
                    reports: this.state.reports,
                    loading: this.state.loading
                }}>
                    {children}
            </ReportContext.Provider>
        )
    }
}

export const ReportContextConsumer = ReportContext.Consumer;