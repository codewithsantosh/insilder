import React from "react";
export default function colorfullcard(props) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="colorfullcard-subcontainer" style={{backgroundImage:props.data.color}} >
          <h2
            style={{
              color: "white",
              marginLeft: "15px",
            }}
          >
            {props.data.title}
          </h2>
        </div>
      </div>
    </>
  );
}
