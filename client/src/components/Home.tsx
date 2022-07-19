import React, { useEffect, useState } from "react";
import PageLayout from "./common/PageLayout";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import GridLayout from "react-grid-layout";
import { Box } from "@chakra-ui/react";
import LoadingPage from "./common/Loading";
import TextInput from "./mlWindows/TextInput";
import Component from "./mlWindows/Component";
import axios from "axios";

type HomeProps = {
    components: any; 
    name: string
}
const Home = ({ components, name} : HomeProps) => {
    const [comp, setComp] = useState(components);
    console.log(components);
    const [layout, setLayout] = useState<any[]>([]);
    const [properLayout, setProperLayout] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pack, setPack] = useState({});
    const [status, setStatus] = useState(0);
    // get new data pack 
    useEffect(() => {
        initPack(); 
    }, [comp])

    const initPack = async () => {
        let response = await axios.get('http://127.0.0.1:8000/backend/newPack');
        console.log('reponse', response);
        setPack(response.data);
    }
    
    const onPackChange = (pack: any) => { 
        setPack(pack);
    }

    // setup layout
    useEffect(() => {
        comp.map((c: any, index: number) => {
            layout.push({
                i: index.toString(),
                x: index * index,
                y: 0, 
                w: 2,
                h: 4,
            })
        })
        const properLayout = layout.slice(0, comp.length);
        setProperLayout(properLayout);
        console.log('layout', properLayout)
    }, [])

    const onLoading = () => {
        setIsLoading(true);
    }

    const setCurrentStatus = () => {
        setStatus(status + 1);
    }
    // const layout = [
    //     { i: "a", x: 0, y: 0, w: 1, h: 2},
    //     { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    //     { i: "c", x: 4, y: 0, w: 1, h: 2 }
    //   ];

    if (layout.length <= 0 || !pack) {
        return <LoadingPage onLoading={onLoading}/>
    }
        return (
            <PageLayout>
                 <GridLayout
                    className="layout"
                    layout={properLayout}
                    rowHeight={50}
                    width={2000}
                >
                    {properLayout.map((l:any, index: number) => (
                        
                         <Box 
                         border="4px"
                         key={l.i}>
                            <Component info={comp[index]} dataPack={pack}
                             onPackChange={onPackChange} setCurrentStatus={setCurrentStatus} 
                             compNum={index} currentStatus={status}/>
                         </Box>
                         
                    )) }
                </GridLayout>
            </PageLayout>
        
        )

   
}

export default Home; 