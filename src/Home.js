import React, { useState } from "react";
import "./Home.css";
const Home = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="d-flex flex-col w1  my-4 justify-content-center ">
      <div className="justify-content-between">
        <div className="d-flex flex-col p-5 cont">
          <div className="d-flex flex-row w-20">
            <div>{props.data.company.name}</div>
          </div>
          <div className="d-flex flex-row px-5 mx-4">
            <div className="d-flex-col" key={props.data.id}>
              <div className="fw-bold">CONTACT</div>
              <div>{props.data.name}</div>
            </div>
          </div>
          <div className="d-flex flex-row px-5 mx-4">
            <div className="d-flex-col" key={props.data.id}>
              <div className="fw-bold"> CITY</div>
              <div>{props.data.address.city}</div>
            </div>
          </div>
          <div className="d-flex flex-row px-5 mx-4">
            <div className="d-flex-col" key={props.data.id}>
              <div className="fw-bold">ZIPCODE</div>
              <div>{props.data.address.zipcode}</div>
            </div>
          </div>
          <button className="px-5 mx-4 btn1 text-white" onClick={toggle}>
            View Details
          </button>
        </div>
        {isOpen && (
          <div className="toggle">
            <div className="d-flex flex-row justify-content-center cont1 p-4">
              <div className="d-flex flex-column justify-content-start align-items-start">
                <div className="pb-3 d-flex flex-column justify-content-start align-items-start">
                  <p className="fw-bold">Contact Person</p>
                  <p>{props.data.name}</p>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start ">
                  <p className="fw-bold">Email</p>
                  <p>{props.data.email}</p>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start ">
                  <p className="fw-bold">Phones</p>
                  <p>{props.data.phone}</p>
                </div>
              </div>
              <div className="flex-column">
                <div className="d-flex flex-column justify-content-start align-items-start px-5 mx-5">
                  <p className="fw-bold">Address</p>
                  <p>
                    {props.data.address.street} {props.data.address.suite}
                  </p>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start px-5 mx-5">
                  <p className="fw-bold">City</p>
                  <p>{props.data.address.city}</p>
                </div>
                <div className="d-flex flex-column justify-content-start align-items-start px-5 mx-5">
                  <p className="fw-bold">Company Name</p>
                  <p>{props.data.company.name}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
