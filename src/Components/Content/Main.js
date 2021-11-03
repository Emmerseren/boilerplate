import React, { Fragment } from "react";
import Data from "./Data.json";

const Main = () => {
  return (
    <header className="Home">
      <div className="navContainer">
        {Data.navigation.map((navData, index) => {
          return (
            <div>
              <img src={Data.navigation[index].navBox} alt="" />
            </div>
          );
        })}
      </div>

      <div className="imgContainer">
        {Data.image.map((imgData, index) => {
          return (
            <div>
              <img
                src={Data.image[index].pic}
                className={Data.image[index].class}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </header>
  );
};

export default Main;
