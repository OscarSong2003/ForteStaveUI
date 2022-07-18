import React, { useState } from "react";
import UploadConfig from "./UploadConfig";
import Home from "./Home";
import GridLayout from "react-grid-layout";
import PageLayout from "./common/PageLayout";
import { Box } from "@chakra-ui/react";
import { PageState } from "../enums/PageState";

const MainPage = (): React.ReactElement => {
    const [currState, setCurrState] = useState(PageState.UPLOAD);
    const [appName, setAppName] = useState("");
    const [components, setComponents] = useState({});
    const setConfigs = (name: string, components: any) => {
        setAppName(name);
        setComponents(components);
        // console.log('app name: ', appName);
        // console.log('components: ', components);
        setCurrState(PageState.MAIN); 
    }

    switch (currState) {
        case PageState.UPLOAD:
            return <UploadConfig setConfigs={setConfigs}/>;
    }

    return (
        <Home components={components} name={appName}/>
    )
}

export default MainPage; 