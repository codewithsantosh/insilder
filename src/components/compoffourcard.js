import React from "react";
import { Card } from "antd";

export default function compoffourcard(props) {
  return (
    <>
      <Card className="parent"
        hoverable
        style={{
          width: 290,
        }}
        cover={
          <img className="child" style={{height:'300px'}}
            alt="example"
            src={props.data.imageurl}
            
          />

        }

      >
        
        <p style={{fontSize:'16px'}}>{props.data.disp1}</p>
         <h3> {props.data.price}</h3>
         <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
          <strong style={{ color: "#31C0F0", margin: "0" }}>
            {props.data.subpart}
          </strong>
        </div>

      </Card>
    </>
  );
}
