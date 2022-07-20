import React, { useState, useEffect } from "react";
import { Box, Textarea, Button, Center } from "@chakra-ui/react";
import axios from 'axios';
import NotAvailable from "./NotAvailable";

type TextModificationProps = {
    dataPack: any,
    onPackChange: (pack: any) => void
    disable: boolean,
    setCurrentStatus: () => void,
    past: boolean,
}

const TextModification = ({ dataPack, onPackChange, disable, setCurrentStatus, past }: TextModificationProps): React.ReactElement => {
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
                     <Textarea 
                        value={value}
                        onChange={onInputChange}
                        placeholder='Modify text here'
                        size='lg'
                        height="80%"
                        isDisabled={disable}
                    />
                    <Button disabled={disable} onClick={()=>onSubmit()}>Modify</Button>
                </Box>
            )
    } else {
        return (
            <NotAvailable />
        )
    }
    
}

export default TextModification; 

