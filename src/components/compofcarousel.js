import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "240px",
  color: "#fff",
  marginTop: "50px",
  lineHeight: "160px",
  padding: "30px",
  textAlign: "center",
  background: "#373435",
  backgroundRepeat: "no-repeat",
  //backgroundImage: `url("https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676381999%2Fle2wexvfnnitztnnkziu.jpg")` ,
};

const compofcarousel = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel autoplay>
      <div>
        <div style={{ display: "flex" }}>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676363451%2Fww3glajzxpmvabdeqian.png"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676353538%2Fsa0i4u6jgk2mixpetjp4.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="460px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1675948934%2Fbfpd5nnzzpcysja1jyvu.jpg"
            />
          </div>
        </div>
      </div>

      <div>
        <div style={{ display: "flex" }}>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676381999%2Fle2wexvfnnitztnnkziu.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676353538%2Fsa0i4u6jgk2mixpetjp4.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="460px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1675948934%2Fbfpd5nnzzpcysja1jyvu.jpg"
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676381999%2Fle2wexvfnnitztnnkziu.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676353538%2Fsa0i4u6jgk2mixpetjp4.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="460px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1675948934%2Fbfpd5nnzzpcysja1jyvu.jpg"
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ display: "flex" }}>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676381999%2Fle2wexvfnnitztnnkziu.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="450px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1676353538%2Fsa0i4u6jgk2mixpetjp4.jpg"
            />
          </div>
          <div style={contentStyle}>
            <img
              width="460px"
              height="235px"
              style={{ borderRadius: "10px" }}
              src="https://res.cloudinary.com/dwzmsvp7f/image/fetch/q_75,f_auto,w_560/https%3A%2F%2Fmedia.insider.in%2Fimage%2Fupload%2Fc_crop%2Cg_custom%2Fv1675948934%2Fbfpd5nnzzpcysja1jyvu.jpg"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default compofcarousel;
