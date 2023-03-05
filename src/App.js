import "./App.css";
import Carousel from "./components/compofcarousel";
import Layout1 from "./components/comofLayout";
import Compofcard from "./components/compofcard";
import Colorfullcard from "./components/colorfullcard";
import Compoffourcard from "./components/compoffourcard";
import Compoficon from "./components/compoficon";
import Compfooter from "./components/compfooter";
import Samllcomp from './components/smallcomp';
import location from './components/assets/location.png';
import { testUsers,users1,users2,icons } from './components/constant/alldata';

function App() {
  return (
    <>
      <Layout1 />
      <Carousel />
      <div style={{
        display:'flex',
        marginTop:'100px',
        marginLeft:'140px',
      }}>
        <Samllcomp title="STEP OUT" subtitle="Find safe and exciting events around you."/>

      </div>
      
      <div  className="Compofcard-container">
        {testUsers.map((item, i) => (
          <div  className="Compofcard-small"
            style={{
              marginLeft: "30px",
            }}
          >
            <Compofcard data={item} />
          </div>
        ))}
      </div>
      <div style={{
        display:'flex',
        marginTop:'100px',
        marginLeft:'140px',
      }}>
        <Samllcomp title="FIND NEW EXPERIENCES" subtitle="Step out or stay in. Make a plan."/>

      </div>
      <div className="Colorfullcard-container">
        {users1.map((item1, ii) => (
          <div
            style={{
              marginLeft: "30px",
            }}
          >
            <Colorfullcard data={item1} />
          </div>
        ))}
      </div>
      <div style={{
        display:'flex',
        marginTop:'100px',
        marginLeft:'140px',
      }}>
        <Samllcomp title="FEATURED EVENTS" subtitle="Find safe and exciting events around you."/>

      </div>
      <div className="Compoffourcard-container">
        {users2.map((item2, i2) => (
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <Compoffourcard data={item2} />
          </div>
        ))}
      </div>
      <div style={{
        display:'flex',
        marginTop:'100px',
        marginLeft:'160px',
      }}>
        <Samllcomp title="BROWSE EVENTS BY GENRE" subtitle="Find safe and exciting events around you."/>

      </div>
      <div className="Compoficon-container">
        {icons.map((item4, i4) => (
          <div style={{ marginLeft: "40px" }}>
            <Compoficon setdata={item4} />
          </div>
        ))}
      </div>
      <Compfooter />
      
    </>
  );
}

export default App;
