import React from 'react'
import {Root} from "./json_to_ts_interfaces"
import { useEffect, useState } from 'react'

function FetchDataDisplay() {
    const [responseData, setResponseData] = useState('');
    const [error, setError] = useState(false);
    const [state, setState] = useState('');    

    useEffect(() => {
        setState('loading');
        async function fetchData() {            
            
            await fetch('/cors', 
            { 
                mode:'cors',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
            }})
            .then(async (res) => {
                const jsonData = (await res.json()) as Promise<Root>;                
                console.log(jsonData);
                setState('success');                
                setResponseData(jsonData.toString());
            })
            .catch((err) => {
                console.error('Error:', err);
                setState('error');
                setError(err);
            });
        }
        fetchData();        
    }, []);
    if (state === 'error')
        return (
            <h1>                
                {error.toString()}
            </h1>
            
        );
    return (
        <div>
            <div>
                {state === 'loading' ? (
                    <h1>Loading...</h1>
                ) : (
                    <h1>{responseData}</h1>
                )}
            </div>
        </div>
    );
}

export default FetchDataDisplay;

