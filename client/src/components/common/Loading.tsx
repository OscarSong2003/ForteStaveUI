import React, { useEffect } from "react";
import PageLayout from "./PageLayout";
import { Flex, Spinner, Image } from "@chakra-ui/react";

type LoadingPageProps = {
    onLoading: () => void;
}
const LoadingPage = ({onLoading} : LoadingPageProps): React.ReactElement => {
    useEffect(() => {
        onLoading();
    })
    return (
        <PageLayout>
            <Flex w="100%"
                  h="100vh"
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
                    mr="60px"
                />
                <Image 
                    width={850}
                    alt="loading profile"
                    mb={8}
                />
            </Flex>
        </PageLayout>
    )
}

export default LoadingPage;