import React from "react";
import { Card } from "antd";

export default function compofcard(props) {
  return (
    <>
      <Card className="parent"
        style={{
          width: 400,
        }}
        
        cover={<img className="child" alt="example" src={props.data.imageurl} />}
        
      >

        <h2> {props.data.title}</h2>
        <p>{props.data.disp1}</p>
        <h3>{props.data.price}</h3>
        <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
          <strong style={{ color: "#31C0F0", margin: "0" }}>
            {props.data.subpart}
          </strong>
        </div>
      </Card>
    </>
  );
}
