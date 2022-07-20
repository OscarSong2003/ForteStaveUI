import React, { useEffect, useState } from "react";
import LoadingPage from "../common/Loading";
import TextInput from "./TextInput";
import Remote from "./Remote";
import TextModification from "./TextModification";
import StaveOutput from "./StaveOutput";
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
                    onPackChange={onPackChange} dataPack={dataPack} setCurrentStatus={setCurrentStatus}
                    name={compInfo.name} compNum={compNum} />);

        case "remote":
            return (<Remote pipelineUrl={compInfo.url} dataPack={dataPack} onPackChange={onPackChange}
                    disable={(compNum === currentStatus) ? false : true} 
                    setCurrentStatus={setCurrentStatus} past={currentStatus > compNum}
                    name={compInfo.name} compNum={compNum}/>);
        case "modifier":
            return (<TextModification dataPack={dataPack} onPackChange={onPackChange} 
                    disable={(compNum === currentStatus) ? false : true} setCurrentStatus={setCurrentStatus}
                    past={currentStatus > compNum} compNum={compNum} name={compInfo.name} />)
        case "output":
            return (<StaveOutput dataPack={dataPack} disable={(compNum === currentStatus) ? false : true} 
                    setCurrentStatus={setCurrentStatus} compNum={compNum} name={compInfo.name} />)
    }

    return (<LoadingPage />);

}

export default Component; 