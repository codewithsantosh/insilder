import "./App.css";
import Carousel from "./components/compofcarousel";
import Layout1 from "./components/comofLayout";
import Compofcard from "./components/compofcard";
import Colorfullcard from "./components/colorfullcard";
import Compoffourcard from "./components/compoffourcard";
import Compoficon from "./components/compoficon";
import Compfooter from "./components/compfooter";
import { testUsers,users1,users2,icons } from './components/constant/alldata';

function App() {
  return (
    <>
      <Layout1 />
      <Carousel />
      
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
