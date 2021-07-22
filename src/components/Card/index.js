import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import PropTypes from "prop-types";

const Card = (props = { id: 123 }) => {
  const {
    id,
    name,
    preview,
    description,
    addProduct,
    handleCardStyle,
    cardStyleId,
    age,
  } = props;

  return (
    <div
      className={`m-4 card-width ${cardStyleId === id ? "card-border" : ""}`}
      key={id}
      onClick={() => handleCardStyle(id)}
    >
      <img className="card-img-top" src={preview} alt={name} />
      <div className="card-body">
        <h5 className="card-title">
          {name} = {age}
        </h5>
        <p className="card-text">{description}</p>
        <Link
          to={{
            pathname: `/product/${id}`,
            rahul: name,
          }}
          className="btn btn-primary "
        >
          More details
        </Link>
        <a
          href="/"
          className="btn btn-primary m-2"
          onClick={() => addProduct(props)}
        >
          ADD TO CART
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  preview: PropTypes.array, // bool // func // number // object
};

Card.defaultProps = {
  age: "123",
};
export default Card;
