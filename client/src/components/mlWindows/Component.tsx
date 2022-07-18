import React, { useEffect, useState } from "react";
import LoadingPage from "../common/Loading";
import TextInput from "./TextInput";

type ComponentProps = {
    info: any,
    dataPack: any 
}

const Component = ({ info } : ComponentProps): React.ReactElement => {
    const [compInfo, setCompInfo] = useState(info);
    const [isLoading, setIsLoading] = useState(false);
    switch(compInfo.type) {
        case "input":
            return (<TextInput />);
    }

    const setOnLoad = () => { setIsLoading(true); }
    return (<LoadingPage onLoading={setOnLoad}/>);

}

export default Component; 