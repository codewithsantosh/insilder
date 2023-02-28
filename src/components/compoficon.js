import React from "react";
import './CSS/style.css';
export default function compoficon(props) {
  
  return (
    <>
      <div  className="container-icon">
        <div>
          <div   className="container-subicon">
            <img
              alt="example"
              style={{ marginLeft: "25px", marginTop: "25px" }}
              width="60px"
              src={props.setdata.imgurl}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "18px" }}>
              {props.setdata.title}
              <br />
              <span style={{ fontSize: "14px", color: "lightgray" }}>
                {props.setdata.subtitle}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
