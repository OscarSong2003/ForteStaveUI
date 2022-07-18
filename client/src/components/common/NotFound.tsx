import { Center, Heading } from "@chakra-ui/react";
import React from "react";
import PageLayout from "./PageLayout";

const NotFound = () => {
    return (
        <PageLayout>
            <Center height="100vh">
                <Heading size="4xl">404</Heading>
            </Center>
        </PageLayout>
    )
}

export default NotFound;