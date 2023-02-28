import "./App.css";
//import Navbar from './components/navbar';
import Carousel from "./components/compofcarousel";
import Layout1 from "./components/comofLayout";
import Compofcard from "./components/compofcard";
import Colorfullcard from "./components/colorfullcard";
import Compoffourcard from "./components/compoffourcard";
import Compoficon from "./components/compoficon";
import Compfooter from "./components/compfooter";

function App() {
  const users = [
    {
      title: "Rajaa - Live in Concert | Hyderabad | Mumbai",
      disp1: "February 26 | 6:30PM Onwards Gachibowli Stadium, Hyderabad",
      price: "799 Onwards(Inslusive of GST)",
      subpart: "Step out and enjoy this event",
      imageurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676353538%2Fsa0i4u6jgk2mixpetjp4.jpg",
    },
    {
      title: "Arijit Singh - One Night Only Tour, Bangalore 2023",
      disp1: "March 4 | Gates Open: 5PM | Show Begin:6 NICE Ground, Bengarulu",
      price: "4500 Onwards",
      subpart: "Step out and enjoy this event",
      imageurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676363451%2Fww3glajzxpmvabdeqian.png",
    },
    {
      title: "Under 25 Summit  One Night Only Tour 2023",
      disp1: "March4 & 5 | 9AM - 10 PM Embassy International Riding School",
      price: "2655 Onwards",
      subpart: "Step out and enjoy this event",
      imageurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1675948934%2Fbfpd5nnzzpcysja1jyvu.jpg",
    },
  ];
  const users1 = [
    {
      title: "Theatre & art",
      color: "linear-gradient(to  left, #31C0F0, #34aeeb)",
    },
    {
      title: "Comedy",
    },
    {
      title: "Courses",
    },
    {
      title: "Pocket Friendly",
    },
    {
      title: "Music Concert",
    },
    {
      title: "Workshops",
    },
  ];
  const users2 = [{}, {}, {}, {}];
  const icons = [
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Workshop",
      subtitle: "131 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Music",
      subtitle: "59 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "HOLI Parties",
      subtitle: "57 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Music",
      subtitle: "59 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Workshop",
      subtitle: "131 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Music",
      subtitle: "59 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "HOLI Parties",
      subtitle: "57 events",
    },
    {
      imgurl:
        "https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1634729595%2Fwqznop375nmlmttljqfy.png",
      title: "Music",
      subtitle: "59 events",
    },
  ];

  return (
    <>
      <Layout1 />
      <Carousel />
      <div  className="Compofcard-container">
        {users.map((item, i) => (
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
            <Compoffourcard />
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
