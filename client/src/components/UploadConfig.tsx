import React, { useState } from 'react';
import PageLayout from './common/PageLayout'
import { Center } from '@chakra-ui/react';
import axios from 'axios';
import PropTypes from 'prop-types';

type UploadConfigProps = {
    setConfigs: (name: string, components: any) => void
}
const UploadConfig = ({setConfigs} : UploadConfigProps) => {
    const [file, setFile] = useState(null);

    const onFileChange = (event: any) => {
        setFile(event.target.files[0]);
    }
    const onUpload = async () => {
        let response = await axios.post('http://127.0.0.1:8000/fileUpload/', file);
        const data = response.data; 
        console.log(data, data.name)
        setConfigs(data.name, data.components);
    }
    return (
        <PageLayout>
            <Center height="100vh">
                <input type="file" onChange={onFileChange}></input>
                <button onClick={onUpload}>Upload</button>
            </Center>
        </PageLayout> 
    )
}

export default UploadConfig; 

