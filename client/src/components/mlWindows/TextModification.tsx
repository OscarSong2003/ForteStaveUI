import React, { useState, useEffect } from "react";
import { Box, Textarea, Button, Center, Heading } from "@chakra-ui/react";
import axios from 'axios';
import NotAvailable from "./NotAvailable";

type TextModificationProps = {
    dataPack: any,
    onPackChange: (pack: any) => void
    disable: boolean,
    setCurrentStatus: () => void,
    past: boolean,
    compNum: number,
    name: string
}

const TextModification = ({ dataPack, onPackChange, disable, setCurrentStatus, past,
                            compNum, name }: TextModificationProps): React.ReactElement => {
    let [value, setValue] = useState("");
    // let [initText, setInitText] = useState("");

    useEffect(() => {
        if (!disable) {
            // get text
            getPrevText();
        }
    }, [disable]);
    
    const getPrevText = async () => {
        const textRes = await axios.post('http://127.0.0.1:8000/backend/getText', {
            pack: dataPack
        })
        // console.log('init text', initText)
        setValue(textRes.data);
        console.log('value', value);
    }
    const onInputChange = (e: any) => {
        const input = e.target.value;
        setValue(input);
    }

    const onSubmit = async () => {
        // send text to backend to add it
        let response = await axios.post('http://127.0.0.1:8000/backend/addText', {
            text: value,
            pack: dataPack
        });
        const pack = response.data; 
        onPackChange(pack);
        setCurrentStatus();
    }
    // render modification 
    if (!disable || past) {
            return (
                <Box h="100%" bg='white'>
                    <Center height="12%">
                        <Heading size="sm">{compNum + 1}: {name}</Heading>
                    </Center>
                    <Textarea 
                        value={value}
                        onChange={onInputChange}
                        placeholder='Modify text here'
                        size='lg'
                        height="75%"
                        isDisabled={disable}
                    />
                    <Button height="13%" disabled={disable} onClick={()=>onSubmit()}>Modify</Button>
                </Box>
            )
    } else {
        return (
            <NotAvailable compNum={compNum} name={name} />
        )
    }
    
}

export default TextModification; 

