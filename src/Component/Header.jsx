import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Fragment>
      <section id="headerBlock">
        <nav>
          <div className="logoBlock">Employee Database</div>
          <div className="menuBlock">
            <ul>
              <li>
                <Link to="/all-employee">All Employee</Link>
              </li>
              <li>
                <Link to="/create-employee">Create Employee</Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </Fragment>
  );
};

export default Header;
