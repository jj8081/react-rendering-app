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
            
            await fetch('https://raw.github.com/nf-core/scrnaseq/2.4.1/nextflow_schema.json', 
            { headers: {
                'Accept': 'application/json',
                'Access-Control-Allow-Origin': 'http://localhost:3000',
            }})
            .then((res) => {
                var data = (res.json()) as Promise<Root>;
                console.log(res.json());
                setState('success');                
                setResponseData(data.toString());
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

