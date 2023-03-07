import React, { useEffect, useState } from "react";
import './BackendDeploy.css';
import axios from 'axios';

function BackendDeploy() {

    const [result, setResult] = useState(null);

    const chart = async () => {
        try {
            let res = await axios.get('http://127.0.0.1:8000/');
            let result = res.data;
            setResult(result)
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        chart()
    }, [])  

    return (

        <div className="deploy__date">
            {result}
        </div>
        
    );
}

export default BackendDeploy