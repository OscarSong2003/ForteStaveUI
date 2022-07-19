import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { Textarea  } from "@chakra-ui/react";
import axios from 'axios';

type TextInputProps = {
    dataPack: any,
    onPackChange: (pack: any) => void,
    disable: boolean,
    setCurrentStatus: () => void,
}
const TextInput = ({ dataPack, onPackChange, disable, setCurrentStatus} : TextInputProps): React.ReactElement => {
    let [value, setValue] = useState("");
    let [submitted, setSubmitted] = useState(false);
    const onInputChange = (e: any) => {
        const input = e.target.value;
        setValue(input);
    }

    const onSubmit = async () => {
        setSubmitted(true);
        console.log('submitted!', submitted);
        console.log('pack', dataPack);
        let response = await axios.post('http://127.0.0.1:8000/backend/addText', {
            text: value,
            pack: dataPack
        });
        const pack = response.data; 
        onPackChange(pack);
        setCurrentStatus();
    }
    return (
        <Box h="100%" bg='white'>
            <Textarea 
                value={value}
                onChange={onInputChange}
                placeholder='Enter text here'
                size='lg'
                height="80%"
                isDisabled={disable}
             />
             <Button disabled={disable} onClick={()=>onSubmit()}>Submit</Button>
        </Box>
    )
}

export default TextInput; 
