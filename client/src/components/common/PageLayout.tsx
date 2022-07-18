import React from "react";

import { Box } from "@chakra-ui/react";

type PageLayoutProps = {
  children: React.ReactNode;
}
const PageLayout = ( {children}: PageLayoutProps ) => {
  return (
    <Box
      minHeight="100vh"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundAttachment="fixed"
      backgroundSize="cover"
      backgroundImage="url('/images/background.png')"
    >
      {children}
    </Box>
  );
};

export default PageLayout;