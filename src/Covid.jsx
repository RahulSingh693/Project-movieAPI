import React, { useEffect, useState } from 'react';
import "./Covid.css"

const Covid = () => {
    const [data, setdata] = useState([]);
    const getData = async () => {
        const Data = await fetch('https://data.covid19india.org/data.json');
        const actualData = await Data.json();
        setdata(actualData.statewise);
    }

    // const getData = async () => {
    //     const url = 'https://corona-virus-world-and-india-data.p.rapidapi.com/api';
    //     const options = {
    //         method: 'GET',
    //         headers: {
    //             'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //             'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
    //         }
    //     };

    //     try {
    //         const response = await fetch(url);
    //         const result = await response.text();
    //         console.log(result);
    //         setdata(result);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    useEffect(() => {
        getData();
    }, []);
    return (
        <>
            <div className="container">
                <span>Covid-19 Data Fetching using API</span>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((value, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th id='stateName'>{value.state}</th>
                                        <th>{value.confirmed}</th>
                                        <th>{value.recovered}</th>
                                        <th>{value.deaths}</th>
                                        <th>{value.active}</th>
                                        <th>{value.lastupdatedtime}</th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Covid