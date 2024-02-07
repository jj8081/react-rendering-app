import React, { useEffect, useState } from 'react'
import {CustomJSONInterface} from "./json_to_ts_interfaces"

function FetchDataDisplay() {
    const [responseData, setResponseData] = useState<CustomJSONInterface>();
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
                },
            })
            .then(async (res) => {
                const jsonData = (await res.json()) as CustomJSONInterface;
                console.log(jsonData);
                setState('success');
                setResponseData(jsonData);
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
                <table style={{
                    border: "1px solid black",
                    width: "100%"
                }}>
                    <tr style={{ textAlign:"left" }}>
                        <tr> {responseData?.definitions.input_output_options.title} </tr>
                        <tr> {responseData?.definitions.input_output_options.description} </tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --input </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.input_output_options.properties.input.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}> 
                                <tr> required </tr>
                    
                                <tr> type: {responseData?.definitions.input_output_options.properties.input.type} </tr>
                                <br></br>
                                <tr> pattern: {responseData?.definitions.input_output_options.properties.input.pattern}</tr>
                            </td>
                        </tr>                                      
                        <tr>Help Text</tr>
                        <tr>{responseData?.definitions.input_output_options.properties.input.help_text}</tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --outdir </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.input_output_options.properties.outdir.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}> 
                                <tr> required </tr>                    
                                <tr> type: {responseData?.definitions.input_output_options.properties.outdir.type} </tr>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --email </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.input_output_options.properties.email.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}>
                                <tr> type: {responseData?.definitions.input_output_options.properties.email.type} </tr>
                                <tr> pattern: {responseData?.definitions.input_output_options.properties.email.pattern} </tr>
                            </td>                            
                        </tr>
                        <tr>Help Text</tr>
                        <tr>{responseData?.definitions.input_output_options.properties.email.help_text}</tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --multiqc_title </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.input_output_options.properties.multiqc_title.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}>
                                <tr> type: {responseData?.definitions.input_output_options.properties.multiqc_title.type} </tr>                                
                            </td>
                        </tr>
                    </tr>
                    <br></br>
                    <tr>
                        <tr> {responseData?.definitions.mandatory_arguments.title} </tr>
                        <tr> {responseData?.definitions.mandatory_arguments.description} </tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --barcode_whitelist </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.mandatory_arguments.properties.barcode_whitelist.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}>
                                <tr> type: {responseData?.definitions.mandatory_arguments.properties.barcode_whitelist.type} </tr>
                                <br></br>
                            </td>
                        </tr>                                  
                    </tr>
                    <br></br>
                    <tr style={{
                            textAlign:"left"
                            }}>
                        <tr> {responseData?.definitions.skip_tools.title} </tr>
                        <tr> {responseData?.definitions.skip_tools.description} </tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --skip_multiqc </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.skip_tools.properties.skip_multiqc.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}>
                                <tr> type: {responseData?.definitions.skip_tools.properties.skip_multiqc.type} </tr>
                            </td>
                        </tr>
                        <tr>
                            <td style={{ border: "1px solid black", width: "10%" }}> --skip_fastqc </td>
                            <td style={{ border: "1px solid black" }}> {responseData?.definitions.skip_tools.properties.skip_fastqc.description} </td>
                            <td style={{ textAlign:"left", border: "1px solid black" }}>
                                <tr> type: {responseData?.definitions.skip_tools.properties.skip_fastqc.type} </tr>
                            </td>
                        </tr>
                    </tr>                 
                </table>
                )}
            </div>
        </div>
        
    );
}

export default FetchDataDisplay;
