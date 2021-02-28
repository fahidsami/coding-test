import React from 'react';
import {Spinner} from "react-bootstrap";
import './Loader.css';

const Loader=()=>{
    return(
        <div className="grows">
            <Spinner animation="grow" style={{alignItems:'center'}}/>
        </div>
    )
}

export default Loader;
