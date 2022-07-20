import React, { useState, useEffect } from "react";
import NotAvailable from "../mlWindows/NotAvailable";
import Loading from "../common/Loading";
type DelayedProps = {
    children: React.ReactElement;
}
const Delayed = ({ children } : DelayedProps): React.ReactElement => {
    const [waitTime, setWaitTime] = useState(4000);
    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        setTimeout(() => {
        setIsShown(true);
        }, waitTime);
    }, [waitTime]);

    return (isShown ? children : <Loading />);
}

export default Delayed;