import React, { useEffect } from "react";
import PageLayout from "./PageLayout";
import { Flex, Spinner, Image, Center, Heading } from "@chakra-ui/react";


const LoadingPage = (): React.ReactElement => {
    return (
        <PageLayout>
            <Flex w="100%"
                  h="100%"
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                    mr="80px"
                />
                <Heading>Loading...</Heading>
            </Flex>
        </PageLayout>
    )
}

export default LoadingPage;