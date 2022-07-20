import React from "react";
import { Box, Center } from "@chakra-ui/react";

const NotAvailable = (): React.ReactElement => {
    return (
        <Box h="100%" bg='gray'>
            <Center h="100%" fontSize="20px"> 
                Not Available
            </Center>
        </Box>
    )
}

export default NotAvailable;