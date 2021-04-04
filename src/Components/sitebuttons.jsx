import React from "react";
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";

function SiteButtons() {
  return (
    <>
      <div className="buttons">
        <Link to="/page_1">
          <Button>Page 1</Button>
        </Link>

        <Link to="/page_2">
          <Button>Page 2</Button>
        </Link>

        <Link to="/page_3">
          <Button>Page 3</Button>
        </Link>

        <Link to="/page_4">
          <Button>Page 4</Button>
        </Link>

        <Link to="/All_Numbers">
          <Button>All Numbers</Button>
        </Link>

        <Link to="/Odd_Numbers">
          <Button>Even #'s</Button>
        </Link>

        <Link to="/Even_Numbers">
          <Button>Odd #'s</Button>
        </Link>
      </div>
    </>
  );
}
export default SiteButtons;
