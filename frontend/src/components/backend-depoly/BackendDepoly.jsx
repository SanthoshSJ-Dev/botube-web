import React, { useEffect, useState } from "react";
import './BackendDeploy.css';
import axios from 'axios';

function BackendDeploy() {

    const [result, setResult] = useState(null);

    const chart = async () => {
        try {
            let res = await axios.get('https://botube-server.up.railway.app/');
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