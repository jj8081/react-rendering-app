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
                const jsonData = (await res.json()) as Root;
                console.log(jsonData);
                setState('success');
                let title = 'Title: ' + (await jsonData).title;
                let description = "Description: " +  (await jsonData).description;
                let sampleDefinition = "Sample Defition: " + (await jsonData).definitions.alevin_options;
                let sampleDefinitionDescription = "Sample Definition Description: " + (await jsonData).definitions.alevin_options.description;
                let sampleDefinitionProperty1 = "Sample Definition Property Description: " + (await jsonData).definitions.alevin_options.properties.salmon_index.description;
                let sampleDefinitionProperty2 = "Sample Definition Property Description: " + (await jsonData).definitions.alevin_options.properties.simpleaf_rlen.description;
                let sampleDefinitionProperty3 = "Sample Definition Property Description: " + (await jsonData).definitions.alevin_options.properties.txp2gene.description;

                let displayStr = title + description + sampleDefinition + sampleDefinitionDescription + sampleDefinitionProperty1 +   sampleDefinitionProperty2 + sampleDefinitionProperty3;
                setResponseData(displayStr);                
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
                    <h6>{responseData}</h6>
                )}
            </div>
        </div>        
    );
}

export default FetchDataDisplay;
