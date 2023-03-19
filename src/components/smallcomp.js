import React from 'react';
import img from './assets/steps.png';

export default function samllcomp(props){
    return(
        <>
        <div style={{display:'flex'}}>
            <div>
            <img style={{
                width:'40px',
                height:'40px',
                backgroundColor:'#ededed',
                borderRadius:'25px',
                padding:'6px',
                marginTop:'20px',
                marginRight:'10px',
            }} src={img} alt="example"/>
            </div>
            <div style={{}}>
                <p> <span style={{
                    fontSize:'25px',
                    fontWeight:'bold'
                }}>{props.title}</span><br/>{props.subtitle}</p>
            </div>
        </div>
        </>
    )
}