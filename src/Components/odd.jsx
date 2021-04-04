import React from "react";

const Odd = (props) => {
  return (
    <>
      <header className="number-text">
        <p>{props.numbersData.PageOne}</p>
        <p>{props.numbersData.PageThree}</p>
      </header>
    </>
  );
};
export default Odd;
