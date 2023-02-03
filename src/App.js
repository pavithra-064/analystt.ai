import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Home from "../src/Home";
import "./App.css";
const App = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 2,
  };
  const [DataisLoaded, setDataisLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => {
        setDataisLoaded(true);
        setItems(json);
      });
  }, []);
  if (!DataisLoaded)
    return (
      <div>
        <h1> Pleses wait some time.... </h1>{" "}
      </div>
    );
  return (
    <div className="App">
      <h1> User Details </h1>
      <Slider {...settings} className="m-5 ">
        {items.map((item, i) => {
          return <Home data={item} key={i} />;
        })}
      </Slider>
    </div>
  );
};
export default App;
