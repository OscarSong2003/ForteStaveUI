import React from "react";
import { Box, Center } from "@chakra-ui/react";

type NotAvailableProps = {
    compNum: number;
    name: string;
}
const NotAvailable = ({compNum, name} : NotAvailableProps): React.ReactElement => {
    return (
        <Box h="100%" bg='gray'>
            <Center h="100%" fontSize="20px"> 
                {compNum + 1}: {name}
            </Center>
        </Box>
    )
}

export default NotAvailable;