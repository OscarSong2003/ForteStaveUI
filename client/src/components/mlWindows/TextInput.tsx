import React, { useState } from "react";
import { Box, Button, Input } from "@chakra-ui/react";
import { Textarea  } from "@chakra-ui/react";
const TextInput = (): React.ReactElement => {
    let [value, setValue] = useState("");
    let [submitted, setSubmitted] = useState(false);
    const onInputChange = (e: any) => {
        const input = e.target.value;
        setValue(input);
    }

    const onSubmit = () => {
        setSubmitted(true);
        console.log('submitted!', submitted);
    }
    return (
        <Box h="100%" bg='white'>
            <Textarea 
                value={value}
                onChange={onInputChange}
                placeholder='Enter text here'
                size='lg'
                height="80%"
             />
             <Button onClick={()=>onSubmit()}>Submit</Button>
        </Box>
    )
}

export default TextInput; 
