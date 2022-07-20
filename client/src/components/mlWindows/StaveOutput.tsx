import React, { useState, useEffect } from "react";
import axios from 'axios';
import NotAvailable from "./NotAvailable";
import { Box, Center } from "@chakra-ui/react";

type StaveOutputProps = {
    dataPack: any,
    disable: boolean,
    setCurrentStatus: () => void,
}

const StavePipelineURL = "http://localhost:9002";
const StaveDisplayURL = "http://localhost:8880/viewer/0";

const StaveOutput = ({dataPack, disable, setCurrentStatus}: StaveOutputProps): React.ReactElement => {
    const [ url, setUrl ] = useState(StavePipelineURL);
    useEffect(() => {
        if (!disable) {
            remoteProcess(); 
        }
    }) 

    const remoteProcess = async () => {
        const response: any = await axios.post('http://127.0.0.1:8000/backend/remoteProcessing', {
            url: url, 
            pack: dataPack
        }); 
        console.log('type of res.data', typeof(response.data))
        console.log('type of res.datapack', typeof(dataPack))
    }

    
    if (!disable) {
        return (
            <Box h="100%" bg='white'>
                <Center h="100%" pt="10px">
                    <iframe height="100%" width="100%" src="http://localhost:8880/viewer/0" />
                </Center>
            </Box>
        )
    } else {
        return (<NotAvailable />)
    }

}

export default StaveOutput; 