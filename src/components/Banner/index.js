import React from "react";
//Module css
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className="jumbotron p-4">
      <h1 className={`display-4 ${styles.lead}`}>Hello, world!</h1>
      <p className="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured con
      </p>
      <hr className="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <p className="lead">
        <a className="btn btn-primary btn-lg" href="#" role="button">
          Learn more
        </a>
      </p>
    </div>
  );
};

export default Banner;
