import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box } from "@chakra-ui/react";

type RemoteProps = {
    pipelineUrl: string,
    dataPack: any,
    onPackChange: (pack: any) => void
    disable: boolean,
    setCurrentStatus: () => void,
}

const Remote = ({pipelineUrl, dataPack, onPackChange, disable, setCurrentStatus}: RemoteProps) => {
    const [ url, setUrl ] = useState(pipelineUrl);
    const [ text, setText ] = useState("");
    useEffect(() => {
        setUrl(pipelineUrl);
        if (!disable) {
            remoteProcess(); 
        }
    }, [disable]) 

    const remoteProcess = async () => {

        console.log('datapack:', dataPack);
        const response: any = await axios.post('http://127.0.0.1:8000/backend/remoteProcessing', {
            url: url, 
            pack: dataPack
        }); 
        onPackChange(response.data);
        console.log('response remote', response);
        console.log('data', response.data);
        const textRes = await axios.post('http://127.0.0.1:8000/backend/getText', {
            pack: dataPack
        })
        setText(textRes.data);
        
    }
    if (!disable) {
        if (text) {
            return (
                <Box h="100%" bg='white'>
                    {text}
                </Box>
            )
        } else {
            return (
                <Box h="100%" bg='white'>
                    Waiting for Pipeline to Finish 
                </Box>
            )
        }
    } else {
        return (
            <Box h="100%" bg='gray'>
                nope
            </Box>
        )
    }
}

export default Remote; 