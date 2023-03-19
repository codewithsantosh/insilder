import { Card } from "antd";
import React,{useEffect, useState} from "react";

export default function Compoffourcard(props) {
  /*const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:5002/")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])*/
  return (
    <>
 
            <div>
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
         <h3> {props.data.title}</h3>
         <div style={{ backgroundColor: "#F5FCFE", padding: "10px" }}>
          <strong style={{ color: "#31C0F0", margin: "0" }}>
            {props.data.subpart}
          </strong>
        </div>

      </Card>
      </div>
        
      
      
    </>
  );
}
