import React, { useEffect, useState } from "react";
import LoadingPage from "../common/Loading";
import TextInput from "./TextInput";
import Remote from "./Remote";
type ComponentProps = {
    info: any,
    dataPack: any, 
    onPackChange: (pack: any) => void,
    currentStatus: number, 
    setCurrentStatus: () => void,
    compNum: number,
}

const Component = ({ info, dataPack, onPackChange, currentStatus, 
                     setCurrentStatus, compNum} : ComponentProps): React.ReactElement => {
    const [compInfo, setCompInfo] = useState(info);
    const [isLoading, setIsLoading] = useState(false);
    switch(compInfo.type) {
        case "input":
            return (<TextInput disable={(compNum == currentStatus) ? false : true} 
                    onPackChange={onPackChange} dataPack={dataPack} setCurrentStatus={setCurrentStatus}/>);
        case "remote":
            return (<Remote pipelineUrl={compInfo.url} dataPack={dataPack} onPackChange={onPackChange}
                    disable={(compNum == currentStatus) ? false : true} 
                    setCurrentStatus={setCurrentStatus}/>);

    }

    const setOnLoad = () => { setIsLoading(true); }
    return (<LoadingPage onLoading={setOnLoad}/>);

}

export default Component; 