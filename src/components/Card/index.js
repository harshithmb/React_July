import React from "react";

function Card({ index, age, name, salary }) {
  const styles = {
    fontSize: "25px",
    color: "Red",
  };
  return (
    <div
      key={index}
      style={{ border: "1px solid", padding: "20px", margin: "20px" }}
    >
      <h2 style={styles}>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <h4>Salary : {salary}</h4>
    </div>
  );
}

export default Card;
