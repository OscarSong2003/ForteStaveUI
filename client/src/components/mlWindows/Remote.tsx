import React, { useState, useEffect } from "react";

type RemoteProps = {
    pipelineUrl: string,
    isActivated: boolean
    dataPack: any
}
const Remote = ({pipelineUrl, isActivated, dataPack}: RemoteProps) => {
    const [ url, setUrl ] = useState(pipelineUrl);
    const [ active, setActive ] = useState(isActivated);
    const [ pack, setPack ] = useState(dataPack);

    useEffect(() => {
        if (active) {
            
        }
    }) 
}

export default Remote; 