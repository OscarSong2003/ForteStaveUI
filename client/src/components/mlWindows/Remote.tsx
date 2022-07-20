import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Box, Text, Button, Center, Heading, Divider} from "@chakra-ui/react";
import NotAvailable from "./NotAvailable";

type RemoteProps = {
    pipelineUrl: string,
    dataPack: any,
    onPackChange: (pack: any) => void
    disable: boolean,
    setCurrentStatus: () => void,
    past: boolean, 
    name: string,
    compNum: number
}

const Remote = ({pipelineUrl, dataPack, onPackChange, disable, setCurrentStatus, past,
                 name, compNum}: RemoteProps) => {
    const [ url, setUrl ] = useState(pipelineUrl);
    const [ text, setText ] = useState("");
    const [ currPack, setCurrPack ] = useState("");
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
        console.log('type of res.data', typeof(response.data))
        console.log('type of res.datapack', typeof(dataPack))
        onPackChange(response.data);
        console.log('response remote', response);
        console.log('data', response.data);
        const textRes = await axios.post('http://127.0.0.1:8000/backend/getText', {
            pack: response.data
        })
        setText(textRes.data);
        setCurrPack(response.data);
    }
    if (!disable) {
        if (text) {
            return (
                <Box overflow="auto" h="100%" bg='white' p={2} pb={0}>
                    <Center height="12%">
                        <Heading size="sm">{compNum + 1}: {name}</Heading>
                    </Center>
                    <Divider orientation="horizontal" borderColor="gray.200" borderWidth="1px" />
                    <Text>Text: {text}</Text>
                    <Text mt={3}>DataPack: {currPack}</Text>
                    <Button mt={5} onClick={setCurrentStatus}>Continue</Button>
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
        if (past) {
            return (
                <Box overflow="auto" h="100%" bg='white' p={2} pb={0}>
                    <Center height="8%">
                        <Heading size="sm">{compNum + 1}: {name}</Heading>
                    </Center>
                    <Box overflow="auto" height="82%"> 
                        <Divider my={2} orientation="horizontal" borderColor="gray.100" />
                        <Text><Text fontWeight="bold">Text:</Text>{text}</Text>
                        <Divider my={2} orientation="horizontal" borderColor="gray.100" />
                        <Text mt={3} height="40%"><Text fontWeight="bold">DataPack:</Text>{currPack}</Text>
                    </Box>
                    <Divider my={2} orientation="horizontal" borderColor="gray.100" />
                    <Button height="12%" disabled={true}>Continue</Button>
                </Box>
            )
        } else {
            return (
                <NotAvailable compNum={compNum} name={name}/>
            )
        }
        
    }
}

export default Remote; 