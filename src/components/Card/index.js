import React from "react";

const Card = (props) => {
  const {
    id,
    name,
    preview,
    photos,
    description,
    size,
    isAccessory,
    brand,
    price,
    addProduct,
  } = props;

  return (
    <div className="card m-4 card-width" key={id}>
      <img className="card-img-top" src={preview} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a
          href="#"
          className="btn btn-primary"
          onClick={() => addProduct(props)}
        >
          ADD TO CART
        </a>
      </div>
    </div>
  );
};

export default Card;
