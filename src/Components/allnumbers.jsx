import React from "react";

const AllNum = (props) => {
  return (
    <>
      <header className="number-text">
        <p>{props.numbersData.PageOne}</p>
        <p>{props.numbersData.PageTwo}</p>
        <p>{props.numbersData.PageThree}</p>
        <p>{props.numbersData.PageFour}</p>
      </header>
    </>
  );
}
export default AllNum;
