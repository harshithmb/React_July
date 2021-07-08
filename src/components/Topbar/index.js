import React from "react";
//css
import styles from "./Topbar.module.css";

function Topbar({ username }) {
  // props
  return (
    <div>
      <h1 className={styles.top}>This is Topbar - {username}</h1>{" "}
      {/*{props.username}*/}
    </div>
  );
}

export default Topbar;

// function getNames({ first, second }) {
//   // let first = obj.first;
//   // let second = obj.second;
// }

// objNames = {
//   first: "Baba",
//   second: "Abhishek",
// };

// getNames(objNames);
