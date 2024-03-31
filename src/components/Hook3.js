import React, { useState } from 'react';

const Hook3 = () => {
    const [check, setCheck]= useState(true)
    const handle_toggle=()=>{
        setCheck(!check)
    }
    return (
        <div className={check?"main": "main active"} >
            <button onClick={handle_toggle} >Toggle</button>
        </div>
    );
}

export default Hook3;
